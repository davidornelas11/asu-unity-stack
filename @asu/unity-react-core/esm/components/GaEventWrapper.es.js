import Br, { useId as Yn } from "react";
function Mt(v) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
    return typeof u;
  } : function(u) {
    return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
  }, Mt(v);
}
function nn(v, u) {
  return nn = Object.setPrototypeOf || function(k, y) {
    return k.__proto__ = y, k;
  }, nn(v, u);
}
function Zn() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Dr(v, u, x) {
  return Zn() ? Dr = Reflect.construct : Dr = function(y, R, N) {
    var D = [null];
    D.push.apply(D, R);
    var _ = Function.bind.apply(y, D), E = new _();
    return N && nn(E, N.prototype), E;
  }, Dr.apply(null, arguments);
}
function Ve(v) {
  return Kn(v) || Jn(v) || Qn(v) || eo();
}
function Kn(v) {
  if (Array.isArray(v)) return on(v);
}
function Jn(v) {
  if (typeof Symbol < "u" && v[Symbol.iterator] != null || v["@@iterator"] != null) return Array.from(v);
}
function Qn(v, u) {
  if (v) {
    if (typeof v == "string") return on(v, u);
    var x = Object.prototype.toString.call(v).slice(8, -1);
    if (x === "Object" && v.constructor && (x = v.constructor.name), x === "Map" || x === "Set") return Array.from(v);
    if (x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x)) return on(v, u);
  }
}
function on(v, u) {
  (u == null || u > v.length) && (u = v.length);
  for (var x = 0, k = new Array(u); x < u; x++) k[x] = v[x];
  return k;
}
function eo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var to = Object.hasOwnProperty, kn = Object.setPrototypeOf, ro = Object.isFrozen, no = Object.getPrototypeOf, oo = Object.getOwnPropertyDescriptor, fe = Object.freeze, Ie = Object.seal, io = Object.create, Pn = typeof Reflect < "u" && Reflect, zr = Pn.apply, ln = Pn.construct;
zr || (zr = function(u, x, k) {
  return u.apply(x, k);
});
fe || (fe = function(u) {
  return u;
});
Ie || (Ie = function(u) {
  return u;
});
ln || (ln = function(u, x) {
  return Dr(u, Ve(x));
});
var lo = Oe(Array.prototype.forEach), _n = Oe(Array.prototype.pop), yr = Oe(Array.prototype.push), Nr = Oe(String.prototype.toLowerCase), Yr = Oe(String.prototype.toString), Cn = Oe(String.prototype.match), We = Oe(String.prototype.replace), ao = Oe(String.prototype.indexOf), so = Oe(String.prototype.trim), ae = Oe(RegExp.prototype.test), Zr = uo(TypeError);
function Oe(v) {
  return function(u) {
    for (var x = arguments.length, k = new Array(x > 1 ? x - 1 : 0), y = 1; y < x; y++)
      k[y - 1] = arguments[y];
    return zr(v, u, k);
  };
}
function uo(v) {
  return function() {
    for (var u = arguments.length, x = new Array(u), k = 0; k < u; k++)
      x[k] = arguments[k];
    return ln(v, x);
  };
}
function O(v, u, x) {
  var k;
  x = (k = x) !== null && k !== void 0 ? k : Nr, kn && kn(v, null);
  for (var y = u.length; y--; ) {
    var R = u[y];
    if (typeof R == "string") {
      var N = x(R);
      N !== R && (ro(u) || (u[y] = N), R = N);
    }
    v[R] = !0;
  }
  return v;
}
function Yt(v) {
  var u = io(null), x;
  for (x in v)
    zr(to, v, [x]) === !0 && (u[x] = v[x]);
  return u;
}
function Or(v, u) {
  for (; v !== null; ) {
    var x = oo(v, u);
    if (x) {
      if (x.get)
        return Oe(x.get);
      if (typeof x.value == "function")
        return Oe(x.value);
    }
    v = no(v);
  }
  function k(y) {
    return console.warn("fallback value for", y), null;
  }
  return k;
}
var Rn = fe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Kr = fe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Jr = fe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), co = fe(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Qr = fe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), po = fe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), An = fe(["#text"]), Fn = fe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), en = fe(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Mn = fe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Lr = fe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), fo = Ie(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ho = Ie(/<%[\w\W]*|[\w\W]*%>/gm), mo = Ie(/\${[\w\W]*}/gm), vo = Ie(/^data-[\-\w.\u00B7-\uFFFF]/), yo = Ie(/^aria-[\-\w]+$/), go = Ie(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), So = Ie(/^(?:\w+script|data):/i), xo = Ie(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Eo = Ie(/^html$/i), wo = Ie(/^[a-z][.\w]*(-[.\w]+)+$/i), To = function() {
  return typeof window > "u" ? null : window;
}, ko = function(u, x) {
  if (Mt(u) !== "object" || typeof u.createPolicy != "function")
    return null;
  var k = null, y = "data-tt-policy-suffix";
  x.currentScript && x.currentScript.hasAttribute(y) && (k = x.currentScript.getAttribute(y));
  var R = "dompurify" + (k ? "#" + k : "");
  try {
    return u.createPolicy(R, {
      createHTML: function(D) {
        return D;
      },
      createScriptURL: function(D) {
        return D;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + R + " could not be created."), null;
  }
};
function Dn() {
  var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : To(), u = function(s) {
    return Dn(s);
  };
  if (u.version = "2.5.7", u.removed = [], !v || !v.document || v.document.nodeType !== 9)
    return u.isSupported = !1, u;
  var x = v.document, k = v.document, y = v.DocumentFragment, R = v.HTMLTemplateElement, N = v.Node, D = v.Element, _ = v.NodeFilter, E = v.NamedNodeMap, Ye = E === void 0 ? v.NamedNodeMap || v.MozNamedAttrMap : E, X = v.HTMLFormElement, dt = v.DOMParser, Ze = v.trustedTypes, Y = D.prototype, Kt = Or(Y, "cloneNode"), re = Or(Y, "nextSibling"), Z = Or(Y, "childNodes"), ie = Or(Y, "parentNode");
  if (typeof R == "function") {
    var Ke = k.createElement("template");
    Ke.content && Ke.content.ownerDocument && (k = Ke.content.ownerDocument);
  }
  var ne = ko(Ze, x), ht = ne ? ne.createHTML("") : "", ee = k, U = ee.implementation, ir = ee.createNodeIterator, bt = ee.createDocumentFragment, It = ee.getElementsByTagName, Jt = x.importNode, ce = {};
  try {
    ce = Yt(k).documentMode ? k.documentMode : {};
  } catch {
  }
  var de = {};
  u.isSupported = typeof ie == "function" && U && U.createHTMLDocument !== void 0 && ce !== 9;
  var mt = fo, vt = ho, Ot = mo, lr = vo, Lt = yo, he = So, Pt = xo, Je = wo, Qe = go, j = null, yt = O({}, [].concat(Ve(Rn), Ve(Kr), Ve(Jr), Ve(Qr), Ve(An))), K = null, gt = O({}, [].concat(Ve(Fn), Ve(en), Ve(Mn), Ve(Lr))), H = Object.seal(Object.create(null, {
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
  })), Le = null, pe = null, Fe = !0, me = !0, St = !1, te = !0, le = !1, xt = !0, ve = !1, Dt = !1, je = !1, ye = !1, Pe = !1, et = !1, xe = !0, oe = !1, Qt = "user-content-", Et = !0, Ge = !1, De = {}, Ee = null, Nt = O({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Bt = null, er = O({}, ["audio", "video", "img", "source", "image", "track"]), tt = null, rt = O({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wt = "http://www.w3.org/1998/Math/MathML", Tt = "http://www.w3.org/2000/svg", we = "http://www.w3.org/1999/xhtml", qe = we, zt = !1, se = null, Ut = O({}, [wt, Tt, we], Yr), ge, B = ["application/xhtml+xml", "text/html"], nt = "text/html", W, Se = null, Me = k.createElement("form"), ot = function(s) {
    return s instanceof RegExp || s instanceof Function;
  }, Te = function(s) {
    Se && Se === s || ((!s || Mt(s) !== "object") && (s = {}), s = Yt(s), ge = // eslint-disable-next-line unicorn/prefer-includes
    B.indexOf(s.PARSER_MEDIA_TYPE) === -1 ? ge = nt : ge = s.PARSER_MEDIA_TYPE, W = ge === "application/xhtml+xml" ? Yr : Nr, j = "ALLOWED_TAGS" in s ? O({}, s.ALLOWED_TAGS, W) : yt, K = "ALLOWED_ATTR" in s ? O({}, s.ALLOWED_ATTR, W) : gt, se = "ALLOWED_NAMESPACES" in s ? O({}, s.ALLOWED_NAMESPACES, Yr) : Ut, tt = "ADD_URI_SAFE_ATTR" in s ? O(
      Yt(rt),
      // eslint-disable-line indent
      s.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      W
      // eslint-disable-line indent
    ) : rt, Bt = "ADD_DATA_URI_TAGS" in s ? O(
      Yt(er),
      // eslint-disable-line indent
      s.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      W
      // eslint-disable-line indent
    ) : er, Ee = "FORBID_CONTENTS" in s ? O({}, s.FORBID_CONTENTS, W) : Nt, Le = "FORBID_TAGS" in s ? O({}, s.FORBID_TAGS, W) : {}, pe = "FORBID_ATTR" in s ? O({}, s.FORBID_ATTR, W) : {}, De = "USE_PROFILES" in s ? s.USE_PROFILES : !1, Fe = s.ALLOW_ARIA_ATTR !== !1, me = s.ALLOW_DATA_ATTR !== !1, St = s.ALLOW_UNKNOWN_PROTOCOLS || !1, te = s.ALLOW_SELF_CLOSE_IN_ATTR !== !1, le = s.SAFE_FOR_TEMPLATES || !1, xt = s.SAFE_FOR_XML !== !1, ve = s.WHOLE_DOCUMENT || !1, ye = s.RETURN_DOM || !1, Pe = s.RETURN_DOM_FRAGMENT || !1, et = s.RETURN_TRUSTED_TYPE || !1, je = s.FORCE_BODY || !1, xe = s.SANITIZE_DOM !== !1, oe = s.SANITIZE_NAMED_PROPS || !1, Et = s.KEEP_CONTENT !== !1, Ge = s.IN_PLACE || !1, Qe = s.ALLOWED_URI_REGEXP || Qe, qe = s.NAMESPACE || we, H = s.CUSTOM_ELEMENT_HANDLING || {}, s.CUSTOM_ELEMENT_HANDLING && ot(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (H.tagNameCheck = s.CUSTOM_ELEMENT_HANDLING.tagNameCheck), s.CUSTOM_ELEMENT_HANDLING && ot(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (H.attributeNameCheck = s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), s.CUSTOM_ELEMENT_HANDLING && typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (H.allowCustomizedBuiltInElements = s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), le && (me = !1), Pe && (ye = !0), De && (j = O({}, Ve(An)), K = [], De.html === !0 && (O(j, Rn), O(K, Fn)), De.svg === !0 && (O(j, Kr), O(K, en), O(K, Lr)), De.svgFilters === !0 && (O(j, Jr), O(K, en), O(K, Lr)), De.mathMl === !0 && (O(j, Qr), O(K, Mn), O(K, Lr))), s.ADD_TAGS && (j === yt && (j = Yt(j)), O(j, s.ADD_TAGS, W)), s.ADD_ATTR && (K === gt && (K = Yt(K)), O(K, s.ADD_ATTR, W)), s.ADD_URI_SAFE_ATTR && O(tt, s.ADD_URI_SAFE_ATTR, W), s.FORBID_CONTENTS && (Ee === Nt && (Ee = Yt(Ee)), O(Ee, s.FORBID_CONTENTS, W)), Et && (j["#text"] = !0), ve && O(j, ["html", "head", "body"]), j.table && (O(j, ["tbody"]), delete Le.tbody), fe && fe(s), Se = s);
  }, Ht = O({}, ["mi", "mo", "mn", "ms", "mtext"]), kt = O({}, ["annotation-xml"]), $t = O({}, ["title", "style", "font", "a", "script"]), it = O({}, Kr);
  O(it, Jr), O(it, co);
  var _t = O({}, Qr);
  O(_t, po);
  var tr = function(s) {
    var g = ie(s);
    (!g || !g.tagName) && (g = {
      namespaceURI: qe,
      tagName: "template"
    });
    var T = Nr(s.tagName), P = Nr(g.tagName);
    return se[s.namespaceURI] ? s.namespaceURI === Tt ? g.namespaceURI === we ? T === "svg" : g.namespaceURI === wt ? T === "svg" && (P === "annotation-xml" || Ht[P]) : !!it[T] : s.namespaceURI === wt ? g.namespaceURI === we ? T === "math" : g.namespaceURI === Tt ? T === "math" && kt[P] : !!_t[T] : s.namespaceURI === we ? g.namespaceURI === Tt && !kt[P] || g.namespaceURI === wt && !Ht[P] ? !1 : !_t[T] && ($t[T] || !it[T]) : !!(ge === "application/xhtml+xml" && se[s.namespaceURI]) : !1;
  }, ue = function(s) {
    yr(u.removed, {
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
      yr(u.removed, {
        attribute: g.getAttributeNode(s),
        from: g
      });
    } catch {
      yr(u.removed, {
        attribute: null,
        from: g
      });
    }
    if (g.removeAttribute(s), s === "is" && !K[s])
      if (ye || Pe)
        try {
          ue(g);
        } catch {
        }
      else
        try {
          g.setAttribute(s, "");
        } catch {
        }
  }, lt = function(s) {
    var g, T;
    if (je)
      s = "<remove></remove>" + s;
    else {
      var P = Cn(s, /^[\r\n\t ]+/);
      T = P && P[0];
    }
    ge === "application/xhtml+xml" && qe === we && (s = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + s + "</body></html>");
    var z = ne ? ne.createHTML(s) : s;
    if (qe === we)
      try {
        g = new dt().parseFromString(z, ge);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = U.createDocument(qe, "template", null);
      try {
        g.documentElement.innerHTML = zt ? ht : z;
      } catch {
      }
    }
    var Q = g.body || g.documentElement;
    return s && T && Q.insertBefore(k.createTextNode(T), Q.childNodes[0] || null), qe === we ? It.call(g, ve ? "html" : "body")[0] : ve ? g.documentElement : Q;
  }, Wt = function(s) {
    return ir.call(
      s.ownerDocument || s,
      s,
      // eslint-disable-next-line no-bitwise
      _.SHOW_ELEMENT | _.SHOW_COMMENT | _.SHOW_TEXT | _.SHOW_PROCESSING_INSTRUCTION | _.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, at = function(s) {
    return s instanceof X && (typeof s.nodeName != "string" || typeof s.textContent != "string" || typeof s.removeChild != "function" || !(s.attributes instanceof Ye) || typeof s.removeAttribute != "function" || typeof s.setAttribute != "function" || typeof s.namespaceURI != "string" || typeof s.insertBefore != "function" || typeof s.hasChildNodes != "function");
  }, Ne = function(s) {
    return Mt(N) === "object" ? s instanceof N : s && Mt(s) === "object" && typeof s.nodeType == "number" && typeof s.nodeName == "string";
  }, ke = function(s, g, T) {
    de[s] && lo(de[s], function(P) {
      P.call(u, g, T, Se);
    });
  }, Xe = function(s) {
    var g;
    if (ke("beforeSanitizeElements", s, null), at(s) || ae(/[\u0080-\uFFFF]/, s.nodeName))
      return ue(s), !0;
    var T = W(s.nodeName);
    if (ke("uponSanitizeElement", s, {
      tagName: T,
      allowedTags: j
    }), s.hasChildNodes() && !Ne(s.firstElementChild) && (!Ne(s.content) || !Ne(s.content.firstElementChild)) && ae(/<[/\w]/g, s.innerHTML) && ae(/<[/\w]/g, s.textContent) || T === "select" && ae(/<template/i, s.innerHTML) || s.nodeType === 7 || xt && s.nodeType === 8 && ae(/<[/\w]/g, s.data))
      return ue(s), !0;
    if (!j[T] || Le[T]) {
      if (!Le[T] && Rt(T) && (H.tagNameCheck instanceof RegExp && ae(H.tagNameCheck, T) || H.tagNameCheck instanceof Function && H.tagNameCheck(T)))
        return !1;
      if (Et && !Ee[T]) {
        var P = ie(s) || s.parentNode, z = Z(s) || s.childNodes;
        if (z && P)
          for (var Q = z.length, J = Q - 1; J >= 0; --J) {
            var _e = Kt(z[J], !0);
            _e.__removalCount = (s.__removalCount || 0) + 1, P.insertBefore(_e, re(s));
          }
      }
      return ue(s), !0;
    }
    return s instanceof D && !tr(s) || (T === "noscript" || T === "noembed" || T === "noframes") && ae(/<\/no(script|embed|frames)/i, s.innerHTML) ? (ue(s), !0) : (le && s.nodeType === 3 && (g = s.textContent, g = We(g, mt, " "), g = We(g, vt, " "), g = We(g, Ot, " "), s.textContent !== g && (yr(u.removed, {
      element: s.cloneNode()
    }), s.textContent = g)), ke("afterSanitizeElements", s, null), !1);
  }, rr = function(s, g, T) {
    if (xe && (g === "id" || g === "name") && (T in k || T in Me))
      return !1;
    if (!(me && !pe[g] && ae(lr, g))) {
      if (!(Fe && ae(Lt, g))) {
        if (!K[g] || pe[g]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Rt(s) && (H.tagNameCheck instanceof RegExp && ae(H.tagNameCheck, s) || H.tagNameCheck instanceof Function && H.tagNameCheck(s)) && (H.attributeNameCheck instanceof RegExp && ae(H.attributeNameCheck, g) || H.attributeNameCheck instanceof Function && H.attributeNameCheck(g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            g === "is" && H.allowCustomizedBuiltInElements && (H.tagNameCheck instanceof RegExp && ae(H.tagNameCheck, T) || H.tagNameCheck instanceof Function && H.tagNameCheck(T)))
          ) return !1;
        } else if (!tt[g]) {
          if (!ae(Qe, We(T, Pt, ""))) {
            if (!((g === "src" || g === "xlink:href" || g === "href") && s !== "script" && ao(T, "data:") === 0 && Bt[s])) {
              if (!(St && !ae(he, We(T, Pt, "")))) {
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
    return s !== "annotation-xml" && Cn(s, Je);
  }, st = function(s) {
    var g, T, P, z;
    ke("beforeSanitizeAttributes", s, null);
    var Q = s.attributes;
    if (Q) {
      var J = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: K
      };
      for (z = Q.length; z--; ) {
        g = Q[z];
        var _e = g, G = _e.name, be = _e.namespaceURI;
        if (T = G === "value" ? g.value : so(g.value), P = W(G), J.attrName = P, J.attrValue = T, J.keepAttr = !0, J.forceKeepAttr = void 0, ke("uponSanitizeAttribute", s, J), T = J.attrValue, !J.forceKeepAttr && (Ct(G, s), !!J.keepAttr)) {
          if (!te && ae(/\/>/i, T)) {
            Ct(G, s);
            continue;
          }
          le && (T = We(T, mt, " "), T = We(T, vt, " "), T = We(T, Ot, " "));
          var Be = W(s.nodeName);
          if (rr(Be, P, T)) {
            if (oe && (P === "id" || P === "name") && (Ct(G, s), T = Qt + T), xt && ae(/((--!?|])>)|<\/(style|title)/i, T)) {
              Ct(G, s);
              continue;
            }
            if (ne && Mt(Ze) === "object" && typeof Ze.getAttributeType == "function" && !be)
              switch (Ze.getAttributeType(Be, P)) {
                case "TrustedHTML": {
                  T = ne.createHTML(T);
                  break;
                }
                case "TrustedScriptURL": {
                  T = ne.createScriptURL(T);
                  break;
                }
              }
            try {
              be ? s.setAttributeNS(be, G, T) : s.setAttribute(G, T), at(s) ? ue(s) : _n(u.removed);
            } catch {
            }
          }
        }
      }
      ke("afterSanitizeAttributes", s, null);
    }
  }, ut = function C(s) {
    var g, T = Wt(s);
    for (ke("beforeSanitizeShadowDOM", s, null); g = T.nextNode(); )
      ke("uponSanitizeShadowNode", g, null), !Xe(g) && (g.content instanceof y && C(g.content), st(g));
    ke("afterSanitizeShadowDOM", s, null);
  };
  return u.sanitize = function(C) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g, T, P, z, Q;
    if (zt = !C, zt && (C = "<!-->"), typeof C != "string" && !Ne(C))
      if (typeof C.toString == "function") {
        if (C = C.toString(), typeof C != "string")
          throw Zr("dirty is not a string, aborting");
      } else
        throw Zr("toString is not a function");
    if (!u.isSupported) {
      if (Mt(v.toStaticHTML) === "object" || typeof v.toStaticHTML == "function") {
        if (typeof C == "string")
          return v.toStaticHTML(C);
        if (Ne(C))
          return v.toStaticHTML(C.outerHTML);
      }
      return C;
    }
    if (Dt || Te(s), u.removed = [], typeof C == "string" && (Ge = !1), Ge) {
      if (C.nodeName) {
        var J = W(C.nodeName);
        if (!j[J] || Le[J])
          throw Zr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (C instanceof N)
      g = lt("<!---->"), T = g.ownerDocument.importNode(C, !0), T.nodeType === 1 && T.nodeName === "BODY" || T.nodeName === "HTML" ? g = T : g.appendChild(T);
    else {
      if (!ye && !le && !ve && // eslint-disable-next-line unicorn/prefer-includes
      C.indexOf("<") === -1)
        return ne && et ? ne.createHTML(C) : C;
      if (g = lt(C), !g)
        return ye ? null : et ? ht : "";
    }
    g && je && ue(g.firstChild);
    for (var _e = Wt(Ge ? C : g); P = _e.nextNode(); )
      P.nodeType === 3 && P === z || Xe(P) || (P.content instanceof y && ut(P.content), st(P), z = P);
    if (z = null, Ge)
      return C;
    if (ye) {
      if (Pe)
        for (Q = bt.call(g.ownerDocument); g.firstChild; )
          Q.appendChild(g.firstChild);
      else
        Q = g;
      return (K.shadowroot || K.shadowrootmod) && (Q = Jt.call(x, Q, !0)), Q;
    }
    var G = ve ? g.outerHTML : g.innerHTML;
    return ve && j["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && ae(Eo, g.ownerDocument.doctype.name) && (G = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + G), le && (G = We(G, mt, " "), G = We(G, vt, " "), G = We(G, Ot, " ")), ne && et ? ne.createHTML(G) : G;
  }, u.setConfig = function(C) {
    Te(C), Dt = !0;
  }, u.clearConfig = function() {
    Se = null, Dt = !1;
  }, u.isValidAttribute = function(C, s, g) {
    Se || Te({});
    var T = W(C), P = W(s);
    return rr(T, P, g);
  }, u.addHook = function(C, s) {
    typeof s == "function" && (de[C] = de[C] || [], yr(de[C], s));
  }, u.removeHook = function(C) {
    if (de[C])
      return _n(de[C]);
  }, u.removeHooks = function(C) {
    de[C] && (de[C] = []);
  }, u.removeAllHooks = function() {
    de = {};
  }, u;
}
Dn();
function _o(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var Nn = { exports: {} }, tn, bn;
function Co() {
  if (bn) return tn;
  bn = 1;
  var v = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return tn = v, tn;
}
var rn, In;
function Ro() {
  if (In) return rn;
  In = 1;
  var v = Co();
  function u() {
  }
  function x() {
  }
  return x.resetWarningCache = u, rn = function() {
    function k(N, D, _, E, Ye, X) {
      if (X !== v) {
        var dt = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw dt.name = "Invariant Violation", dt;
      }
    }
    k.isRequired = k;
    function y() {
      return k;
    }
    var R = {
      array: k,
      bigint: k,
      bool: k,
      func: k,
      number: k,
      object: k,
      string: k,
      symbol: k,
      any: k,
      arrayOf: y,
      element: k,
      elementType: k,
      instanceOf: y,
      node: k,
      objectOf: y,
      oneOf: y,
      oneOfType: y,
      shape: y,
      exact: y,
      checkPropTypes: x,
      resetWarningCache: u
    };
    return R.PropTypes = R, R;
  }, rn;
}
Nn.exports = Ro()();
var Ao = Nn.exports;
const ft = /* @__PURE__ */ _o(Ao);
ft.shape({
  event: ft.string,
  action: ft.string,
  name: ft.string,
  region: ft.string,
  section: ft.string,
  component: ft.string,
  type: ft.string,
  text: ft.string
});
const Fo = ({
  event: v = "",
  action: u = "",
  name: x = "",
  type: k = "",
  section: y = "",
  text: R = "",
  region: N = "",
  component: D = ""
}) => {
  const { dataLayer: _ } = window, E = {
    event: v.toLowerCase(),
    action: u.toLowerCase(),
    name: x.toLowerCase(),
    type: k.toLowerCase(),
    region: N.toLowerCase(),
    section: y.toLowerCase(),
    text: R.toLowerCase(),
    component: D.toLowerCase()
  };
  _ && _.push(E);
};
var Zt = {};
var On;
function Mo() {
  if (On) return Zt;
  On = 1;
  var v = Br;
  function u(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) n += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var x = Object.prototype.hasOwnProperty, k = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, R = {};
  function N(e) {
    return x.call(R, e) ? !0 : x.call(y, e) ? !1 : k.test(e) ? R[e] = !0 : (y[e] = !0, !1);
  }
  function D(e, n, i, a, d, c, h) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = a, this.attributeNamespace = d, this.mustUseProperty = i, this.propertyName = e, this.type = n, this.sanitizeURL = c, this.removeEmptyString = h;
  }
  var _ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    _[e] = new D(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    _[n] = new D(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    _[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    _[e] = new D(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    _[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    _[e] = new D(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    _[e] = new D(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    _[e] = new D(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    _[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var E = /[\-:]([a-z])/g;
  function Ye(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      E,
      Ye
    );
    _[n] = new D(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(E, Ye);
    _[n] = new D(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(E, Ye);
    _[n] = new D(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    _[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), _.xlinkHref = new D("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    _[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  var X = {
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
  }, dt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(X).forEach(function(e) {
    dt.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), X[n] = X[e];
    });
  });
  var Ze = /["'&<>]/;
  function Y(e) {
    if (typeof e == "boolean" || typeof e == "number") return "" + e;
    e = "" + e;
    var n = Ze.exec(e);
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
  var Kt = /([A-Z])/g, re = /^ms-/, Z = Array.isArray;
  function ie(e, n) {
    return { insertionMode: e, selectedValue: n };
  }
  function Ke(e, n, i) {
    switch (n) {
      case "select":
        return ie(1, i.value != null ? i.value : i.defaultValue);
      case "svg":
        return ie(2, null);
      case "math":
        return ie(3, null);
      case "foreignObject":
        return ie(1, null);
      case "table":
        return ie(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return ie(5, null);
      case "colgroup":
        return ie(7, null);
      case "tr":
        return ie(6, null);
    }
    return 4 <= e.insertionMode || e.insertionMode === 0 ? ie(1, null) : e;
  }
  var ne = /* @__PURE__ */ new Map();
  function ht(e, n, i) {
    if (typeof i != "object") throw Error(u(62));
    n = !0;
    for (var a in i) if (x.call(i, a)) {
      var d = i[a];
      if (d != null && typeof d != "boolean" && d !== "") {
        if (a.indexOf("--") === 0) {
          var c = Y(a);
          d = Y(("" + d).trim());
        } else {
          c = a;
          var h = ne.get(c);
          h !== void 0 || (h = Y(c.replace(Kt, "-$1").toLowerCase().replace(re, "-ms-")), ne.set(c, h)), c = h, d = typeof d == "number" ? d === 0 || x.call(X, a) ? "" + d : d + "px" : Y(("" + d).trim());
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
      if (n = _.hasOwnProperty(i) ? _[i] : null, n !== null) {
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
  function U(e, n, i) {
    if (n != null) {
      if (i != null) throw Error(u(60));
      if (typeof n != "object" || !("__html" in n)) throw Error(u(61));
      n = n.__html, n != null && e.push("" + n);
    }
  }
  function ir(e) {
    var n = "";
    return v.Children.forEach(e, function(i) {
      i != null && (n += i);
    }), n;
  }
  function bt(e, n, i, a) {
    e.push(ce(i));
    var d = i = null, c;
    for (c in n) if (x.call(n, c)) {
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
    return e.push(">"), U(e, d, i), typeof i == "string" ? (e.push(Y(i)), null) : i;
  }
  var It = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Jt = /* @__PURE__ */ new Map();
  function ce(e) {
    var n = Jt.get(e);
    if (n === void 0) {
      if (!It.test(e)) throw Error(u(65, e));
      n = "<" + e, Jt.set(e, n);
    }
    return n;
  }
  function de(e, n, i, a, d) {
    switch (n) {
      case "select":
        e.push(ce("select"));
        var c = null, h = null;
        for (b in i) if (x.call(i, b)) {
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
        return e.push(">"), U(e, h, c), c;
      case "option":
        h = d.selectedValue, e.push(ce("option"));
        var A = w = null, M = null, b = null;
        for (c in i) if (x.call(i, c)) {
          var q = i[c];
          if (q != null) switch (c) {
            case "children":
              w = q;
              break;
            case "selected":
              M = q;
              break;
            case "dangerouslySetInnerHTML":
              b = q;
              break;
            case "value":
              A = q;
            default:
              ee(e, a, c, q);
          }
        }
        if (h != null) if (i = A !== null ? "" + A : ir(w), Z(h)) {
          for (a = 0; a < h.length; a++)
            if ("" + h[a] === i) {
              e.push(' selected=""');
              break;
            }
        } else "" + h === i && e.push(' selected=""');
        else M && e.push(' selected=""');
        return e.push(">"), U(e, b, w), w;
      case "textarea":
        e.push(ce("textarea")), b = h = c = null;
        for (w in i) if (x.call(i, w) && (A = i[w], A != null)) switch (w) {
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
        e.push(ce("input")), A = b = w = c = null;
        for (h in i) if (x.call(i, h) && (M = i[h], M != null)) switch (h) {
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
        e.push(ce("menuitem"));
        for (var ze in i) if (x.call(i, ze) && (c = i[ze], c != null)) switch (ze) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            ee(e, a, ze, c);
        }
        return e.push(">"), null;
      case "title":
        e.push(ce("title")), c = null;
        for (q in i) if (x.call(i, q) && (h = i[q], h != null)) switch (q) {
          case "children":
            c = h;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            ee(e, a, q, h);
        }
        return e.push(">"), c;
      case "listing":
      case "pre":
        e.push(ce(n)), h = c = null;
        for (A in i) if (x.call(i, A) && (w = i[A], w != null)) switch (A) {
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
        e.push(ce(n));
        for (var Ue in i) if (x.call(i, Ue) && (c = i[Ue], c != null)) switch (Ue) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, n));
          default:
            ee(e, a, Ue, c);
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
        e.push(ce(n)), h = c = null;
        for (M in i) if (x.call(i, M) && (w = i[M], w != null)) switch (M) {
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
        return e.push(">"), U(e, h, c), c;
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
  function Ot(e, n) {
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
  var lr = /[<\u2028\u2029]/g;
  function Lt(e) {
    return JSON.stringify(e).replace(lr, function(n) {
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
  function he(e, n) {
    return n = n === void 0 ? "" : n, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: n + "P:", segmentPrefix: n + "S:", boundaryPrefix: n + "B:", idPrefix: n, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
  }
  function Pt(e, n, i, a) {
    return i.generateStaticMarkup ? (e.push(Y(n)), !1) : (n === "" ? e = a : (a && e.push("<!-- -->"), e.push(Y(n)), e = !0), e);
  }
  var Je = Object.assign, Qe = Symbol.for("react.element"), j = Symbol.for("react.portal"), yt = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), gt = Symbol.for("react.profiler"), H = Symbol.for("react.provider"), Le = Symbol.for("react.context"), pe = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), St = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), le = Symbol.for("react.scope"), xt = Symbol.for("react.debug_trace_mode"), ve = Symbol.for("react.legacy_hidden"), Dt = Symbol.for("react.default_value"), je = Symbol.iterator;
  function ye(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case yt:
        return "Fragment";
      case j:
        return "Portal";
      case gt:
        return "Profiler";
      case K:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case me:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Le:
        return (e.displayName || "Context") + ".Consumer";
      case H:
        return (e._context.displayName || "Context") + ".Provider";
      case pe:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case St:
        return n = e.displayName || null, n !== null ? n : ye(e.type) || "Memo";
      case te:
        n = e._payload, e = e._init;
        try {
          return ye(e(n));
        } catch {
        }
    }
    return null;
  }
  var Pe = {};
  function et(e, n) {
    if (e = e.contextTypes, !e) return Pe;
    var i = {}, a;
    for (a in e) i[a] = n[a];
    return i;
  }
  var xe = null;
  function oe(e, n) {
    if (e !== n) {
      e.context._currentValue2 = e.parentValue, e = e.parent;
      var i = n.parent;
      if (e === null) {
        if (i !== null) throw Error(u(401));
      } else {
        if (i === null) throw Error(u(401));
        oe(e, i);
      }
      n.context._currentValue2 = n.value;
    }
  }
  function Qt(e) {
    e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && Qt(e);
  }
  function Et(e) {
    var n = e.parent;
    n !== null && Et(n), e.context._currentValue2 = e.value;
  }
  function Ge(e, n) {
    if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(u(402));
    e.depth === n.depth ? oe(e, n) : Ge(e, n);
  }
  function De(e, n) {
    var i = n.parent;
    if (i === null) throw Error(u(402));
    e.depth === i.depth ? oe(e, i) : De(e, i), n.context._currentValue2 = n.value;
  }
  function Ee(e) {
    var n = xe;
    n !== e && (n === null ? Et(e) : e === null ? Qt(n) : n.depth === e.depth ? oe(n, e) : n.depth > e.depth ? Ge(n, e) : De(n, e), xe = e);
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
    if (e.context = typeof h == "object" && h !== null ? h._currentValue2 : a, h = n.getDerivedStateFromProps, typeof h == "function" && (h = h(i, d), d = h == null ? d : Je({}, d, h), e.state = d), typeof n.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (n = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), n !== e.state && Nt.enqueueReplaceState(e, e.state, null), c.queue !== null && 0 < c.queue.length) if (n = c.queue, h = c.replace, c.queue = null, c.replace = !1, h && n.length === 1) e.state = n[0];
    else {
      for (c = h ? n[0] : e.state, d = !0, h = h ? 1 : 0; h < n.length; h++) {
        var w = n[h];
        w = typeof w == "function" ? w.call(e, c, i, a) : w, w != null && (d ? (d = !1, c = Je({}, c, w)) : Je(c, w));
      }
      e.state = c;
    }
    else c.queue = null;
  }
  var er = { id: 1, overflow: "" };
  function tt(e, n, i) {
    var a = e.id;
    e = e.overflow;
    var d = 32 - rt(a) - 1;
    a &= ~(1 << d), i += 1;
    var c = 32 - rt(n) + d;
    if (30 < c) {
      var h = d - d % 5;
      return c = (a & (1 << h) - 1).toString(32), a >>= h, d -= h, { id: 1 << 32 - rt(n) + d | i << d | a, overflow: c + e };
    }
    return { id: 1 << c | i << d | a, overflow: e };
  }
  var rt = Math.clz32 ? Math.clz32 : we, wt = Math.log, Tt = Math.LN2;
  function we(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (wt(e) / Tt | 0) | 0;
  }
  function qe(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var zt = typeof Object.is == "function" ? Object.is : qe, se = null, Ut = null, ge = null, B = null, nt = !1, W = !1, Se = 0, Me = null, ot = 0;
  function Te() {
    if (se === null) throw Error(u(321));
    return se;
  }
  function Ht() {
    if (0 < ot) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function kt() {
    return B === null ? ge === null ? (nt = !1, ge = B = Ht()) : (nt = !0, B = ge) : B.next === null ? (nt = !1, B = B.next = Ht()) : (nt = !0, B = B.next), B;
  }
  function $t() {
    Ut = se = null, W = !1, ge = null, ot = 0, B = Me = null;
  }
  function it(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function _t(e, n, i) {
    if (se = Te(), B = kt(), nt) {
      var a = B.queue;
      if (n = a.dispatch, Me !== null && (i = Me.get(a), i !== void 0)) {
        Me.delete(a), a = B.memoizedState;
        do
          a = e(a, i.action), i = i.next;
        while (i !== null);
        return B.memoizedState = a, [a, n];
      }
      return [B.memoizedState, n];
    }
    return e = e === it ? typeof n == "function" ? n() : n : i !== void 0 ? i(n) : n, B.memoizedState = e, e = B.queue = { last: null, dispatch: null }, e = e.dispatch = ue.bind(null, se, e), [B.memoizedState, e];
  }
  function tr(e, n) {
    if (se = Te(), B = kt(), n = n === void 0 ? null : n, B !== null) {
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
  function ue(e, n, i) {
    if (25 <= ot) throw Error(u(301));
    if (e === se) if (W = !0, e = { action: i, next: null }, Me === null && (Me = /* @__PURE__ */ new Map()), i = Me.get(n), i === void 0) Me.set(n, e);
    else {
      for (n = i; n.next !== null; ) n = n.next;
      n.next = e;
    }
  }
  function Ct() {
    throw Error(u(394));
  }
  function lt() {
  }
  var Wt = { readContext: function(e) {
    return e._currentValue2;
  }, useContext: function(e) {
    return Te(), e._currentValue2;
  }, useMemo: tr, useReducer: _t, useRef: function(e) {
    se = Te(), B = kt();
    var n = B.memoizedState;
    return n === null ? (e = { current: e }, B.memoizedState = e) : n;
  }, useState: function(e) {
    return _t(it, e);
  }, useInsertionEffect: lt, useLayoutEffect: function() {
  }, useCallback: function(e, n) {
    return tr(function() {
      return e;
    }, n);
  }, useImperativeHandle: lt, useEffect: lt, useDebugValue: lt, useDeferredValue: function(e) {
    return Te(), e;
  }, useTransition: function() {
    return Te(), [
      !1,
      Ct
    ];
  }, useId: function() {
    var e = Ut.treeContext, n = e.overflow;
    e = e.id, e = (e & ~(1 << 32 - rt(e) - 1)).toString(32) + n;
    var i = at;
    if (i === null) throw Error(u(404));
    return n = Se++, e = ":" + i.idPrefix + "R" + e, 0 < n && (e += "H" + n.toString(32)), e + ":";
  }, useMutableSource: function(e, n) {
    return Te(), n(e._source);
  }, useSyncExternalStore: function(e, n, i) {
    if (i === void 0) throw Error(u(407));
    return i();
  } }, at = null, Ne = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ke(e) {
    return console.error(e), null;
  }
  function Xe() {
  }
  function rr(e, n, i, a, d, c, h, w, A) {
    var M = [], b = /* @__PURE__ */ new Set();
    return n = { destination: null, responseState: n, progressiveChunkSize: a === void 0 ? 12800 : a, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: b, pingedTasks: M, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: d === void 0 ? ke : d, onAllReady: Xe, onShellReady: h === void 0 ? Xe : h, onShellError: Xe, onFatalError: Xe }, i = st(n, 0, null, i, !1, !1), i.parentFlushed = !0, e = Rt(n, e, null, i, b, Pe, null, er), M.push(e), n;
  }
  function Rt(e, n, i, a, d, c, h, w) {
    e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
    var A = { node: n, ping: function() {
      var M = e.pingedTasks;
      M.push(A), M.length === 1 && ar(e);
    }, blockedBoundary: i, blockedSegment: a, abortSet: d, legacyContext: c, context: h, treeContext: w };
    return d.add(A), A;
  }
  function st(e, n, i, a, d, c) {
    return { status: 0, id: -1, index: n, parentFlushed: !1, chunks: [], children: [], formatContext: a, boundary: i, lastPushedText: d, textEmbedded: c };
  }
  function ut(e, n) {
    if (e = e.onError(n), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
  }
  function C(e, n) {
    var i = e.onShellError;
    i(n), i = e.onFatalError, i(n), e.destination !== null ? (e.status = 2, e.destination.destroy(n)) : (e.status = 1, e.fatalError = n);
  }
  function s(e, n, i, a, d) {
    for (se = {}, Ut = n, Se = 0, e = i(a, d); W; ) W = !1, Se = 0, ot += 1, B = null, e = i(a, d);
    return $t(), e;
  }
  function g(e, n, i, a) {
    var d = i.render(), c = a.childContextTypes;
    if (c != null) {
      var h = n.legacyContext;
      if (typeof i.getChildContext != "function") a = h;
      else {
        i = i.getChildContext();
        for (var w in i) if (!(w in c)) throw Error(u(108, ye(a) || "Unknown", w));
        a = Je({}, h, i);
      }
      n.legacyContext = a, z(e, n, d), n.legacyContext = h;
    } else z(e, n, d);
  }
  function T(e, n) {
    if (e && e.defaultProps) {
      n = Je({}, n), e = e.defaultProps;
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    return n;
  }
  function P(e, n, i, a, d) {
    if (typeof i == "function") if (i.prototype && i.prototype.isReactComponent) {
      d = et(i, n.legacyContext);
      var c = i.contextType;
      c = new i(a, typeof c == "object" && c !== null ? c._currentValue2 : d), Bt(c, i, a, d), g(e, n, c, i);
    } else {
      c = et(i, n.legacyContext), d = s(e, n, i, a, c);
      var h = Se !== 0;
      if (typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) Bt(d, i, a, c), g(e, n, d, i);
      else if (h) {
        a = n.treeContext, n.treeContext = tt(a, 1, 0);
        try {
          z(e, n, d);
        } finally {
          n.treeContext = a;
        }
      } else z(e, n, d);
    }
    else if (typeof i == "string") {
      switch (d = n.blockedSegment, c = de(d.chunks, i, a, e.responseState, d.formatContext), d.lastPushedText = !1, h = d.formatContext, d.formatContext = Ke(h, i, a), J(e, n, c), d.formatContext = h, i) {
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
        case ve:
        case xt:
        case K:
        case gt:
        case yt:
          z(e, n, a.children);
          return;
        case me:
          z(e, n, a.children);
          return;
        case le:
          throw Error(u(343));
        case Fe:
          e: {
            i = n.blockedBoundary, d = n.blockedSegment, c = a.fallback, a = a.children, h = /* @__PURE__ */ new Set();
            var w = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: h, errorDigest: null }, A = st(e, d.chunks.length, w, d.formatContext, !1, !1);
            d.children.push(A), d.lastPushedText = !1;
            var M = st(e, 0, null, d.formatContext, !1, !1);
            M.parentFlushed = !0, n.blockedBoundary = w, n.blockedSegment = M;
            try {
              if (J(
                e,
                n,
                a
              ), e.responseState.generateStaticMarkup || M.lastPushedText && M.textEmbedded && M.chunks.push("<!-- -->"), M.status = 1, be(w, M), w.pendingTasks === 0) break e;
            } catch (b) {
              M.status = 4, w.forceClientRender = !0, w.errorDigest = ut(e, b);
            } finally {
              n.blockedBoundary = i, n.blockedSegment = d;
            }
            n = Rt(e, c, i, A, h, n.legacyContext, n.context, n.treeContext), e.pingedTasks.push(n);
          }
          return;
      }
      if (typeof i == "object" && i !== null) switch (i.$$typeof) {
        case pe:
          if (a = s(e, n, i.render, a, d), Se !== 0) {
            i = n.treeContext, n.treeContext = tt(i, 1, 0);
            try {
              z(e, n, a);
            } finally {
              n.treeContext = i;
            }
          } else z(e, n, a);
          return;
        case St:
          i = i.type, a = T(i, a), P(e, n, i, a, d);
          return;
        case H:
          if (d = a.children, i = i._context, a = a.value, c = i._currentValue2, i._currentValue2 = a, h = xe, xe = a = { parent: h, depth: h === null ? 0 : h.depth + 1, context: i, parentValue: c, value: a }, n.context = a, z(e, n, d), e = xe, e === null) throw Error(u(403));
          a = e.parentValue, e.context._currentValue2 = a === Dt ? e.context._defaultValue : a, e = xe = e.parent, n.context = e;
          return;
        case Le:
          a = a.children, a = a(i._currentValue2), z(e, n, a);
          return;
        case te:
          d = i._init, i = d(i._payload), a = T(i, a), P(
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
        case Qe:
          P(e, n, i.type, i.props, i.ref);
          return;
        case j:
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
      if (i === null || typeof i != "object" ? a = null : (a = je && i[je] || i["@@iterator"], a = typeof a == "function" ? a : null), a && (a = a.call(i))) {
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
      n.treeContext = tt(c, a, d);
      try {
        J(e, n, i[d]);
      } finally {
        n.treeContext = c;
      }
    }
  }
  function J(e, n, i) {
    var a = n.blockedSegment.formatContext, d = n.legacyContext, c = n.context;
    try {
      return z(e, n, i);
    } catch (A) {
      if ($t(), typeof A == "object" && A !== null && typeof A.then == "function") {
        i = A;
        var h = n.blockedSegment, w = st(e, h.chunks.length, null, h.formatContext, h.lastPushedText, !0);
        h.children.push(w), h.lastPushedText = !1, e = Rt(e, n.node, n.blockedBoundary, w, n.abortSet, n.legacyContext, n.context, n.treeContext).ping, i.then(e, e), n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, Ee(c);
      } else throw n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, Ee(c), A;
    }
  }
  function _e(e) {
    var n = e.blockedBoundary;
    e = e.blockedSegment, e.status = 3, Be(this, n, e);
  }
  function G(e, n, i) {
    var a = e.blockedBoundary;
    e.blockedSegment.status = 3, a === null ? (n.allPendingTasks--, n.status !== 2 && (n.status = 2, n.destination !== null && n.destination.push(null))) : (a.pendingTasks--, a.forceClientRender || (a.forceClientRender = !0, e = i === void 0 ? Error(u(432)) : i, a.errorDigest = n.onError(e), a.parentFlushed && n.clientRenderedBoundaries.push(a)), a.fallbackAbortableTasks.forEach(function(d) {
      return G(d, n, i);
    }), a.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0 && (a = n.onAllReady, a()));
  }
  function be(e, n) {
    if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
      var i = n.children[0];
      i.id = n.id, i.parentFlushed = !0, i.status === 1 && be(e, i);
    } else e.completedSegments.push(n);
  }
  function Be(e, n, i) {
    if (n === null) {
      if (i.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(u(389));
        e.completedRootSegment = i;
      }
      e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Xe, n = e.onShellReady, n());
    } else n.pendingTasks--, n.forceClientRender || (n.pendingTasks === 0 ? (i.parentFlushed && i.status === 1 && be(n, i), n.parentFlushed && e.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(_e, e), n.fallbackAbortableTasks.clear()) : i.parentFlushed && i.status === 1 && (be(n, i), n.completedSegments.length === 1 && n.parentFlushed && e.partialBoundaries.push(n)));
    e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
  }
  function ar(e) {
    if (e.status !== 2) {
      var n = xe, i = Ne.current;
      Ne.current = Wt;
      var a = at;
      at = e.responseState;
      try {
        var d = e.pingedTasks, c;
        for (c = 0; c < d.length; c++) {
          var h = d[c], w = e, A = h.blockedSegment;
          if (A.status === 0) {
            Ee(h.context);
            try {
              z(w, h, h.node), w.responseState.generateStaticMarkup || A.lastPushedText && A.textEmbedded && A.chunks.push("<!-- -->"), h.abortSet.delete(h), A.status = 1, Be(w, h.blockedBoundary, A);
            } catch (Ce) {
              if ($t(), typeof Ce == "object" && Ce !== null && typeof Ce.then == "function") {
                var M = h.ping;
                Ce.then(M, M);
              } else {
                h.abortSet.delete(h), A.status = 4;
                var b = h.blockedBoundary, q = Ce, ze = ut(w, q);
                if (b === null ? C(w, q) : (b.pendingTasks--, b.forceClientRender || (b.forceClientRender = !0, b.errorDigest = ze, b.parentFlushed && w.clientRenderedBoundaries.push(b))), w.allPendingTasks--, w.allPendingTasks === 0) {
                  var Ue = w.onAllReady;
                  Ue();
                }
              }
            } finally {
            }
          }
        }
        d.splice(0, c), e.destination !== null && nr(e, e.destination);
      } catch (Ce) {
        ut(e, Ce), C(e, Ce);
      } finally {
        at = a, Ne.current = i, i === Wt && Ee(n);
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
          d = jt(e, n, d);
        }
        for (; c < a.length - 1; c++) n.push(a[c]);
        return c < a.length && (d = n.push(a[c])), d;
      default:
        throw Error(u(390));
    }
  }
  function jt(e, n, i) {
    var a = i.boundary;
    if (a === null) return Vt(e, n, i);
    if (a.parentFlushed = !0, a.forceClientRender) return e.responseState.generateStaticMarkup || (a = a.errorDigest, n.push("<!--$!-->"), n.push("<template"), a && (n.push(' data-dgst="'), a = Y(a), n.push(a), n.push('"')), n.push("></template>")), Vt(e, n, i), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
    if (0 < a.pendingTasks) {
      a.rootSegmentID = e.nextSegmentId++, 0 < a.completedSegments.length && e.partialBoundaries.push(a);
      var d = e.responseState, c = d.nextSuspenseID++;
      return d = d.boundaryPrefix + c.toString(16), a = a.id = d, mt(n, e.responseState, a), Vt(e, n, i), n.push("<!--/$-->");
    }
    if (a.byteSize > e.progressiveChunkSize) return a.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(a), mt(n, e.responseState, a.id), Vt(e, n, i), n.push("<!--/$-->");
    if (e.responseState.generateStaticMarkup || n.push("<!--$-->"), i = a.completedSegments, i.length !== 1) throw Error(u(391));
    return jt(e, n, i[0]), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
  }
  function sr(e, n, i) {
    return vt(n, e.responseState, i.formatContext, i.id), jt(e, n, i), Ot(n, i.formatContext);
  }
  function ur(e, n, i) {
    for (var a = i.completedSegments, d = 0; d < a.length; d++) cr(e, n, i, a[d]);
    if (a.length = 0, e = e.responseState, a = i.id, i = i.rootSegmentID, n.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? n.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, n.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), a === null) throw Error(u(395));
    return i = i.toString(16), n.push(a), n.push('","'), n.push(e.segmentPrefix), n.push(i), n.push('")<\/script>');
  }
  function cr(e, n, i, a) {
    if (a.status === 2) return !0;
    var d = a.id;
    if (d === -1) {
      if ((a.id = i.rootSegmentID) === -1) throw Error(u(392));
      return sr(e, n, a);
    }
    return sr(e, n, a), e = e.responseState, n.push(e.startInlineScript), e.sentCompleteSegmentFunction ? n.push('$RS("') : (e.sentCompleteSegmentFunction = !0, n.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), n.push(e.segmentPrefix), d = d.toString(16), n.push(d), n.push('","'), n.push(e.placeholderPrefix), n.push(d), n.push('")<\/script>');
  }
  function nr(e, n) {
    try {
      var i = e.completedRootSegment;
      if (i !== null && e.pendingRootTasks === 0) {
        jt(e, n, i), e.completedRootSegment = null;
        var a = e.responseState.bootstrapChunks;
        for (i = 0; i < a.length - 1; i++) n.push(a[i]);
        i < a.length && n.push(a[i]);
      }
      var d = e.clientRenderedBoundaries, c;
      for (c = 0; c < d.length; c++) {
        var h = d[c];
        a = n;
        var w = e.responseState, A = h.id, M = h.errorDigest, b = h.errorMessage, q = h.errorComponentStack;
        if (a.push(w.startInlineScript), w.sentClientRenderFunction ? a.push('$RX("') : (w.sentClientRenderFunction = !0, a.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), A === null) throw Error(u(395));
        if (a.push(A), a.push('"'), M || b || q) {
          a.push(",");
          var ze = Lt(M || "");
          a.push(ze);
        }
        if (b || q) {
          a.push(",");
          var Ue = Lt(b || "");
          a.push(Ue);
        }
        if (q) {
          a.push(",");
          var Ce = Lt(q);
          a.push(Ce);
        }
        if (!a.push(")<\/script>")) {
          e.destination = null, c++, d.splice(0, c);
          return;
        }
      }
      d.splice(0, c);
      var Gt = e.completedBoundaries;
      for (c = 0; c < Gt.length; c++) if (!ur(e, n, Gt[c])) {
        e.destination = null, c++, Gt.splice(0, c);
        return;
      }
      Gt.splice(0, c);
      var ct = e.partialBoundaries;
      for (c = 0; c < ct.length; c++) {
        var fr = ct[c];
        e: {
          d = e, h = n;
          var qt = fr.completedSegments;
          for (w = 0; w < qt.length; w++) if (!cr(d, h, fr, qt[w])) {
            w++, qt.splice(0, w);
            var xr = !1;
            break e;
          }
          qt.splice(0, w), xr = !0;
        }
        if (!xr) {
          e.destination = null, c++, ct.splice(0, c);
          return;
        }
      }
      ct.splice(0, c);
      var At = e.completedBoundaries;
      for (c = 0; c < At.length; c++) if (!ur(e, n, At[c])) {
        e.destination = null, c++, At.splice(0, c);
        return;
      }
      At.splice(0, c);
    } finally {
      e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && n.push(null);
    }
  }
  function gr(e, n) {
    try {
      var i = e.abortableTasks;
      i.forEach(function(a) {
        return G(a, e, n);
      }), i.clear(), e.destination !== null && nr(e, e.destination);
    } catch (a) {
      ut(e, a), C(e, a);
    }
  }
  function Sr() {
  }
  function pr(e, n, i, a) {
    var d = !1, c = null, h = "", w = { push: function(M) {
      return M !== null && (h += M), !0;
    }, destroy: function(M) {
      d = !0, c = M;
    } }, A = !1;
    if (e = rr(e, he(i, n ? n.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Sr, void 0, function() {
      A = !0;
    }), ar(e), gr(e, a), e.status === 1) e.status = 2, w.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = w;
      try {
        nr(e, w);
      } catch (M) {
        ut(e, M), C(e, M);
      }
    }
    if (d) throw c;
    if (!A) throw Error(u(426));
    return h;
  }
  return Zt.renderToNodeStream = function() {
    throw Error(u(207));
  }, Zt.renderToStaticMarkup = function(e, n) {
    return pr(e, n, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Zt.renderToStaticNodeStream = function() {
    throw Error(u(208));
  }, Zt.renderToString = function(e, n) {
    return pr(e, n, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Zt.version = "18.3.1", Zt;
}
var Pr = {};
var Ln;
function bo() {
  if (Ln) return Pr;
  Ln = 1;
  var v = Br;
  function u(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var x = null, k = 0;
  function y(t, r) {
    if (r.length !== 0) if (512 < r.length) 0 < k && (t.enqueue(new Uint8Array(x.buffer, 0, k)), x = new Uint8Array(512), k = 0), t.enqueue(r);
    else {
      var o = x.length - k;
      o < r.length && (o === 0 ? t.enqueue(x) : (x.set(r.subarray(0, o), k), t.enqueue(x), r = r.subarray(o)), x = new Uint8Array(512), k = 0), x.set(r, k), k += r.length;
    }
  }
  function R(t, r) {
    return y(t, r), !0;
  }
  function N(t) {
    x && 0 < k && (t.enqueue(new Uint8Array(x.buffer, 0, k)), x = null, k = 0);
  }
  var D = new TextEncoder();
  function _(t) {
    return D.encode(t);
  }
  function E(t) {
    return D.encode(t);
  }
  function Ye(t, r) {
    typeof t.error == "function" ? t.error(r) : t.close();
  }
  var X = Object.prototype.hasOwnProperty, dt = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ze = {}, Y = {};
  function Kt(t) {
    return X.call(Y, t) ? !0 : X.call(Ze, t) ? !1 : dt.test(t) ? Y[t] = !0 : (Ze[t] = !0, !1);
  }
  function re(t, r, o, l, f, p, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = t, this.type = r, this.sanitizeURL = p, this.removeEmptyString = m;
  }
  var Z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    Z[t] = new re(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var r = t[0];
    Z[r] = new re(r, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    Z[t] = new re(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    Z[t] = new re(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    Z[t] = new re(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    Z[t] = new re(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    Z[t] = new re(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    Z[t] = new re(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    Z[t] = new re(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var ie = /[\-:]([a-z])/g;
  function Ke(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var r = t.replace(
      ie,
      Ke
    );
    Z[r] = new re(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(ie, Ke);
    Z[r] = new re(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(ie, Ke);
    Z[r] = new re(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    Z[t] = new re(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), Z.xlinkHref = new re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    Z[t] = new re(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  var ne = {
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
  Object.keys(ne).forEach(function(t) {
    ht.forEach(function(r) {
      r = r + t.charAt(0).toUpperCase() + t.substring(1), ne[r] = ne[t];
    });
  });
  var ee = /["'&<>]/;
  function U(t) {
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
  var ir = /([A-Z])/g, bt = /^ms-/, It = Array.isArray, Jt = E("<script>"), ce = E("<\/script>"), de = E('<script src="'), mt = E('<script type="module" src="'), vt = E('" async=""><\/script>'), Ot = /(<\/|<)(s)(cript)/gi;
  function lr(t, r, o, l) {
    return "" + r + (o === "s" ? "\\u0073" : "\\u0053") + l;
  }
  function Lt(t, r, o, l, f) {
    t = t === void 0 ? "" : t, r = r === void 0 ? Jt : E('<script nonce="' + U(r) + '">');
    var p = [];
    if (o !== void 0 && p.push(r, _(("" + o).replace(Ot, lr)), ce), l !== void 0) for (o = 0; o < l.length; o++) p.push(de, _(U(l[o])), vt);
    if (f !== void 0) for (l = 0; l < f.length; l++) p.push(mt, _(U(f[l])), vt);
    return { bootstrapChunks: p, startInlineScript: r, placeholderPrefix: E(t + "P:"), segmentPrefix: E(t + "S:"), boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function he(t, r) {
    return { insertionMode: t, selectedValue: r };
  }
  function Pt(t) {
    return he(t === "http://www.w3.org/2000/svg" ? 2 : t === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Je(t, r, o) {
    switch (r) {
      case "select":
        return he(1, o.value != null ? o.value : o.defaultValue);
      case "svg":
        return he(2, null);
      case "math":
        return he(3, null);
      case "foreignObject":
        return he(1, null);
      case "table":
        return he(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return he(5, null);
      case "colgroup":
        return he(7, null);
      case "tr":
        return he(6, null);
    }
    return 4 <= t.insertionMode || t.insertionMode === 0 ? he(1, null) : t;
  }
  var Qe = E("<!-- -->");
  function j(t, r, o, l) {
    return r === "" ? l : (l && t.push(Qe), t.push(_(U(r))), !0);
  }
  var yt = /* @__PURE__ */ new Map(), K = E(' style="'), gt = E(":"), H = E(";");
  function Le(t, r, o) {
    if (typeof o != "object") throw Error(u(62));
    r = !0;
    for (var l in o) if (X.call(o, l)) {
      var f = o[l];
      if (f != null && typeof f != "boolean" && f !== "") {
        if (l.indexOf("--") === 0) {
          var p = _(U(l));
          f = _(U(("" + f).trim()));
        } else {
          p = l;
          var m = yt.get(p);
          m !== void 0 || (m = E(U(p.replace(ir, "-$1").toLowerCase().replace(bt, "-ms-"))), yt.set(p, m)), p = m, f = typeof f == "number" ? f === 0 || X.call(ne, l) ? _("" + f) : _(f + "px") : _(U(("" + f).trim()));
        }
        r ? (r = !1, t.push(K, p, gt, f)) : t.push(H, p, gt, f);
      }
    }
    r || t.push(me);
  }
  var pe = E(" "), Fe = E('="'), me = E('"'), St = E('=""');
  function te(t, r, o, l) {
    switch (o) {
      case "style":
        Le(t, r, l);
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
        switch (o = _(r.attributeName), r.type) {
          case 3:
            l && t.push(pe, o, St);
            break;
          case 4:
            l === !0 ? t.push(pe, o, St) : l !== !1 && t.push(pe, o, Fe, _(U(l)), me);
            break;
          case 5:
            isNaN(l) || t.push(pe, o, Fe, _(U(l)), me);
            break;
          case 6:
            !isNaN(l) && 1 <= l && t.push(pe, o, Fe, _(U(l)), me);
            break;
          default:
            r.sanitizeURL && (l = "" + l), t.push(pe, o, Fe, _(U(l)), me);
        }
      } else if (Kt(o)) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (r = o.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-") return;
        }
        t.push(pe, _(o), Fe, _(U(l)), me);
      }
    }
  }
  var le = E(">"), xt = E("/>");
  function ve(t, r, o) {
    if (r != null) {
      if (o != null) throw Error(u(60));
      if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
      r = r.__html, r != null && t.push(_("" + r));
    }
  }
  function Dt(t) {
    var r = "";
    return v.Children.forEach(t, function(o) {
      o != null && (r += o);
    }), r;
  }
  var je = E(' selected=""');
  function ye(t, r, o, l) {
    t.push(oe(o));
    var f = o = null, p;
    for (p in r) if (X.call(r, p)) {
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
    return t.push(le), ve(t, f, o), typeof o == "string" ? (t.push(_(U(o))), null) : o;
  }
  var Pe = E(`
`), et = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, xe = /* @__PURE__ */ new Map();
  function oe(t) {
    var r = xe.get(t);
    if (r === void 0) {
      if (!et.test(t)) throw Error(u(65, t));
      r = E("<" + t), xe.set(t, r);
    }
    return r;
  }
  var Qt = E("<!DOCTYPE html>");
  function Et(t, r, o, l, f) {
    switch (r) {
      case "select":
        t.push(oe("select"));
        var p = null, m = null;
        for (I in o) if (X.call(o, I)) {
          var S = o[I];
          if (S != null) switch (I) {
            case "children":
              p = S;
              break;
            case "dangerouslySetInnerHTML":
              m = S;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              te(t, l, I, S);
          }
        }
        return t.push(le), ve(t, m, p), p;
      case "option":
        m = f.selectedValue, t.push(oe("option"));
        var F = S = null, L = null, I = null;
        for (p in o) if (X.call(o, p)) {
          var V = o[p];
          if (V != null) switch (p) {
            case "children":
              S = V;
              break;
            case "selected":
              L = V;
              break;
            case "dangerouslySetInnerHTML":
              I = V;
              break;
            case "value":
              F = V;
            default:
              te(t, l, p, V);
          }
        }
        if (m != null) if (o = F !== null ? "" + F : Dt(S), It(m)) {
          for (l = 0; l < m.length; l++)
            if ("" + m[l] === o) {
              t.push(je);
              break;
            }
        } else "" + m === o && t.push(je);
        else L && t.push(je);
        return t.push(le), ve(t, I, S), S;
      case "textarea":
        t.push(oe("textarea")), I = m = p = null;
        for (S in o) if (X.call(o, S) && (F = o[S], F != null)) switch (S) {
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
            te(t, l, S, F);
        }
        if (p === null && m !== null && (p = m), t.push(le), I != null) {
          if (p != null) throw Error(u(92));
          if (It(I) && 1 < I.length) throw Error(u(93));
          p = "" + I;
        }
        return typeof p == "string" && p[0] === `
` && t.push(Pe), p !== null && t.push(_(U("" + p))), null;
      case "input":
        t.push(oe("input")), F = I = S = p = null;
        for (m in o) if (X.call(o, m) && (L = o[m], L != null)) switch (m) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            F = L;
            break;
          case "defaultValue":
            S = L;
            break;
          case "checked":
            I = L;
            break;
          case "value":
            p = L;
            break;
          default:
            te(t, l, m, L);
        }
        return I !== null ? te(
          t,
          l,
          "checked",
          I
        ) : F !== null && te(t, l, "checked", F), p !== null ? te(t, l, "value", p) : S !== null && te(t, l, "value", S), t.push(xt), null;
      case "menuitem":
        t.push(oe("menuitem"));
        for (var Ae in o) if (X.call(o, Ae) && (p = o[Ae], p != null)) switch (Ae) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            te(t, l, Ae, p);
        }
        return t.push(le), null;
      case "title":
        t.push(oe("title")), p = null;
        for (V in o) if (X.call(o, V) && (m = o[V], m != null)) switch (V) {
          case "children":
            p = m;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            te(t, l, V, m);
        }
        return t.push(le), p;
      case "listing":
      case "pre":
        t.push(oe(r)), m = p = null;
        for (F in o) if (X.call(o, F) && (S = o[F], S != null)) switch (F) {
          case "children":
            p = S;
            break;
          case "dangerouslySetInnerHTML":
            m = S;
            break;
          default:
            te(t, l, F, S);
        }
        if (t.push(le), m != null) {
          if (p != null) throw Error(u(60));
          if (typeof m != "object" || !("__html" in m)) throw Error(u(61));
          o = m.__html, o != null && (typeof o == "string" && 0 < o.length && o[0] === `
` ? t.push(Pe, _(o)) : t.push(_("" + o)));
        }
        return typeof p == "string" && p[0] === `
` && t.push(Pe), p;
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
        t.push(oe(r));
        for (var He in o) if (X.call(o, He) && (p = o[He], p != null)) switch (He) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, r));
          default:
            te(t, l, He, p);
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
        return ye(t, o, r, l);
      case "html":
        return f.insertionMode === 0 && t.push(Qt), ye(t, o, r, l);
      default:
        if (r.indexOf("-") === -1 && typeof o.is != "string") return ye(t, o, r, l);
        t.push(oe(r)), m = p = null;
        for (L in o) if (X.call(o, L) && (S = o[L], S != null)) switch (L) {
          case "children":
            p = S;
            break;
          case "dangerouslySetInnerHTML":
            m = S;
            break;
          case "style":
            Le(t, l, S);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            Kt(L) && typeof S != "function" && typeof S != "symbol" && t.push(pe, _(L), Fe, _(U(S)), me);
        }
        return t.push(le), ve(t, m, p), p;
    }
  }
  var Ge = E("</"), De = E(">"), Ee = E('<template id="'), Nt = E('"></template>'), Bt = E("<!--$-->"), er = E('<!--$?--><template id="'), tt = E('"></template>'), rt = E("<!--$!-->"), wt = E("<!--/$-->"), Tt = E("<template"), we = E('"'), qe = E(' data-dgst="');
  E(' data-msg="'), E(' data-stck="');
  var zt = E("></template>");
  function se(t, r, o) {
    if (y(t, er), o === null) throw Error(u(395));
    return y(t, o), R(t, tt);
  }
  var Ut = E('<div hidden id="'), ge = E('">'), B = E("</div>"), nt = E('<svg aria-hidden="true" style="display:none" id="'), W = E('">'), Se = E("</svg>"), Me = E('<math aria-hidden="true" style="display:none" id="'), ot = E('">'), Te = E("</math>"), Ht = E('<table hidden id="'), kt = E('">'), $t = E("</table>"), it = E('<table hidden><tbody id="'), _t = E('">'), tr = E("</tbody></table>"), ue = E('<table hidden><tr id="'), Ct = E('">'), lt = E("</tr></table>"), Wt = E('<table hidden><colgroup id="'), at = E('">'), Ne = E("</colgroup></table>");
  function ke(t, r, o, l) {
    switch (o.insertionMode) {
      case 0:
      case 1:
        return y(t, Ut), y(t, r.segmentPrefix), y(t, _(l.toString(16))), R(t, ge);
      case 2:
        return y(t, nt), y(t, r.segmentPrefix), y(t, _(l.toString(16))), R(t, W);
      case 3:
        return y(t, Me), y(t, r.segmentPrefix), y(t, _(l.toString(16))), R(t, ot);
      case 4:
        return y(t, Ht), y(t, r.segmentPrefix), y(t, _(l.toString(16))), R(t, kt);
      case 5:
        return y(t, it), y(t, r.segmentPrefix), y(t, _(l.toString(16))), R(t, _t);
      case 6:
        return y(t, ue), y(t, r.segmentPrefix), y(t, _(l.toString(16))), R(t, Ct);
      case 7:
        return y(
          t,
          Wt
        ), y(t, r.segmentPrefix), y(t, _(l.toString(16))), R(t, at);
      default:
        throw Error(u(397));
    }
  }
  function Xe(t, r) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return R(t, B);
      case 2:
        return R(t, Se);
      case 3:
        return R(t, Te);
      case 4:
        return R(t, $t);
      case 5:
        return R(t, tr);
      case 6:
        return R(t, lt);
      case 7:
        return R(t, Ne);
      default:
        throw Error(u(397));
    }
  }
  var rr = E('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Rt = E('$RS("'), st = E('","'), ut = E('")<\/script>'), C = E('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), s = E('$RC("'), g = E('","'), T = E('")<\/script>'), P = E('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), z = E('$RX("'), Q = E('"'), J = E(")<\/script>"), _e = E(","), G = /[<\u2028\u2029]/g;
  function be(t) {
    return JSON.stringify(t).replace(G, function(r) {
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
  var Be = Object.assign, ar = Symbol.for("react.element"), Vt = Symbol.for("react.portal"), jt = Symbol.for("react.fragment"), sr = Symbol.for("react.strict_mode"), ur = Symbol.for("react.profiler"), cr = Symbol.for("react.provider"), nr = Symbol.for("react.context"), gr = Symbol.for("react.forward_ref"), Sr = Symbol.for("react.suspense"), pr = Symbol.for("react.suspense_list"), e = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), i = Symbol.for("react.scope"), a = Symbol.for("react.debug_trace_mode"), d = Symbol.for("react.legacy_hidden"), c = Symbol.for("react.default_value"), h = Symbol.iterator;
  function w(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case jt:
        return "Fragment";
      case Vt:
        return "Portal";
      case ur:
        return "Profiler";
      case sr:
        return "StrictMode";
      case Sr:
        return "Suspense";
      case pr:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case nr:
        return (t.displayName || "Context") + ".Consumer";
      case cr:
        return (t._context.displayName || "Context") + ".Provider";
      case gr:
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
  function q(t, r) {
    if (t !== r) {
      t.context._currentValue = t.parentValue, t = t.parent;
      var o = r.parent;
      if (t === null) {
        if (o !== null) throw Error(u(401));
      } else {
        if (o === null) throw Error(u(401));
        q(t, o);
      }
      r.context._currentValue = r.value;
    }
  }
  function ze(t) {
    t.context._currentValue = t.parentValue, t = t.parent, t !== null && ze(t);
  }
  function Ue(t) {
    var r = t.parent;
    r !== null && Ue(r), t.context._currentValue = t.value;
  }
  function Ce(t, r) {
    if (t.context._currentValue = t.parentValue, t = t.parent, t === null) throw Error(u(402));
    t.depth === r.depth ? q(t, r) : Ce(t, r);
  }
  function Gt(t, r) {
    var o = r.parent;
    if (o === null) throw Error(u(402));
    t.depth === o.depth ? q(t, o) : Gt(t, o), r.context._currentValue = r.value;
  }
  function ct(t) {
    var r = b;
    r !== t && (r === null ? Ue(t) : t === null ? ze(r) : r.depth === t.depth ? q(r, t) : r.depth > t.depth ? Ce(r, t) : Gt(r, t), b = t);
  }
  var fr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(t, r) {
    t = t._reactInternals, t.queue !== null && t.queue.push(r);
  }, enqueueReplaceState: function(t, r) {
    t = t._reactInternals, t.replace = !0, t.queue = [r];
  }, enqueueForceUpdate: function() {
  } };
  function qt(t, r, o, l) {
    var f = t.state !== void 0 ? t.state : null;
    t.updater = fr, t.props = o, t.state = f;
    var p = { queue: [], replace: !1 };
    t._reactInternals = p;
    var m = r.contextType;
    if (t.context = typeof m == "object" && m !== null ? m._currentValue : l, m = r.getDerivedStateFromProps, typeof m == "function" && (m = m(o, f), f = m == null ? f : Be({}, f, m), t.state = f), typeof r.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function")) if (r = t.state, typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && fr.enqueueReplaceState(t, t.state, null), p.queue !== null && 0 < p.queue.length) if (r = p.queue, m = p.replace, p.queue = null, p.replace = !1, m && r.length === 1) t.state = r[0];
    else {
      for (p = m ? r[0] : t.state, f = !0, m = m ? 1 : 0; m < r.length; m++) {
        var S = r[m];
        S = typeof S == "function" ? S.call(t, p, o, l) : S, S != null && (f ? (f = !1, p = Be({}, p, S)) : Be(p, S));
      }
      t.state = p;
    }
    else p.queue = null;
  }
  var xr = { id: 1, overflow: "" };
  function At(t, r, o) {
    var l = t.id;
    t = t.overflow;
    var f = 32 - Er(l) - 1;
    l &= ~(1 << f), o += 1;
    var p = 32 - Er(r) + f;
    if (30 < p) {
      var m = f - f % 5;
      return p = (l & (1 << m) - 1).toString(32), l >>= m, f -= m, { id: 1 << 32 - Er(r) + f | o << f | l, overflow: p + t };
    }
    return { id: 1 << p | o << f | l, overflow: t };
  }
  var Er = Math.clz32 ? Math.clz32 : Hn, zn = Math.log, Un = Math.LN2;
  function Hn(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (zn(t) / Un | 0) | 0;
  }
  function $n(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var Wn = typeof Object.is == "function" ? Object.is : $n, pt = null, Ur = null, wr = null, $ = null, dr = !1, Tr = !1, hr = 0, Ft = null, kr = 0;
  function Xt() {
    if (pt === null) throw Error(u(321));
    return pt;
  }
  function an() {
    if (0 < kr) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Hr() {
    return $ === null ? wr === null ? (dr = !1, wr = $ = an()) : (dr = !0, $ = wr) : $.next === null ? (dr = !1, $ = $.next = an()) : (dr = !0, $ = $.next), $;
  }
  function $r() {
    Ur = pt = null, Tr = !1, wr = null, kr = 0, $ = Ft = null;
  }
  function sn(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function un(t, r, o) {
    if (pt = Xt(), $ = Hr(), dr) {
      var l = $.queue;
      if (r = l.dispatch, Ft !== null && (o = Ft.get(l), o !== void 0)) {
        Ft.delete(l), l = $.memoizedState;
        do
          l = t(l, o.action), o = o.next;
        while (o !== null);
        return $.memoizedState = l, [l, r];
      }
      return [$.memoizedState, r];
    }
    return t = t === sn ? typeof r == "function" ? r() : r : o !== void 0 ? o(r) : r, $.memoizedState = t, t = $.queue = { last: null, dispatch: null }, t = t.dispatch = Vn.bind(null, pt, t), [$.memoizedState, t];
  }
  function cn(t, r) {
    if (pt = Xt(), $ = Hr(), r = r === void 0 ? null : r, $ !== null) {
      var o = $.memoizedState;
      if (o !== null && r !== null) {
        var l = o[1];
        e: if (l === null) l = !1;
        else {
          for (var f = 0; f < l.length && f < r.length; f++) if (!Wn(r[f], l[f])) {
            l = !1;
            break e;
          }
          l = !0;
        }
        if (l) return o[0];
      }
    }
    return t = t(), $.memoizedState = [t, r], t;
  }
  function Vn(t, r, o) {
    if (25 <= kr) throw Error(u(301));
    if (t === pt) if (Tr = !0, t = { action: o, next: null }, Ft === null && (Ft = /* @__PURE__ */ new Map()), o = Ft.get(r), o === void 0) Ft.set(r, t);
    else {
      for (r = o; r.next !== null; ) r = r.next;
      r.next = t;
    }
  }
  function jn() {
    throw Error(u(394));
  }
  function _r() {
  }
  var pn = { readContext: function(t) {
    return t._currentValue;
  }, useContext: function(t) {
    return Xt(), t._currentValue;
  }, useMemo: cn, useReducer: un, useRef: function(t) {
    pt = Xt(), $ = Hr();
    var r = $.memoizedState;
    return r === null ? (t = { current: t }, $.memoizedState = t) : r;
  }, useState: function(t) {
    return un(sn, t);
  }, useInsertionEffect: _r, useLayoutEffect: function() {
  }, useCallback: function(t, r) {
    return cn(function() {
      return t;
    }, r);
  }, useImperativeHandle: _r, useEffect: _r, useDebugValue: _r, useDeferredValue: function(t) {
    return Xt(), t;
  }, useTransition: function() {
    return Xt(), [!1, jn];
  }, useId: function() {
    var t = Ur.treeContext, r = t.overflow;
    t = t.id, t = (t & ~(1 << 32 - Er(t) - 1)).toString(32) + r;
    var o = Cr;
    if (o === null) throw Error(u(404));
    return r = hr++, t = ":" + o.idPrefix + "R" + t, 0 < r && (t += "H" + r.toString(32)), t + ":";
  }, useMutableSource: function(t, r) {
    return Xt(), r(t._source);
  }, useSyncExternalStore: function(t, r, o) {
    if (o === void 0) throw Error(u(407));
    return o();
  } }, Cr = null, Wr = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Gn(t) {
    return console.error(t), null;
  }
  function mr() {
  }
  function qn(t, r, o, l, f, p, m, S, F) {
    var L = [], I = /* @__PURE__ */ new Set();
    return r = { destination: null, responseState: r, progressiveChunkSize: l === void 0 ? 12800 : l, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: I, pingedTasks: L, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f === void 0 ? Gn : f, onAllReady: p === void 0 ? mr : p, onShellReady: m === void 0 ? mr : m, onShellError: S === void 0 ? mr : S, onFatalError: F === void 0 ? mr : F }, o = Rr(r, 0, null, o, !1, !1), o.parentFlushed = !0, t = Vr(r, t, null, o, I, A, null, xr), L.push(t), r;
  }
  function Vr(t, r, o, l, f, p, m, S) {
    t.allPendingTasks++, o === null ? t.pendingRootTasks++ : o.pendingTasks++;
    var F = { node: r, ping: function() {
      var L = t.pingedTasks;
      L.push(F), L.length === 1 && gn(t);
    }, blockedBoundary: o, blockedSegment: l, abortSet: f, legacyContext: p, context: m, treeContext: S };
    return f.add(F), F;
  }
  function Rr(t, r, o, l, f, p) {
    return { status: 0, id: -1, index: r, parentFlushed: !1, chunks: [], children: [], formatContext: l, boundary: o, lastPushedText: f, textEmbedded: p };
  }
  function vr(t, r) {
    if (t = t.onError(r), t != null && typeof t != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function Ar(t, r) {
    var o = t.onShellError;
    o(r), o = t.onFatalError, o(r), t.destination !== null ? (t.status = 2, Ye(t.destination, r)) : (t.status = 1, t.fatalError = r);
  }
  function fn(t, r, o, l, f) {
    for (pt = {}, Ur = r, hr = 0, t = o(l, f); Tr; ) Tr = !1, hr = 0, kr += 1, $ = null, t = o(l, f);
    return $r(), t;
  }
  function dn(t, r, o, l) {
    var f = o.render(), p = l.childContextTypes;
    if (p != null) {
      var m = r.legacyContext;
      if (typeof o.getChildContext != "function") l = m;
      else {
        o = o.getChildContext();
        for (var S in o) if (!(S in p)) throw Error(u(108, w(l) || "Unknown", S));
        l = Be({}, m, o);
      }
      r.legacyContext = l, Re(t, r, f), r.legacyContext = m;
    } else Re(t, r, f);
  }
  function hn(t, r) {
    if (t && t.defaultProps) {
      r = Be({}, r), t = t.defaultProps;
      for (var o in t) r[o] === void 0 && (r[o] = t[o]);
      return r;
    }
    return r;
  }
  function jr(t, r, o, l, f) {
    if (typeof o == "function") if (o.prototype && o.prototype.isReactComponent) {
      f = M(o, r.legacyContext);
      var p = o.contextType;
      p = new o(l, typeof p == "object" && p !== null ? p._currentValue : f), qt(p, o, l, f), dn(t, r, p, o);
    } else {
      p = M(o, r.legacyContext), f = fn(t, r, o, l, p);
      var m = hr !== 0;
      if (typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0) qt(f, o, l, p), dn(t, r, f, o);
      else if (m) {
        l = r.treeContext, r.treeContext = At(l, 1, 0);
        try {
          Re(t, r, f);
        } finally {
          r.treeContext = l;
        }
      } else Re(t, r, f);
    }
    else if (typeof o == "string") {
      switch (f = r.blockedSegment, p = Et(f.chunks, o, l, t.responseState, f.formatContext), f.lastPushedText = !1, m = f.formatContext, f.formatContext = Je(m, o, l), Gr(t, r, p), f.formatContext = m, o) {
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
          f.chunks.push(Ge, _(o), De);
      }
      f.lastPushedText = !1;
    } else {
      switch (o) {
        case d:
        case a:
        case sr:
        case ur:
        case jt:
          Re(t, r, l.children);
          return;
        case pr:
          Re(t, r, l.children);
          return;
        case i:
          throw Error(u(343));
        case Sr:
          e: {
            o = r.blockedBoundary, f = r.blockedSegment, p = l.fallback, l = l.children, m = /* @__PURE__ */ new Set();
            var S = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: m, errorDigest: null }, F = Rr(t, f.chunks.length, S, f.formatContext, !1, !1);
            f.children.push(F), f.lastPushedText = !1;
            var L = Rr(t, 0, null, f.formatContext, !1, !1);
            L.parentFlushed = !0, r.blockedBoundary = S, r.blockedSegment = L;
            try {
              if (Gr(
                t,
                r,
                l
              ), L.lastPushedText && L.textEmbedded && L.chunks.push(Qe), L.status = 1, Fr(S, L), S.pendingTasks === 0) break e;
            } catch (I) {
              L.status = 4, S.forceClientRender = !0, S.errorDigest = vr(t, I);
            } finally {
              r.blockedBoundary = o, r.blockedSegment = f;
            }
            r = Vr(t, p, o, F, m, r.legacyContext, r.context, r.treeContext), t.pingedTasks.push(r);
          }
          return;
      }
      if (typeof o == "object" && o !== null) switch (o.$$typeof) {
        case gr:
          if (l = fn(t, r, o.render, l, f), hr !== 0) {
            o = r.treeContext, r.treeContext = At(o, 1, 0);
            try {
              Re(t, r, l);
            } finally {
              r.treeContext = o;
            }
          } else Re(t, r, l);
          return;
        case e:
          o = o.type, l = hn(o, l), jr(t, r, o, l, f);
          return;
        case cr:
          if (f = l.children, o = o._context, l = l.value, p = o._currentValue, o._currentValue = l, m = b, b = l = { parent: m, depth: m === null ? 0 : m.depth + 1, context: o, parentValue: p, value: l }, r.context = l, Re(t, r, f), t = b, t === null) throw Error(u(403));
          l = t.parentValue, t.context._currentValue = l === c ? t.context._defaultValue : l, t = b = t.parent, r.context = t;
          return;
        case nr:
          l = l.children, l = l(o._currentValue), Re(t, r, l);
          return;
        case n:
          f = o._init, o = f(o._payload), l = hn(o, l), jr(t, r, o, l, void 0);
          return;
      }
      throw Error(u(
        130,
        o == null ? o : typeof o,
        ""
      ));
    }
  }
  function Re(t, r, o) {
    if (r.node = o, typeof o == "object" && o !== null) {
      switch (o.$$typeof) {
        case ar:
          jr(t, r, o.type, o.props, o.ref);
          return;
        case Vt:
          throw Error(u(257));
        case n:
          var l = o._init;
          o = l(o._payload), Re(t, r, o);
          return;
      }
      if (It(o)) {
        mn(t, r, o);
        return;
      }
      if (o === null || typeof o != "object" ? l = null : (l = h && o[h] || o["@@iterator"], l = typeof l == "function" ? l : null), l && (l = l.call(o))) {
        if (o = l.next(), !o.done) {
          var f = [];
          do
            f.push(o.value), o = l.next();
          while (!o.done);
          mn(t, r, f);
        }
        return;
      }
      throw t = Object.prototype.toString.call(o), Error(u(31, t === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : t));
    }
    typeof o == "string" ? (l = r.blockedSegment, l.lastPushedText = j(r.blockedSegment.chunks, o, t.responseState, l.lastPushedText)) : typeof o == "number" && (l = r.blockedSegment, l.lastPushedText = j(r.blockedSegment.chunks, "" + o, t.responseState, l.lastPushedText));
  }
  function mn(t, r, o) {
    for (var l = o.length, f = 0; f < l; f++) {
      var p = r.treeContext;
      r.treeContext = At(p, l, f);
      try {
        Gr(t, r, o[f]);
      } finally {
        r.treeContext = p;
      }
    }
  }
  function Gr(t, r, o) {
    var l = r.blockedSegment.formatContext, f = r.legacyContext, p = r.context;
    try {
      return Re(t, r, o);
    } catch (F) {
      if ($r(), typeof F == "object" && F !== null && typeof F.then == "function") {
        o = F;
        var m = r.blockedSegment, S = Rr(t, m.chunks.length, null, m.formatContext, m.lastPushedText, !0);
        m.children.push(S), m.lastPushedText = !1, t = Vr(t, r.node, r.blockedBoundary, S, r.abortSet, r.legacyContext, r.context, r.treeContext).ping, o.then(t, t), r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, ct(p);
      } else throw r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, ct(p), F;
    }
  }
  function Xn(t) {
    var r = t.blockedBoundary;
    t = t.blockedSegment, t.status = 3, yn(this, r, t);
  }
  function vn(t, r, o) {
    var l = t.blockedBoundary;
    t.blockedSegment.status = 3, l === null ? (r.allPendingTasks--, r.status !== 2 && (r.status = 2, r.destination !== null && r.destination.close())) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = !0, t = o === void 0 ? Error(u(432)) : o, l.errorDigest = r.onError(t), l.parentFlushed && r.clientRenderedBoundaries.push(l)), l.fallbackAbortableTasks.forEach(function(f) {
      return vn(f, r, o);
    }), l.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0 && (l = r.onAllReady, l()));
  }
  function Fr(t, r) {
    if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
      var o = r.children[0];
      o.id = r.id, o.parentFlushed = !0, o.status === 1 && Fr(t, o);
    } else t.completedSegments.push(r);
  }
  function yn(t, r, o) {
    if (r === null) {
      if (o.parentFlushed) {
        if (t.completedRootSegment !== null) throw Error(u(389));
        t.completedRootSegment = o;
      }
      t.pendingRootTasks--, t.pendingRootTasks === 0 && (t.onShellError = mr, r = t.onShellReady, r());
    } else r.pendingTasks--, r.forceClientRender || (r.pendingTasks === 0 ? (o.parentFlushed && o.status === 1 && Fr(r, o), r.parentFlushed && t.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(Xn, t), r.fallbackAbortableTasks.clear()) : o.parentFlushed && o.status === 1 && (Fr(r, o), r.completedSegments.length === 1 && r.parentFlushed && t.partialBoundaries.push(r)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function gn(t) {
    if (t.status !== 2) {
      var r = b, o = Wr.current;
      Wr.current = pn;
      var l = Cr;
      Cr = t.responseState;
      try {
        var f = t.pingedTasks, p;
        for (p = 0; p < f.length; p++) {
          var m = f[p], S = t, F = m.blockedSegment;
          if (F.status === 0) {
            ct(m.context);
            try {
              Re(S, m, m.node), F.lastPushedText && F.textEmbedded && F.chunks.push(Qe), m.abortSet.delete(m), F.status = 1, yn(S, m.blockedBoundary, F);
            } catch ($e) {
              if ($r(), typeof $e == "object" && $e !== null && typeof $e.then == "function") {
                var L = m.ping;
                $e.then(L, L);
              } else {
                m.abortSet.delete(m), F.status = 4;
                var I = m.blockedBoundary, V = $e, Ae = vr(S, V);
                if (I === null ? Ar(S, V) : (I.pendingTasks--, I.forceClientRender || (I.forceClientRender = !0, I.errorDigest = Ae, I.parentFlushed && S.clientRenderedBoundaries.push(I))), S.allPendingTasks--, S.allPendingTasks === 0) {
                  var He = S.onAllReady;
                  He();
                }
              }
            } finally {
            }
          }
        }
        f.splice(0, p), t.destination !== null && qr(t, t.destination);
      } catch ($e) {
        vr(t, $e), Ar(t, $e);
      } finally {
        Cr = l, Wr.current = o, o === pn && ct(r);
      }
    }
  }
  function Mr(t, r, o) {
    switch (o.parentFlushed = !0, o.status) {
      case 0:
        var l = o.id = t.nextSegmentId++;
        return o.lastPushedText = !1, o.textEmbedded = !1, t = t.responseState, y(r, Ee), y(r, t.placeholderPrefix), t = _(l.toString(16)), y(r, t), R(r, Nt);
      case 1:
        o.status = 2;
        var f = !0;
        l = o.chunks;
        var p = 0;
        o = o.children;
        for (var m = 0; m < o.length; m++) {
          for (f = o[m]; p < f.index; p++) y(r, l[p]);
          f = br(t, r, f);
        }
        for (; p < l.length - 1; p++) y(r, l[p]);
        return p < l.length && (f = R(r, l[p])), f;
      default:
        throw Error(u(390));
    }
  }
  function br(t, r, o) {
    var l = o.boundary;
    if (l === null) return Mr(t, r, o);
    if (l.parentFlushed = !0, l.forceClientRender) l = l.errorDigest, R(r, rt), y(r, Tt), l && (y(r, qe), y(r, _(U(l))), y(r, we)), R(r, zt), Mr(t, r, o);
    else if (0 < l.pendingTasks) {
      l.rootSegmentID = t.nextSegmentId++, 0 < l.completedSegments.length && t.partialBoundaries.push(l);
      var f = t.responseState, p = f.nextSuspenseID++;
      f = E(f.boundaryPrefix + p.toString(16)), l = l.id = f, se(r, t.responseState, l), Mr(t, r, o);
    } else if (l.byteSize > t.progressiveChunkSize) l.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(l), se(r, t.responseState, l.id), Mr(t, r, o);
    else {
      if (R(r, Bt), o = l.completedSegments, o.length !== 1) throw Error(u(391));
      br(t, r, o[0]);
    }
    return R(r, wt);
  }
  function Sn(t, r, o) {
    return ke(r, t.responseState, o.formatContext, o.id), br(t, r, o), Xe(r, o.formatContext);
  }
  function xn(t, r, o) {
    for (var l = o.completedSegments, f = 0; f < l.length; f++) En(t, r, o, l[f]);
    if (l.length = 0, t = t.responseState, l = o.id, o = o.rootSegmentID, y(r, t.startInlineScript), t.sentCompleteBoundaryFunction ? y(r, s) : (t.sentCompleteBoundaryFunction = !0, y(r, C)), l === null) throw Error(u(395));
    return o = _(o.toString(16)), y(r, l), y(r, g), y(r, t.segmentPrefix), y(r, o), R(r, T);
  }
  function En(t, r, o, l) {
    if (l.status === 2) return !0;
    var f = l.id;
    if (f === -1) {
      if ((l.id = o.rootSegmentID) === -1) throw Error(u(392));
      return Sn(t, r, l);
    }
    return Sn(t, r, l), t = t.responseState, y(r, t.startInlineScript), t.sentCompleteSegmentFunction ? y(r, Rt) : (t.sentCompleteSegmentFunction = !0, y(r, rr)), y(r, t.segmentPrefix), f = _(f.toString(16)), y(r, f), y(r, st), y(r, t.placeholderPrefix), y(r, f), R(r, ut);
  }
  function qr(t, r) {
    x = new Uint8Array(512), k = 0;
    try {
      var o = t.completedRootSegment;
      if (o !== null && t.pendingRootTasks === 0) {
        br(t, r, o), t.completedRootSegment = null;
        var l = t.responseState.bootstrapChunks;
        for (o = 0; o < l.length - 1; o++) y(r, l[o]);
        o < l.length && R(r, l[o]);
      }
      var f = t.clientRenderedBoundaries, p;
      for (p = 0; p < f.length; p++) {
        var m = f[p];
        l = r;
        var S = t.responseState, F = m.id, L = m.errorDigest, I = m.errorMessage, V = m.errorComponentStack;
        if (y(l, S.startInlineScript), S.sentClientRenderFunction ? y(l, z) : (S.sentClientRenderFunction = !0, y(
          l,
          P
        )), F === null) throw Error(u(395));
        y(l, F), y(l, Q), (L || I || V) && (y(l, _e), y(l, _(be(L || "")))), (I || V) && (y(l, _e), y(l, _(be(I || "")))), V && (y(l, _e), y(l, _(be(V)))), R(l, J);
      }
      f.splice(0, p);
      var Ae = t.completedBoundaries;
      for (p = 0; p < Ae.length; p++) xn(t, r, Ae[p]);
      Ae.splice(0, p), N(r), x = new Uint8Array(512), k = 0;
      var He = t.partialBoundaries;
      for (p = 0; p < He.length; p++) {
        var $e = He[p];
        e: {
          f = t, m = r;
          var Ir = $e.completedSegments;
          for (S = 0; S < Ir.length; S++) if (!En(
            f,
            m,
            $e,
            Ir[S]
          )) {
            S++, Ir.splice(0, S);
            var Tn = !1;
            break e;
          }
          Ir.splice(0, S), Tn = !0;
        }
        if (!Tn) {
          t.destination = null, p++, He.splice(0, p);
          return;
        }
      }
      He.splice(0, p);
      var Xr = t.completedBoundaries;
      for (p = 0; p < Xr.length; p++) xn(t, r, Xr[p]);
      Xr.splice(0, p);
    } finally {
      N(r), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && r.close();
    }
  }
  function wn(t, r) {
    try {
      var o = t.abortableTasks;
      o.forEach(function(l) {
        return vn(l, t, r);
      }), o.clear(), t.destination !== null && qr(t, t.destination);
    } catch (l) {
      vr(t, l), Ar(t, l);
    }
  }
  return Pr.renderToReadableStream = function(t, r) {
    return new Promise(function(o, l) {
      var f, p, m = new Promise(function(I, V) {
        p = I, f = V;
      }), S = qn(t, Lt(r ? r.identifierPrefix : void 0, r ? r.nonce : void 0, r ? r.bootstrapScriptContent : void 0, r ? r.bootstrapScripts : void 0, r ? r.bootstrapModules : void 0), Pt(r ? r.namespaceURI : void 0), r ? r.progressiveChunkSize : void 0, r ? r.onError : void 0, p, function() {
        var I = new ReadableStream({ type: "bytes", pull: function(V) {
          if (S.status === 1) S.status = 2, Ye(V, S.fatalError);
          else if (S.status !== 2 && S.destination === null) {
            S.destination = V;
            try {
              qr(S, V);
            } catch (Ae) {
              vr(S, Ae), Ar(S, Ae);
            }
          }
        }, cancel: function() {
          wn(S);
        } }, { highWaterMark: 0 });
        I.allReady = m, o(I);
      }, function(I) {
        m.catch(function() {
        }), l(I);
      }, f);
      if (r && r.signal) {
        var F = r.signal, L = function() {
          wn(S, F.reason), F.removeEventListener("abort", L);
        };
        F.addEventListener("abort", L);
      }
      gn(S);
    });
  }, Pr.version = "18.3.1", Pr;
}
var or, Bn;
or = Mo(), Bn = bo();
or.version;
or.renderToString;
or.renderToStaticMarkup;
or.renderToNodeStream;
or.renderToStaticNodeStream;
Bn.renderToReadableStream;
const Io = "staticMarkup";
function Oo() {
  const u = Yn().indexOf(Io) > -1 ? !0 : void 0;
  return {
    isBootstrap: u,
    isReact: u ? void 0 : !0
  };
}
const Po = ({ gaData: v, prefix: u = "", children: x }) => {
  const { isReact: k } = Oo(), { onClick: y, ...R } = x.props;
  if (k)
    return Br.cloneElement(x, {
      ...R,
      onClick: (_) => (Fo(v), y ? y(_) : !0)
    });
  let N = "";
  ["input", "header", "header-input"].includes(u) && (N = `-${u}`);
  const D = {
    [`data-ga${N}`]: v.text,
    [`data-ga${N}-name`]: v.name,
    [`data-ga${N}-event`]: v.event,
    [`data-ga${N}-action`]: v.action,
    [`data-ga${N}-type`]: v.type,
    [`data-ga${N}-region`]: v.region,
    [`data-ga${N}-section`]: v.section,
    [`data-ga${N}-component`]: v.component
  };
  return Br.cloneElement(x, {
    ...R,
    onClick: y,
    ...D
  });
};
export {
  Po as GaEventWrapper
};
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
