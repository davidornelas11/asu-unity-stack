import xr, { useId as Qn } from "react";
function eo(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
var Bn = { exports: {} }, gr = {};
var Cn;
function to() {
  if (Cn) return gr;
  Cn = 1;
  var y = xr, u = Symbol.for("react.element"), S = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, v = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function N(L, k, E) {
    var re, U = {}, Me = null, be = null;
    E !== void 0 && (Me = "" + E), k.key !== void 0 && (Me = "" + k.key), k.ref !== void 0 && (be = k.ref);
    for (re in k) _.call(k, re) && !R.hasOwnProperty(re) && (U[re] = k[re]);
    if (L && L.defaultProps) for (re in k = L.defaultProps, k) U[re] === void 0 && (U[re] = k[re]);
    return { $$typeof: u, type: L, key: Me, ref: be, props: U, _owner: v.current };
  }
  return gr.Fragment = S, gr.jsx = N, gr.jsxs = N, gr;
}
Bn.exports = to();
var Yt = Bn.exports;
function Mt(y) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
    return typeof u;
  } : function(u) {
    return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
  }, Mt(y);
}
function ln(y, u) {
  return ln = Object.setPrototypeOf || function(_, v) {
    return _.__proto__ = v, _;
  }, ln(y, u);
}
function ro() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function zr(y, u, S) {
  return ro() ? zr = Reflect.construct : zr = function(v, R, N) {
    var L = [null];
    L.push.apply(L, R);
    var k = Function.bind.apply(v, L), E = new k();
    return N && ln(E, N.prototype), E;
  }, zr.apply(null, arguments);
}
function qe(y) {
  return no(y) || oo(y) || io(y) || lo();
}
function no(y) {
  if (Array.isArray(y)) return an(y);
}
function oo(y) {
  if (typeof Symbol < "u" && y[Symbol.iterator] != null || y["@@iterator"] != null) return Array.from(y);
}
function io(y, u) {
  if (y) {
    if (typeof y == "string") return an(y, u);
    var S = Object.prototype.toString.call(y).slice(8, -1);
    if (S === "Object" && y.constructor && (S = y.constructor.name), S === "Map" || S === "Set") return Array.from(y);
    if (S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)) return an(y, u);
  }
}
function an(y, u) {
  (u == null || u > y.length) && (u = y.length);
  for (var S = 0, _ = new Array(u); S < u; S++) _[S] = y[S];
  return _;
}
function lo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ao = Object.hasOwnProperty, Rn = Object.setPrototypeOf, so = Object.isFrozen, uo = Object.getPrototypeOf, co = Object.getOwnPropertyDescriptor, de = Object.freeze, Pe = Object.seal, po = Object.create, zn = typeof Reflect < "u" && Reflect, Hr = zn.apply, sn = zn.construct;
Hr || (Hr = function(u, S, _) {
  return u.apply(S, _);
});
de || (de = function(u) {
  return u;
});
Pe || (Pe = function(u) {
  return u;
});
sn || (sn = function(u, S) {
  return zr(u, qe(S));
});
var fo = De(Array.prototype.forEach), An = De(Array.prototype.pop), Sr = De(Array.prototype.push), Ur = De(String.prototype.toLowerCase), Jr = De(String.prototype.toString), Fn = De(String.prototype.match), Ge = De(String.prototype.replace), ho = De(String.prototype.indexOf), mo = De(String.prototype.trim), se = De(RegExp.prototype.test), Kr = vo(TypeError);
function De(y) {
  return function(u) {
    for (var S = arguments.length, _ = new Array(S > 1 ? S - 1 : 0), v = 1; v < S; v++)
      _[v - 1] = arguments[v];
    return Hr(y, u, _);
  };
}
function vo(y) {
  return function() {
    for (var u = arguments.length, S = new Array(u), _ = 0; _ < u; _++)
      S[_] = arguments[_];
    return sn(y, S);
  };
}
function I(y, u, S) {
  var _;
  S = (_ = S) !== null && _ !== void 0 ? _ : Ur, Rn && Rn(y, null);
  for (var v = u.length; v--; ) {
    var R = u[v];
    if (typeof R == "string") {
      var N = S(R);
      N !== R && (so(u) || (u[v] = N), R = N);
    }
    y[R] = !0;
  }
  return y;
}
function Zt(y) {
  var u = po(null), S;
  for (S in y)
    Hr(ao, y, [S]) === !0 && (u[S] = y[S]);
  return u;
}
function Dr(y, u) {
  for (; y !== null; ) {
    var S = co(y, u);
    if (S) {
      if (S.get)
        return De(S.get);
      if (typeof S.value == "function")
        return De(S.value);
    }
    y = uo(y);
  }
  function _(v) {
    return console.warn("fallback value for", v), null;
  }
  return _;
}
var Mn = de(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Qr = de(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), en = de(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), yo = de(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), tn = de(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), go = de(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), bn = de(["#text"]), On = de(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), rn = de(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), In = de(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Nr = de(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), So = Pe(/\{\{[\w\W]*|[\w\W]*\}\}/gm), xo = Pe(/<%[\w\W]*|[\w\W]*%>/gm), Eo = Pe(/\${[\w\W]*}/gm), wo = Pe(/^data-[\-\w.\u00B7-\uFFFF]/), ko = Pe(/^aria-[\-\w]+$/), To = Pe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), _o = Pe(/^(?:\w+script|data):/i), Co = Pe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ro = Pe(/^html$/i), Ao = Pe(/^[a-z][.\w]*(-[.\w]+)+$/i), Fo = function() {
  return typeof window > "u" ? null : window;
}, Mo = function(u, S) {
  if (Mt(u) !== "object" || typeof u.createPolicy != "function")
    return null;
  var _ = null, v = "data-tt-policy-suffix";
  S.currentScript && S.currentScript.hasAttribute(v) && (_ = S.currentScript.getAttribute(v));
  var R = "dompurify" + (_ ? "#" + _ : "");
  try {
    return u.createPolicy(R, {
      createHTML: function(L) {
        return L;
      },
      createScriptURL: function(L) {
        return L;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + R + " could not be created."), null;
  }
};
function Un() {
  var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fo(), u = function(s) {
    return Un(s);
  };
  if (u.version = "2.5.7", u.removed = [], !y || !y.document || y.document.nodeType !== 9)
    return u.isSupported = !1, u;
  var S = y.document, _ = y.document, v = y.DocumentFragment, R = y.HTMLTemplateElement, N = y.Node, L = y.Element, k = y.NodeFilter, E = y.NamedNodeMap, re = E === void 0 ? y.NamedNodeMap || y.MozNamedAttrMap : E, U = y.HTMLFormElement, Me = y.DOMParser, be = y.trustedTypes, Y = L.prototype, Kt = Dr(Y, "cloneNode"), ne = Dr(Y, "nextSibling"), Z = Dr(Y, "childNodes"), le = Dr(Y, "parentNode");
  if (typeof R == "function") {
    var Ke = _.createElement("template");
    Ke.content && Ke.content.ownerDocument && (_ = Ke.content.ownerDocument);
  }
  var oe = Mo(be, S), ht = oe ? oe.createHTML("") : "", ee = _, H = ee.implementation, lr = ee.createNodeIterator, bt = ee.createDocumentFragment, Ot = ee.getElementsByTagName, Qt = S.importNode, pe = {};
  try {
    pe = Zt(_).documentMode ? _.documentMode : {};
  } catch {
  }
  var he = {};
  u.isSupported = typeof le == "function" && H && H.createHTMLDocument !== void 0 && pe !== 9;
  var mt = So, vt = xo, It = Eo, ar = wo, Lt = ko, me = _o, Pt = Co, Qe = Ao, et = To, G = null, yt = I({}, [].concat(qe(Mn), qe(Qr), qe(en), qe(tn), qe(bn))), J = null, gt = I({}, [].concat(qe(On), qe(rn), qe(In), qe(Nr))), $ = Object.seal(Object.create(null, {
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
  })), Ne = null, fe = null, Oe = !0, ve = !0, St = !1, te = !0, ae = !1, xt = !0, ye = !1, Dt = !1, Xe = !1, ge = !1, Be = !1, tt = !1, Ee = !0, ie = !1, er = "user-content-", Et = !0, Ye = !1, ze = {}, we = null, Nt = I({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Bt = null, tr = I({}, ["audio", "video", "img", "source", "image", "track"]), rt = null, nt = I({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wt = "http://www.w3.org/1998/Math/MathML", kt = "http://www.w3.org/2000/svg", ke = "http://www.w3.org/1999/xhtml", Ze = ke, zt = !1, ue = null, Ut = I({}, [wt, kt, ke], Jr), Se, B = ["application/xhtml+xml", "text/html"], ot = "text/html", W, xe = null, Ie = _.createElement("form"), it = function(s) {
    return s instanceof RegExp || s instanceof Function;
  }, Te = function(s) {
    xe && xe === s || ((!s || Mt(s) !== "object") && (s = {}), s = Zt(s), Se = // eslint-disable-next-line unicorn/prefer-includes
    B.indexOf(s.PARSER_MEDIA_TYPE) === -1 ? Se = ot : Se = s.PARSER_MEDIA_TYPE, W = Se === "application/xhtml+xml" ? Jr : Ur, G = "ALLOWED_TAGS" in s ? I({}, s.ALLOWED_TAGS, W) : yt, J = "ALLOWED_ATTR" in s ? I({}, s.ALLOWED_ATTR, W) : gt, ue = "ALLOWED_NAMESPACES" in s ? I({}, s.ALLOWED_NAMESPACES, Jr) : Ut, rt = "ADD_URI_SAFE_ATTR" in s ? I(
      Zt(nt),
      // eslint-disable-line indent
      s.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      W
      // eslint-disable-line indent
    ) : nt, Bt = "ADD_DATA_URI_TAGS" in s ? I(
      Zt(tr),
      // eslint-disable-line indent
      s.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      W
      // eslint-disable-line indent
    ) : tr, we = "FORBID_CONTENTS" in s ? I({}, s.FORBID_CONTENTS, W) : Nt, Ne = "FORBID_TAGS" in s ? I({}, s.FORBID_TAGS, W) : {}, fe = "FORBID_ATTR" in s ? I({}, s.FORBID_ATTR, W) : {}, ze = "USE_PROFILES" in s ? s.USE_PROFILES : !1, Oe = s.ALLOW_ARIA_ATTR !== !1, ve = s.ALLOW_DATA_ATTR !== !1, St = s.ALLOW_UNKNOWN_PROTOCOLS || !1, te = s.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ae = s.SAFE_FOR_TEMPLATES || !1, xt = s.SAFE_FOR_XML !== !1, ye = s.WHOLE_DOCUMENT || !1, ge = s.RETURN_DOM || !1, Be = s.RETURN_DOM_FRAGMENT || !1, tt = s.RETURN_TRUSTED_TYPE || !1, Xe = s.FORCE_BODY || !1, Ee = s.SANITIZE_DOM !== !1, ie = s.SANITIZE_NAMED_PROPS || !1, Et = s.KEEP_CONTENT !== !1, Ye = s.IN_PLACE || !1, et = s.ALLOWED_URI_REGEXP || et, Ze = s.NAMESPACE || ke, $ = s.CUSTOM_ELEMENT_HANDLING || {}, s.CUSTOM_ELEMENT_HANDLING && it(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && ($.tagNameCheck = s.CUSTOM_ELEMENT_HANDLING.tagNameCheck), s.CUSTOM_ELEMENT_HANDLING && it(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && ($.attributeNameCheck = s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), s.CUSTOM_ELEMENT_HANDLING && typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && ($.allowCustomizedBuiltInElements = s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ae && (ve = !1), Be && (ge = !0), ze && (G = I({}, qe(bn)), J = [], ze.html === !0 && (I(G, Mn), I(J, On)), ze.svg === !0 && (I(G, Qr), I(J, rn), I(J, Nr)), ze.svgFilters === !0 && (I(G, en), I(J, rn), I(J, Nr)), ze.mathMl === !0 && (I(G, tn), I(J, In), I(J, Nr))), s.ADD_TAGS && (G === yt && (G = Zt(G)), I(G, s.ADD_TAGS, W)), s.ADD_ATTR && (J === gt && (J = Zt(J)), I(J, s.ADD_ATTR, W)), s.ADD_URI_SAFE_ATTR && I(rt, s.ADD_URI_SAFE_ATTR, W), s.FORBID_CONTENTS && (we === Nt && (we = Zt(we)), I(we, s.FORBID_CONTENTS, W)), Et && (G["#text"] = !0), ye && I(G, ["html", "head", "body"]), G.table && (I(G, ["tbody"]), delete Ne.tbody), de && de(s), xe = s);
  }, Ht = I({}, ["mi", "mo", "mn", "ms", "mtext"]), Tt = I({}, ["annotation-xml"]), $t = I({}, ["title", "style", "font", "a", "script"]), lt = I({}, Qr);
  I(lt, en), I(lt, yo);
  var _t = I({}, tn);
  I(_t, go);
  var rr = function(s) {
    var g = le(s);
    (!g || !g.tagName) && (g = {
      namespaceURI: Ze,
      tagName: "template"
    });
    var T = Ur(s.tagName), D = Ur(g.tagName);
    return ue[s.namespaceURI] ? s.namespaceURI === kt ? g.namespaceURI === ke ? T === "svg" : g.namespaceURI === wt ? T === "svg" && (D === "annotation-xml" || Ht[D]) : !!lt[T] : s.namespaceURI === wt ? g.namespaceURI === ke ? T === "math" : g.namespaceURI === kt ? T === "math" && Tt[D] : !!_t[T] : s.namespaceURI === ke ? g.namespaceURI === kt && !Tt[D] || g.namespaceURI === wt && !Ht[D] ? !1 : !_t[T] && ($t[T] || !lt[T]) : !!(Se === "application/xhtml+xml" && ue[s.namespaceURI]) : !1;
  }, ce = function(s) {
    Sr(u.removed, {
      element: s
    });
    try {
      s.parentNode.removeChild(s);
    } catch {
      try {
        s.outerHTML = ht;
      } catch {
        s.remove();
      }
    }
  }, Ct = function(s, g) {
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
    if (g.removeAttribute(s), s === "is" && !J[s])
      if (ge || Be)
        try {
          ce(g);
        } catch {
        }
      else
        try {
          g.setAttribute(s, "");
        } catch {
        }
  }, at = function(s) {
    var g, T;
    if (Xe)
      s = "<remove></remove>" + s;
    else {
      var D = Fn(s, /^[\r\n\t ]+/);
      T = D && D[0];
    }
    Se === "application/xhtml+xml" && Ze === ke && (s = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + s + "</body></html>");
    var z = oe ? oe.createHTML(s) : s;
    if (Ze === ke)
      try {
        g = new Me().parseFromString(z, Se);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = H.createDocument(Ze, "template", null);
      try {
        g.documentElement.innerHTML = zt ? ht : z;
      } catch {
      }
    }
    var Q = g.body || g.documentElement;
    return s && T && Q.insertBefore(_.createTextNode(T), Q.childNodes[0] || null), Ze === ke ? Ot.call(g, ye ? "html" : "body")[0] : ye ? g.documentElement : Q;
  }, jt = function(s) {
    return lr.call(
      s.ownerDocument || s,
      s,
      // eslint-disable-next-line no-bitwise
      k.SHOW_ELEMENT | k.SHOW_COMMENT | k.SHOW_TEXT | k.SHOW_PROCESSING_INSTRUCTION | k.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, st = function(s) {
    return s instanceof U && (typeof s.nodeName != "string" || typeof s.textContent != "string" || typeof s.removeChild != "function" || !(s.attributes instanceof re) || typeof s.removeAttribute != "function" || typeof s.setAttribute != "function" || typeof s.namespaceURI != "string" || typeof s.insertBefore != "function" || typeof s.hasChildNodes != "function");
  }, Ue = function(s) {
    return Mt(N) === "object" ? s instanceof N : s && Mt(s) === "object" && typeof s.nodeType == "number" && typeof s.nodeName == "string";
  }, _e = function(s, g, T) {
    he[s] && fo(he[s], function(D) {
      D.call(u, g, T, xe);
    });
  }, Je = function(s) {
    var g;
    if (_e("beforeSanitizeElements", s, null), st(s) || se(/[\u0080-\uFFFF]/, s.nodeName))
      return ce(s), !0;
    var T = W(s.nodeName);
    if (_e("uponSanitizeElement", s, {
      tagName: T,
      allowedTags: G
    }), s.hasChildNodes() && !Ue(s.firstElementChild) && (!Ue(s.content) || !Ue(s.content.firstElementChild)) && se(/<[/\w]/g, s.innerHTML) && se(/<[/\w]/g, s.textContent) || T === "select" && se(/<template/i, s.innerHTML) || s.nodeType === 7 || xt && s.nodeType === 8 && se(/<[/\w]/g, s.data))
      return ce(s), !0;
    if (!G[T] || Ne[T]) {
      if (!Ne[T] && Rt(T) && ($.tagNameCheck instanceof RegExp && se($.tagNameCheck, T) || $.tagNameCheck instanceof Function && $.tagNameCheck(T)))
        return !1;
      if (Et && !we[T]) {
        var D = le(s) || s.parentNode, z = Z(s) || s.childNodes;
        if (z && D)
          for (var Q = z.length, K = Q - 1; K >= 0; --K) {
            var Ce = Kt(z[K], !0);
            Ce.__removalCount = (s.__removalCount || 0) + 1, D.insertBefore(Ce, ne(s));
          }
      }
      return ce(s), !0;
    }
    return s instanceof L && !rr(s) || (T === "noscript" || T === "noembed" || T === "noframes") && se(/<\/no(script|embed|frames)/i, s.innerHTML) ? (ce(s), !0) : (ae && s.nodeType === 3 && (g = s.textContent, g = Ge(g, mt, " "), g = Ge(g, vt, " "), g = Ge(g, It, " "), s.textContent !== g && (Sr(u.removed, {
      element: s.cloneNode()
    }), s.textContent = g)), _e("afterSanitizeElements", s, null), !1);
  }, nr = function(s, g, T) {
    if (Ee && (g === "id" || g === "name") && (T in _ || T in Ie))
      return !1;
    if (!(ve && !fe[g] && se(ar, g))) {
      if (!(Oe && se(Lt, g))) {
        if (!J[g] || fe[g]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Rt(s) && ($.tagNameCheck instanceof RegExp && se($.tagNameCheck, s) || $.tagNameCheck instanceof Function && $.tagNameCheck(s)) && ($.attributeNameCheck instanceof RegExp && se($.attributeNameCheck, g) || $.attributeNameCheck instanceof Function && $.attributeNameCheck(g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            g === "is" && $.allowCustomizedBuiltInElements && ($.tagNameCheck instanceof RegExp && se($.tagNameCheck, T) || $.tagNameCheck instanceof Function && $.tagNameCheck(T)))
          ) return !1;
        } else if (!rt[g]) {
          if (!se(et, Ge(T, Pt, ""))) {
            if (!((g === "src" || g === "xlink:href" || g === "href") && s !== "script" && ho(T, "data:") === 0 && Bt[s])) {
              if (!(St && !se(me, Ge(T, Pt, "")))) {
                if (T)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Rt = function(s) {
    return s !== "annotation-xml" && Fn(s, Qe);
  }, ut = function(s) {
    var g, T, D, z;
    _e("beforeSanitizeAttributes", s, null);
    var Q = s.attributes;
    if (Q) {
      var K = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: J
      };
      for (z = Q.length; z--; ) {
        g = Q[z];
        var Ce = g, q = Ce.name, Le = Ce.namespaceURI;
        if (T = q === "value" ? g.value : mo(g.value), D = W(q), K.attrName = D, K.attrValue = T, K.keepAttr = !0, K.forceKeepAttr = void 0, _e("uponSanitizeAttribute", s, K), T = K.attrValue, !K.forceKeepAttr && (Ct(q, s), !!K.keepAttr)) {
          if (!te && se(/\/>/i, T)) {
            Ct(q, s);
            continue;
          }
          ae && (T = Ge(T, mt, " "), T = Ge(T, vt, " "), T = Ge(T, It, " "));
          var He = W(s.nodeName);
          if (nr(He, D, T)) {
            if (ie && (D === "id" || D === "name") && (Ct(q, s), T = er + T), xt && se(/((--!?|])>)|<\/(style|title)/i, T)) {
              Ct(q, s);
              continue;
            }
            if (oe && Mt(be) === "object" && typeof be.getAttributeType == "function" && !Le)
              switch (be.getAttributeType(He, D)) {
                case "TrustedHTML": {
                  T = oe.createHTML(T);
                  break;
                }
                case "TrustedScriptURL": {
                  T = oe.createScriptURL(T);
                  break;
                }
              }
            try {
              Le ? s.setAttributeNS(Le, q, T) : s.setAttribute(q, T), st(s) ? ce(s) : An(u.removed);
            } catch {
            }
          }
        }
      }
      _e("afterSanitizeAttributes", s, null);
    }
  }, ct = function C(s) {
    var g, T = jt(s);
    for (_e("beforeSanitizeShadowDOM", s, null); g = T.nextNode(); )
      _e("uponSanitizeShadowNode", g, null), !Je(g) && (g.content instanceof v && C(g.content), ut(g));
    _e("afterSanitizeShadowDOM", s, null);
  };
  return u.sanitize = function(C) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g, T, D, z, Q;
    if (zt = !C, zt && (C = "<!-->"), typeof C != "string" && !Ue(C))
      if (typeof C.toString == "function") {
        if (C = C.toString(), typeof C != "string")
          throw Kr("dirty is not a string, aborting");
      } else
        throw Kr("toString is not a function");
    if (!u.isSupported) {
      if (Mt(y.toStaticHTML) === "object" || typeof y.toStaticHTML == "function") {
        if (typeof C == "string")
          return y.toStaticHTML(C);
        if (Ue(C))
          return y.toStaticHTML(C.outerHTML);
      }
      return C;
    }
    if (Dt || Te(s), u.removed = [], typeof C == "string" && (Ye = !1), Ye) {
      if (C.nodeName) {
        var K = W(C.nodeName);
        if (!G[K] || Ne[K])
          throw Kr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (C instanceof N)
      g = at("<!---->"), T = g.ownerDocument.importNode(C, !0), T.nodeType === 1 && T.nodeName === "BODY" || T.nodeName === "HTML" ? g = T : g.appendChild(T);
    else {
      if (!ge && !ae && !ye && // eslint-disable-next-line unicorn/prefer-includes
      C.indexOf("<") === -1)
        return oe && tt ? oe.createHTML(C) : C;
      if (g = at(C), !g)
        return ge ? null : tt ? ht : "";
    }
    g && Xe && ce(g.firstChild);
    for (var Ce = jt(Ye ? C : g); D = Ce.nextNode(); )
      D.nodeType === 3 && D === z || Je(D) || (D.content instanceof v && ct(D.content), ut(D), z = D);
    if (z = null, Ye)
      return C;
    if (ge) {
      if (Be)
        for (Q = bt.call(g.ownerDocument); g.firstChild; )
          Q.appendChild(g.firstChild);
      else
        Q = g;
      return (J.shadowroot || J.shadowrootmod) && (Q = Qt.call(S, Q, !0)), Q;
    }
    var q = ye ? g.outerHTML : g.innerHTML;
    return ye && G["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && se(Ro, g.ownerDocument.doctype.name) && (q = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + q), ae && (q = Ge(q, mt, " "), q = Ge(q, vt, " "), q = Ge(q, It, " ")), oe && tt ? oe.createHTML(q) : q;
  }, u.setConfig = function(C) {
    Te(C), Dt = !0;
  }, u.clearConfig = function() {
    xe = null, Dt = !1;
  }, u.isValidAttribute = function(C, s, g) {
    xe || Te({});
    var T = W(C), D = W(s);
    return nr(T, D, g);
  }, u.addHook = function(C, s) {
    typeof s == "function" && (he[C] = he[C] || [], Sr(he[C], s));
  }, u.removeHook = function(C) {
    if (he[C])
      return An(he[C]);
  }, u.removeHooks = function(C) {
    he[C] && (he[C] = []);
  }, u.removeAllHooks = function() {
    he = {};
  }, u;
}
Un();
var Hn = { exports: {} }, nn, Ln;
function bo() {
  if (Ln) return nn;
  Ln = 1;
  var y = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return nn = y, nn;
}
var on, Pn;
function Oo() {
  if (Pn) return on;
  Pn = 1;
  var y = bo();
  function u() {
  }
  function S() {
  }
  return S.resetWarningCache = u, on = function() {
    function _(N, L, k, E, re, U) {
      if (U !== y) {
        var Me = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw Me.name = "Invariant Violation", Me;
      }
    }
    _.isRequired = _;
    function v() {
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
      arrayOf: v,
      element: _,
      elementType: _,
      instanceOf: v,
      node: _,
      objectOf: v,
      oneOf: v,
      oneOfType: v,
      shape: v,
      exact: v,
      checkPropTypes: S,
      resetWarningCache: u
    };
    return R.PropTypes = R, R;
  }, on;
}
Hn.exports = Oo()();
var Io = Hn.exports;
const dt = /* @__PURE__ */ eo(Io);
dt.shape({
  event: dt.string,
  action: dt.string,
  name: dt.string,
  region: dt.string,
  section: dt.string,
  component: dt.string,
  type: dt.string,
  text: dt.string
});
const Lo = ({
  event: y = "",
  action: u = "",
  name: S = "",
  type: _ = "",
  section: v = "",
  text: R = "",
  region: N = "",
  component: L = ""
}) => {
  const { dataLayer: k } = window, E = {
    event: y.toLowerCase(),
    action: u.toLowerCase(),
    name: S.toLowerCase(),
    type: _.toLowerCase(),
    region: N.toLowerCase(),
    section: v.toLowerCase(),
    text: R.toLowerCase(),
    component: L.toLowerCase()
  };
  k && k.push(E);
};
var Jt = {};
var Dn;
function Po() {
  if (Dn) return Jt;
  Dn = 1;
  var y = xr;
  function u(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) n += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, R = {};
  function N(e) {
    return S.call(R, e) ? !0 : S.call(v, e) ? !1 : _.test(e) ? R[e] = !0 : (v[e] = !0, !1);
  }
  function L(e, n, i, a, d, c, h) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = a, this.attributeNamespace = d, this.mustUseProperty = i, this.propertyName = e, this.type = n, this.sanitizeURL = c, this.removeEmptyString = h;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    k[e] = new L(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    k[n] = new L(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    k[e] = new L(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    k[e] = new L(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    k[e] = new L(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    k[e] = new L(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    k[e] = new L(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    k[e] = new L(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    k[e] = new L(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var E = /[\-:]([a-z])/g;
  function re(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      E,
      re
    );
    k[n] = new L(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(E, re);
    k[n] = new L(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(E, re);
    k[n] = new L(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    k[e] = new L(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new L("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    k[e] = new L(e, 1, !1, e.toLowerCase(), null, !0, !0);
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
  }, Me = ["Webkit", "ms", "Moz", "O"];
  Object.keys(U).forEach(function(e) {
    Me.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), U[n] = U[e];
    });
  });
  var be = /["'&<>]/;
  function Y(e) {
    if (typeof e == "boolean" || typeof e == "number") return "" + e;
    e = "" + e;
    var n = be.exec(e);
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
  var Kt = /([A-Z])/g, ne = /^ms-/, Z = Array.isArray;
  function le(e, n) {
    return { insertionMode: e, selectedValue: n };
  }
  function Ke(e, n, i) {
    switch (n) {
      case "select":
        return le(1, i.value != null ? i.value : i.defaultValue);
      case "svg":
        return le(2, null);
      case "math":
        return le(3, null);
      case "foreignObject":
        return le(1, null);
      case "table":
        return le(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return le(5, null);
      case "colgroup":
        return le(7, null);
      case "tr":
        return le(6, null);
    }
    return 4 <= e.insertionMode || e.insertionMode === 0 ? le(1, null) : e;
  }
  var oe = /* @__PURE__ */ new Map();
  function ht(e, n, i) {
    if (typeof i != "object") throw Error(u(62));
    n = !0;
    for (var a in i) if (S.call(i, a)) {
      var d = i[a];
      if (d != null && typeof d != "boolean" && d !== "") {
        if (a.indexOf("--") === 0) {
          var c = Y(a);
          d = Y(("" + d).trim());
        } else {
          c = a;
          var h = oe.get(c);
          h !== void 0 || (h = Y(c.replace(Kt, "-$1").toLowerCase().replace(ne, "-ms-")), oe.set(c, h)), c = h, d = typeof d == "number" ? d === 0 || S.call(U, a) ? "" + d : d + "px" : Y(("" + d).trim());
        }
        n ? (n = !1, e.push(' style="', c, ":", d)) : e.push(";", c, ":", d);
      }
    }
    n || e.push('"');
  }
  function ee(e, n, i, a) {
    switch (i) {
      case "style":
        ht(e, n, a);
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
            a === !0 ? e.push(" ", i, '=""') : a !== !1 && e.push(" ", i, '="', Y(a), '"');
            break;
          case 5:
            isNaN(a) || e.push(" ", i, '="', Y(a), '"');
            break;
          case 6:
            !isNaN(a) && 1 <= a && e.push(" ", i, '="', Y(a), '"');
            break;
          default:
            n.sanitizeURL && (a = "" + a), e.push(" ", i, '="', Y(a), '"');
        }
      } else if (N(i)) {
        switch (typeof a) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (n = i.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-") return;
        }
        e.push(" ", i, '="', Y(a), '"');
      }
    }
  }
  function H(e, n, i) {
    if (n != null) {
      if (i != null) throw Error(u(60));
      if (typeof n != "object" || !("__html" in n)) throw Error(u(61));
      n = n.__html, n != null && e.push("" + n);
    }
  }
  function lr(e) {
    var n = "";
    return y.Children.forEach(e, function(i) {
      i != null && (n += i);
    }), n;
  }
  function bt(e, n, i, a) {
    e.push(pe(i));
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
          ee(e, a, c, h);
      }
    }
    return e.push(">"), H(e, d, i), typeof i == "string" ? (e.push(Y(i)), null) : i;
  }
  var Ot = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Qt = /* @__PURE__ */ new Map();
  function pe(e) {
    var n = Qt.get(e);
    if (n === void 0) {
      if (!Ot.test(e)) throw Error(u(65, e));
      n = "<" + e, Qt.set(e, n);
    }
    return n;
  }
  function he(e, n, i, a, d) {
    switch (n) {
      case "select":
        e.push(pe("select"));
        var c = null, h = null;
        for (b in i) if (S.call(i, b)) {
          var w = i[b];
          if (w != null) switch (b) {
            case "children":
              c = w;
              break;
            case "dangerouslySetInnerHTML":
              h = w;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ee(e, a, b, w);
          }
        }
        return e.push(">"), H(e, h, c), c;
      case "option":
        h = d.selectedValue, e.push(pe("option"));
        var A = w = null, M = null, b = null;
        for (c in i) if (S.call(i, c)) {
          var X = i[c];
          if (X != null) switch (c) {
            case "children":
              w = X;
              break;
            case "selected":
              M = X;
              break;
            case "dangerouslySetInnerHTML":
              b = X;
              break;
            case "value":
              A = X;
            default:
              ee(e, a, c, X);
          }
        }
        if (h != null) if (i = A !== null ? "" + A : lr(w), Z(h)) {
          for (a = 0; a < h.length; a++)
            if ("" + h[a] === i) {
              e.push(' selected=""');
              break;
            }
        } else "" + h === i && e.push(' selected=""');
        else M && e.push(' selected=""');
        return e.push(">"), H(e, b, w), w;
      case "textarea":
        e.push(pe("textarea")), b = h = c = null;
        for (w in i) if (S.call(i, w) && (A = i[w], A != null)) switch (w) {
          case "children":
            b = A;
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
            ee(
              e,
              a,
              w,
              A
            );
        }
        if (c === null && h !== null && (c = h), e.push(">"), b != null) {
          if (c != null) throw Error(u(92));
          if (Z(b) && 1 < b.length) throw Error(u(93));
          c = "" + b;
        }
        return typeof c == "string" && c[0] === `
` && e.push(`
`), c !== null && e.push(Y("" + c)), null;
      case "input":
        e.push(pe("input")), A = b = w = c = null;
        for (h in i) if (S.call(i, h) && (M = i[h], M != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            A = M;
            break;
          case "defaultValue":
            w = M;
            break;
          case "checked":
            b = M;
            break;
          case "value":
            c = M;
            break;
          default:
            ee(e, a, h, M);
        }
        return b !== null ? ee(e, a, "checked", b) : A !== null && ee(e, a, "checked", A), c !== null ? ee(e, a, "value", c) : w !== null && ee(e, a, "value", w), e.push("/>"), null;
      case "menuitem":
        e.push(pe("menuitem"));
        for (var $e in i) if (S.call(i, $e) && (c = i[$e], c != null)) switch ($e) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            ee(e, a, $e, c);
        }
        return e.push(">"), null;
      case "title":
        e.push(pe("title")), c = null;
        for (X in i) if (S.call(i, X) && (h = i[X], h != null)) switch (X) {
          case "children":
            c = h;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            ee(e, a, X, h);
        }
        return e.push(">"), c;
      case "listing":
      case "pre":
        e.push(pe(n)), h = c = null;
        for (A in i) if (S.call(i, A) && (w = i[A], w != null)) switch (A) {
          case "children":
            c = w;
            break;
          case "dangerouslySetInnerHTML":
            h = w;
            break;
          default:
            ee(e, a, A, w);
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
        e.push(pe(n));
        for (var je in i) if (S.call(i, je) && (c = i[je], c != null)) switch (je) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, n));
          default:
            ee(e, a, je, c);
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
        return bt(
          e,
          i,
          n,
          a
        );
      case "html":
        return d.insertionMode === 0 && e.push("<!DOCTYPE html>"), bt(e, i, n, a);
      default:
        if (n.indexOf("-") === -1 && typeof i.is != "string") return bt(e, i, n, a);
        e.push(pe(n)), h = c = null;
        for (M in i) if (S.call(i, M) && (w = i[M], w != null)) switch (M) {
          case "children":
            c = w;
            break;
          case "dangerouslySetInnerHTML":
            h = w;
            break;
          case "style":
            ht(e, a, w);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            N(M) && typeof w != "function" && typeof w != "symbol" && e.push(" ", M, '="', Y(w), '"');
        }
        return e.push(">"), H(e, h, c), c;
    }
  }
  function mt(e, n, i) {
    if (e.push('<!--$?--><template id="'), i === null) throw Error(u(395));
    return e.push(i), e.push('"></template>');
  }
  function vt(e, n, i, a) {
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
  function It(e, n) {
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
  function Lt(e) {
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
  function me(e, n) {
    return n = n === void 0 ? "" : n, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: n + "P:", segmentPrefix: n + "S:", boundaryPrefix: n + "B:", idPrefix: n, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
  }
  function Pt(e, n, i, a) {
    return i.generateStaticMarkup ? (e.push(Y(n)), !1) : (n === "" ? e = a : (a && e.push("<!-- -->"), e.push(Y(n)), e = !0), e);
  }
  var Qe = Object.assign, et = Symbol.for("react.element"), G = Symbol.for("react.portal"), yt = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), gt = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), Ne = Symbol.for("react.context"), fe = Symbol.for("react.forward_ref"), Oe = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), St = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), ae = Symbol.for("react.scope"), xt = Symbol.for("react.debug_trace_mode"), ye = Symbol.for("react.legacy_hidden"), Dt = Symbol.for("react.default_value"), Xe = Symbol.iterator;
  function ge(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case yt:
        return "Fragment";
      case G:
        return "Portal";
      case gt:
        return "Profiler";
      case J:
        return "StrictMode";
      case Oe:
        return "Suspense";
      case ve:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Ne:
        return (e.displayName || "Context") + ".Consumer";
      case $:
        return (e._context.displayName || "Context") + ".Provider";
      case fe:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case St:
        return n = e.displayName || null, n !== null ? n : ge(e.type) || "Memo";
      case te:
        n = e._payload, e = e._init;
        try {
          return ge(e(n));
        } catch {
        }
    }
    return null;
  }
  var Be = {};
  function tt(e, n) {
    if (e = e.contextTypes, !e) return Be;
    var i = {}, a;
    for (a in e) i[a] = n[a];
    return i;
  }
  var Ee = null;
  function ie(e, n) {
    if (e !== n) {
      e.context._currentValue2 = e.parentValue, e = e.parent;
      var i = n.parent;
      if (e === null) {
        if (i !== null) throw Error(u(401));
      } else {
        if (i === null) throw Error(u(401));
        ie(e, i);
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
  function Ye(e, n) {
    if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(u(402));
    e.depth === n.depth ? ie(e, n) : Ye(e, n);
  }
  function ze(e, n) {
    var i = n.parent;
    if (i === null) throw Error(u(402));
    e.depth === i.depth ? ie(e, i) : ze(e, i), n.context._currentValue2 = n.value;
  }
  function we(e) {
    var n = Ee;
    n !== e && (n === null ? Et(e) : e === null ? er(n) : n.depth === e.depth ? ie(n, e) : n.depth > e.depth ? Ye(n, e) : ze(n, e), Ee = e);
  }
  var Nt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(e, n) {
    e = e._reactInternals, e.queue !== null && e.queue.push(n);
  }, enqueueReplaceState: function(e, n) {
    e = e._reactInternals, e.replace = !0, e.queue = [n];
  }, enqueueForceUpdate: function() {
  } };
  function Bt(e, n, i, a) {
    var d = e.state !== void 0 ? e.state : null;
    e.updater = Nt, e.props = i, e.state = d;
    var c = { queue: [], replace: !1 };
    e._reactInternals = c;
    var h = n.contextType;
    if (e.context = typeof h == "object" && h !== null ? h._currentValue2 : a, h = n.getDerivedStateFromProps, typeof h == "function" && (h = h(i, d), d = h == null ? d : Qe({}, d, h), e.state = d), typeof n.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (n = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), n !== e.state && Nt.enqueueReplaceState(e, e.state, null), c.queue !== null && 0 < c.queue.length) if (n = c.queue, h = c.replace, c.queue = null, c.replace = !1, h && n.length === 1) e.state = n[0];
    else {
      for (c = h ? n[0] : e.state, d = !0, h = h ? 1 : 0; h < n.length; h++) {
        var w = n[h];
        w = typeof w == "function" ? w.call(e, c, i, a) : w, w != null && (d ? (d = !1, c = Qe({}, c, w)) : Qe(c, w));
      }
      e.state = c;
    }
    else c.queue = null;
  }
  var tr = { id: 1, overflow: "" };
  function rt(e, n, i) {
    var a = e.id;
    e = e.overflow;
    var d = 32 - nt(a) - 1;
    a &= ~(1 << d), i += 1;
    var c = 32 - nt(n) + d;
    if (30 < c) {
      var h = d - d % 5;
      return c = (a & (1 << h) - 1).toString(32), a >>= h, d -= h, { id: 1 << 32 - nt(n) + d | i << d | a, overflow: c + e };
    }
    return { id: 1 << c | i << d | a, overflow: e };
  }
  var nt = Math.clz32 ? Math.clz32 : ke, wt = Math.log, kt = Math.LN2;
  function ke(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (wt(e) / kt | 0) | 0;
  }
  function Ze(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var zt = typeof Object.is == "function" ? Object.is : Ze, ue = null, Ut = null, Se = null, B = null, ot = !1, W = !1, xe = 0, Ie = null, it = 0;
  function Te() {
    if (ue === null) throw Error(u(321));
    return ue;
  }
  function Ht() {
    if (0 < it) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Tt() {
    return B === null ? Se === null ? (ot = !1, Se = B = Ht()) : (ot = !0, B = Se) : B.next === null ? (ot = !1, B = B.next = Ht()) : (ot = !0, B = B.next), B;
  }
  function $t() {
    Ut = ue = null, W = !1, Se = null, it = 0, B = Ie = null;
  }
  function lt(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function _t(e, n, i) {
    if (ue = Te(), B = Tt(), ot) {
      var a = B.queue;
      if (n = a.dispatch, Ie !== null && (i = Ie.get(a), i !== void 0)) {
        Ie.delete(a), a = B.memoizedState;
        do
          a = e(a, i.action), i = i.next;
        while (i !== null);
        return B.memoizedState = a, [a, n];
      }
      return [B.memoizedState, n];
    }
    return e = e === lt ? typeof n == "function" ? n() : n : i !== void 0 ? i(n) : n, B.memoizedState = e, e = B.queue = { last: null, dispatch: null }, e = e.dispatch = ce.bind(null, ue, e), [B.memoizedState, e];
  }
  function rr(e, n) {
    if (ue = Te(), B = Tt(), n = n === void 0 ? null : n, B !== null) {
      var i = B.memoizedState;
      if (i !== null && n !== null) {
        var a = i[1];
        e: if (a === null) a = !1;
        else {
          for (var d = 0; d < a.length && d < n.length; d++) if (!zt(n[d], a[d])) {
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
  function ce(e, n, i) {
    if (25 <= it) throw Error(u(301));
    if (e === ue) if (W = !0, e = { action: i, next: null }, Ie === null && (Ie = /* @__PURE__ */ new Map()), i = Ie.get(n), i === void 0) Ie.set(n, e);
    else {
      for (n = i; n.next !== null; ) n = n.next;
      n.next = e;
    }
  }
  function Ct() {
    throw Error(u(394));
  }
  function at() {
  }
  var jt = { readContext: function(e) {
    return e._currentValue2;
  }, useContext: function(e) {
    return Te(), e._currentValue2;
  }, useMemo: rr, useReducer: _t, useRef: function(e) {
    ue = Te(), B = Tt();
    var n = B.memoizedState;
    return n === null ? (e = { current: e }, B.memoizedState = e) : n;
  }, useState: function(e) {
    return _t(lt, e);
  }, useInsertionEffect: at, useLayoutEffect: function() {
  }, useCallback: function(e, n) {
    return rr(function() {
      return e;
    }, n);
  }, useImperativeHandle: at, useEffect: at, useDebugValue: at, useDeferredValue: function(e) {
    return Te(), e;
  }, useTransition: function() {
    return Te(), [
      !1,
      Ct
    ];
  }, useId: function() {
    var e = Ut.treeContext, n = e.overflow;
    e = e.id, e = (e & ~(1 << 32 - nt(e) - 1)).toString(32) + n;
    var i = st;
    if (i === null) throw Error(u(404));
    return n = xe++, e = ":" + i.idPrefix + "R" + e, 0 < n && (e += "H" + n.toString(32)), e + ":";
  }, useMutableSource: function(e, n) {
    return Te(), n(e._source);
  }, useSyncExternalStore: function(e, n, i) {
    if (i === void 0) throw Error(u(407));
    return i();
  } }, st = null, Ue = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function _e(e) {
    return console.error(e), null;
  }
  function Je() {
  }
  function nr(e, n, i, a, d, c, h, w, A) {
    var M = [], b = /* @__PURE__ */ new Set();
    return n = { destination: null, responseState: n, progressiveChunkSize: a === void 0 ? 12800 : a, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: b, pingedTasks: M, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: d === void 0 ? _e : d, onAllReady: Je, onShellReady: h === void 0 ? Je : h, onShellError: Je, onFatalError: Je }, i = ut(n, 0, null, i, !1, !1), i.parentFlushed = !0, e = Rt(n, e, null, i, b, Be, null, tr), M.push(e), n;
  }
  function Rt(e, n, i, a, d, c, h, w) {
    e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
    var A = { node: n, ping: function() {
      var M = e.pingedTasks;
      M.push(A), M.length === 1 && sr(e);
    }, blockedBoundary: i, blockedSegment: a, abortSet: d, legacyContext: c, context: h, treeContext: w };
    return d.add(A), A;
  }
  function ut(e, n, i, a, d, c) {
    return { status: 0, id: -1, index: n, parentFlushed: !1, chunks: [], children: [], formatContext: a, boundary: i, lastPushedText: d, textEmbedded: c };
  }
  function ct(e, n) {
    if (e = e.onError(n), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
  }
  function C(e, n) {
    var i = e.onShellError;
    i(n), i = e.onFatalError, i(n), e.destination !== null ? (e.status = 2, e.destination.destroy(n)) : (e.status = 1, e.fatalError = n);
  }
  function s(e, n, i, a, d) {
    for (ue = {}, Ut = n, xe = 0, e = i(a, d); W; ) W = !1, xe = 0, it += 1, B = null, e = i(a, d);
    return $t(), e;
  }
  function g(e, n, i, a) {
    var d = i.render(), c = a.childContextTypes;
    if (c != null) {
      var h = n.legacyContext;
      if (typeof i.getChildContext != "function") a = h;
      else {
        i = i.getChildContext();
        for (var w in i) if (!(w in c)) throw Error(u(108, ge(a) || "Unknown", w));
        a = Qe({}, h, i);
      }
      n.legacyContext = a, z(e, n, d), n.legacyContext = h;
    } else z(e, n, d);
  }
  function T(e, n) {
    if (e && e.defaultProps) {
      n = Qe({}, n), e = e.defaultProps;
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    return n;
  }
  function D(e, n, i, a, d) {
    if (typeof i == "function") if (i.prototype && i.prototype.isReactComponent) {
      d = tt(i, n.legacyContext);
      var c = i.contextType;
      c = new i(a, typeof c == "object" && c !== null ? c._currentValue2 : d), Bt(c, i, a, d), g(e, n, c, i);
    } else {
      c = tt(i, n.legacyContext), d = s(e, n, i, a, c);
      var h = xe !== 0;
      if (typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) Bt(d, i, a, c), g(e, n, d, i);
      else if (h) {
        a = n.treeContext, n.treeContext = rt(a, 1, 0);
        try {
          z(e, n, d);
        } finally {
          n.treeContext = a;
        }
      } else z(e, n, d);
    }
    else if (typeof i == "string") {
      switch (d = n.blockedSegment, c = he(d.chunks, i, a, e.responseState, d.formatContext), d.lastPushedText = !1, h = d.formatContext, d.formatContext = Ke(h, i, a), K(e, n, c), d.formatContext = h, i) {
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
        case ye:
        case xt:
        case J:
        case gt:
        case yt:
          z(e, n, a.children);
          return;
        case ve:
          z(e, n, a.children);
          return;
        case ae:
          throw Error(u(343));
        case Oe:
          e: {
            i = n.blockedBoundary, d = n.blockedSegment, c = a.fallback, a = a.children, h = /* @__PURE__ */ new Set();
            var w = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: h, errorDigest: null }, A = ut(e, d.chunks.length, w, d.formatContext, !1, !1);
            d.children.push(A), d.lastPushedText = !1;
            var M = ut(e, 0, null, d.formatContext, !1, !1);
            M.parentFlushed = !0, n.blockedBoundary = w, n.blockedSegment = M;
            try {
              if (K(
                e,
                n,
                a
              ), e.responseState.generateStaticMarkup || M.lastPushedText && M.textEmbedded && M.chunks.push("<!-- -->"), M.status = 1, Le(w, M), w.pendingTasks === 0) break e;
            } catch (b) {
              M.status = 4, w.forceClientRender = !0, w.errorDigest = ct(e, b);
            } finally {
              n.blockedBoundary = i, n.blockedSegment = d;
            }
            n = Rt(e, c, i, A, h, n.legacyContext, n.context, n.treeContext), e.pingedTasks.push(n);
          }
          return;
      }
      if (typeof i == "object" && i !== null) switch (i.$$typeof) {
        case fe:
          if (a = s(e, n, i.render, a, d), xe !== 0) {
            i = n.treeContext, n.treeContext = rt(i, 1, 0);
            try {
              z(e, n, a);
            } finally {
              n.treeContext = i;
            }
          } else z(e, n, a);
          return;
        case St:
          i = i.type, a = T(i, a), D(e, n, i, a, d);
          return;
        case $:
          if (d = a.children, i = i._context, a = a.value, c = i._currentValue2, i._currentValue2 = a, h = Ee, Ee = a = { parent: h, depth: h === null ? 0 : h.depth + 1, context: i, parentValue: c, value: a }, n.context = a, z(e, n, d), e = Ee, e === null) throw Error(u(403));
          a = e.parentValue, e.context._currentValue2 = a === Dt ? e.context._defaultValue : a, e = Ee = e.parent, n.context = e;
          return;
        case Ne:
          a = a.children, a = a(i._currentValue2), z(e, n, a);
          return;
        case te:
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
        case et:
          D(e, n, i.type, i.props, i.ref);
          return;
        case G:
          throw Error(u(257));
        case te:
          var a = i._init;
          i = a(i._payload), z(e, n, i);
          return;
      }
      if (Z(i)) {
        Q(e, n, i);
        return;
      }
      if (i === null || typeof i != "object" ? a = null : (a = Xe && i[Xe] || i["@@iterator"], a = typeof a == "function" ? a : null), a && (a = a.call(i))) {
        if (i = a.next(), !i.done) {
          var d = [];
          do
            d.push(i.value), i = a.next();
          while (!i.done);
          Q(e, n, d);
        }
        return;
      }
      throw e = Object.prototype.toString.call(i), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : e));
    }
    typeof i == "string" ? (a = n.blockedSegment, a.lastPushedText = Pt(n.blockedSegment.chunks, i, e.responseState, a.lastPushedText)) : typeof i == "number" && (a = n.blockedSegment, a.lastPushedText = Pt(n.blockedSegment.chunks, "" + i, e.responseState, a.lastPushedText));
  }
  function Q(e, n, i) {
    for (var a = i.length, d = 0; d < a; d++) {
      var c = n.treeContext;
      n.treeContext = rt(c, a, d);
      try {
        K(e, n, i[d]);
      } finally {
        n.treeContext = c;
      }
    }
  }
  function K(e, n, i) {
    var a = n.blockedSegment.formatContext, d = n.legacyContext, c = n.context;
    try {
      return z(e, n, i);
    } catch (A) {
      if ($t(), typeof A == "object" && A !== null && typeof A.then == "function") {
        i = A;
        var h = n.blockedSegment, w = ut(e, h.chunks.length, null, h.formatContext, h.lastPushedText, !0);
        h.children.push(w), h.lastPushedText = !1, e = Rt(e, n.node, n.blockedBoundary, w, n.abortSet, n.legacyContext, n.context, n.treeContext).ping, i.then(e, e), n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, we(c);
      } else throw n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, we(c), A;
    }
  }
  function Ce(e) {
    var n = e.blockedBoundary;
    e = e.blockedSegment, e.status = 3, He(this, n, e);
  }
  function q(e, n, i) {
    var a = e.blockedBoundary;
    e.blockedSegment.status = 3, a === null ? (n.allPendingTasks--, n.status !== 2 && (n.status = 2, n.destination !== null && n.destination.push(null))) : (a.pendingTasks--, a.forceClientRender || (a.forceClientRender = !0, e = i === void 0 ? Error(u(432)) : i, a.errorDigest = n.onError(e), a.parentFlushed && n.clientRenderedBoundaries.push(a)), a.fallbackAbortableTasks.forEach(function(d) {
      return q(d, n, i);
    }), a.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0 && (a = n.onAllReady, a()));
  }
  function Le(e, n) {
    if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
      var i = n.children[0];
      i.id = n.id, i.parentFlushed = !0, i.status === 1 && Le(e, i);
    } else e.completedSegments.push(n);
  }
  function He(e, n, i) {
    if (n === null) {
      if (i.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(u(389));
        e.completedRootSegment = i;
      }
      e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Je, n = e.onShellReady, n());
    } else n.pendingTasks--, n.forceClientRender || (n.pendingTasks === 0 ? (i.parentFlushed && i.status === 1 && Le(n, i), n.parentFlushed && e.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(Ce, e), n.fallbackAbortableTasks.clear()) : i.parentFlushed && i.status === 1 && (Le(n, i), n.completedSegments.length === 1 && n.parentFlushed && e.partialBoundaries.push(n)));
    e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
  }
  function sr(e) {
    if (e.status !== 2) {
      var n = Ee, i = Ue.current;
      Ue.current = jt;
      var a = st;
      st = e.responseState;
      try {
        var d = e.pingedTasks, c;
        for (c = 0; c < d.length; c++) {
          var h = d[c], w = e, A = h.blockedSegment;
          if (A.status === 0) {
            we(h.context);
            try {
              z(w, h, h.node), w.responseState.generateStaticMarkup || A.lastPushedText && A.textEmbedded && A.chunks.push("<!-- -->"), h.abortSet.delete(h), A.status = 1, He(w, h.blockedBoundary, A);
            } catch (Re) {
              if ($t(), typeof Re == "object" && Re !== null && typeof Re.then == "function") {
                var M = h.ping;
                Re.then(M, M);
              } else {
                h.abortSet.delete(h), A.status = 4;
                var b = h.blockedBoundary, X = Re, $e = ct(w, X);
                if (b === null ? C(w, X) : (b.pendingTasks--, b.forceClientRender || (b.forceClientRender = !0, b.errorDigest = $e, b.parentFlushed && w.clientRenderedBoundaries.push(b))), w.allPendingTasks--, w.allPendingTasks === 0) {
                  var je = w.onAllReady;
                  je();
                }
              }
            } finally {
            }
          }
        }
        d.splice(0, c), e.destination !== null && or(e, e.destination);
      } catch (Re) {
        ct(e, Re), C(e, Re);
      } finally {
        st = a, Ue.current = i, i === jt && we(n);
      }
    }
  }
  function Wt(e, n, i) {
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
          d = Vt(e, n, d);
        }
        for (; c < a.length - 1; c++) n.push(a[c]);
        return c < a.length && (d = n.push(a[c])), d;
      default:
        throw Error(u(390));
    }
  }
  function Vt(e, n, i) {
    var a = i.boundary;
    if (a === null) return Wt(e, n, i);
    if (a.parentFlushed = !0, a.forceClientRender) return e.responseState.generateStaticMarkup || (a = a.errorDigest, n.push("<!--$!-->"), n.push("<template"), a && (n.push(' data-dgst="'), a = Y(a), n.push(a), n.push('"')), n.push("></template>")), Wt(e, n, i), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
    if (0 < a.pendingTasks) {
      a.rootSegmentID = e.nextSegmentId++, 0 < a.completedSegments.length && e.partialBoundaries.push(a);
      var d = e.responseState, c = d.nextSuspenseID++;
      return d = d.boundaryPrefix + c.toString(16), a = a.id = d, mt(n, e.responseState, a), Wt(e, n, i), n.push("<!--/$-->");
    }
    if (a.byteSize > e.progressiveChunkSize) return a.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(a), mt(n, e.responseState, a.id), Wt(e, n, i), n.push("<!--/$-->");
    if (e.responseState.generateStaticMarkup || n.push("<!--$-->"), i = a.completedSegments, i.length !== 1) throw Error(u(391));
    return Vt(e, n, i[0]), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
  }
  function ur(e, n, i) {
    return vt(n, e.responseState, i.formatContext, i.id), Vt(e, n, i), It(n, i.formatContext);
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
        Vt(e, n, i), e.completedRootSegment = null;
        var a = e.responseState.bootstrapChunks;
        for (i = 0; i < a.length - 1; i++) n.push(a[i]);
        i < a.length && n.push(a[i]);
      }
      var d = e.clientRenderedBoundaries, c;
      for (c = 0; c < d.length; c++) {
        var h = d[c];
        a = n;
        var w = e.responseState, A = h.id, M = h.errorDigest, b = h.errorMessage, X = h.errorComponentStack;
        if (a.push(w.startInlineScript), w.sentClientRenderFunction ? a.push('$RX("') : (w.sentClientRenderFunction = !0, a.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), A === null) throw Error(u(395));
        if (a.push(A), a.push('"'), M || b || X) {
          a.push(",");
          var $e = Lt(M || "");
          a.push($e);
        }
        if (b || X) {
          a.push(",");
          var je = Lt(b || "");
          a.push(je);
        }
        if (X) {
          a.push(",");
          var Re = Lt(X);
          a.push(Re);
        }
        if (!a.push(")<\/script>")) {
          e.destination = null, c++, d.splice(0, c);
          return;
        }
      }
      d.splice(0, c);
      var Gt = e.completedBoundaries;
      for (c = 0; c < Gt.length; c++) if (!cr(e, n, Gt[c])) {
        e.destination = null, c++, Gt.splice(0, c);
        return;
      }
      Gt.splice(0, c);
      var pt = e.partialBoundaries;
      for (c = 0; c < pt.length; c++) {
        var dr = pt[c];
        e: {
          d = e, h = n;
          var qt = dr.completedSegments;
          for (w = 0; w < qt.length; w++) if (!pr(d, h, dr, qt[w])) {
            w++, qt.splice(0, w);
            var kr = !1;
            break e;
          }
          qt.splice(0, w), kr = !0;
        }
        if (!kr) {
          e.destination = null, c++, pt.splice(0, c);
          return;
        }
      }
      pt.splice(0, c);
      var At = e.completedBoundaries;
      for (c = 0; c < At.length; c++) if (!cr(e, n, At[c])) {
        e.destination = null, c++, At.splice(0, c);
        return;
      }
      At.splice(0, c);
    } finally {
      e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && n.push(null);
    }
  }
  function Er(e, n) {
    try {
      var i = e.abortableTasks;
      i.forEach(function(a) {
        return q(a, e, n);
      }), i.clear(), e.destination !== null && or(e, e.destination);
    } catch (a) {
      ct(e, a), C(e, a);
    }
  }
  function wr() {
  }
  function fr(e, n, i, a) {
    var d = !1, c = null, h = "", w = { push: function(M) {
      return M !== null && (h += M), !0;
    }, destroy: function(M) {
      d = !0, c = M;
    } }, A = !1;
    if (e = nr(e, me(i, n ? n.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, wr, void 0, function() {
      A = !0;
    }), sr(e), Er(e, a), e.status === 1) e.status = 2, w.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = w;
      try {
        or(e, w);
      } catch (M) {
        ct(e, M), C(e, M);
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
var Nn;
function Do() {
  if (Nn) return Br;
  Nn = 1;
  var y = xr;
  function u(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = null, _ = 0;
  function v(t, r) {
    if (r.length !== 0) if (512 < r.length) 0 < _ && (t.enqueue(new Uint8Array(S.buffer, 0, _)), S = new Uint8Array(512), _ = 0), t.enqueue(r);
    else {
      var o = S.length - _;
      o < r.length && (o === 0 ? t.enqueue(S) : (S.set(r.subarray(0, o), _), t.enqueue(S), r = r.subarray(o)), S = new Uint8Array(512), _ = 0), S.set(r, _), _ += r.length;
    }
  }
  function R(t, r) {
    return v(t, r), !0;
  }
  function N(t) {
    S && 0 < _ && (t.enqueue(new Uint8Array(S.buffer, 0, _)), S = null, _ = 0);
  }
  var L = new TextEncoder();
  function k(t) {
    return L.encode(t);
  }
  function E(t) {
    return L.encode(t);
  }
  function re(t, r) {
    typeof t.error == "function" ? t.error(r) : t.close();
  }
  var U = Object.prototype.hasOwnProperty, Me = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, be = {}, Y = {};
  function Kt(t) {
    return U.call(Y, t) ? !0 : U.call(be, t) ? !1 : Me.test(t) ? Y[t] = !0 : (be[t] = !0, !1);
  }
  function ne(t, r, o, l, f, p, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = t, this.type = r, this.sanitizeURL = p, this.removeEmptyString = m;
  }
  var Z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    Z[t] = new ne(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var r = t[0];
    Z[r] = new ne(r, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    Z[t] = new ne(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    Z[t] = new ne(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    Z[t] = new ne(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    Z[t] = new ne(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    Z[t] = new ne(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    Z[t] = new ne(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    Z[t] = new ne(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var le = /[\-:]([a-z])/g;
  function Ke(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var r = t.replace(
      le,
      Ke
    );
    Z[r] = new ne(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(le, Ke);
    Z[r] = new ne(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(le, Ke);
    Z[r] = new ne(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    Z[t] = new ne(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), Z.xlinkHref = new ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    Z[t] = new ne(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  var oe = {
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
  }, ht = ["Webkit", "ms", "Moz", "O"];
  Object.keys(oe).forEach(function(t) {
    ht.forEach(function(r) {
      r = r + t.charAt(0).toUpperCase() + t.substring(1), oe[r] = oe[t];
    });
  });
  var ee = /["'&<>]/;
  function H(t) {
    if (typeof t == "boolean" || typeof t == "number") return "" + t;
    t = "" + t;
    var r = ee.exec(t);
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
  var lr = /([A-Z])/g, bt = /^ms-/, Ot = Array.isArray, Qt = E("<script>"), pe = E("<\/script>"), he = E('<script src="'), mt = E('<script type="module" src="'), vt = E('" async=""><\/script>'), It = /(<\/|<)(s)(cript)/gi;
  function ar(t, r, o, l) {
    return "" + r + (o === "s" ? "\\u0073" : "\\u0053") + l;
  }
  function Lt(t, r, o, l, f) {
    t = t === void 0 ? "" : t, r = r === void 0 ? Qt : E('<script nonce="' + H(r) + '">');
    var p = [];
    if (o !== void 0 && p.push(r, k(("" + o).replace(It, ar)), pe), l !== void 0) for (o = 0; o < l.length; o++) p.push(he, k(H(l[o])), vt);
    if (f !== void 0) for (l = 0; l < f.length; l++) p.push(mt, k(H(f[l])), vt);
    return { bootstrapChunks: p, startInlineScript: r, placeholderPrefix: E(t + "P:"), segmentPrefix: E(t + "S:"), boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function me(t, r) {
    return { insertionMode: t, selectedValue: r };
  }
  function Pt(t) {
    return me(t === "http://www.w3.org/2000/svg" ? 2 : t === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Qe(t, r, o) {
    switch (r) {
      case "select":
        return me(1, o.value != null ? o.value : o.defaultValue);
      case "svg":
        return me(2, null);
      case "math":
        return me(3, null);
      case "foreignObject":
        return me(1, null);
      case "table":
        return me(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return me(5, null);
      case "colgroup":
        return me(7, null);
      case "tr":
        return me(6, null);
    }
    return 4 <= t.insertionMode || t.insertionMode === 0 ? me(1, null) : t;
  }
  var et = E("<!-- -->");
  function G(t, r, o, l) {
    return r === "" ? l : (l && t.push(et), t.push(k(H(r))), !0);
  }
  var yt = /* @__PURE__ */ new Map(), J = E(' style="'), gt = E(":"), $ = E(";");
  function Ne(t, r, o) {
    if (typeof o != "object") throw Error(u(62));
    r = !0;
    for (var l in o) if (U.call(o, l)) {
      var f = o[l];
      if (f != null && typeof f != "boolean" && f !== "") {
        if (l.indexOf("--") === 0) {
          var p = k(H(l));
          f = k(H(("" + f).trim()));
        } else {
          p = l;
          var m = yt.get(p);
          m !== void 0 || (m = E(H(p.replace(lr, "-$1").toLowerCase().replace(bt, "-ms-"))), yt.set(p, m)), p = m, f = typeof f == "number" ? f === 0 || U.call(oe, l) ? k("" + f) : k(f + "px") : k(H(("" + f).trim()));
        }
        r ? (r = !1, t.push(J, p, gt, f)) : t.push($, p, gt, f);
      }
    }
    r || t.push(ve);
  }
  var fe = E(" "), Oe = E('="'), ve = E('"'), St = E('=""');
  function te(t, r, o, l) {
    switch (o) {
      case "style":
        Ne(t, r, l);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") {
      if (r = Z.hasOwnProperty(o) ? Z[o] : null, r !== null) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!r.acceptsBooleans) return;
        }
        switch (o = k(r.attributeName), r.type) {
          case 3:
            l && t.push(fe, o, St);
            break;
          case 4:
            l === !0 ? t.push(fe, o, St) : l !== !1 && t.push(fe, o, Oe, k(H(l)), ve);
            break;
          case 5:
            isNaN(l) || t.push(fe, o, Oe, k(H(l)), ve);
            break;
          case 6:
            !isNaN(l) && 1 <= l && t.push(fe, o, Oe, k(H(l)), ve);
            break;
          default:
            r.sanitizeURL && (l = "" + l), t.push(fe, o, Oe, k(H(l)), ve);
        }
      } else if (Kt(o)) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (r = o.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-") return;
        }
        t.push(fe, k(o), Oe, k(H(l)), ve);
      }
    }
  }
  var ae = E(">"), xt = E("/>");
  function ye(t, r, o) {
    if (r != null) {
      if (o != null) throw Error(u(60));
      if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
      r = r.__html, r != null && t.push(k("" + r));
    }
  }
  function Dt(t) {
    var r = "";
    return y.Children.forEach(t, function(o) {
      o != null && (r += o);
    }), r;
  }
  var Xe = E(' selected=""');
  function ge(t, r, o, l) {
    t.push(ie(o));
    var f = o = null, p;
    for (p in r) if (U.call(r, p)) {
      var m = r[p];
      if (m != null) switch (p) {
        case "children":
          o = m;
          break;
        case "dangerouslySetInnerHTML":
          f = m;
          break;
        default:
          te(t, l, p, m);
      }
    }
    return t.push(ae), ye(t, f, o), typeof o == "string" ? (t.push(k(H(o))), null) : o;
  }
  var Be = E(`
`), tt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ee = /* @__PURE__ */ new Map();
  function ie(t) {
    var r = Ee.get(t);
    if (r === void 0) {
      if (!tt.test(t)) throw Error(u(65, t));
      r = E("<" + t), Ee.set(t, r);
    }
    return r;
  }
  var er = E("<!DOCTYPE html>");
  function Et(t, r, o, l, f) {
    switch (r) {
      case "select":
        t.push(ie("select"));
        var p = null, m = null;
        for (O in o) if (U.call(o, O)) {
          var x = o[O];
          if (x != null) switch (O) {
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
              te(t, l, O, x);
          }
        }
        return t.push(ae), ye(t, m, p), p;
      case "option":
        m = f.selectedValue, t.push(ie("option"));
        var F = x = null, P = null, O = null;
        for (p in o) if (U.call(o, p)) {
          var V = o[p];
          if (V != null) switch (p) {
            case "children":
              x = V;
              break;
            case "selected":
              P = V;
              break;
            case "dangerouslySetInnerHTML":
              O = V;
              break;
            case "value":
              F = V;
            default:
              te(t, l, p, V);
          }
        }
        if (m != null) if (o = F !== null ? "" + F : Dt(x), Ot(m)) {
          for (l = 0; l < m.length; l++)
            if ("" + m[l] === o) {
              t.push(Xe);
              break;
            }
        } else "" + m === o && t.push(Xe);
        else P && t.push(Xe);
        return t.push(ae), ye(t, O, x), x;
      case "textarea":
        t.push(ie("textarea")), O = m = p = null;
        for (x in o) if (U.call(o, x) && (F = o[x], F != null)) switch (x) {
          case "children":
            O = F;
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
            te(t, l, x, F);
        }
        if (p === null && m !== null && (p = m), t.push(ae), O != null) {
          if (p != null) throw Error(u(92));
          if (Ot(O) && 1 < O.length) throw Error(u(93));
          p = "" + O;
        }
        return typeof p == "string" && p[0] === `
` && t.push(Be), p !== null && t.push(k(H("" + p))), null;
      case "input":
        t.push(ie("input")), F = O = x = p = null;
        for (m in o) if (U.call(o, m) && (P = o[m], P != null)) switch (m) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            F = P;
            break;
          case "defaultValue":
            x = P;
            break;
          case "checked":
            O = P;
            break;
          case "value":
            p = P;
            break;
          default:
            te(t, l, m, P);
        }
        return O !== null ? te(
          t,
          l,
          "checked",
          O
        ) : F !== null && te(t, l, "checked", F), p !== null ? te(t, l, "value", p) : x !== null && te(t, l, "value", x), t.push(xt), null;
      case "menuitem":
        t.push(ie("menuitem"));
        for (var Fe in o) if (U.call(o, Fe) && (p = o[Fe], p != null)) switch (Fe) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            te(t, l, Fe, p);
        }
        return t.push(ae), null;
      case "title":
        t.push(ie("title")), p = null;
        for (V in o) if (U.call(o, V) && (m = o[V], m != null)) switch (V) {
          case "children":
            p = m;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            te(t, l, V, m);
        }
        return t.push(ae), p;
      case "listing":
      case "pre":
        t.push(ie(r)), m = p = null;
        for (F in o) if (U.call(o, F) && (x = o[F], x != null)) switch (F) {
          case "children":
            p = x;
            break;
          case "dangerouslySetInnerHTML":
            m = x;
            break;
          default:
            te(t, l, F, x);
        }
        if (t.push(ae), m != null) {
          if (p != null) throw Error(u(60));
          if (typeof m != "object" || !("__html" in m)) throw Error(u(61));
          o = m.__html, o != null && (typeof o == "string" && 0 < o.length && o[0] === `
` ? t.push(Be, k(o)) : t.push(k("" + o)));
        }
        return typeof p == "string" && p[0] === `
` && t.push(Be), p;
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
        t.push(ie(r));
        for (var We in o) if (U.call(o, We) && (p = o[We], p != null)) switch (We) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, r));
          default:
            te(t, l, We, p);
        }
        return t.push(xt), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return ge(t, o, r, l);
      case "html":
        return f.insertionMode === 0 && t.push(er), ge(t, o, r, l);
      default:
        if (r.indexOf("-") === -1 && typeof o.is != "string") return ge(t, o, r, l);
        t.push(ie(r)), m = p = null;
        for (P in o) if (U.call(o, P) && (x = o[P], x != null)) switch (P) {
          case "children":
            p = x;
            break;
          case "dangerouslySetInnerHTML":
            m = x;
            break;
          case "style":
            Ne(t, l, x);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            Kt(P) && typeof x != "function" && typeof x != "symbol" && t.push(fe, k(P), Oe, k(H(x)), ve);
        }
        return t.push(ae), ye(t, m, p), p;
    }
  }
  var Ye = E("</"), ze = E(">"), we = E('<template id="'), Nt = E('"></template>'), Bt = E("<!--$-->"), tr = E('<!--$?--><template id="'), rt = E('"></template>'), nt = E("<!--$!-->"), wt = E("<!--/$-->"), kt = E("<template"), ke = E('"'), Ze = E(' data-dgst="');
  E(' data-msg="'), E(' data-stck="');
  var zt = E("></template>");
  function ue(t, r, o) {
    if (v(t, tr), o === null) throw Error(u(395));
    return v(t, o), R(t, rt);
  }
  var Ut = E('<div hidden id="'), Se = E('">'), B = E("</div>"), ot = E('<svg aria-hidden="true" style="display:none" id="'), W = E('">'), xe = E("</svg>"), Ie = E('<math aria-hidden="true" style="display:none" id="'), it = E('">'), Te = E("</math>"), Ht = E('<table hidden id="'), Tt = E('">'), $t = E("</table>"), lt = E('<table hidden><tbody id="'), _t = E('">'), rr = E("</tbody></table>"), ce = E('<table hidden><tr id="'), Ct = E('">'), at = E("</tr></table>"), jt = E('<table hidden><colgroup id="'), st = E('">'), Ue = E("</colgroup></table>");
  function _e(t, r, o, l) {
    switch (o.insertionMode) {
      case 0:
      case 1:
        return v(t, Ut), v(t, r.segmentPrefix), v(t, k(l.toString(16))), R(t, Se);
      case 2:
        return v(t, ot), v(t, r.segmentPrefix), v(t, k(l.toString(16))), R(t, W);
      case 3:
        return v(t, Ie), v(t, r.segmentPrefix), v(t, k(l.toString(16))), R(t, it);
      case 4:
        return v(t, Ht), v(t, r.segmentPrefix), v(t, k(l.toString(16))), R(t, Tt);
      case 5:
        return v(t, lt), v(t, r.segmentPrefix), v(t, k(l.toString(16))), R(t, _t);
      case 6:
        return v(t, ce), v(t, r.segmentPrefix), v(t, k(l.toString(16))), R(t, Ct);
      case 7:
        return v(
          t,
          jt
        ), v(t, r.segmentPrefix), v(t, k(l.toString(16))), R(t, st);
      default:
        throw Error(u(397));
    }
  }
  function Je(t, r) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return R(t, B);
      case 2:
        return R(t, xe);
      case 3:
        return R(t, Te);
      case 4:
        return R(t, $t);
      case 5:
        return R(t, rr);
      case 6:
        return R(t, at);
      case 7:
        return R(t, Ue);
      default:
        throw Error(u(397));
    }
  }
  var nr = E('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Rt = E('$RS("'), ut = E('","'), ct = E('")<\/script>'), C = E('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), s = E('$RC("'), g = E('","'), T = E('")<\/script>'), D = E('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), z = E('$RX("'), Q = E('"'), K = E(")<\/script>"), Ce = E(","), q = /[<\u2028\u2029]/g;
  function Le(t) {
    return JSON.stringify(t).replace(q, function(r) {
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
  var He = Object.assign, sr = Symbol.for("react.element"), Wt = Symbol.for("react.portal"), Vt = Symbol.for("react.fragment"), ur = Symbol.for("react.strict_mode"), cr = Symbol.for("react.profiler"), pr = Symbol.for("react.provider"), or = Symbol.for("react.context"), Er = Symbol.for("react.forward_ref"), wr = Symbol.for("react.suspense"), fr = Symbol.for("react.suspense_list"), e = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), i = Symbol.for("react.scope"), a = Symbol.for("react.debug_trace_mode"), d = Symbol.for("react.legacy_hidden"), c = Symbol.for("react.default_value"), h = Symbol.iterator;
  function w(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Vt:
        return "Fragment";
      case Wt:
        return "Portal";
      case cr:
        return "Profiler";
      case ur:
        return "StrictMode";
      case wr:
        return "Suspense";
      case fr:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case or:
        return (t.displayName || "Context") + ".Consumer";
      case pr:
        return (t._context.displayName || "Context") + ".Provider";
      case Er:
        var r = t.render;
        return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case e:
        return r = t.displayName || null, r !== null ? r : w(t.type) || "Memo";
      case n:
        r = t._payload, t = t._init;
        try {
          return w(t(r));
        } catch {
        }
    }
    return null;
  }
  var A = {};
  function M(t, r) {
    if (t = t.contextTypes, !t) return A;
    var o = {}, l;
    for (l in t) o[l] = r[l];
    return o;
  }
  var b = null;
  function X(t, r) {
    if (t !== r) {
      t.context._currentValue = t.parentValue, t = t.parent;
      var o = r.parent;
      if (t === null) {
        if (o !== null) throw Error(u(401));
      } else {
        if (o === null) throw Error(u(401));
        X(t, o);
      }
      r.context._currentValue = r.value;
    }
  }
  function $e(t) {
    t.context._currentValue = t.parentValue, t = t.parent, t !== null && $e(t);
  }
  function je(t) {
    var r = t.parent;
    r !== null && je(r), t.context._currentValue = t.value;
  }
  function Re(t, r) {
    if (t.context._currentValue = t.parentValue, t = t.parent, t === null) throw Error(u(402));
    t.depth === r.depth ? X(t, r) : Re(t, r);
  }
  function Gt(t, r) {
    var o = r.parent;
    if (o === null) throw Error(u(402));
    t.depth === o.depth ? X(t, o) : Gt(t, o), r.context._currentValue = r.value;
  }
  function pt(t) {
    var r = b;
    r !== t && (r === null ? je(t) : t === null ? $e(r) : r.depth === t.depth ? X(r, t) : r.depth > t.depth ? Re(r, t) : Gt(r, t), b = t);
  }
  var dr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(t, r) {
    t = t._reactInternals, t.queue !== null && t.queue.push(r);
  }, enqueueReplaceState: function(t, r) {
    t = t._reactInternals, t.replace = !0, t.queue = [r];
  }, enqueueForceUpdate: function() {
  } };
  function qt(t, r, o, l) {
    var f = t.state !== void 0 ? t.state : null;
    t.updater = dr, t.props = o, t.state = f;
    var p = { queue: [], replace: !1 };
    t._reactInternals = p;
    var m = r.contextType;
    if (t.context = typeof m == "object" && m !== null ? m._currentValue : l, m = r.getDerivedStateFromProps, typeof m == "function" && (m = m(o, f), f = m == null ? f : He({}, f, m), t.state = f), typeof r.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function")) if (r = t.state, typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && dr.enqueueReplaceState(t, t.state, null), p.queue !== null && 0 < p.queue.length) if (r = p.queue, m = p.replace, p.queue = null, p.replace = !1, m && r.length === 1) t.state = r[0];
    else {
      for (p = m ? r[0] : t.state, f = !0, m = m ? 1 : 0; m < r.length; m++) {
        var x = r[m];
        x = typeof x == "function" ? x.call(t, p, o, l) : x, x != null && (f ? (f = !1, p = He({}, p, x)) : He(p, x));
      }
      t.state = p;
    }
    else p.queue = null;
  }
  var kr = { id: 1, overflow: "" };
  function At(t, r, o) {
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
  var Tr = Math.clz32 ? Math.clz32 : Vn, jn = Math.log, Wn = Math.LN2;
  function Vn(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (jn(t) / Wn | 0) | 0;
  }
  function Gn(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var qn = typeof Object.is == "function" ? Object.is : Gn, ft = null, $r = null, _r = null, j = null, hr = !1, Cr = !1, mr = 0, Ft = null, Rr = 0;
  function Xt() {
    if (ft === null) throw Error(u(321));
    return ft;
  }
  function un() {
    if (0 < Rr) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function jr() {
    return j === null ? _r === null ? (hr = !1, _r = j = un()) : (hr = !0, j = _r) : j.next === null ? (hr = !1, j = j.next = un()) : (hr = !0, j = j.next), j;
  }
  function Wr() {
    $r = ft = null, Cr = !1, _r = null, Rr = 0, j = Ft = null;
  }
  function cn(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function pn(t, r, o) {
    if (ft = Xt(), j = jr(), hr) {
      var l = j.queue;
      if (r = l.dispatch, Ft !== null && (o = Ft.get(l), o !== void 0)) {
        Ft.delete(l), l = j.memoizedState;
        do
          l = t(l, o.action), o = o.next;
        while (o !== null);
        return j.memoizedState = l, [l, r];
      }
      return [j.memoizedState, r];
    }
    return t = t === cn ? typeof r == "function" ? r() : r : o !== void 0 ? o(r) : r, j.memoizedState = t, t = j.queue = { last: null, dispatch: null }, t = t.dispatch = Xn.bind(null, ft, t), [j.memoizedState, t];
  }
  function fn(t, r) {
    if (ft = Xt(), j = jr(), r = r === void 0 ? null : r, j !== null) {
      var o = j.memoizedState;
      if (o !== null && r !== null) {
        var l = o[1];
        e: if (l === null) l = !1;
        else {
          for (var f = 0; f < l.length && f < r.length; f++) if (!qn(r[f], l[f])) {
            l = !1;
            break e;
          }
          l = !0;
        }
        if (l) return o[0];
      }
    }
    return t = t(), j.memoizedState = [t, r], t;
  }
  function Xn(t, r, o) {
    if (25 <= Rr) throw Error(u(301));
    if (t === ft) if (Cr = !0, t = { action: o, next: null }, Ft === null && (Ft = /* @__PURE__ */ new Map()), o = Ft.get(r), o === void 0) Ft.set(r, t);
    else {
      for (r = o; r.next !== null; ) r = r.next;
      r.next = t;
    }
  }
  function Yn() {
    throw Error(u(394));
  }
  function Ar() {
  }
  var dn = { readContext: function(t) {
    return t._currentValue;
  }, useContext: function(t) {
    return Xt(), t._currentValue;
  }, useMemo: fn, useReducer: pn, useRef: function(t) {
    ft = Xt(), j = jr();
    var r = j.memoizedState;
    return r === null ? (t = { current: t }, j.memoizedState = t) : r;
  }, useState: function(t) {
    return pn(cn, t);
  }, useInsertionEffect: Ar, useLayoutEffect: function() {
  }, useCallback: function(t, r) {
    return fn(function() {
      return t;
    }, r);
  }, useImperativeHandle: Ar, useEffect: Ar, useDebugValue: Ar, useDeferredValue: function(t) {
    return Xt(), t;
  }, useTransition: function() {
    return Xt(), [!1, Yn];
  }, useId: function() {
    var t = $r.treeContext, r = t.overflow;
    t = t.id, t = (t & ~(1 << 32 - Tr(t) - 1)).toString(32) + r;
    var o = Fr;
    if (o === null) throw Error(u(404));
    return r = mr++, t = ":" + o.idPrefix + "R" + t, 0 < r && (t += "H" + r.toString(32)), t + ":";
  }, useMutableSource: function(t, r) {
    return Xt(), r(t._source);
  }, useSyncExternalStore: function(t, r, o) {
    if (o === void 0) throw Error(u(407));
    return o();
  } }, Fr = null, Vr = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Zn(t) {
    return console.error(t), null;
  }
  function vr() {
  }
  function Jn(t, r, o, l, f, p, m, x, F) {
    var P = [], O = /* @__PURE__ */ new Set();
    return r = { destination: null, responseState: r, progressiveChunkSize: l === void 0 ? 12800 : l, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: O, pingedTasks: P, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f === void 0 ? Zn : f, onAllReady: p === void 0 ? vr : p, onShellReady: m === void 0 ? vr : m, onShellError: x === void 0 ? vr : x, onFatalError: F === void 0 ? vr : F }, o = Mr(r, 0, null, o, !1, !1), o.parentFlushed = !0, t = Gr(r, t, null, o, O, A, null, kr), P.push(t), r;
  }
  function Gr(t, r, o, l, f, p, m, x) {
    t.allPendingTasks++, o === null ? t.pendingRootTasks++ : o.pendingTasks++;
    var F = { node: r, ping: function() {
      var P = t.pingedTasks;
      P.push(F), P.length === 1 && xn(t);
    }, blockedBoundary: o, blockedSegment: l, abortSet: f, legacyContext: p, context: m, treeContext: x };
    return f.add(F), F;
  }
  function Mr(t, r, o, l, f, p) {
    return { status: 0, id: -1, index: r, parentFlushed: !1, chunks: [], children: [], formatContext: l, boundary: o, lastPushedText: f, textEmbedded: p };
  }
  function yr(t, r) {
    if (t = t.onError(r), t != null && typeof t != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function br(t, r) {
    var o = t.onShellError;
    o(r), o = t.onFatalError, o(r), t.destination !== null ? (t.status = 2, re(t.destination, r)) : (t.status = 1, t.fatalError = r);
  }
  function hn(t, r, o, l, f) {
    for (ft = {}, $r = r, mr = 0, t = o(l, f); Cr; ) Cr = !1, mr = 0, Rr += 1, j = null, t = o(l, f);
    return Wr(), t;
  }
  function mn(t, r, o, l) {
    var f = o.render(), p = l.childContextTypes;
    if (p != null) {
      var m = r.legacyContext;
      if (typeof o.getChildContext != "function") l = m;
      else {
        o = o.getChildContext();
        for (var x in o) if (!(x in p)) throw Error(u(108, w(l) || "Unknown", x));
        l = He({}, m, o);
      }
      r.legacyContext = l, Ae(t, r, f), r.legacyContext = m;
    } else Ae(t, r, f);
  }
  function vn(t, r) {
    if (t && t.defaultProps) {
      r = He({}, r), t = t.defaultProps;
      for (var o in t) r[o] === void 0 && (r[o] = t[o]);
      return r;
    }
    return r;
  }
  function qr(t, r, o, l, f) {
    if (typeof o == "function") if (o.prototype && o.prototype.isReactComponent) {
      f = M(o, r.legacyContext);
      var p = o.contextType;
      p = new o(l, typeof p == "object" && p !== null ? p._currentValue : f), qt(p, o, l, f), mn(t, r, p, o);
    } else {
      p = M(o, r.legacyContext), f = hn(t, r, o, l, p);
      var m = mr !== 0;
      if (typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0) qt(f, o, l, p), mn(t, r, f, o);
      else if (m) {
        l = r.treeContext, r.treeContext = At(l, 1, 0);
        try {
          Ae(t, r, f);
        } finally {
          r.treeContext = l;
        }
      } else Ae(t, r, f);
    }
    else if (typeof o == "string") {
      switch (f = r.blockedSegment, p = Et(f.chunks, o, l, t.responseState, f.formatContext), f.lastPushedText = !1, m = f.formatContext, f.formatContext = Qe(m, o, l), Xr(t, r, p), f.formatContext = m, o) {
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
          f.chunks.push(Ye, k(o), ze);
      }
      f.lastPushedText = !1;
    } else {
      switch (o) {
        case d:
        case a:
        case ur:
        case cr:
        case Vt:
          Ae(t, r, l.children);
          return;
        case fr:
          Ae(t, r, l.children);
          return;
        case i:
          throw Error(u(343));
        case wr:
          e: {
            o = r.blockedBoundary, f = r.blockedSegment, p = l.fallback, l = l.children, m = /* @__PURE__ */ new Set();
            var x = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: m, errorDigest: null }, F = Mr(t, f.chunks.length, x, f.formatContext, !1, !1);
            f.children.push(F), f.lastPushedText = !1;
            var P = Mr(t, 0, null, f.formatContext, !1, !1);
            P.parentFlushed = !0, r.blockedBoundary = x, r.blockedSegment = P;
            try {
              if (Xr(
                t,
                r,
                l
              ), P.lastPushedText && P.textEmbedded && P.chunks.push(et), P.status = 1, Or(x, P), x.pendingTasks === 0) break e;
            } catch (O) {
              P.status = 4, x.forceClientRender = !0, x.errorDigest = yr(t, O);
            } finally {
              r.blockedBoundary = o, r.blockedSegment = f;
            }
            r = Gr(t, p, o, F, m, r.legacyContext, r.context, r.treeContext), t.pingedTasks.push(r);
          }
          return;
      }
      if (typeof o == "object" && o !== null) switch (o.$$typeof) {
        case Er:
          if (l = hn(t, r, o.render, l, f), mr !== 0) {
            o = r.treeContext, r.treeContext = At(o, 1, 0);
            try {
              Ae(t, r, l);
            } finally {
              r.treeContext = o;
            }
          } else Ae(t, r, l);
          return;
        case e:
          o = o.type, l = vn(o, l), qr(t, r, o, l, f);
          return;
        case pr:
          if (f = l.children, o = o._context, l = l.value, p = o._currentValue, o._currentValue = l, m = b, b = l = { parent: m, depth: m === null ? 0 : m.depth + 1, context: o, parentValue: p, value: l }, r.context = l, Ae(t, r, f), t = b, t === null) throw Error(u(403));
          l = t.parentValue, t.context._currentValue = l === c ? t.context._defaultValue : l, t = b = t.parent, r.context = t;
          return;
        case or:
          l = l.children, l = l(o._currentValue), Ae(t, r, l);
          return;
        case n:
          f = o._init, o = f(o._payload), l = vn(o, l), qr(t, r, o, l, void 0);
          return;
      }
      throw Error(u(
        130,
        o == null ? o : typeof o,
        ""
      ));
    }
  }
  function Ae(t, r, o) {
    if (r.node = o, typeof o == "object" && o !== null) {
      switch (o.$$typeof) {
        case sr:
          qr(t, r, o.type, o.props, o.ref);
          return;
        case Wt:
          throw Error(u(257));
        case n:
          var l = o._init;
          o = l(o._payload), Ae(t, r, o);
          return;
      }
      if (Ot(o)) {
        yn(t, r, o);
        return;
      }
      if (o === null || typeof o != "object" ? l = null : (l = h && o[h] || o["@@iterator"], l = typeof l == "function" ? l : null), l && (l = l.call(o))) {
        if (o = l.next(), !o.done) {
          var f = [];
          do
            f.push(o.value), o = l.next();
          while (!o.done);
          yn(t, r, f);
        }
        return;
      }
      throw t = Object.prototype.toString.call(o), Error(u(31, t === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : t));
    }
    typeof o == "string" ? (l = r.blockedSegment, l.lastPushedText = G(r.blockedSegment.chunks, o, t.responseState, l.lastPushedText)) : typeof o == "number" && (l = r.blockedSegment, l.lastPushedText = G(r.blockedSegment.chunks, "" + o, t.responseState, l.lastPushedText));
  }
  function yn(t, r, o) {
    for (var l = o.length, f = 0; f < l; f++) {
      var p = r.treeContext;
      r.treeContext = At(p, l, f);
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
      return Ae(t, r, o);
    } catch (F) {
      if (Wr(), typeof F == "object" && F !== null && typeof F.then == "function") {
        o = F;
        var m = r.blockedSegment, x = Mr(t, m.chunks.length, null, m.formatContext, m.lastPushedText, !0);
        m.children.push(x), m.lastPushedText = !1, t = Gr(t, r.node, r.blockedBoundary, x, r.abortSet, r.legacyContext, r.context, r.treeContext).ping, o.then(t, t), r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, pt(p);
      } else throw r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, pt(p), F;
    }
  }
  function Kn(t) {
    var r = t.blockedBoundary;
    t = t.blockedSegment, t.status = 3, Sn(this, r, t);
  }
  function gn(t, r, o) {
    var l = t.blockedBoundary;
    t.blockedSegment.status = 3, l === null ? (r.allPendingTasks--, r.status !== 2 && (r.status = 2, r.destination !== null && r.destination.close())) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = !0, t = o === void 0 ? Error(u(432)) : o, l.errorDigest = r.onError(t), l.parentFlushed && r.clientRenderedBoundaries.push(l)), l.fallbackAbortableTasks.forEach(function(f) {
      return gn(f, r, o);
    }), l.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0 && (l = r.onAllReady, l()));
  }
  function Or(t, r) {
    if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
      var o = r.children[0];
      o.id = r.id, o.parentFlushed = !0, o.status === 1 && Or(t, o);
    } else t.completedSegments.push(r);
  }
  function Sn(t, r, o) {
    if (r === null) {
      if (o.parentFlushed) {
        if (t.completedRootSegment !== null) throw Error(u(389));
        t.completedRootSegment = o;
      }
      t.pendingRootTasks--, t.pendingRootTasks === 0 && (t.onShellError = vr, r = t.onShellReady, r());
    } else r.pendingTasks--, r.forceClientRender || (r.pendingTasks === 0 ? (o.parentFlushed && o.status === 1 && Or(r, o), r.parentFlushed && t.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(Kn, t), r.fallbackAbortableTasks.clear()) : o.parentFlushed && o.status === 1 && (Or(r, o), r.completedSegments.length === 1 && r.parentFlushed && t.partialBoundaries.push(r)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function xn(t) {
    if (t.status !== 2) {
      var r = b, o = Vr.current;
      Vr.current = dn;
      var l = Fr;
      Fr = t.responseState;
      try {
        var f = t.pingedTasks, p;
        for (p = 0; p < f.length; p++) {
          var m = f[p], x = t, F = m.blockedSegment;
          if (F.status === 0) {
            pt(m.context);
            try {
              Ae(x, m, m.node), F.lastPushedText && F.textEmbedded && F.chunks.push(et), m.abortSet.delete(m), F.status = 1, Sn(x, m.blockedBoundary, F);
            } catch (Ve) {
              if (Wr(), typeof Ve == "object" && Ve !== null && typeof Ve.then == "function") {
                var P = m.ping;
                Ve.then(P, P);
              } else {
                m.abortSet.delete(m), F.status = 4;
                var O = m.blockedBoundary, V = Ve, Fe = yr(x, V);
                if (O === null ? br(x, V) : (O.pendingTasks--, O.forceClientRender || (O.forceClientRender = !0, O.errorDigest = Fe, O.parentFlushed && x.clientRenderedBoundaries.push(O))), x.allPendingTasks--, x.allPendingTasks === 0) {
                  var We = x.onAllReady;
                  We();
                }
              }
            } finally {
            }
          }
        }
        f.splice(0, p), t.destination !== null && Yr(t, t.destination);
      } catch (Ve) {
        yr(t, Ve), br(t, Ve);
      } finally {
        Fr = l, Vr.current = o, o === dn && pt(r);
      }
    }
  }
  function Ir(t, r, o) {
    switch (o.parentFlushed = !0, o.status) {
      case 0:
        var l = o.id = t.nextSegmentId++;
        return o.lastPushedText = !1, o.textEmbedded = !1, t = t.responseState, v(r, we), v(r, t.placeholderPrefix), t = k(l.toString(16)), v(r, t), R(r, Nt);
      case 1:
        o.status = 2;
        var f = !0;
        l = o.chunks;
        var p = 0;
        o = o.children;
        for (var m = 0; m < o.length; m++) {
          for (f = o[m]; p < f.index; p++) v(r, l[p]);
          f = Lr(t, r, f);
        }
        for (; p < l.length - 1; p++) v(r, l[p]);
        return p < l.length && (f = R(r, l[p])), f;
      default:
        throw Error(u(390));
    }
  }
  function Lr(t, r, o) {
    var l = o.boundary;
    if (l === null) return Ir(t, r, o);
    if (l.parentFlushed = !0, l.forceClientRender) l = l.errorDigest, R(r, nt), v(r, kt), l && (v(r, Ze), v(r, k(H(l))), v(r, ke)), R(r, zt), Ir(t, r, o);
    else if (0 < l.pendingTasks) {
      l.rootSegmentID = t.nextSegmentId++, 0 < l.completedSegments.length && t.partialBoundaries.push(l);
      var f = t.responseState, p = f.nextSuspenseID++;
      f = E(f.boundaryPrefix + p.toString(16)), l = l.id = f, ue(r, t.responseState, l), Ir(t, r, o);
    } else if (l.byteSize > t.progressiveChunkSize) l.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(l), ue(r, t.responseState, l.id), Ir(t, r, o);
    else {
      if (R(r, Bt), o = l.completedSegments, o.length !== 1) throw Error(u(391));
      Lr(t, r, o[0]);
    }
    return R(r, wt);
  }
  function En(t, r, o) {
    return _e(r, t.responseState, o.formatContext, o.id), Lr(t, r, o), Je(r, o.formatContext);
  }
  function wn(t, r, o) {
    for (var l = o.completedSegments, f = 0; f < l.length; f++) kn(t, r, o, l[f]);
    if (l.length = 0, t = t.responseState, l = o.id, o = o.rootSegmentID, v(r, t.startInlineScript), t.sentCompleteBoundaryFunction ? v(r, s) : (t.sentCompleteBoundaryFunction = !0, v(r, C)), l === null) throw Error(u(395));
    return o = k(o.toString(16)), v(r, l), v(r, g), v(r, t.segmentPrefix), v(r, o), R(r, T);
  }
  function kn(t, r, o, l) {
    if (l.status === 2) return !0;
    var f = l.id;
    if (f === -1) {
      if ((l.id = o.rootSegmentID) === -1) throw Error(u(392));
      return En(t, r, l);
    }
    return En(t, r, l), t = t.responseState, v(r, t.startInlineScript), t.sentCompleteSegmentFunction ? v(r, Rt) : (t.sentCompleteSegmentFunction = !0, v(r, nr)), v(r, t.segmentPrefix), f = k(f.toString(16)), v(r, f), v(r, ut), v(r, t.placeholderPrefix), v(r, f), R(r, ct);
  }
  function Yr(t, r) {
    S = new Uint8Array(512), _ = 0;
    try {
      var o = t.completedRootSegment;
      if (o !== null && t.pendingRootTasks === 0) {
        Lr(t, r, o), t.completedRootSegment = null;
        var l = t.responseState.bootstrapChunks;
        for (o = 0; o < l.length - 1; o++) v(r, l[o]);
        o < l.length && R(r, l[o]);
      }
      var f = t.clientRenderedBoundaries, p;
      for (p = 0; p < f.length; p++) {
        var m = f[p];
        l = r;
        var x = t.responseState, F = m.id, P = m.errorDigest, O = m.errorMessage, V = m.errorComponentStack;
        if (v(l, x.startInlineScript), x.sentClientRenderFunction ? v(l, z) : (x.sentClientRenderFunction = !0, v(
          l,
          D
        )), F === null) throw Error(u(395));
        v(l, F), v(l, Q), (P || O || V) && (v(l, Ce), v(l, k(Le(P || "")))), (O || V) && (v(l, Ce), v(l, k(Le(O || "")))), V && (v(l, Ce), v(l, k(Le(V)))), R(l, K);
      }
      f.splice(0, p);
      var Fe = t.completedBoundaries;
      for (p = 0; p < Fe.length; p++) wn(t, r, Fe[p]);
      Fe.splice(0, p), N(r), S = new Uint8Array(512), _ = 0;
      var We = t.partialBoundaries;
      for (p = 0; p < We.length; p++) {
        var Ve = We[p];
        e: {
          f = t, m = r;
          var Pr = Ve.completedSegments;
          for (x = 0; x < Pr.length; x++) if (!kn(
            f,
            m,
            Ve,
            Pr[x]
          )) {
            x++, Pr.splice(0, x);
            var _n = !1;
            break e;
          }
          Pr.splice(0, x), _n = !0;
        }
        if (!_n) {
          t.destination = null, p++, We.splice(0, p);
          return;
        }
      }
      We.splice(0, p);
      var Zr = t.completedBoundaries;
      for (p = 0; p < Zr.length; p++) wn(t, r, Zr[p]);
      Zr.splice(0, p);
    } finally {
      N(r), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && r.close();
    }
  }
  function Tn(t, r) {
    try {
      var o = t.abortableTasks;
      o.forEach(function(l) {
        return gn(l, t, r);
      }), o.clear(), t.destination !== null && Yr(t, t.destination);
    } catch (l) {
      yr(t, l), br(t, l);
    }
  }
  return Br.renderToReadableStream = function(t, r) {
    return new Promise(function(o, l) {
      var f, p, m = new Promise(function(O, V) {
        p = O, f = V;
      }), x = Jn(t, Lt(r ? r.identifierPrefix : void 0, r ? r.nonce : void 0, r ? r.bootstrapScriptContent : void 0, r ? r.bootstrapScripts : void 0, r ? r.bootstrapModules : void 0), Pt(r ? r.namespaceURI : void 0), r ? r.progressiveChunkSize : void 0, r ? r.onError : void 0, p, function() {
        var O = new ReadableStream({ type: "bytes", pull: function(V) {
          if (x.status === 1) x.status = 2, re(V, x.fatalError);
          else if (x.status !== 2 && x.destination === null) {
            x.destination = V;
            try {
              Yr(x, V);
            } catch (Fe) {
              yr(x, Fe), br(x, Fe);
            }
          }
        }, cancel: function() {
          Tn(x);
        } }, { highWaterMark: 0 });
        O.allReady = m, o(O);
      }, function(O) {
        m.catch(function() {
        }), l(O);
      }, f);
      if (r && r.signal) {
        var F = r.signal, P = function() {
          Tn(x, F.reason), F.removeEventListener("abort", P);
        };
        F.addEventListener("abort", P);
      }
      xn(x);
    });
  }, Br.version = "18.3.1", Br;
}
var ir, $n;
ir = Po(), $n = Do();
ir.version;
ir.renderToString;
ir.renderToStaticMarkup;
ir.renderToNodeStream;
ir.renderToStaticNodeStream;
$n.renderToReadableStream;
const No = "staticMarkup";
function Bo() {
  const u = Qn().indexOf(No) > -1 ? !0 : void 0;
  return {
    isBootstrap: u,
    isReact: u ? void 0 : !0
  };
}
const zo = ({ gaData: y, prefix: u = "", children: S }) => {
  const { isReact: _ } = Bo(), { onClick: v, ...R } = S.props;
  if (_)
    return xr.cloneElement(S, {
      ...R,
      onClick: (k) => (Lo(y), v ? v(k) : !0)
    });
  let N = "";
  ["input", "header", "header-input"].includes(u) && (N = `-${u}`);
  const L = {
    [`data-ga${N}`]: y.text,
    [`data-ga${N}-name`]: y.name,
    [`data-ga${N}-event`]: y.event,
    [`data-ga${N}-action`]: y.action,
    [`data-ga${N}-type`]: y.type,
    [`data-ga${N}-region`]: y.region,
    [`data-ga${N}-section`]: y.section,
    [`data-ga${N}-component`]: y.component
  };
  return xr.cloneElement(S, {
    ...R,
    onClick: v,
    ...L
  });
}, Uo = {
  none: "",
  gold: "text-gold",
  white: "text-white"
}, Ho = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, jo = ({
  gridLinkItems: y,
  numColumns: u,
  textColor: S,
  children: _
}) => /* @__PURE__ */ Yt.jsxs(Yt.Fragment, { children: [
  /* @__PURE__ */ Yt.jsx(
    "div",
    {
      className: [
        "uds-grid-links",
        u,
        Uo[S]
      ].join(" "),
      children: y && y.map((v) => /* @__PURE__ */ Yt.jsx(
        zo,
        {
          gaData: {
            ...Ho,
            text: v.label,
            section: `grid links ${v.label}`
          },
          children: /* @__PURE__ */ Yt.jsxs("a", { href: v.href, children: [
            /* @__PURE__ */ Yt.jsx("span", { className: `fa fa-fw ${v.icon}` }),
            v.label
          ] })
        },
        v.label + v.href
      ))
    }
  ),
  /* @__PURE__ */ Yt.jsx("div", { children: _ })
] });
export {
  jo as GridLinks
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
