import Et, { useId as ui, useRef as Or, useContext as zn, createElement as ci, forwardRef as pi, useImperativeHandle as fi, useState as yn, useEffect as br, useCallback as di } from "react";
function No(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Mo = { exports: {} }, Ar = {};
var so;
function hi() {
  if (so) return Ar;
  so = 1;
  var i = Et, s = Symbol.for("react.element"), l = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(_, S, g) {
    var B, N = {}, se = null, K = null;
    g !== void 0 && (se = "" + g), S.key !== void 0 && (se = "" + S.key), S.ref !== void 0 && (K = S.ref);
    for (B in S) p.call(S, B) && !x.hasOwnProperty(B) && (N[B] = S[B]);
    if (_ && _.defaultProps) for (B in S = _.defaultProps, S) N[B] === void 0 && (N[B] = S[B]);
    return { $$typeof: s, type: _, key: se, ref: K, props: N, _owner: f.current };
  }
  return Ar.Fragment = l, Ar.jsx = k, Ar.jsxs = k, Ar;
}
Mo.exports = hi();
var Ue = Mo.exports, Do = { exports: {} }, vn = { exports: {} }, Te = {};
var lo;
function mi() {
  if (lo) return Te;
  lo = 1;
  var i = typeof Symbol == "function" && Symbol.for, s = i ? Symbol.for("react.element") : 60103, l = i ? Symbol.for("react.portal") : 60106, p = i ? Symbol.for("react.fragment") : 60107, f = i ? Symbol.for("react.strict_mode") : 60108, x = i ? Symbol.for("react.profiler") : 60114, k = i ? Symbol.for("react.provider") : 60109, _ = i ? Symbol.for("react.context") : 60110, S = i ? Symbol.for("react.async_mode") : 60111, g = i ? Symbol.for("react.concurrent_mode") : 60111, B = i ? Symbol.for("react.forward_ref") : 60112, N = i ? Symbol.for("react.suspense") : 60113, se = i ? Symbol.for("react.suspense_list") : 60120, K = i ? Symbol.for("react.memo") : 60115, D = i ? Symbol.for("react.lazy") : 60116, ee = i ? Symbol.for("react.block") : 60121, F = i ? Symbol.for("react.fundamental") : 60117, U = i ? Symbol.for("react.responder") : 60118, j = i ? Symbol.for("react.scope") : 60119;
  function W(C) {
    if (typeof C == "object" && C !== null) {
      var fe = C.$$typeof;
      switch (fe) {
        case s:
          switch (C = C.type, C) {
            case S:
            case g:
            case p:
            case x:
            case f:
            case N:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case _:
                case B:
                case D:
                case K:
                case k:
                  return C;
                default:
                  return fe;
              }
          }
        case l:
          return fe;
      }
    }
  }
  function V(C) {
    return W(C) === g;
  }
  return Te.AsyncMode = S, Te.ConcurrentMode = g, Te.ContextConsumer = _, Te.ContextProvider = k, Te.Element = s, Te.ForwardRef = B, Te.Fragment = p, Te.Lazy = D, Te.Memo = K, Te.Portal = l, Te.Profiler = x, Te.StrictMode = f, Te.Suspense = N, Te.isAsyncMode = function(C) {
    return V(C) || W(C) === S;
  }, Te.isConcurrentMode = V, Te.isContextConsumer = function(C) {
    return W(C) === _;
  }, Te.isContextProvider = function(C) {
    return W(C) === k;
  }, Te.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === s;
  }, Te.isForwardRef = function(C) {
    return W(C) === B;
  }, Te.isFragment = function(C) {
    return W(C) === p;
  }, Te.isLazy = function(C) {
    return W(C) === D;
  }, Te.isMemo = function(C) {
    return W(C) === K;
  }, Te.isPortal = function(C) {
    return W(C) === l;
  }, Te.isProfiler = function(C) {
    return W(C) === x;
  }, Te.isStrictMode = function(C) {
    return W(C) === f;
  }, Te.isSuspense = function(C) {
    return W(C) === N;
  }, Te.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === p || C === g || C === x || C === f || C === N || C === se || typeof C == "object" && C !== null && (C.$$typeof === D || C.$$typeof === K || C.$$typeof === k || C.$$typeof === _ || C.$$typeof === B || C.$$typeof === F || C.$$typeof === U || C.$$typeof === j || C.$$typeof === ee);
  }, Te.typeOf = W, Te;
}
var uo;
function Fo() {
  return uo || (uo = 1, vn.exports = mi()), vn.exports;
}
var gn, co;
function yi() {
  if (co) return gn;
  co = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return gn = i, gn;
}
var Sn, po;
function vi() {
  if (po) return Sn;
  po = 1;
  var i = yi();
  function s() {
  }
  function l() {
  }
  return l.resetWarningCache = s, Sn = function() {
    function p(k, _, S, g, B, N) {
      if (N !== i) {
        var se = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw se.name = "Invariant Violation", se;
      }
    }
    p.isRequired = p;
    function f() {
      return p;
    }
    var x = {
      array: p,
      bigint: p,
      bool: p,
      func: p,
      number: p,
      object: p,
      string: p,
      symbol: p,
      any: p,
      arrayOf: f,
      element: p,
      elementType: p,
      instanceOf: f,
      node: p,
      objectOf: f,
      oneOf: f,
      oneOfType: f,
      shape: f,
      exact: f,
      checkPropTypes: l,
      resetWarningCache: s
    };
    return x.PropTypes = x, x;
  }, Sn;
}
Do.exports = vi()();
var gi = Do.exports;
const he = /* @__PURE__ */ No(gi);
var ar = {};
var fo;
function Si() {
  if (fo) return ar;
  fo = 1;
  var i = Et;
  function s(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, a = 1; a < arguments.length; a++) n += "&args[]=" + encodeURIComponent(arguments[a]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var l = Object.prototype.hasOwnProperty, p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, f = {}, x = {};
  function k(e) {
    return l.call(x, e) ? !0 : l.call(f, e) ? !1 : p.test(e) ? x[e] = !0 : (f[e] = !0, !1);
  }
  function _(e, n, a, c, v, h, E) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = c, this.attributeNamespace = v, this.mustUseProperty = a, this.propertyName = e, this.type = n, this.sanitizeURL = h, this.removeEmptyString = E;
  }
  var S = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    S[e] = new _(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    S[n] = new _(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    S[e] = new _(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    S[e] = new _(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    S[e] = new _(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    S[e] = new _(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    S[e] = new _(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    S[e] = new _(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    S[e] = new _(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var g = /[\-:]([a-z])/g;
  function B(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      g,
      B
    );
    S[n] = new _(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(g, B);
    S[n] = new _(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(g, B);
    S[n] = new _(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    S[e] = new _(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), S.xlinkHref = new _("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    S[e] = new _(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  var N = {
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
  }, se = ["Webkit", "ms", "Moz", "O"];
  Object.keys(N).forEach(function(e) {
    se.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), N[n] = N[e];
    });
  });
  var K = /["'&<>]/;
  function D(e) {
    if (typeof e == "boolean" || typeof e == "number") return "" + e;
    e = "" + e;
    var n = K.exec(e);
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
  var ee = /([A-Z])/g, F = /^ms-/, U = Array.isArray;
  function j(e, n) {
    return { insertionMode: e, selectedValue: n };
  }
  function W(e, n, a) {
    switch (n) {
      case "select":
        return j(1, a.value != null ? a.value : a.defaultValue);
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
    return 4 <= e.insertionMode || e.insertionMode === 0 ? j(1, null) : e;
  }
  var V = /* @__PURE__ */ new Map();
  function C(e, n, a) {
    if (typeof a != "object") throw Error(s(62));
    n = !0;
    for (var c in a) if (l.call(a, c)) {
      var v = a[c];
      if (v != null && typeof v != "boolean" && v !== "") {
        if (c.indexOf("--") === 0) {
          var h = D(c);
          v = D(("" + v).trim());
        } else {
          h = c;
          var E = V.get(h);
          E !== void 0 || (E = D(h.replace(ee, "-$1").toLowerCase().replace(F, "-ms-")), V.set(h, E)), h = E, v = typeof v == "number" ? v === 0 || l.call(N, c) ? "" + v : v + "px" : D(("" + v).trim());
        }
        n ? (n = !1, e.push(' style="', h, ":", v)) : e.push(";", h, ":", v);
      }
    }
    n || e.push('"');
  }
  function fe(e, n, a, c) {
    switch (a) {
      case "style":
        C(e, n, c);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") {
      if (n = S.hasOwnProperty(a) ? S[a] : null, n !== null) {
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
            c === !0 ? e.push(" ", a, '=""') : c !== !1 && e.push(" ", a, '="', D(c), '"');
            break;
          case 5:
            isNaN(c) || e.push(" ", a, '="', D(c), '"');
            break;
          case 6:
            !isNaN(c) && 1 <= c && e.push(" ", a, '="', D(c), '"');
            break;
          default:
            n.sanitizeURL && (c = "" + c), e.push(" ", a, '="', D(c), '"');
        }
      } else if (k(a)) {
        switch (typeof c) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (n = a.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-") return;
        }
        e.push(" ", a, '="', D(c), '"');
      }
    }
  }
  function le(e, n, a) {
    if (n != null) {
      if (a != null) throw Error(s(60));
      if (typeof n != "object" || !("__html" in n)) throw Error(s(61));
      n = n.__html, n != null && e.push("" + n);
    }
  }
  function Fe(e) {
    var n = "";
    return i.Children.forEach(e, function(a) {
      a != null && (n += a);
    }), n;
  }
  function Y(e, n, a, c) {
    e.push(me(a));
    var v = a = null, h;
    for (h in n) if (l.call(n, h)) {
      var E = n[h];
      if (E != null) switch (h) {
        case "children":
          a = E;
          break;
        case "dangerouslySetInnerHTML":
          v = E;
          break;
        default:
          fe(e, c, h, E);
      }
    }
    return e.push(">"), le(e, v, a), typeof a == "string" ? (e.push(D(a)), null) : a;
  }
  var ge = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ve = /* @__PURE__ */ new Map();
  function me(e) {
    var n = Ve.get(e);
    if (n === void 0) {
      if (!ge.test(e)) throw Error(s(65, e));
      n = "<" + e, Ve.set(e, n);
    }
    return n;
  }
  function ye(e, n, a, c, v) {
    switch (n) {
      case "select":
        e.push(me("select"));
        var h = null, E = null;
        for (re in a) if (l.call(a, re)) {
          var O = a[re];
          if (O != null) switch (re) {
            case "children":
              h = O;
              break;
            case "dangerouslySetInnerHTML":
              E = O;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              fe(e, c, re, O);
          }
        }
        return e.push(">"), le(e, E, h), h;
      case "option":
        E = v.selectedValue, e.push(me("option"));
        var X = O = null, J = null, re = null;
        for (h in a) if (l.call(a, h)) {
          var Ie = a[h];
          if (Ie != null) switch (h) {
            case "children":
              O = Ie;
              break;
            case "selected":
              J = Ie;
              break;
            case "dangerouslySetInnerHTML":
              re = Ie;
              break;
            case "value":
              X = Ie;
            default:
              fe(e, c, h, Ie);
          }
        }
        if (E != null) if (a = X !== null ? "" + X : Fe(O), U(E)) {
          for (c = 0; c < E.length; c++)
            if ("" + E[c] === a) {
              e.push(' selected=""');
              break;
            }
        } else "" + E === a && e.push(' selected=""');
        else J && e.push(' selected=""');
        return e.push(">"), le(e, re, O), O;
      case "textarea":
        e.push(me("textarea")), re = E = h = null;
        for (O in a) if (l.call(a, O) && (X = a[O], X != null)) switch (O) {
          case "children":
            re = X;
            break;
          case "value":
            h = X;
            break;
          case "defaultValue":
            E = X;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(s(91));
          default:
            fe(
              e,
              c,
              O,
              X
            );
        }
        if (h === null && E !== null && (h = E), e.push(">"), re != null) {
          if (h != null) throw Error(s(92));
          if (U(re) && 1 < re.length) throw Error(s(93));
          h = "" + re;
        }
        return typeof h == "string" && h[0] === `
` && e.push(`
`), h !== null && e.push(D("" + h)), null;
      case "input":
        e.push(me("input")), X = re = O = h = null;
        for (E in a) if (l.call(a, E) && (J = a[E], J != null)) switch (E) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(399, "input"));
          case "defaultChecked":
            X = J;
            break;
          case "defaultValue":
            O = J;
            break;
          case "checked":
            re = J;
            break;
          case "value":
            h = J;
            break;
          default:
            fe(e, c, E, J);
        }
        return re !== null ? fe(e, c, "checked", re) : X !== null && fe(e, c, "checked", X), h !== null ? fe(e, c, "value", h) : O !== null && fe(e, c, "value", O), e.push("/>"), null;
      case "menuitem":
        e.push(me("menuitem"));
        for (var vt in a) if (l.call(a, vt) && (h = a[vt], h != null)) switch (vt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(400));
          default:
            fe(e, c, vt, h);
        }
        return e.push(">"), null;
      case "title":
        e.push(me("title")), h = null;
        for (Ie in a) if (l.call(a, Ie) && (E = a[Ie], E != null)) switch (Ie) {
          case "children":
            h = E;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(s(434));
          default:
            fe(e, c, Ie, E);
        }
        return e.push(">"), h;
      case "listing":
      case "pre":
        e.push(me(n)), E = h = null;
        for (X in a) if (l.call(a, X) && (O = a[X], O != null)) switch (X) {
          case "children":
            h = O;
            break;
          case "dangerouslySetInnerHTML":
            E = O;
            break;
          default:
            fe(e, c, X, O);
        }
        if (e.push(">"), E != null) {
          if (h != null) throw Error(s(60));
          if (typeof E != "object" || !("__html" in E)) throw Error(s(61));
          a = E.__html, a != null && (typeof a == "string" && 0 < a.length && a[0] === `
` ? e.push(`
`, a) : e.push("" + a));
        }
        return typeof h == "string" && h[0] === `
` && e.push(`
`), h;
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
        e.push(me(n));
        for (var gt in a) if (l.call(a, gt) && (h = a[gt], h != null)) switch (gt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(399, n));
          default:
            fe(e, c, gt, h);
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
        return Y(
          e,
          a,
          n,
          c
        );
      case "html":
        return v.insertionMode === 0 && e.push("<!DOCTYPE html>"), Y(e, a, n, c);
      default:
        if (n.indexOf("-") === -1 && typeof a.is != "string") return Y(e, a, n, c);
        e.push(me(n)), E = h = null;
        for (J in a) if (l.call(a, J) && (O = a[J], O != null)) switch (J) {
          case "children":
            h = O;
            break;
          case "dangerouslySetInnerHTML":
            E = O;
            break;
          case "style":
            C(e, c, O);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            k(J) && typeof O != "function" && typeof O != "symbol" && e.push(" ", J, '="', D(O), '"');
        }
        return e.push(">"), le(e, E, h), h;
    }
  }
  function Le(e, n, a) {
    if (e.push('<!--$?--><template id="'), a === null) throw Error(s(395));
    return e.push(a), e.push('"></template>');
  }
  function Ne(e, n, a, c) {
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
  function nt(e, n) {
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
  var We = /[<\u2028\u2029]/g;
  function $e(e) {
    return JSON.stringify(e).replace(We, function(n) {
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
  function je(e, n) {
    return n = n === void 0 ? "" : n, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: n + "P:", segmentPrefix: n + "S:", boundaryPrefix: n + "B:", idPrefix: n, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
  }
  function Je(e, n, a, c) {
    return a.generateStaticMarkup ? (e.push(D(n)), !1) : (n === "" ? e = c : (c && e.push("<!-- -->"), e.push(D(n)), e = !0), e);
  }
  var Xe = Object.assign, L = Symbol.for("react.element"), P = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), H = Symbol.for("react.provider"), A = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), ve = Symbol.for("react.scope"), ne = Symbol.for("react.debug_trace_mode"), Se = Symbol.for("react.legacy_hidden"), pe = Symbol.for("react.default_value"), be = Symbol.iterator;
  function Be(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case M:
        return "Fragment";
      case P:
        return "Portal";
      case w:
        return "Profiler";
      case z:
        return "StrictMode";
      case te:
        return "Suspense";
      case Q:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case A:
        return (e.displayName || "Context") + ".Consumer";
      case H:
        return (e._context.displayName || "Context") + ".Provider";
      case ue:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case q:
        return n = e.displayName || null, n !== null ? n : Be(e.type) || "Memo";
      case ce:
        n = e._payload, e = e._init;
        try {
          return Be(e(n));
        } catch {
        }
    }
    return null;
  }
  var Ce = {};
  function Qe(e, n) {
    if (e = e.contextTypes, !e) return Ce;
    var a = {}, c;
    for (c in e) a[c] = n[c];
    return a;
  }
  var He = null;
  function we(e, n) {
    if (e !== n) {
      e.context._currentValue2 = e.parentValue, e = e.parent;
      var a = n.parent;
      if (e === null) {
        if (a !== null) throw Error(s(401));
      } else {
        if (a === null) throw Error(s(401));
        we(e, a);
      }
      n.context._currentValue2 = n.value;
    }
  }
  function G(e) {
    e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && G(e);
  }
  function xe(e) {
    var n = e.parent;
    n !== null && xe(n), e.context._currentValue2 = e.value;
  }
  function et(e, n) {
    if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(s(402));
    e.depth === n.depth ? we(e, n) : et(e, n);
  }
  function Ze(e, n) {
    var a = n.parent;
    if (a === null) throw Error(s(402));
    e.depth === a.depth ? we(e, a) : Ze(e, a), n.context._currentValue2 = n.value;
  }
  function De(e) {
    var n = He;
    n !== e && (n === null ? xe(e) : e === null ? G(n) : n.depth === e.depth ? we(n, e) : n.depth > e.depth ? et(n, e) : Ze(n, e), He = e);
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
    var h = { queue: [], replace: !1 };
    e._reactInternals = h;
    var E = n.contextType;
    if (e.context = typeof E == "object" && E !== null ? E._currentValue2 : c, E = n.getDerivedStateFromProps, typeof E == "function" && (E = E(a, v), v = E == null ? v : Xe({}, v, E), e.state = v), typeof n.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (n = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), n !== e.state && Yt.enqueueReplaceState(e, e.state, null), h.queue !== null && 0 < h.queue.length) if (n = h.queue, E = h.replace, h.queue = null, h.replace = !1, E && n.length === 1) e.state = n[0];
    else {
      for (h = E ? n[0] : e.state, v = !0, E = E ? 1 : 0; E < n.length; E++) {
        var O = n[E];
        O = typeof O == "function" ? O.call(e, h, a, c) : O, O != null && (v ? (v = !1, h = Xe({}, h, O)) : Xe(h, O));
      }
      e.state = h;
    }
    else h.queue = null;
  }
  var ur = { id: 1, overflow: "" };
  function Ct(e, n, a) {
    var c = e.id;
    e = e.overflow;
    var v = 32 - bt(c) - 1;
    c &= ~(1 << v), a += 1;
    var h = 32 - bt(n) + v;
    if (30 < h) {
      var E = v - v % 5;
      return h = (c & (1 << E) - 1).toString(32), c >>= E, v -= E, { id: 1 << 32 - bt(n) + v | a << v | c, overflow: h + e };
    }
    return { id: 1 << h | a << v | c, overflow: e };
  }
  var bt = Math.clz32 ? Math.clz32 : ot, zt = Math.log, $t = Math.LN2;
  function ot(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (zt(e) / $t | 0) | 0;
  }
  function Tt(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Zt = typeof Object.is == "function" ? Object.is : Tt, qe = null, Kt = null, tt = null, ke = null, At = !1, Re = !1, rt = 0, pt = null, Rt = 0;
  function it() {
    if (qe === null) throw Error(s(321));
    return qe;
  }
  function Jt() {
    if (0 < Rt) throw Error(s(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function jt() {
    return ke === null ? tt === null ? (At = !1, tt = ke = Jt()) : (At = !0, ke = tt) : ke.next === null ? (At = !1, ke = ke.next = Jt()) : (At = !0, ke = ke.next), ke;
  }
  function Qt() {
    Kt = qe = null, Re = !1, tt = null, Rt = 0, ke = pt = null;
  }
  function Pt(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Bt(e, n, a) {
    if (qe = it(), ke = jt(), At) {
      var c = ke.queue;
      if (n = c.dispatch, pt !== null && (a = pt.get(c), a !== void 0)) {
        pt.delete(c), c = ke.memoizedState;
        do
          c = e(c, a.action), a = a.next;
        while (a !== null);
        return ke.memoizedState = c, [c, n];
      }
      return [ke.memoizedState, n];
    }
    return e = e === Pt ? typeof n == "function" ? n() : n : a !== void 0 ? a(n) : n, ke.memoizedState = e, e = ke.queue = { last: null, dispatch: null }, e = e.dispatch = Ye.bind(null, qe, e), [ke.memoizedState, e];
  }
  function cr(e, n) {
    if (qe = it(), ke = jt(), n = n === void 0 ? null : n, ke !== null) {
      var a = ke.memoizedState;
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
    return e = e(), ke.memoizedState = [e, n], e;
  }
  function Ye(e, n, a) {
    if (25 <= Rt) throw Error(s(301));
    if (e === qe) if (Re = !0, e = { action: a, next: null }, pt === null && (pt = /* @__PURE__ */ new Map()), a = pt.get(n), a === void 0) pt.set(n, e);
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
    return it(), e._currentValue2;
  }, useMemo: cr, useReducer: Bt, useRef: function(e) {
    qe = it(), ke = jt();
    var n = ke.memoizedState;
    return n === null ? (e = { current: e }, ke.memoizedState = e) : n;
  }, useState: function(e) {
    return Bt(Pt, e);
  }, useInsertionEffect: Ot, useLayoutEffect: function() {
  }, useCallback: function(e, n) {
    return cr(function() {
      return e;
    }, n);
  }, useImperativeHandle: Ot, useEffect: Ot, useDebugValue: Ot, useDeferredValue: function(e) {
    return it(), e;
  }, useTransition: function() {
    return it(), [
      !1,
      Ht
    ];
  }, useId: function() {
    var e = Kt.treeContext, n = e.overflow;
    e = e.id, e = (e & ~(1 << 32 - bt(e) - 1)).toString(32) + n;
    var a = It;
    if (a === null) throw Error(s(404));
    return n = rt++, e = ":" + a.idPrefix + "R" + e, 0 < n && (e += "H" + n.toString(32)), e + ":";
  }, useMutableSource: function(e, n) {
    return it(), n(e._source);
  }, useSyncExternalStore: function(e, n, a) {
    if (a === void 0) throw Error(s(407));
    return a();
  } }, It = null, mt = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function at(e) {
    return console.error(e), null;
  }
  function _t() {
  }
  function pr(e, n, a, c, v, h, E, O, X) {
    var J = [], re = /* @__PURE__ */ new Set();
    return n = { destination: null, responseState: n, progressiveChunkSize: c === void 0 ? 12800 : c, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: re, pingedTasks: J, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: v === void 0 ? at : v, onAllReady: _t, onShellReady: E === void 0 ? _t : E, onShellError: _t, onFatalError: _t }, a = Nt(n, 0, null, a, !1, !1), a.parentFlushed = !0, e = Ut(n, e, null, a, re, Ce, null, ur), J.push(e), n;
  }
  function Ut(e, n, a, c, v, h, E, O) {
    e.allPendingTasks++, a === null ? e.pendingRootTasks++ : a.pendingTasks++;
    var X = { node: n, ping: function() {
      var J = e.pingedTasks;
      J.push(X), J.length === 1 && vr(e);
    }, blockedBoundary: a, blockedSegment: c, abortSet: v, legacyContext: h, context: E, treeContext: O };
    return v.add(X), X;
  }
  function Nt(e, n, a, c, v, h) {
    return { status: 0, id: -1, index: n, parentFlushed: !1, chunks: [], children: [], formatContext: c, boundary: a, lastPushedText: v, textEmbedded: h };
  }
  function Mt(e, n) {
    if (e = e.onError(n), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
  }
  function $(e, n) {
    var a = e.onShellError;
    a(n), a = e.onFatalError, a(n), e.destination !== null ? (e.status = 2, e.destination.destroy(n)) : (e.status = 1, e.fatalError = n);
  }
  function d(e, n, a, c, v) {
    for (qe = {}, Kt = n, rt = 0, e = a(c, v); Re; ) Re = !1, rt = 0, Rt += 1, ke = null, e = a(c, v);
    return Qt(), e;
  }
  function b(e, n, a, c) {
    var v = a.render(), h = c.childContextTypes;
    if (h != null) {
      var E = n.legacyContext;
      if (typeof a.getChildContext != "function") c = E;
      else {
        a = a.getChildContext();
        for (var O in a) if (!(O in h)) throw Error(s(108, Be(c) || "Unknown", O));
        c = Xe({}, E, a);
      }
      n.legacyContext = c, Ee(e, n, v), n.legacyContext = E;
    } else Ee(e, n, v);
  }
  function I(e, n) {
    if (e && e.defaultProps) {
      n = Xe({}, n), e = e.defaultProps;
      for (var a in e) n[a] === void 0 && (n[a] = e[a]);
      return n;
    }
    return n;
  }
  function de(e, n, a, c, v) {
    if (typeof a == "function") if (a.prototype && a.prototype.isReactComponent) {
      v = Qe(a, n.legacyContext);
      var h = a.contextType;
      h = new a(c, typeof h == "object" && h !== null ? h._currentValue2 : v), Xt(h, a, c, v), b(e, n, h, a);
    } else {
      h = Qe(a, n.legacyContext), v = d(e, n, a, c, h);
      var E = rt !== 0;
      if (typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) Xt(v, a, c, h), b(e, n, v, a);
      else if (E) {
        c = n.treeContext, n.treeContext = Ct(c, 1, 0);
        try {
          Ee(e, n, v);
        } finally {
          n.treeContext = c;
        }
      } else Ee(e, n, v);
    }
    else if (typeof a == "string") {
      switch (v = n.blockedSegment, h = ye(v.chunks, a, c, e.responseState, v.formatContext), v.lastPushedText = !1, E = v.formatContext, v.formatContext = W(E, a, c), Me(e, n, h), v.formatContext = E, a) {
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
        case Se:
        case ne:
        case z:
        case w:
        case M:
          Ee(e, n, c.children);
          return;
        case Q:
          Ee(e, n, c.children);
          return;
        case ve:
          throw Error(s(343));
        case te:
          e: {
            a = n.blockedBoundary, v = n.blockedSegment, h = c.fallback, c = c.children, E = /* @__PURE__ */ new Set();
            var O = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: E, errorDigest: null }, X = Nt(e, v.chunks.length, O, v.formatContext, !1, !1);
            v.children.push(X), v.lastPushedText = !1;
            var J = Nt(e, 0, null, v.formatContext, !1, !1);
            J.parentFlushed = !0, n.blockedBoundary = O, n.blockedSegment = J;
            try {
              if (Me(
                e,
                n,
                c
              ), e.responseState.generateStaticMarkup || J.lastPushedText && J.textEmbedded && J.chunks.push("<!-- -->"), J.status = 1, ft(O, J), O.pendingTasks === 0) break e;
            } catch (re) {
              J.status = 4, O.forceClientRender = !0, O.errorDigest = Mt(e, re);
            } finally {
              n.blockedBoundary = a, n.blockedSegment = v;
            }
            n = Ut(e, h, a, X, E, n.legacyContext, n.context, n.treeContext), e.pingedTasks.push(n);
          }
          return;
      }
      if (typeof a == "object" && a !== null) switch (a.$$typeof) {
        case ue:
          if (c = d(e, n, a.render, c, v), rt !== 0) {
            a = n.treeContext, n.treeContext = Ct(a, 1, 0);
            try {
              Ee(e, n, c);
            } finally {
              n.treeContext = a;
            }
          } else Ee(e, n, c);
          return;
        case q:
          a = a.type, c = I(a, c), de(e, n, a, c, v);
          return;
        case H:
          if (v = c.children, a = a._context, c = c.value, h = a._currentValue2, a._currentValue2 = c, E = He, He = c = { parent: E, depth: E === null ? 0 : E.depth + 1, context: a, parentValue: h, value: c }, n.context = c, Ee(e, n, v), e = He, e === null) throw Error(s(403));
          c = e.parentValue, e.context._currentValue2 = c === pe ? e.context._defaultValue : c, e = He = e.parent, n.context = e;
          return;
        case A:
          c = c.children, c = c(a._currentValue2), Ee(e, n, c);
          return;
        case ce:
          v = a._init, a = v(a._payload), c = I(a, c), de(
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
  function Ee(e, n, a) {
    if (n.node = a, typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case L:
          de(e, n, a.type, a.props, a.ref);
          return;
        case P:
          throw Error(s(257));
        case ce:
          var c = a._init;
          a = c(a._payload), Ee(e, n, a);
          return;
      }
      if (U(a)) {
        ze(e, n, a);
        return;
      }
      if (a === null || typeof a != "object" ? c = null : (c = be && a[be] || a["@@iterator"], c = typeof c == "function" ? c : null), c && (c = c.call(a))) {
        if (a = c.next(), !a.done) {
          var v = [];
          do
            v.push(a.value), a = c.next();
          while (!a.done);
          ze(e, n, v);
        }
        return;
      }
      throw e = Object.prototype.toString.call(a), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : e));
    }
    typeof a == "string" ? (c = n.blockedSegment, c.lastPushedText = Je(n.blockedSegment.chunks, a, e.responseState, c.lastPushedText)) : typeof a == "number" && (c = n.blockedSegment, c.lastPushedText = Je(n.blockedSegment.chunks, "" + a, e.responseState, c.lastPushedText));
  }
  function ze(e, n, a) {
    for (var c = a.length, v = 0; v < c; v++) {
      var h = n.treeContext;
      n.treeContext = Ct(h, c, v);
      try {
        Me(e, n, a[v]);
      } finally {
        n.treeContext = h;
      }
    }
  }
  function Me(e, n, a) {
    var c = n.blockedSegment.formatContext, v = n.legacyContext, h = n.context;
    try {
      return Ee(e, n, a);
    } catch (X) {
      if (Qt(), typeof X == "object" && X !== null && typeof X.then == "function") {
        a = X;
        var E = n.blockedSegment, O = Nt(e, E.chunks.length, null, E.formatContext, E.lastPushedText, !0);
        E.children.push(O), E.lastPushedText = !1, e = Ut(e, n.node, n.blockedBoundary, O, n.abortSet, n.legacyContext, n.context, n.treeContext).ping, a.then(e, e), n.blockedSegment.formatContext = c, n.legacyContext = v, n.context = h, De(h);
      } else throw n.blockedSegment.formatContext = c, n.legacyContext = v, n.context = h, De(h), X;
    }
  }
  function st(e) {
    var n = e.blockedBoundary;
    e = e.blockedSegment, e.status = 3, yt(this, n, e);
  }
  function Oe(e, n, a) {
    var c = e.blockedBoundary;
    e.blockedSegment.status = 3, c === null ? (n.allPendingTasks--, n.status !== 2 && (n.status = 2, n.destination !== null && n.destination.push(null))) : (c.pendingTasks--, c.forceClientRender || (c.forceClientRender = !0, e = a === void 0 ? Error(s(432)) : a, c.errorDigest = n.onError(e), c.parentFlushed && n.clientRenderedBoundaries.push(c)), c.fallbackAbortableTasks.forEach(function(v) {
      return Oe(v, n, a);
    }), c.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0 && (c = n.onAllReady, c()));
  }
  function ft(e, n) {
    if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
      var a = n.children[0];
      a.id = n.id, a.parentFlushed = !0, a.status === 1 && ft(e, a);
    } else e.completedSegments.push(n);
  }
  function yt(e, n, a) {
    if (n === null) {
      if (a.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(s(389));
        e.completedRootSegment = a;
      }
      e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = _t, n = e.onShellReady, n());
    } else n.pendingTasks--, n.forceClientRender || (n.pendingTasks === 0 ? (a.parentFlushed && a.status === 1 && ft(n, a), n.parentFlushed && e.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(st, e), n.fallbackAbortableTasks.clear()) : a.parentFlushed && a.status === 1 && (ft(n, a), n.completedSegments.length === 1 && n.parentFlushed && e.partialBoundaries.push(n)));
    e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
  }
  function vr(e) {
    if (e.status !== 2) {
      var n = He, a = mt.current;
      mt.current = er;
      var c = It;
      It = e.responseState;
      try {
        var v = e.pingedTasks, h;
        for (h = 0; h < v.length; h++) {
          var E = v[h], O = e, X = E.blockedSegment;
          if (X.status === 0) {
            De(E.context);
            try {
              Ee(O, E, E.node), O.responseState.generateStaticMarkup || X.lastPushedText && X.textEmbedded && X.chunks.push("<!-- -->"), E.abortSet.delete(E), X.status = 1, yt(O, E.blockedBoundary, X);
            } catch (lt) {
              if (Qt(), typeof lt == "object" && lt !== null && typeof lt.then == "function") {
                var J = E.ping;
                lt.then(J, J);
              } else {
                E.abortSet.delete(E), X.status = 4;
                var re = E.blockedBoundary, Ie = lt, vt = Mt(O, Ie);
                if (re === null ? $(O, Ie) : (re.pendingTasks--, re.forceClientRender || (re.forceClientRender = !0, re.errorDigest = vt, re.parentFlushed && O.clientRenderedBoundaries.push(re))), O.allPendingTasks--, O.allPendingTasks === 0) {
                  var gt = O.onAllReady;
                  gt();
                }
              }
            } finally {
            }
          }
        }
        v.splice(0, h), e.destination !== null && fr(e, e.destination);
      } catch (lt) {
        Mt(e, lt), $(e, lt);
      } finally {
        It = c, mt.current = a, a === er && De(n);
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
        var h = 0;
        a = a.children;
        for (var E = 0; E < a.length; E++) {
          for (v = a[E]; h < v.index; h++) n.push(c[h]);
          v = rr(e, n, v);
        }
        for (; h < c.length - 1; h++) n.push(c[h]);
        return h < c.length && (v = n.push(c[h])), v;
      default:
        throw Error(s(390));
    }
  }
  function rr(e, n, a) {
    var c = a.boundary;
    if (c === null) return tr(e, n, a);
    if (c.parentFlushed = !0, c.forceClientRender) return e.responseState.generateStaticMarkup || (c = c.errorDigest, n.push("<!--$!-->"), n.push("<template"), c && (n.push(' data-dgst="'), c = D(c), n.push(c), n.push('"')), n.push("></template>")), tr(e, n, a), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
    if (0 < c.pendingTasks) {
      c.rootSegmentID = e.nextSegmentId++, 0 < c.completedSegments.length && e.partialBoundaries.push(c);
      var v = e.responseState, h = v.nextSuspenseID++;
      return v = v.boundaryPrefix + h.toString(16), c = c.id = v, Le(n, e.responseState, c), tr(e, n, a), n.push("<!--/$-->");
    }
    if (c.byteSize > e.progressiveChunkSize) return c.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(c), Le(n, e.responseState, c.id), tr(e, n, a), n.push("<!--/$-->");
    if (e.responseState.generateStaticMarkup || n.push("<!--$-->"), a = c.completedSegments, a.length !== 1) throw Error(s(391));
    return rr(e, n, a[0]), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
  }
  function gr(e, n, a) {
    return Ne(n, e.responseState, a.formatContext, a.id), rr(e, n, a), nt(n, a.formatContext);
  }
  function Sr(e, n, a) {
    for (var c = a.completedSegments, v = 0; v < c.length; v++) wr(e, n, a, c[v]);
    if (c.length = 0, e = e.responseState, c = a.id, a = a.rootSegmentID, n.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? n.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, n.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), c === null) throw Error(s(395));
    return a = a.toString(16), n.push(c), n.push('","'), n.push(e.segmentPrefix), n.push(a), n.push('")<\/script>');
  }
  function wr(e, n, a, c) {
    if (c.status === 2) return !0;
    var v = c.id;
    if (v === -1) {
      if ((c.id = a.rootSegmentID) === -1) throw Error(s(392));
      return gr(e, n, c);
    }
    return gr(e, n, c), e = e.responseState, n.push(e.startInlineScript), e.sentCompleteSegmentFunction ? n.push('$RS("') : (e.sentCompleteSegmentFunction = !0, n.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), n.push(e.segmentPrefix), v = v.toString(16), n.push(v), n.push('","'), n.push(e.placeholderPrefix), n.push(v), n.push('")<\/script>');
  }
  function fr(e, n) {
    try {
      var a = e.completedRootSegment;
      if (a !== null && e.pendingRootTasks === 0) {
        rr(e, n, a), e.completedRootSegment = null;
        var c = e.responseState.bootstrapChunks;
        for (a = 0; a < c.length - 1; a++) n.push(c[a]);
        a < c.length && n.push(c[a]);
      }
      var v = e.clientRenderedBoundaries, h;
      for (h = 0; h < v.length; h++) {
        var E = v[h];
        c = n;
        var O = e.responseState, X = E.id, J = E.errorDigest, re = E.errorMessage, Ie = E.errorComponentStack;
        if (c.push(O.startInlineScript), O.sentClientRenderFunction ? c.push('$RX("') : (O.sentClientRenderFunction = !0, c.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), X === null) throw Error(s(395));
        if (c.push(X), c.push('"'), J || re || Ie) {
          c.push(",");
          var vt = $e(J || "");
          c.push(vt);
        }
        if (re || Ie) {
          c.push(",");
          var gt = $e(re || "");
          c.push(gt);
        }
        if (Ie) {
          c.push(",");
          var lt = $e(Ie);
          c.push(lt);
        }
        if (!c.push(")<\/script>")) {
          e.destination = null, h++, v.splice(0, h);
          return;
        }
      }
      v.splice(0, h);
      var nr = e.completedBoundaries;
      for (h = 0; h < nr.length; h++) if (!Sr(e, n, nr[h])) {
        e.destination = null, h++, nr.splice(0, h);
        return;
      }
      nr.splice(0, h);
      var Dt = e.partialBoundaries;
      for (h = 0; h < Dt.length; h++) {
        var kr = Dt[h];
        e: {
          v = e, E = n;
          var or = kr.completedSegments;
          for (O = 0; O < or.length; O++) if (!wr(v, E, kr, or[O])) {
            O++, or.splice(0, O);
            var Dr = !1;
            break e;
          }
          or.splice(0, O), Dr = !0;
        }
        if (!Dr) {
          e.destination = null, h++, Dt.splice(0, h);
          return;
        }
      }
      Dt.splice(0, h);
      var Vt = e.completedBoundaries;
      for (h = 0; h < Vt.length; h++) if (!Sr(e, n, Vt[h])) {
        e.destination = null, h++, Vt.splice(0, h);
        return;
      }
      Vt.splice(0, h);
    } finally {
      e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && n.push(null);
    }
  }
  function Nr(e, n) {
    try {
      var a = e.abortableTasks;
      a.forEach(function(c) {
        return Oe(c, e, n);
      }), a.clear(), e.destination !== null && fr(e, e.destination);
    } catch (c) {
      Mt(e, c), $(e, c);
    }
  }
  function Mr() {
  }
  function xr(e, n, a, c) {
    var v = !1, h = null, E = "", O = { push: function(J) {
      return J !== null && (E += J), !0;
    }, destroy: function(J) {
      v = !0, h = J;
    } }, X = !1;
    if (e = pr(e, je(a, n ? n.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Mr, void 0, function() {
      X = !0;
    }), vr(e), Nr(e, c), e.status === 1) e.status = 2, O.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = O;
      try {
        fr(e, O);
      } catch (J) {
        Mt(e, J), $(e, J);
      }
    }
    if (v) throw h;
    if (!X) throw Error(s(426));
    return E;
  }
  return ar.renderToNodeStream = function() {
    throw Error(s(207));
  }, ar.renderToStaticMarkup = function(e, n) {
    return xr(e, n, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, ar.renderToStaticNodeStream = function() {
    throw Error(s(208));
  }, ar.renderToString = function(e, n) {
    return xr(e, n, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, ar.version = "18.3.1", ar;
}
var Yr = {};
var ho;
function wi() {
  if (ho) return Yr;
  ho = 1;
  var i = Et;
  function s(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var l = null, p = 0;
  function f(t, r) {
    if (r.length !== 0) if (512 < r.length) 0 < p && (t.enqueue(new Uint8Array(l.buffer, 0, p)), l = new Uint8Array(512), p = 0), t.enqueue(r);
    else {
      var o = l.length - p;
      o < r.length && (o === 0 ? t.enqueue(l) : (l.set(r.subarray(0, o), p), t.enqueue(l), r = r.subarray(o)), l = new Uint8Array(512), p = 0), l.set(r, p), p += r.length;
    }
  }
  function x(t, r) {
    return f(t, r), !0;
  }
  function k(t) {
    l && 0 < p && (t.enqueue(new Uint8Array(l.buffer, 0, p)), l = null, p = 0);
  }
  var _ = new TextEncoder();
  function S(t) {
    return _.encode(t);
  }
  function g(t) {
    return _.encode(t);
  }
  function B(t, r) {
    typeof t.error == "function" ? t.error(r) : t.close();
  }
  var N = Object.prototype.hasOwnProperty, se = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, K = {}, D = {};
  function ee(t) {
    return N.call(D, t) ? !0 : N.call(K, t) ? !1 : se.test(t) ? D[t] = !0 : (K[t] = !0, !1);
  }
  function F(t, r, o, u, y, m, T) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = y, this.mustUseProperty = o, this.propertyName = t, this.type = r, this.sanitizeURL = m, this.removeEmptyString = T;
  }
  var U = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    U[t] = new F(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var r = t[0];
    U[r] = new F(r, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    U[t] = new F(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    U[t] = new F(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    U[t] = new F(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    U[t] = new F(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    U[t] = new F(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    U[t] = new F(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    U[t] = new F(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var j = /[\-:]([a-z])/g;
  function W(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var r = t.replace(
      j,
      W
    );
    U[r] = new F(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(j, W);
    U[r] = new F(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(j, W);
    U[r] = new F(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    U[t] = new F(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), U.xlinkHref = new F("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    U[t] = new F(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  var V = {
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
  }, C = ["Webkit", "ms", "Moz", "O"];
  Object.keys(V).forEach(function(t) {
    C.forEach(function(r) {
      r = r + t.charAt(0).toUpperCase() + t.substring(1), V[r] = V[t];
    });
  });
  var fe = /["'&<>]/;
  function le(t) {
    if (typeof t == "boolean" || typeof t == "number") return "" + t;
    t = "" + t;
    var r = fe.exec(t);
    if (r) {
      var o = "", u, y = 0;
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
        y !== u && (o += t.substring(y, u)), y = u + 1, o += r;
      }
      t = y !== u ? o + t.substring(y, u) : o;
    }
    return t;
  }
  var Fe = /([A-Z])/g, Y = /^ms-/, ge = Array.isArray, Ve = g("<script>"), me = g("<\/script>"), ye = g('<script src="'), Le = g('<script type="module" src="'), Ne = g('" async=""><\/script>'), nt = /(<\/|<)(s)(cript)/gi;
  function We(t, r, o, u) {
    return "" + r + (o === "s" ? "\\u0073" : "\\u0053") + u;
  }
  function $e(t, r, o, u, y) {
    t = t === void 0 ? "" : t, r = r === void 0 ? Ve : g('<script nonce="' + le(r) + '">');
    var m = [];
    if (o !== void 0 && m.push(r, S(("" + o).replace(nt, We)), me), u !== void 0) for (o = 0; o < u.length; o++) m.push(ye, S(le(u[o])), Ne);
    if (y !== void 0) for (u = 0; u < y.length; u++) m.push(Le, S(le(y[u])), Ne);
    return { bootstrapChunks: m, startInlineScript: r, placeholderPrefix: g(t + "P:"), segmentPrefix: g(t + "S:"), boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function je(t, r) {
    return { insertionMode: t, selectedValue: r };
  }
  function Je(t) {
    return je(t === "http://www.w3.org/2000/svg" ? 2 : t === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Xe(t, r, o) {
    switch (r) {
      case "select":
        return je(1, o.value != null ? o.value : o.defaultValue);
      case "svg":
        return je(2, null);
      case "math":
        return je(3, null);
      case "foreignObject":
        return je(1, null);
      case "table":
        return je(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return je(5, null);
      case "colgroup":
        return je(7, null);
      case "tr":
        return je(6, null);
    }
    return 4 <= t.insertionMode || t.insertionMode === 0 ? je(1, null) : t;
  }
  var L = g("<!-- -->");
  function P(t, r, o, u) {
    return r === "" ? u : (u && t.push(L), t.push(S(le(r))), !0);
  }
  var M = /* @__PURE__ */ new Map(), z = g(' style="'), w = g(":"), H = g(";");
  function A(t, r, o) {
    if (typeof o != "object") throw Error(s(62));
    r = !0;
    for (var u in o) if (N.call(o, u)) {
      var y = o[u];
      if (y != null && typeof y != "boolean" && y !== "") {
        if (u.indexOf("--") === 0) {
          var m = S(le(u));
          y = S(le(("" + y).trim()));
        } else {
          m = u;
          var T = M.get(m);
          T !== void 0 || (T = g(le(m.replace(Fe, "-$1").toLowerCase().replace(Y, "-ms-"))), M.set(m, T)), m = T, y = typeof y == "number" ? y === 0 || N.call(V, u) ? S("" + y) : S(y + "px") : S(le(("" + y).trim()));
        }
        r ? (r = !1, t.push(z, m, w, y)) : t.push(H, m, w, y);
      }
    }
    r || t.push(Q);
  }
  var ue = g(" "), te = g('="'), Q = g('"'), q = g('=""');
  function ce(t, r, o, u) {
    switch (o) {
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
    if (!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") {
      if (r = U.hasOwnProperty(o) ? U[o] : null, r !== null) {
        switch (typeof u) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!r.acceptsBooleans) return;
        }
        switch (o = S(r.attributeName), r.type) {
          case 3:
            u && t.push(ue, o, q);
            break;
          case 4:
            u === !0 ? t.push(ue, o, q) : u !== !1 && t.push(ue, o, te, S(le(u)), Q);
            break;
          case 5:
            isNaN(u) || t.push(ue, o, te, S(le(u)), Q);
            break;
          case 6:
            !isNaN(u) && 1 <= u && t.push(ue, o, te, S(le(u)), Q);
            break;
          default:
            r.sanitizeURL && (u = "" + u), t.push(ue, o, te, S(le(u)), Q);
        }
      } else if (ee(o)) {
        switch (typeof u) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (r = o.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-") return;
        }
        t.push(ue, S(o), te, S(le(u)), Q);
      }
    }
  }
  var ve = g(">"), ne = g("/>");
  function Se(t, r, o) {
    if (r != null) {
      if (o != null) throw Error(s(60));
      if (typeof r != "object" || !("__html" in r)) throw Error(s(61));
      r = r.__html, r != null && t.push(S("" + r));
    }
  }
  function pe(t) {
    var r = "";
    return i.Children.forEach(t, function(o) {
      o != null && (r += o);
    }), r;
  }
  var be = g(' selected=""');
  function Be(t, r, o, u) {
    t.push(we(o));
    var y = o = null, m;
    for (m in r) if (N.call(r, m)) {
      var T = r[m];
      if (T != null) switch (m) {
        case "children":
          o = T;
          break;
        case "dangerouslySetInnerHTML":
          y = T;
          break;
        default:
          ce(t, u, m, T);
      }
    }
    return t.push(ve), Se(t, y, o), typeof o == "string" ? (t.push(S(le(o))), null) : o;
  }
  var Ce = g(`
`), Qe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, He = /* @__PURE__ */ new Map();
  function we(t) {
    var r = He.get(t);
    if (r === void 0) {
      if (!Qe.test(t)) throw Error(s(65, t));
      r = g("<" + t), He.set(t, r);
    }
    return r;
  }
  var G = g("<!DOCTYPE html>");
  function xe(t, r, o, u, y) {
    switch (r) {
      case "select":
        t.push(we("select"));
        var m = null, T = null;
        for (oe in o) if (N.call(o, oe)) {
          var R = o[oe];
          if (R != null) switch (oe) {
            case "children":
              m = R;
              break;
            case "dangerouslySetInnerHTML":
              T = R;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ce(t, u, oe, R);
          }
        }
        return t.push(ve), Se(t, T, m), m;
      case "option":
        T = y.selectedValue, t.push(we("option"));
        var Z = R = null, ae = null, oe = null;
        for (m in o) if (N.call(o, m)) {
          var Pe = o[m];
          if (Pe != null) switch (m) {
            case "children":
              R = Pe;
              break;
            case "selected":
              ae = Pe;
              break;
            case "dangerouslySetInnerHTML":
              oe = Pe;
              break;
            case "value":
              Z = Pe;
            default:
              ce(t, u, m, Pe);
          }
        }
        if (T != null) if (o = Z !== null ? "" + Z : pe(R), ge(T)) {
          for (u = 0; u < T.length; u++)
            if ("" + T[u] === o) {
              t.push(be);
              break;
            }
        } else "" + T === o && t.push(be);
        else ae && t.push(be);
        return t.push(ve), Se(t, oe, R), R;
      case "textarea":
        t.push(we("textarea")), oe = T = m = null;
        for (R in o) if (N.call(o, R) && (Z = o[R], Z != null)) switch (R) {
          case "children":
            oe = Z;
            break;
          case "value":
            m = Z;
            break;
          case "defaultValue":
            T = Z;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(s(91));
          default:
            ce(t, u, R, Z);
        }
        if (m === null && T !== null && (m = T), t.push(ve), oe != null) {
          if (m != null) throw Error(s(92));
          if (ge(oe) && 1 < oe.length) throw Error(s(93));
          m = "" + oe;
        }
        return typeof m == "string" && m[0] === `
` && t.push(Ce), m !== null && t.push(S(le("" + m))), null;
      case "input":
        t.push(we("input")), Z = oe = R = m = null;
        for (T in o) if (N.call(o, T) && (ae = o[T], ae != null)) switch (T) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(399, "input"));
          case "defaultChecked":
            Z = ae;
            break;
          case "defaultValue":
            R = ae;
            break;
          case "checked":
            oe = ae;
            break;
          case "value":
            m = ae;
            break;
          default:
            ce(t, u, T, ae);
        }
        return oe !== null ? ce(
          t,
          u,
          "checked",
          oe
        ) : Z !== null && ce(t, u, "checked", Z), m !== null ? ce(t, u, "value", m) : R !== null && ce(t, u, "value", R), t.push(ne), null;
      case "menuitem":
        t.push(we("menuitem"));
        for (var ct in o) if (N.call(o, ct) && (m = o[ct], m != null)) switch (ct) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(400));
          default:
            ce(t, u, ct, m);
        }
        return t.push(ve), null;
      case "title":
        t.push(we("title")), m = null;
        for (Pe in o) if (N.call(o, Pe) && (T = o[Pe], T != null)) switch (Pe) {
          case "children":
            m = T;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(s(434));
          default:
            ce(t, u, Pe, T);
        }
        return t.push(ve), m;
      case "listing":
      case "pre":
        t.push(we(r)), T = m = null;
        for (Z in o) if (N.call(o, Z) && (R = o[Z], R != null)) switch (Z) {
          case "children":
            m = R;
            break;
          case "dangerouslySetInnerHTML":
            T = R;
            break;
          default:
            ce(t, u, Z, R);
        }
        if (t.push(ve), T != null) {
          if (m != null) throw Error(s(60));
          if (typeof T != "object" || !("__html" in T)) throw Error(s(61));
          o = T.__html, o != null && (typeof o == "string" && 0 < o.length && o[0] === `
` ? t.push(Ce, S(o)) : t.push(S("" + o)));
        }
        return typeof m == "string" && m[0] === `
` && t.push(Ce), m;
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
        t.push(we(r));
        for (var St in o) if (N.call(o, St) && (m = o[St], m != null)) switch (St) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(399, r));
          default:
            ce(t, u, St, m);
        }
        return t.push(ne), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Be(t, o, r, u);
      case "html":
        return y.insertionMode === 0 && t.push(G), Be(t, o, r, u);
      default:
        if (r.indexOf("-") === -1 && typeof o.is != "string") return Be(t, o, r, u);
        t.push(we(r)), T = m = null;
        for (ae in o) if (N.call(o, ae) && (R = o[ae], R != null)) switch (ae) {
          case "children":
            m = R;
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
            ee(ae) && typeof R != "function" && typeof R != "symbol" && t.push(ue, S(ae), te, S(le(R)), Q);
        }
        return t.push(ve), Se(t, T, m), m;
    }
  }
  var et = g("</"), Ze = g(">"), De = g('<template id="'), Yt = g('"></template>'), Xt = g("<!--$-->"), ur = g('<!--$?--><template id="'), Ct = g('"></template>'), bt = g("<!--$!-->"), zt = g("<!--/$-->"), $t = g("<template"), ot = g('"'), Tt = g(' data-dgst="');
  g(' data-msg="'), g(' data-stck="');
  var Zt = g("></template>");
  function qe(t, r, o) {
    if (f(t, ur), o === null) throw Error(s(395));
    return f(t, o), x(t, Ct);
  }
  var Kt = g('<div hidden id="'), tt = g('">'), ke = g("</div>"), At = g('<svg aria-hidden="true" style="display:none" id="'), Re = g('">'), rt = g("</svg>"), pt = g('<math aria-hidden="true" style="display:none" id="'), Rt = g('">'), it = g("</math>"), Jt = g('<table hidden id="'), jt = g('">'), Qt = g("</table>"), Pt = g('<table hidden><tbody id="'), Bt = g('">'), cr = g("</tbody></table>"), Ye = g('<table hidden><tr id="'), Ht = g('">'), Ot = g("</tr></table>"), er = g('<table hidden><colgroup id="'), It = g('">'), mt = g("</colgroup></table>");
  function at(t, r, o, u) {
    switch (o.insertionMode) {
      case 0:
      case 1:
        return f(t, Kt), f(t, r.segmentPrefix), f(t, S(u.toString(16))), x(t, tt);
      case 2:
        return f(t, At), f(t, r.segmentPrefix), f(t, S(u.toString(16))), x(t, Re);
      case 3:
        return f(t, pt), f(t, r.segmentPrefix), f(t, S(u.toString(16))), x(t, Rt);
      case 4:
        return f(t, Jt), f(t, r.segmentPrefix), f(t, S(u.toString(16))), x(t, jt);
      case 5:
        return f(t, Pt), f(t, r.segmentPrefix), f(t, S(u.toString(16))), x(t, Bt);
      case 6:
        return f(t, Ye), f(t, r.segmentPrefix), f(t, S(u.toString(16))), x(t, Ht);
      case 7:
        return f(
          t,
          er
        ), f(t, r.segmentPrefix), f(t, S(u.toString(16))), x(t, It);
      default:
        throw Error(s(397));
    }
  }
  function _t(t, r) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return x(t, ke);
      case 2:
        return x(t, rt);
      case 3:
        return x(t, it);
      case 4:
        return x(t, Qt);
      case 5:
        return x(t, cr);
      case 6:
        return x(t, Ot);
      case 7:
        return x(t, mt);
      default:
        throw Error(s(397));
    }
  }
  var pr = g('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Ut = g('$RS("'), Nt = g('","'), Mt = g('")<\/script>'), $ = g('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), d = g('$RC("'), b = g('","'), I = g('")<\/script>'), de = g('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ee = g('$RX("'), ze = g('"'), Me = g(")<\/script>"), st = g(","), Oe = /[<\u2028\u2029]/g;
  function ft(t) {
    return JSON.stringify(t).replace(Oe, function(r) {
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
  var yt = Object.assign, vr = Symbol.for("react.element"), tr = Symbol.for("react.portal"), rr = Symbol.for("react.fragment"), gr = Symbol.for("react.strict_mode"), Sr = Symbol.for("react.profiler"), wr = Symbol.for("react.provider"), fr = Symbol.for("react.context"), Nr = Symbol.for("react.forward_ref"), Mr = Symbol.for("react.suspense"), xr = Symbol.for("react.suspense_list"), e = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), a = Symbol.for("react.scope"), c = Symbol.for("react.debug_trace_mode"), v = Symbol.for("react.legacy_hidden"), h = Symbol.for("react.default_value"), E = Symbol.iterator;
  function O(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case rr:
        return "Fragment";
      case tr:
        return "Portal";
      case Sr:
        return "Profiler";
      case gr:
        return "StrictMode";
      case Mr:
        return "Suspense";
      case xr:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case fr:
        return (t.displayName || "Context") + ".Consumer";
      case wr:
        return (t._context.displayName || "Context") + ".Provider";
      case Nr:
        var r = t.render;
        return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case e:
        return r = t.displayName || null, r !== null ? r : O(t.type) || "Memo";
      case n:
        r = t._payload, t = t._init;
        try {
          return O(t(r));
        } catch {
        }
    }
    return null;
  }
  var X = {};
  function J(t, r) {
    if (t = t.contextTypes, !t) return X;
    var o = {}, u;
    for (u in t) o[u] = r[u];
    return o;
  }
  var re = null;
  function Ie(t, r) {
    if (t !== r) {
      t.context._currentValue = t.parentValue, t = t.parent;
      var o = r.parent;
      if (t === null) {
        if (o !== null) throw Error(s(401));
      } else {
        if (o === null) throw Error(s(401));
        Ie(t, o);
      }
      r.context._currentValue = r.value;
    }
  }
  function vt(t) {
    t.context._currentValue = t.parentValue, t = t.parent, t !== null && vt(t);
  }
  function gt(t) {
    var r = t.parent;
    r !== null && gt(r), t.context._currentValue = t.value;
  }
  function lt(t, r) {
    if (t.context._currentValue = t.parentValue, t = t.parent, t === null) throw Error(s(402));
    t.depth === r.depth ? Ie(t, r) : lt(t, r);
  }
  function nr(t, r) {
    var o = r.parent;
    if (o === null) throw Error(s(402));
    t.depth === o.depth ? Ie(t, o) : nr(t, o), r.context._currentValue = r.value;
  }
  function Dt(t) {
    var r = re;
    r !== t && (r === null ? gt(t) : t === null ? vt(r) : r.depth === t.depth ? Ie(r, t) : r.depth > t.depth ? lt(r, t) : nr(r, t), re = t);
  }
  var kr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(t, r) {
    t = t._reactInternals, t.queue !== null && t.queue.push(r);
  }, enqueueReplaceState: function(t, r) {
    t = t._reactInternals, t.replace = !0, t.queue = [r];
  }, enqueueForceUpdate: function() {
  } };
  function or(t, r, o, u) {
    var y = t.state !== void 0 ? t.state : null;
    t.updater = kr, t.props = o, t.state = y;
    var m = { queue: [], replace: !1 };
    t._reactInternals = m;
    var T = r.contextType;
    if (t.context = typeof T == "object" && T !== null ? T._currentValue : u, T = r.getDerivedStateFromProps, typeof T == "function" && (T = T(o, y), y = T == null ? y : yt({}, y, T), t.state = y), typeof r.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function")) if (r = t.state, typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && kr.enqueueReplaceState(t, t.state, null), m.queue !== null && 0 < m.queue.length) if (r = m.queue, T = m.replace, m.queue = null, m.replace = !1, T && r.length === 1) t.state = r[0];
    else {
      for (m = T ? r[0] : t.state, y = !0, T = T ? 1 : 0; T < r.length; T++) {
        var R = r[T];
        R = typeof R == "function" ? R.call(t, m, o, u) : R, R != null && (y ? (y = !1, m = yt({}, m, R)) : yt(m, R));
      }
      t.state = m;
    }
    else m.queue = null;
  }
  var Dr = { id: 1, overflow: "" };
  function Vt(t, r, o) {
    var u = t.id;
    t = t.overflow;
    var y = 32 - Fr(u) - 1;
    u &= ~(1 << y), o += 1;
    var m = 32 - Fr(r) + y;
    if (30 < m) {
      var T = y - y % 5;
      return m = (u & (1 << T) - 1).toString(32), u >>= T, y -= T, { id: 1 << 32 - Fr(r) + y | o << y | u, overflow: m + t };
    }
    return { id: 1 << m | o << y | u, overflow: t };
  }
  var Fr = Math.clz32 ? Math.clz32 : ti, Qo = Math.log, ei = Math.LN2;
  function ti(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Qo(t) / ei | 0) | 0;
  }
  function ri(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var ni = typeof Object.is == "function" ? Object.is : ri, Ft = null, sn = null, Lr = null, Ae = null, Er = !1, zr = !1, Tr = 0, Wt = null, $r = 0;
  function ir() {
    if (Ft === null) throw Error(s(321));
    return Ft;
  }
  function Vn() {
    if (0 < $r) throw Error(s(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function ln() {
    return Ae === null ? Lr === null ? (Er = !1, Lr = Ae = Vn()) : (Er = !0, Ae = Lr) : Ae.next === null ? (Er = !1, Ae = Ae.next = Vn()) : (Er = !0, Ae = Ae.next), Ae;
  }
  function un() {
    sn = Ft = null, zr = !1, Lr = null, $r = 0, Ae = Wt = null;
  }
  function Wn(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function Gn(t, r, o) {
    if (Ft = ir(), Ae = ln(), Er) {
      var u = Ae.queue;
      if (r = u.dispatch, Wt !== null && (o = Wt.get(u), o !== void 0)) {
        Wt.delete(u), u = Ae.memoizedState;
        do
          u = t(u, o.action), o = o.next;
        while (o !== null);
        return Ae.memoizedState = u, [u, r];
      }
      return [Ae.memoizedState, r];
    }
    return t = t === Wn ? typeof r == "function" ? r() : r : o !== void 0 ? o(r) : r, Ae.memoizedState = t, t = Ae.queue = { last: null, dispatch: null }, t = t.dispatch = oi.bind(null, Ft, t), [Ae.memoizedState, t];
  }
  function qn(t, r) {
    if (Ft = ir(), Ae = ln(), r = r === void 0 ? null : r, Ae !== null) {
      var o = Ae.memoizedState;
      if (o !== null && r !== null) {
        var u = o[1];
        e: if (u === null) u = !1;
        else {
          for (var y = 0; y < u.length && y < r.length; y++) if (!ni(r[y], u[y])) {
            u = !1;
            break e;
          }
          u = !0;
        }
        if (u) return o[0];
      }
    }
    return t = t(), Ae.memoizedState = [t, r], t;
  }
  function oi(t, r, o) {
    if (25 <= $r) throw Error(s(301));
    if (t === Ft) if (zr = !0, t = { action: o, next: null }, Wt === null && (Wt = /* @__PURE__ */ new Map()), o = Wt.get(r), o === void 0) Wt.set(r, t);
    else {
      for (r = o; r.next !== null; ) r = r.next;
      r.next = t;
    }
  }
  function ii() {
    throw Error(s(394));
  }
  function jr() {
  }
  var Yn = { readContext: function(t) {
    return t._currentValue;
  }, useContext: function(t) {
    return ir(), t._currentValue;
  }, useMemo: qn, useReducer: Gn, useRef: function(t) {
    Ft = ir(), Ae = ln();
    var r = Ae.memoizedState;
    return r === null ? (t = { current: t }, Ae.memoizedState = t) : r;
  }, useState: function(t) {
    return Gn(Wn, t);
  }, useInsertionEffect: jr, useLayoutEffect: function() {
  }, useCallback: function(t, r) {
    return qn(function() {
      return t;
    }, r);
  }, useImperativeHandle: jr, useEffect: jr, useDebugValue: jr, useDeferredValue: function(t) {
    return ir(), t;
  }, useTransition: function() {
    return ir(), [!1, ii];
  }, useId: function() {
    var t = sn.treeContext, r = t.overflow;
    t = t.id, t = (t & ~(1 << 32 - Fr(t) - 1)).toString(32) + r;
    var o = Br;
    if (o === null) throw Error(s(404));
    return r = Tr++, t = ":" + o.idPrefix + "R" + t, 0 < r && (t += "H" + r.toString(32)), t + ":";
  }, useMutableSource: function(t, r) {
    return ir(), r(t._source);
  }, useSyncExternalStore: function(t, r, o) {
    if (o === void 0) throw Error(s(407));
    return o();
  } }, Br = null, cn = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ai(t) {
    return console.error(t), null;
  }
  function _r() {
  }
  function si(t, r, o, u, y, m, T, R, Z) {
    var ae = [], oe = /* @__PURE__ */ new Set();
    return r = { destination: null, responseState: r, progressiveChunkSize: u === void 0 ? 12800 : u, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: oe, pingedTasks: ae, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: y === void 0 ? ai : y, onAllReady: m === void 0 ? _r : m, onShellReady: T === void 0 ? _r : T, onShellError: R === void 0 ? _r : R, onFatalError: Z === void 0 ? _r : Z }, o = Hr(r, 0, null, o, !1, !1), o.parentFlushed = !0, t = pn(r, t, null, o, oe, X, null, Dr), ae.push(t), r;
  }
  function pn(t, r, o, u, y, m, T, R) {
    t.allPendingTasks++, o === null ? t.pendingRootTasks++ : o.pendingTasks++;
    var Z = { node: r, ping: function() {
      var ae = t.pingedTasks;
      ae.push(Z), ae.length === 1 && to(t);
    }, blockedBoundary: o, blockedSegment: u, abortSet: y, legacyContext: m, context: T, treeContext: R };
    return y.add(Z), Z;
  }
  function Hr(t, r, o, u, y, m) {
    return { status: 0, id: -1, index: r, parentFlushed: !1, chunks: [], children: [], formatContext: u, boundary: o, lastPushedText: y, textEmbedded: m };
  }
  function Cr(t, r) {
    if (t = t.onError(r), t != null && typeof t != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function Ur(t, r) {
    var o = t.onShellError;
    o(r), o = t.onFatalError, o(r), t.destination !== null ? (t.status = 2, B(t.destination, r)) : (t.status = 1, t.fatalError = r);
  }
  function Xn(t, r, o, u, y) {
    for (Ft = {}, sn = r, Tr = 0, t = o(u, y); zr; ) zr = !1, Tr = 0, $r += 1, Ae = null, t = o(u, y);
    return un(), t;
  }
  function Zn(t, r, o, u) {
    var y = o.render(), m = u.childContextTypes;
    if (m != null) {
      var T = r.legacyContext;
      if (typeof o.getChildContext != "function") u = T;
      else {
        o = o.getChildContext();
        for (var R in o) if (!(R in m)) throw Error(s(108, O(u) || "Unknown", R));
        u = yt({}, T, o);
      }
      r.legacyContext = u, ut(t, r, y), r.legacyContext = T;
    } else ut(t, r, y);
  }
  function Kn(t, r) {
    if (t && t.defaultProps) {
      r = yt({}, r), t = t.defaultProps;
      for (var o in t) r[o] === void 0 && (r[o] = t[o]);
      return r;
    }
    return r;
  }
  function fn(t, r, o, u, y) {
    if (typeof o == "function") if (o.prototype && o.prototype.isReactComponent) {
      y = J(o, r.legacyContext);
      var m = o.contextType;
      m = new o(u, typeof m == "object" && m !== null ? m._currentValue : y), or(m, o, u, y), Zn(t, r, m, o);
    } else {
      m = J(o, r.legacyContext), y = Xn(t, r, o, u, m);
      var T = Tr !== 0;
      if (typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) or(y, o, u, m), Zn(t, r, y, o);
      else if (T) {
        u = r.treeContext, r.treeContext = Vt(u, 1, 0);
        try {
          ut(t, r, y);
        } finally {
          r.treeContext = u;
        }
      } else ut(t, r, y);
    }
    else if (typeof o == "string") {
      switch (y = r.blockedSegment, m = xe(y.chunks, o, u, t.responseState, y.formatContext), y.lastPushedText = !1, T = y.formatContext, y.formatContext = Xe(T, o, u), dn(t, r, m), y.formatContext = T, o) {
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
          y.chunks.push(et, S(o), Ze);
      }
      y.lastPushedText = !1;
    } else {
      switch (o) {
        case v:
        case c:
        case gr:
        case Sr:
        case rr:
          ut(t, r, u.children);
          return;
        case xr:
          ut(t, r, u.children);
          return;
        case a:
          throw Error(s(343));
        case Mr:
          e: {
            o = r.blockedBoundary, y = r.blockedSegment, m = u.fallback, u = u.children, T = /* @__PURE__ */ new Set();
            var R = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: T, errorDigest: null }, Z = Hr(t, y.chunks.length, R, y.formatContext, !1, !1);
            y.children.push(Z), y.lastPushedText = !1;
            var ae = Hr(t, 0, null, y.formatContext, !1, !1);
            ae.parentFlushed = !0, r.blockedBoundary = R, r.blockedSegment = ae;
            try {
              if (dn(
                t,
                r,
                u
              ), ae.lastPushedText && ae.textEmbedded && ae.chunks.push(L), ae.status = 1, Vr(R, ae), R.pendingTasks === 0) break e;
            } catch (oe) {
              ae.status = 4, R.forceClientRender = !0, R.errorDigest = Cr(t, oe);
            } finally {
              r.blockedBoundary = o, r.blockedSegment = y;
            }
            r = pn(t, m, o, Z, T, r.legacyContext, r.context, r.treeContext), t.pingedTasks.push(r);
          }
          return;
      }
      if (typeof o == "object" && o !== null) switch (o.$$typeof) {
        case Nr:
          if (u = Xn(t, r, o.render, u, y), Tr !== 0) {
            o = r.treeContext, r.treeContext = Vt(o, 1, 0);
            try {
              ut(t, r, u);
            } finally {
              r.treeContext = o;
            }
          } else ut(t, r, u);
          return;
        case e:
          o = o.type, u = Kn(o, u), fn(t, r, o, u, y);
          return;
        case wr:
          if (y = u.children, o = o._context, u = u.value, m = o._currentValue, o._currentValue = u, T = re, re = u = { parent: T, depth: T === null ? 0 : T.depth + 1, context: o, parentValue: m, value: u }, r.context = u, ut(t, r, y), t = re, t === null) throw Error(s(403));
          u = t.parentValue, t.context._currentValue = u === h ? t.context._defaultValue : u, t = re = t.parent, r.context = t;
          return;
        case fr:
          u = u.children, u = u(o._currentValue), ut(t, r, u);
          return;
        case n:
          y = o._init, o = y(o._payload), u = Kn(o, u), fn(t, r, o, u, void 0);
          return;
      }
      throw Error(s(
        130,
        o == null ? o : typeof o,
        ""
      ));
    }
  }
  function ut(t, r, o) {
    if (r.node = o, typeof o == "object" && o !== null) {
      switch (o.$$typeof) {
        case vr:
          fn(t, r, o.type, o.props, o.ref);
          return;
        case tr:
          throw Error(s(257));
        case n:
          var u = o._init;
          o = u(o._payload), ut(t, r, o);
          return;
      }
      if (ge(o)) {
        Jn(t, r, o);
        return;
      }
      if (o === null || typeof o != "object" ? u = null : (u = E && o[E] || o["@@iterator"], u = typeof u == "function" ? u : null), u && (u = u.call(o))) {
        if (o = u.next(), !o.done) {
          var y = [];
          do
            y.push(o.value), o = u.next();
          while (!o.done);
          Jn(t, r, y);
        }
        return;
      }
      throw t = Object.prototype.toString.call(o), Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : t));
    }
    typeof o == "string" ? (u = r.blockedSegment, u.lastPushedText = P(r.blockedSegment.chunks, o, t.responseState, u.lastPushedText)) : typeof o == "number" && (u = r.blockedSegment, u.lastPushedText = P(r.blockedSegment.chunks, "" + o, t.responseState, u.lastPushedText));
  }
  function Jn(t, r, o) {
    for (var u = o.length, y = 0; y < u; y++) {
      var m = r.treeContext;
      r.treeContext = Vt(m, u, y);
      try {
        dn(t, r, o[y]);
      } finally {
        r.treeContext = m;
      }
    }
  }
  function dn(t, r, o) {
    var u = r.blockedSegment.formatContext, y = r.legacyContext, m = r.context;
    try {
      return ut(t, r, o);
    } catch (Z) {
      if (un(), typeof Z == "object" && Z !== null && typeof Z.then == "function") {
        o = Z;
        var T = r.blockedSegment, R = Hr(t, T.chunks.length, null, T.formatContext, T.lastPushedText, !0);
        T.children.push(R), T.lastPushedText = !1, t = pn(t, r.node, r.blockedBoundary, R, r.abortSet, r.legacyContext, r.context, r.treeContext).ping, o.then(t, t), r.blockedSegment.formatContext = u, r.legacyContext = y, r.context = m, Dt(m);
      } else throw r.blockedSegment.formatContext = u, r.legacyContext = y, r.context = m, Dt(m), Z;
    }
  }
  function li(t) {
    var r = t.blockedBoundary;
    t = t.blockedSegment, t.status = 3, eo(this, r, t);
  }
  function Qn(t, r, o) {
    var u = t.blockedBoundary;
    t.blockedSegment.status = 3, u === null ? (r.allPendingTasks--, r.status !== 2 && (r.status = 2, r.destination !== null && r.destination.close())) : (u.pendingTasks--, u.forceClientRender || (u.forceClientRender = !0, t = o === void 0 ? Error(s(432)) : o, u.errorDigest = r.onError(t), u.parentFlushed && r.clientRenderedBoundaries.push(u)), u.fallbackAbortableTasks.forEach(function(y) {
      return Qn(y, r, o);
    }), u.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0 && (u = r.onAllReady, u()));
  }
  function Vr(t, r) {
    if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
      var o = r.children[0];
      o.id = r.id, o.parentFlushed = !0, o.status === 1 && Vr(t, o);
    } else t.completedSegments.push(r);
  }
  function eo(t, r, o) {
    if (r === null) {
      if (o.parentFlushed) {
        if (t.completedRootSegment !== null) throw Error(s(389));
        t.completedRootSegment = o;
      }
      t.pendingRootTasks--, t.pendingRootTasks === 0 && (t.onShellError = _r, r = t.onShellReady, r());
    } else r.pendingTasks--, r.forceClientRender || (r.pendingTasks === 0 ? (o.parentFlushed && o.status === 1 && Vr(r, o), r.parentFlushed && t.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(li, t), r.fallbackAbortableTasks.clear()) : o.parentFlushed && o.status === 1 && (Vr(r, o), r.completedSegments.length === 1 && r.parentFlushed && t.partialBoundaries.push(r)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function to(t) {
    if (t.status !== 2) {
      var r = re, o = cn.current;
      cn.current = Yn;
      var u = Br;
      Br = t.responseState;
      try {
        var y = t.pingedTasks, m;
        for (m = 0; m < y.length; m++) {
          var T = y[m], R = t, Z = T.blockedSegment;
          if (Z.status === 0) {
            Dt(T.context);
            try {
              ut(R, T, T.node), Z.lastPushedText && Z.textEmbedded && Z.chunks.push(L), T.abortSet.delete(T), Z.status = 1, eo(R, T.blockedBoundary, Z);
            } catch (wt) {
              if (un(), typeof wt == "object" && wt !== null && typeof wt.then == "function") {
                var ae = T.ping;
                wt.then(ae, ae);
              } else {
                T.abortSet.delete(T), Z.status = 4;
                var oe = T.blockedBoundary, Pe = wt, ct = Cr(R, Pe);
                if (oe === null ? Ur(R, Pe) : (oe.pendingTasks--, oe.forceClientRender || (oe.forceClientRender = !0, oe.errorDigest = ct, oe.parentFlushed && R.clientRenderedBoundaries.push(oe))), R.allPendingTasks--, R.allPendingTasks === 0) {
                  var St = R.onAllReady;
                  St();
                }
              }
            } finally {
            }
          }
        }
        y.splice(0, m), t.destination !== null && hn(t, t.destination);
      } catch (wt) {
        Cr(t, wt), Ur(t, wt);
      } finally {
        Br = u, cn.current = o, o === Yn && Dt(r);
      }
    }
  }
  function Wr(t, r, o) {
    switch (o.parentFlushed = !0, o.status) {
      case 0:
        var u = o.id = t.nextSegmentId++;
        return o.lastPushedText = !1, o.textEmbedded = !1, t = t.responseState, f(r, De), f(r, t.placeholderPrefix), t = S(u.toString(16)), f(r, t), x(r, Yt);
      case 1:
        o.status = 2;
        var y = !0;
        u = o.chunks;
        var m = 0;
        o = o.children;
        for (var T = 0; T < o.length; T++) {
          for (y = o[T]; m < y.index; m++) f(r, u[m]);
          y = Gr(t, r, y);
        }
        for (; m < u.length - 1; m++) f(r, u[m]);
        return m < u.length && (y = x(r, u[m])), y;
      default:
        throw Error(s(390));
    }
  }
  function Gr(t, r, o) {
    var u = o.boundary;
    if (u === null) return Wr(t, r, o);
    if (u.parentFlushed = !0, u.forceClientRender) u = u.errorDigest, x(r, bt), f(r, $t), u && (f(r, Tt), f(r, S(le(u))), f(r, ot)), x(r, Zt), Wr(t, r, o);
    else if (0 < u.pendingTasks) {
      u.rootSegmentID = t.nextSegmentId++, 0 < u.completedSegments.length && t.partialBoundaries.push(u);
      var y = t.responseState, m = y.nextSuspenseID++;
      y = g(y.boundaryPrefix + m.toString(16)), u = u.id = y, qe(r, t.responseState, u), Wr(t, r, o);
    } else if (u.byteSize > t.progressiveChunkSize) u.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(u), qe(r, t.responseState, u.id), Wr(t, r, o);
    else {
      if (x(r, Xt), o = u.completedSegments, o.length !== 1) throw Error(s(391));
      Gr(t, r, o[0]);
    }
    return x(r, zt);
  }
  function ro(t, r, o) {
    return at(r, t.responseState, o.formatContext, o.id), Gr(t, r, o), _t(r, o.formatContext);
  }
  function no(t, r, o) {
    for (var u = o.completedSegments, y = 0; y < u.length; y++) oo(t, r, o, u[y]);
    if (u.length = 0, t = t.responseState, u = o.id, o = o.rootSegmentID, f(r, t.startInlineScript), t.sentCompleteBoundaryFunction ? f(r, d) : (t.sentCompleteBoundaryFunction = !0, f(r, $)), u === null) throw Error(s(395));
    return o = S(o.toString(16)), f(r, u), f(r, b), f(r, t.segmentPrefix), f(r, o), x(r, I);
  }
  function oo(t, r, o, u) {
    if (u.status === 2) return !0;
    var y = u.id;
    if (y === -1) {
      if ((u.id = o.rootSegmentID) === -1) throw Error(s(392));
      return ro(t, r, u);
    }
    return ro(t, r, u), t = t.responseState, f(r, t.startInlineScript), t.sentCompleteSegmentFunction ? f(r, Ut) : (t.sentCompleteSegmentFunction = !0, f(r, pr)), f(r, t.segmentPrefix), y = S(y.toString(16)), f(r, y), f(r, Nt), f(r, t.placeholderPrefix), f(r, y), x(r, Mt);
  }
  function hn(t, r) {
    l = new Uint8Array(512), p = 0;
    try {
      var o = t.completedRootSegment;
      if (o !== null && t.pendingRootTasks === 0) {
        Gr(t, r, o), t.completedRootSegment = null;
        var u = t.responseState.bootstrapChunks;
        for (o = 0; o < u.length - 1; o++) f(r, u[o]);
        o < u.length && x(r, u[o]);
      }
      var y = t.clientRenderedBoundaries, m;
      for (m = 0; m < y.length; m++) {
        var T = y[m];
        u = r;
        var R = t.responseState, Z = T.id, ae = T.errorDigest, oe = T.errorMessage, Pe = T.errorComponentStack;
        if (f(u, R.startInlineScript), R.sentClientRenderFunction ? f(u, Ee) : (R.sentClientRenderFunction = !0, f(
          u,
          de
        )), Z === null) throw Error(s(395));
        f(u, Z), f(u, ze), (ae || oe || Pe) && (f(u, st), f(u, S(ft(ae || "")))), (oe || Pe) && (f(u, st), f(u, S(ft(oe || "")))), Pe && (f(u, st), f(u, S(ft(Pe)))), x(u, Me);
      }
      y.splice(0, m);
      var ct = t.completedBoundaries;
      for (m = 0; m < ct.length; m++) no(t, r, ct[m]);
      ct.splice(0, m), k(r), l = new Uint8Array(512), p = 0;
      var St = t.partialBoundaries;
      for (m = 0; m < St.length; m++) {
        var wt = St[m];
        e: {
          y = t, T = r;
          var qr = wt.completedSegments;
          for (R = 0; R < qr.length; R++) if (!oo(
            y,
            T,
            wt,
            qr[R]
          )) {
            R++, qr.splice(0, R);
            var ao = !1;
            break e;
          }
          qr.splice(0, R), ao = !0;
        }
        if (!ao) {
          t.destination = null, m++, St.splice(0, m);
          return;
        }
      }
      St.splice(0, m);
      var mn = t.completedBoundaries;
      for (m = 0; m < mn.length; m++) no(t, r, mn[m]);
      mn.splice(0, m);
    } finally {
      k(r), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && r.close();
    }
  }
  function io(t, r) {
    try {
      var o = t.abortableTasks;
      o.forEach(function(u) {
        return Qn(u, t, r);
      }), o.clear(), t.destination !== null && hn(t, t.destination);
    } catch (u) {
      Cr(t, u), Ur(t, u);
    }
  }
  return Yr.renderToReadableStream = function(t, r) {
    return new Promise(function(o, u) {
      var y, m, T = new Promise(function(oe, Pe) {
        m = oe, y = Pe;
      }), R = si(t, $e(r ? r.identifierPrefix : void 0, r ? r.nonce : void 0, r ? r.bootstrapScriptContent : void 0, r ? r.bootstrapScripts : void 0, r ? r.bootstrapModules : void 0), Je(r ? r.namespaceURI : void 0), r ? r.progressiveChunkSize : void 0, r ? r.onError : void 0, m, function() {
        var oe = new ReadableStream({ type: "bytes", pull: function(Pe) {
          if (R.status === 1) R.status = 2, B(Pe, R.fatalError);
          else if (R.status !== 2 && R.destination === null) {
            R.destination = Pe;
            try {
              hn(R, Pe);
            } catch (ct) {
              Cr(R, ct), Ur(R, ct);
            }
          }
        }, cancel: function() {
          io(R);
        } }, { highWaterMark: 0 });
        oe.allReady = T, o(oe);
      }, function(oe) {
        T.catch(function() {
        }), u(oe);
      }, y);
      if (r && r.signal) {
        var Z = r.signal, ae = function() {
          io(R, Z.reason), Z.removeEventListener("abort", ae);
        };
        Z.addEventListener("abort", ae);
      }
      to(R);
    });
  }, Yr.version = "18.3.1", Yr;
}
var mr, Lo;
mr = Si(), Lo = wi();
mr.version;
mr.renderToString;
mr.renderToStaticMarkup;
mr.renderToNodeStream;
mr.renderToStaticNodeStream;
Lo.renderToReadableStream;
const xi = "staticMarkup";
function zo() {
  const s = ui().indexOf(xi) > -1 ? !0 : void 0;
  return {
    isBootstrap: s,
    isReact: s ? void 0 : !0
  };
}
function Gt(i) {
  "@babel/helpers - typeof";
  return Gt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
    return typeof s;
  } : function(s) {
    return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
  }, Gt(i);
}
function An(i, s) {
  return An = Object.setPrototypeOf || function(p, f) {
    return p.__proto__ = f, p;
  }, An(i, s);
}
function ki() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function en(i, s, l) {
  return ki() ? en = Reflect.construct : en = function(f, x, k) {
    var _ = [null];
    _.push.apply(_, x);
    var S = Function.bind.apply(f, _), g = new S();
    return k && An(g, k.prototype), g;
  }, en.apply(null, arguments);
}
function kt(i) {
  return Ei(i) || Ti(i) || _i(i) || Ci();
}
function Ei(i) {
  if (Array.isArray(i)) return Rn(i);
}
function Ti(i) {
  if (typeof Symbol < "u" && i[Symbol.iterator] != null || i["@@iterator"] != null) return Array.from(i);
}
function _i(i, s) {
  if (i) {
    if (typeof i == "string") return Rn(i, s);
    var l = Object.prototype.toString.call(i).slice(8, -1);
    if (l === "Object" && i.constructor && (l = i.constructor.name), l === "Map" || l === "Set") return Array.from(i);
    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return Rn(i, s);
  }
}
function Rn(i, s) {
  (s == null || s > i.length) && (s = i.length);
  for (var l = 0, p = new Array(s); l < s; l++) p[l] = i[l];
  return p;
}
function Ci() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var bi = Object.hasOwnProperty, mo = Object.setPrototypeOf, Ai = Object.isFrozen, Ri = Object.getPrototypeOf, Pi = Object.getOwnPropertyDescriptor, Ke = Object.freeze, dt = Object.seal, Oi = Object.create, $o = typeof Reflect < "u" && Reflect, nn = $o.apply, Pn = $o.construct;
nn || (nn = function(s, l, p) {
  return s.apply(l, p);
});
Ke || (Ke = function(s) {
  return s;
});
dt || (dt = function(s) {
  return s;
});
Pn || (Pn = function(s, l) {
  return en(s, kt(l));
});
var Ii = ht(Array.prototype.forEach), yo = ht(Array.prototype.pop), Rr = ht(Array.prototype.push), tn = ht(String.prototype.toLowerCase), wn = ht(String.prototype.toString), vo = ht(String.prototype.match), xt = ht(String.prototype.replace), Ni = ht(String.prototype.indexOf), Mi = ht(String.prototype.trim), Ge = ht(RegExp.prototype.test), xn = Di(TypeError);
function ht(i) {
  return function(s) {
    for (var l = arguments.length, p = new Array(l > 1 ? l - 1 : 0), f = 1; f < l; f++)
      p[f - 1] = arguments[f];
    return nn(i, s, p);
  };
}
function Di(i) {
  return function() {
    for (var s = arguments.length, l = new Array(s), p = 0; p < s; p++)
      l[p] = arguments[p];
    return Pn(i, l);
  };
}
function ie(i, s, l) {
  var p;
  l = (p = l) !== null && p !== void 0 ? p : tn, mo && mo(i, null);
  for (var f = s.length; f--; ) {
    var x = s[f];
    if (typeof x == "string") {
      var k = l(x);
      k !== x && (Ai(s) || (s[f] = k), x = k);
    }
    i[x] = !0;
  }
  return i;
}
function sr(i) {
  var s = Oi(null), l;
  for (l in i)
    nn(bi, i, [l]) === !0 && (s[l] = i[l]);
  return s;
}
function Xr(i, s) {
  for (; i !== null; ) {
    var l = Pi(i, s);
    if (l) {
      if (l.get)
        return ht(l.get);
      if (typeof l.value == "function")
        return ht(l.value);
    }
    i = Ri(i);
  }
  function p(f) {
    return console.warn("fallback value for", f), null;
  }
  return p;
}
var go = Ke(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), kn = Ke(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), En = Ke(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Fi = Ke(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Tn = Ke(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Li = Ke(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), So = Ke(["#text"]), wo = Ke(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), _n = Ke(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), xo = Ke(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Zr = Ke(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), zi = dt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), $i = dt(/<%[\w\W]*|[\w\W]*%>/gm), ji = dt(/\${[\w\W]*}/gm), Bi = dt(/^data-[\-\w.\u00B7-\uFFFF]/), Hi = dt(/^aria-[\-\w]+$/), Ui = dt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Vi = dt(/^(?:\w+script|data):/i), Wi = dt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Gi = dt(/^html$/i), qi = dt(/^[a-z][.\w]*(-[.\w]+)+$/i), Yi = function() {
  return typeof window > "u" ? null : window;
}, Xi = function(s, l) {
  if (Gt(s) !== "object" || typeof s.createPolicy != "function")
    return null;
  var p = null, f = "data-tt-policy-suffix";
  l.currentScript && l.currentScript.hasAttribute(f) && (p = l.currentScript.getAttribute(f));
  var x = "dompurify" + (p ? "#" + p : "");
  try {
    return s.createPolicy(x, {
      createHTML: function(_) {
        return _;
      },
      createScriptURL: function(_) {
        return _;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + x + " could not be created."), null;
  }
};
function jo() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Yi(), s = function(d) {
    return jo(d);
  };
  if (s.version = "2.5.7", s.removed = [], !i || !i.document || i.document.nodeType !== 9)
    return s.isSupported = !1, s;
  var l = i.document, p = i.document, f = i.DocumentFragment, x = i.HTMLTemplateElement, k = i.Node, _ = i.Element, S = i.NodeFilter, g = i.NamedNodeMap, B = g === void 0 ? i.NamedNodeMap || i.MozNamedAttrMap : g, N = i.HTMLFormElement, se = i.DOMParser, K = i.trustedTypes, D = _.prototype, ee = Xr(D, "cloneNode"), F = Xr(D, "nextSibling"), U = Xr(D, "childNodes"), j = Xr(D, "parentNode");
  if (typeof x == "function") {
    var W = p.createElement("template");
    W.content && W.content.ownerDocument && (p = W.content.ownerDocument);
  }
  var V = Xi(K, l), C = V ? V.createHTML("") : "", fe = p, le = fe.implementation, Fe = fe.createNodeIterator, Y = fe.createDocumentFragment, ge = fe.getElementsByTagName, Ve = l.importNode, me = {};
  try {
    me = sr(p).documentMode ? p.documentMode : {};
  } catch {
  }
  var ye = {};
  s.isSupported = typeof j == "function" && le && le.createHTMLDocument !== void 0 && me !== 9;
  var Le = zi, Ne = $i, nt = ji, We = Bi, $e = Hi, je = Vi, Je = Wi, Xe = qi, L = Ui, P = null, M = ie({}, [].concat(kt(go), kt(kn), kt(En), kt(Tn), kt(So))), z = null, w = ie({}, [].concat(kt(wo), kt(_n), kt(xo), kt(Zr))), H = Object.seal(Object.create(null, {
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
  })), A = null, ue = null, te = !0, Q = !0, q = !1, ce = !0, ve = !1, ne = !0, Se = !1, pe = !1, be = !1, Be = !1, Ce = !1, Qe = !1, He = !0, we = !1, G = "user-content-", xe = !0, et = !1, Ze = {}, De = null, Yt = ie({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Xt = null, ur = ie({}, ["audio", "video", "img", "source", "image", "track"]), Ct = null, bt = ie({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), zt = "http://www.w3.org/1998/Math/MathML", $t = "http://www.w3.org/2000/svg", ot = "http://www.w3.org/1999/xhtml", Tt = ot, Zt = !1, qe = null, Kt = ie({}, [zt, $t, ot], wn), tt, ke = ["application/xhtml+xml", "text/html"], At = "text/html", Re, rt = null, pt = p.createElement("form"), Rt = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, it = function(d) {
    rt && rt === d || ((!d || Gt(d) !== "object") && (d = {}), d = sr(d), tt = // eslint-disable-next-line unicorn/prefer-includes
    ke.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? tt = At : tt = d.PARSER_MEDIA_TYPE, Re = tt === "application/xhtml+xml" ? wn : tn, P = "ALLOWED_TAGS" in d ? ie({}, d.ALLOWED_TAGS, Re) : M, z = "ALLOWED_ATTR" in d ? ie({}, d.ALLOWED_ATTR, Re) : w, qe = "ALLOWED_NAMESPACES" in d ? ie({}, d.ALLOWED_NAMESPACES, wn) : Kt, Ct = "ADD_URI_SAFE_ATTR" in d ? ie(
      sr(bt),
      // eslint-disable-line indent
      d.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      Re
      // eslint-disable-line indent
    ) : bt, Xt = "ADD_DATA_URI_TAGS" in d ? ie(
      sr(ur),
      // eslint-disable-line indent
      d.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      Re
      // eslint-disable-line indent
    ) : ur, De = "FORBID_CONTENTS" in d ? ie({}, d.FORBID_CONTENTS, Re) : Yt, A = "FORBID_TAGS" in d ? ie({}, d.FORBID_TAGS, Re) : {}, ue = "FORBID_ATTR" in d ? ie({}, d.FORBID_ATTR, Re) : {}, Ze = "USE_PROFILES" in d ? d.USE_PROFILES : !1, te = d.ALLOW_ARIA_ATTR !== !1, Q = d.ALLOW_DATA_ATTR !== !1, q = d.ALLOW_UNKNOWN_PROTOCOLS || !1, ce = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ve = d.SAFE_FOR_TEMPLATES || !1, ne = d.SAFE_FOR_XML !== !1, Se = d.WHOLE_DOCUMENT || !1, Be = d.RETURN_DOM || !1, Ce = d.RETURN_DOM_FRAGMENT || !1, Qe = d.RETURN_TRUSTED_TYPE || !1, be = d.FORCE_BODY || !1, He = d.SANITIZE_DOM !== !1, we = d.SANITIZE_NAMED_PROPS || !1, xe = d.KEEP_CONTENT !== !1, et = d.IN_PLACE || !1, L = d.ALLOWED_URI_REGEXP || L, Tt = d.NAMESPACE || ot, H = d.CUSTOM_ELEMENT_HANDLING || {}, d.CUSTOM_ELEMENT_HANDLING && Rt(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (H.tagNameCheck = d.CUSTOM_ELEMENT_HANDLING.tagNameCheck), d.CUSTOM_ELEMENT_HANDLING && Rt(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (H.attributeNameCheck = d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), d.CUSTOM_ELEMENT_HANDLING && typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (H.allowCustomizedBuiltInElements = d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ve && (Q = !1), Ce && (Be = !0), Ze && (P = ie({}, kt(So)), z = [], Ze.html === !0 && (ie(P, go), ie(z, wo)), Ze.svg === !0 && (ie(P, kn), ie(z, _n), ie(z, Zr)), Ze.svgFilters === !0 && (ie(P, En), ie(z, _n), ie(z, Zr)), Ze.mathMl === !0 && (ie(P, Tn), ie(z, xo), ie(z, Zr))), d.ADD_TAGS && (P === M && (P = sr(P)), ie(P, d.ADD_TAGS, Re)), d.ADD_ATTR && (z === w && (z = sr(z)), ie(z, d.ADD_ATTR, Re)), d.ADD_URI_SAFE_ATTR && ie(Ct, d.ADD_URI_SAFE_ATTR, Re), d.FORBID_CONTENTS && (De === Yt && (De = sr(De)), ie(De, d.FORBID_CONTENTS, Re)), xe && (P["#text"] = !0), Se && ie(P, ["html", "head", "body"]), P.table && (ie(P, ["tbody"]), delete A.tbody), Ke && Ke(d), rt = d);
  }, Jt = ie({}, ["mi", "mo", "mn", "ms", "mtext"]), jt = ie({}, ["annotation-xml"]), Qt = ie({}, ["title", "style", "font", "a", "script"]), Pt = ie({}, kn);
  ie(Pt, En), ie(Pt, Fi);
  var Bt = ie({}, Tn);
  ie(Bt, Li);
  var cr = function(d) {
    var b = j(d);
    (!b || !b.tagName) && (b = {
      namespaceURI: Tt,
      tagName: "template"
    });
    var I = tn(d.tagName), de = tn(b.tagName);
    return qe[d.namespaceURI] ? d.namespaceURI === $t ? b.namespaceURI === ot ? I === "svg" : b.namespaceURI === zt ? I === "svg" && (de === "annotation-xml" || Jt[de]) : !!Pt[I] : d.namespaceURI === zt ? b.namespaceURI === ot ? I === "math" : b.namespaceURI === $t ? I === "math" && jt[de] : !!Bt[I] : d.namespaceURI === ot ? b.namespaceURI === $t && !jt[de] || b.namespaceURI === zt && !Jt[de] ? !1 : !Bt[I] && (Qt[I] || !Pt[I]) : !!(tt === "application/xhtml+xml" && qe[d.namespaceURI]) : !1;
  }, Ye = function(d) {
    Rr(s.removed, {
      element: d
    });
    try {
      d.parentNode.removeChild(d);
    } catch {
      try {
        d.outerHTML = C;
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
    if (b.removeAttribute(d), d === "is" && !z[d])
      if (Be || Ce)
        try {
          Ye(b);
        } catch {
        }
      else
        try {
          b.setAttribute(d, "");
        } catch {
        }
  }, Ot = function(d) {
    var b, I;
    if (be)
      d = "<remove></remove>" + d;
    else {
      var de = vo(d, /^[\r\n\t ]+/);
      I = de && de[0];
    }
    tt === "application/xhtml+xml" && Tt === ot && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    var Ee = V ? V.createHTML(d) : d;
    if (Tt === ot)
      try {
        b = new se().parseFromString(Ee, tt);
      } catch {
      }
    if (!b || !b.documentElement) {
      b = le.createDocument(Tt, "template", null);
      try {
        b.documentElement.innerHTML = Zt ? C : Ee;
      } catch {
      }
    }
    var ze = b.body || b.documentElement;
    return d && I && ze.insertBefore(p.createTextNode(I), ze.childNodes[0] || null), Tt === ot ? ge.call(b, Se ? "html" : "body")[0] : Se ? b.documentElement : ze;
  }, er = function(d) {
    return Fe.call(
      d.ownerDocument || d,
      d,
      // eslint-disable-next-line no-bitwise
      S.SHOW_ELEMENT | S.SHOW_COMMENT | S.SHOW_TEXT | S.SHOW_PROCESSING_INSTRUCTION | S.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, It = function(d) {
    return d instanceof N && (typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || !(d.attributes instanceof B) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function");
  }, mt = function(d) {
    return Gt(k) === "object" ? d instanceof k : d && Gt(d) === "object" && typeof d.nodeType == "number" && typeof d.nodeName == "string";
  }, at = function(d, b, I) {
    ye[d] && Ii(ye[d], function(de) {
      de.call(s, b, I, rt);
    });
  }, _t = function(d) {
    var b;
    if (at("beforeSanitizeElements", d, null), It(d) || Ge(/[\u0080-\uFFFF]/, d.nodeName))
      return Ye(d), !0;
    var I = Re(d.nodeName);
    if (at("uponSanitizeElement", d, {
      tagName: I,
      allowedTags: P
    }), d.hasChildNodes() && !mt(d.firstElementChild) && (!mt(d.content) || !mt(d.content.firstElementChild)) && Ge(/<[/\w]/g, d.innerHTML) && Ge(/<[/\w]/g, d.textContent) || I === "select" && Ge(/<template/i, d.innerHTML) || d.nodeType === 7 || ne && d.nodeType === 8 && Ge(/<[/\w]/g, d.data))
      return Ye(d), !0;
    if (!P[I] || A[I]) {
      if (!A[I] && Ut(I) && (H.tagNameCheck instanceof RegExp && Ge(H.tagNameCheck, I) || H.tagNameCheck instanceof Function && H.tagNameCheck(I)))
        return !1;
      if (xe && !De[I]) {
        var de = j(d) || d.parentNode, Ee = U(d) || d.childNodes;
        if (Ee && de)
          for (var ze = Ee.length, Me = ze - 1; Me >= 0; --Me) {
            var st = ee(Ee[Me], !0);
            st.__removalCount = (d.__removalCount || 0) + 1, de.insertBefore(st, F(d));
          }
      }
      return Ye(d), !0;
    }
    return d instanceof _ && !cr(d) || (I === "noscript" || I === "noembed" || I === "noframes") && Ge(/<\/no(script|embed|frames)/i, d.innerHTML) ? (Ye(d), !0) : (ve && d.nodeType === 3 && (b = d.textContent, b = xt(b, Le, " "), b = xt(b, Ne, " "), b = xt(b, nt, " "), d.textContent !== b && (Rr(s.removed, {
      element: d.cloneNode()
    }), d.textContent = b)), at("afterSanitizeElements", d, null), !1);
  }, pr = function(d, b, I) {
    if (He && (b === "id" || b === "name") && (I in p || I in pt))
      return !1;
    if (!(Q && !ue[b] && Ge(We, b))) {
      if (!(te && Ge($e, b))) {
        if (!z[b] || ue[b]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ut(d) && (H.tagNameCheck instanceof RegExp && Ge(H.tagNameCheck, d) || H.tagNameCheck instanceof Function && H.tagNameCheck(d)) && (H.attributeNameCheck instanceof RegExp && Ge(H.attributeNameCheck, b) || H.attributeNameCheck instanceof Function && H.attributeNameCheck(b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            b === "is" && H.allowCustomizedBuiltInElements && (H.tagNameCheck instanceof RegExp && Ge(H.tagNameCheck, I) || H.tagNameCheck instanceof Function && H.tagNameCheck(I)))
          ) return !1;
        } else if (!Ct[b]) {
          if (!Ge(L, xt(I, Je, ""))) {
            if (!((b === "src" || b === "xlink:href" || b === "href") && d !== "script" && Ni(I, "data:") === 0 && Xt[d])) {
              if (!(q && !Ge(je, xt(I, Je, "")))) {
                if (I)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ut = function(d) {
    return d !== "annotation-xml" && vo(d, Xe);
  }, Nt = function(d) {
    var b, I, de, Ee;
    at("beforeSanitizeAttributes", d, null);
    var ze = d.attributes;
    if (ze) {
      var Me = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: z
      };
      for (Ee = ze.length; Ee--; ) {
        b = ze[Ee];
        var st = b, Oe = st.name, ft = st.namespaceURI;
        if (I = Oe === "value" ? b.value : Mi(b.value), de = Re(Oe), Me.attrName = de, Me.attrValue = I, Me.keepAttr = !0, Me.forceKeepAttr = void 0, at("uponSanitizeAttribute", d, Me), I = Me.attrValue, !Me.forceKeepAttr && (Ht(Oe, d), !!Me.keepAttr)) {
          if (!ce && Ge(/\/>/i, I)) {
            Ht(Oe, d);
            continue;
          }
          ve && (I = xt(I, Le, " "), I = xt(I, Ne, " "), I = xt(I, nt, " "));
          var yt = Re(d.nodeName);
          if (pr(yt, de, I)) {
            if (we && (de === "id" || de === "name") && (Ht(Oe, d), I = G + I), ne && Ge(/((--!?|])>)|<\/(style|title)/i, I)) {
              Ht(Oe, d);
              continue;
            }
            if (V && Gt(K) === "object" && typeof K.getAttributeType == "function" && !ft)
              switch (K.getAttributeType(yt, de)) {
                case "TrustedHTML": {
                  I = V.createHTML(I);
                  break;
                }
                case "TrustedScriptURL": {
                  I = V.createScriptURL(I);
                  break;
                }
              }
            try {
              ft ? d.setAttributeNS(ft, Oe, I) : d.setAttribute(Oe, I), It(d) ? Ye(d) : yo(s.removed);
            } catch {
            }
          }
        }
      }
      at("afterSanitizeAttributes", d, null);
    }
  }, Mt = function $(d) {
    var b, I = er(d);
    for (at("beforeSanitizeShadowDOM", d, null); b = I.nextNode(); )
      at("uponSanitizeShadowNode", b, null), !_t(b) && (b.content instanceof f && $(b.content), Nt(b));
    at("afterSanitizeShadowDOM", d, null);
  };
  return s.sanitize = function($) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b, I, de, Ee, ze;
    if (Zt = !$, Zt && ($ = "<!-->"), typeof $ != "string" && !mt($))
      if (typeof $.toString == "function") {
        if ($ = $.toString(), typeof $ != "string")
          throw xn("dirty is not a string, aborting");
      } else
        throw xn("toString is not a function");
    if (!s.isSupported) {
      if (Gt(i.toStaticHTML) === "object" || typeof i.toStaticHTML == "function") {
        if (typeof $ == "string")
          return i.toStaticHTML($);
        if (mt($))
          return i.toStaticHTML($.outerHTML);
      }
      return $;
    }
    if (pe || it(d), s.removed = [], typeof $ == "string" && (et = !1), et) {
      if ($.nodeName) {
        var Me = Re($.nodeName);
        if (!P[Me] || A[Me])
          throw xn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if ($ instanceof k)
      b = Ot("<!---->"), I = b.ownerDocument.importNode($, !0), I.nodeType === 1 && I.nodeName === "BODY" || I.nodeName === "HTML" ? b = I : b.appendChild(I);
    else {
      if (!Be && !ve && !Se && // eslint-disable-next-line unicorn/prefer-includes
      $.indexOf("<") === -1)
        return V && Qe ? V.createHTML($) : $;
      if (b = Ot($), !b)
        return Be ? null : Qe ? C : "";
    }
    b && be && Ye(b.firstChild);
    for (var st = er(et ? $ : b); de = st.nextNode(); )
      de.nodeType === 3 && de === Ee || _t(de) || (de.content instanceof f && Mt(de.content), Nt(de), Ee = de);
    if (Ee = null, et)
      return $;
    if (Be) {
      if (Ce)
        for (ze = Y.call(b.ownerDocument); b.firstChild; )
          ze.appendChild(b.firstChild);
      else
        ze = b;
      return (z.shadowroot || z.shadowrootmod) && (ze = Ve.call(l, ze, !0)), ze;
    }
    var Oe = Se ? b.outerHTML : b.innerHTML;
    return Se && P["!doctype"] && b.ownerDocument && b.ownerDocument.doctype && b.ownerDocument.doctype.name && Ge(Gi, b.ownerDocument.doctype.name) && (Oe = "<!DOCTYPE " + b.ownerDocument.doctype.name + `>
` + Oe), ve && (Oe = xt(Oe, Le, " "), Oe = xt(Oe, Ne, " "), Oe = xt(Oe, nt, " ")), V && Qe ? V.createHTML(Oe) : Oe;
  }, s.setConfig = function($) {
    it($), pe = !0;
  }, s.clearConfig = function() {
    rt = null, pe = !1;
  }, s.isValidAttribute = function($, d, b) {
    rt || it({});
    var I = Re($), de = Re(d);
    return pr(I, de, b);
  }, s.addHook = function($, d) {
    typeof d == "function" && (ye[$] = ye[$] || [], Rr(ye[$], d));
  }, s.removeHook = function($) {
    if (ye[$])
      return yo(ye[$]);
  }, s.removeHooks = function($) {
    ye[$] && (ye[$] = []);
  }, s.removeAllHooks = function() {
    ye = {};
  }, s;
}
jo();
he.shape({
  event: he.string,
  action: he.string,
  name: he.string,
  region: he.string,
  section: he.string,
  component: he.string,
  type: he.string,
  text: he.string
});
const Zi = ({
  event: i = "",
  action: s = "",
  name: l = "",
  type: p = "",
  section: f = "",
  text: x = "",
  region: k = "",
  component: _ = ""
}) => {
  const { dataLayer: S } = window, g = {
    event: i.toLowerCase(),
    action: s.toLowerCase(),
    name: l.toLowerCase(),
    type: p.toLowerCase(),
    region: k.toLowerCase(),
    section: f.toLowerCase(),
    text: x.toLowerCase(),
    component: _.toLowerCase()
  };
  S && S.push(g);
}, On = ({ gaData: i, prefix: s = "", children: l }) => {
  const { isReact: p } = zo(), { onClick: f, ...x } = l.props;
  if (p)
    return Et.cloneElement(l, {
      ...x,
      onClick: (S) => (Zi(i), f ? f(S) : !0)
    });
  let k = "";
  ["input", "header", "header-input"].includes(s) && (k = `-${s}`);
  const _ = {
    [`data-ga${k}`]: i.text,
    [`data-ga${k}-name`]: i.name,
    [`data-ga${k}-event`]: i.event,
    [`data-ga${k}-action`]: i.action,
    [`data-ga${k}-type`]: i.type,
    [`data-ga${k}-region`]: i.region,
    [`data-ga${k}-section`]: i.section,
    [`data-ga${k}-component`]: i.component
  };
  return Et.cloneElement(l, {
    ...x,
    onClick: f,
    ..._
  });
};
var $n = Fo();
function Ki(i) {
  function s(L, P, M, z, w) {
    for (var H = 0, A = 0, ue = 0, te = 0, Q, q, ce = 0, ve = 0, ne, Se = ne = Q = 0, pe = 0, be = 0, Be = 0, Ce = 0, Qe = M.length, He = Qe - 1, we, G = "", xe = "", et = "", Ze = "", De; pe < Qe; ) {
      if (q = M.charCodeAt(pe), pe === He && A + te + ue + H !== 0 && (A !== 0 && (q = A === 47 ? 10 : 47), te = ue = H = 0, Qe++, He++), A + te + ue + H === 0) {
        if (pe === He && (0 < be && (G = G.replace(se, "")), 0 < G.trim().length)) {
          switch (q) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              G += M.charAt(pe);
          }
          q = 59;
        }
        switch (q) {
          case 123:
            for (G = G.trim(), Q = G.charCodeAt(0), ne = 1, Ce = ++pe; pe < Qe; ) {
              switch (q = M.charCodeAt(pe)) {
                case 123:
                  ne++;
                  break;
                case 125:
                  ne--;
                  break;
                case 47:
                  switch (q = M.charCodeAt(pe + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Se = pe + 1; Se < He; ++Se)
                          switch (M.charCodeAt(Se)) {
                            case 47:
                              if (q === 42 && M.charCodeAt(Se - 1) === 42 && pe + 2 !== Se) {
                                pe = Se + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (q === 47) {
                                pe = Se + 1;
                                break e;
                              }
                          }
                        pe = Se;
                      }
                  }
                  break;
                case 91:
                  q++;
                case 40:
                  q++;
                case 34:
                case 39:
                  for (; pe++ < He && M.charCodeAt(pe) !== q; )
                    ;
              }
              if (ne === 0) break;
              pe++;
            }
            switch (ne = M.substring(Ce, pe), Q === 0 && (Q = (G = G.replace(N, "").trim()).charCodeAt(0)), Q) {
              case 64:
                switch (0 < be && (G = G.replace(se, "")), q = G.charCodeAt(1), q) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    be = P;
                    break;
                  default:
                    be = nt;
                }
                if (ne = s(P, be, ne, q, w + 1), Ce = ne.length, 0 < $e && (be = l(nt, G, Be), De = _(3, ne, be, P, ye, me, Ce, q, w, z), G = be.join(""), De !== void 0 && (Ce = (ne = De.trim()).length) === 0 && (q = 0, ne = "")), 0 < Ce) switch (q) {
                  case 115:
                    G = G.replace(fe, k);
                  case 100:
                  case 109:
                  case 45:
                    ne = G + "{" + ne + "}";
                    break;
                  case 107:
                    G = G.replace(j, "$1 $2"), ne = G + "{" + ne + "}", ne = Ne === 1 || Ne === 2 && x("@" + ne, 3) ? "@-webkit-" + ne + "@" + ne : "@" + ne;
                    break;
                  default:
                    ne = G + ne, z === 112 && (ne = (xe += ne, ""));
                }
                else ne = "";
                break;
              default:
                ne = s(P, l(P, G, Be), ne, z, w + 1);
            }
            et += ne, ne = Be = be = Se = Q = 0, G = "", q = M.charCodeAt(++pe);
            break;
          case 125:
          case 59:
            if (G = (0 < be ? G.replace(se, "") : G).trim(), 1 < (Ce = G.length)) switch (Se === 0 && (Q = G.charCodeAt(0), Q === 45 || 96 < Q && 123 > Q) && (Ce = (G = G.replace(" ", ":")).length), 0 < $e && (De = _(1, G, P, L, ye, me, xe.length, z, w, z)) !== void 0 && (Ce = (G = De.trim()).length) === 0 && (G = "\0\0"), Q = G.charCodeAt(0), q = G.charCodeAt(1), Q) {
              case 0:
                break;
              case 64:
                if (q === 105 || q === 99) {
                  Ze += G + M.charAt(pe);
                  break;
                }
              default:
                G.charCodeAt(Ce - 1) !== 58 && (xe += f(G, Q, q, G.charCodeAt(2)));
            }
            Be = be = Se = Q = 0, G = "", q = M.charCodeAt(++pe);
        }
      }
      switch (q) {
        case 13:
        case 10:
          A === 47 ? A = 0 : 1 + Q === 0 && z !== 107 && 0 < G.length && (be = 1, G += "\0"), 0 < $e * Je && _(0, G, P, L, ye, me, xe.length, z, w, z), me = 1, ye++;
          break;
        case 59:
        case 125:
          if (A + te + ue + H === 0) {
            me++;
            break;
          }
        default:
          switch (me++, we = M.charAt(pe), q) {
            case 9:
            case 32:
              if (te + H + A === 0) switch (ce) {
                case 44:
                case 58:
                case 9:
                case 32:
                  we = "";
                  break;
                default:
                  q !== 32 && (we = " ");
              }
              break;
            case 0:
              we = "\\0";
              break;
            case 12:
              we = "\\f";
              break;
            case 11:
              we = "\\v";
              break;
            case 38:
              te + A + H === 0 && (be = Be = 1, we = "\f" + we);
              break;
            case 108:
              if (te + A + H + Le === 0 && 0 < Se) switch (pe - Se) {
                case 2:
                  ce === 112 && M.charCodeAt(pe - 3) === 58 && (Le = ce);
                case 8:
                  ve === 111 && (Le = ve);
              }
              break;
            case 58:
              te + A + H === 0 && (Se = pe);
              break;
            case 44:
              A + ue + te + H === 0 && (be = 1, we += "\r");
              break;
            case 34:
            case 39:
              A === 0 && (te = te === q ? 0 : te === 0 ? q : te);
              break;
            case 91:
              te + A + ue === 0 && H++;
              break;
            case 93:
              te + A + ue === 0 && H--;
              break;
            case 41:
              te + A + H === 0 && ue--;
              break;
            case 40:
              if (te + A + H === 0) {
                if (Q === 0) switch (2 * ce + 3 * ve) {
                  case 533:
                    break;
                  default:
                    Q = 1;
                }
                ue++;
              }
              break;
            case 64:
              A + ue + te + H + Se + ne === 0 && (ne = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + H + ue)) switch (A) {
                case 0:
                  switch (2 * q + 3 * M.charCodeAt(pe + 1)) {
                    case 235:
                      A = 47;
                      break;
                    case 220:
                      Ce = pe, A = 42;
                  }
                  break;
                case 42:
                  q === 47 && ce === 42 && Ce + 2 !== pe && (M.charCodeAt(Ce + 2) === 33 && (xe += M.substring(Ce, pe + 1)), we = "", A = 0);
              }
          }
          A === 0 && (G += we);
      }
      ve = ce, ce = q, pe++;
    }
    if (Ce = xe.length, 0 < Ce) {
      if (be = P, 0 < $e && (De = _(2, xe, be, L, ye, me, Ce, z, w, z), De !== void 0 && (xe = De).length === 0)) return Ze + xe + et;
      if (xe = be.join(",") + "{" + xe + "}", Ne * Le !== 0) {
        switch (Ne !== 2 || x(xe, 2) || (Le = 0), Le) {
          case 111:
            xe = xe.replace(V, ":-moz-$1") + xe;
            break;
          case 112:
            xe = xe.replace(W, "::-webkit-input-$1") + xe.replace(W, "::-moz-$1") + xe.replace(W, ":-ms-input-$1") + xe;
        }
        Le = 0;
      }
    }
    return Ze + xe + et;
  }
  function l(L, P, M) {
    var z = P.trim().split(F);
    P = z;
    var w = z.length, H = L.length;
    switch (H) {
      case 0:
      case 1:
        var A = 0;
        for (L = H === 0 ? "" : L[0] + " "; A < w; ++A)
          P[A] = p(L, P[A], M).trim();
        break;
      default:
        var ue = A = 0;
        for (P = []; A < w; ++A)
          for (var te = 0; te < H; ++te)
            P[ue++] = p(L[te] + " ", z[A], M).trim();
    }
    return P;
  }
  function p(L, P, M) {
    var z = P.charCodeAt(0);
    switch (33 > z && (z = (P = P.trim()).charCodeAt(0)), z) {
      case 38:
        return P.replace(U, "$1" + L.trim());
      case 58:
        return L.trim() + P.replace(U, "$1" + L.trim());
      default:
        if (0 < 1 * M && 0 < P.indexOf("\f")) return P.replace(U, (L.charCodeAt(0) === 58 ? "" : "$1") + L.trim());
    }
    return L + P;
  }
  function f(L, P, M, z) {
    var w = L + ";", H = 2 * P + 3 * M + 4 * z;
    if (H === 944) {
      L = w.indexOf(":", 9) + 1;
      var A = w.substring(L, w.length - 1).trim();
      return A = w.substring(0, L).trim() + A + ";", Ne === 1 || Ne === 2 && x(A, 1) ? "-webkit-" + A + A : A;
    }
    if (Ne === 0 || Ne === 2 && !x(w, 1)) return w;
    switch (H) {
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
        if (0 < w.indexOf("image-set(", 11)) return w.replace(Ve, "$1-webkit-$2") + w;
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
        return D.test(w) ? w.replace(K, ":-webkit-") + w.replace(K, ":-moz-") + w : w;
      case 1e3:
        switch (A = w.substring(13).trim(), P = A.indexOf("-") + 1, A.charCodeAt(0) + A.charCodeAt(P)) {
          case 226:
            A = w.replace(C, "tb");
            break;
          case 232:
            A = w.replace(C, "tb-rl");
            break;
          case 220:
            A = w.replace(C, "lr");
            break;
          default:
            return w;
        }
        return "-webkit-" + w + "-ms-" + A + w;
      case 1017:
        if (w.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (P = (w = L).length - 10, A = (w.charCodeAt(P) === 33 ? w.substring(0, P) : w).substring(L.indexOf(":", 7) + 1).trim(), H = A.charCodeAt(0) + (A.charCodeAt(7) | 0)) {
          case 203:
            if (111 > A.charCodeAt(8)) break;
          case 115:
            w = w.replace(A, "-webkit-" + A) + ";" + w;
            break;
          case 207:
          case 102:
            w = w.replace(A, "-webkit-" + (102 < H ? "inline-" : "") + "box") + ";" + w.replace(A, "-webkit-" + A) + ";" + w.replace(A, "-ms-" + A + "box") + ";" + w;
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
        if (ge.test(L) === !0) return (A = L.substring(L.indexOf(":") + 1)).charCodeAt(0) === 115 ? f(L.replace("stretch", "fill-available"), P, M, z).replace(":fill-available", ":stretch") : w.replace(A, "-webkit-" + A) + w.replace(A, "-moz-" + A.replace("fill-", "")) + w;
        break;
      case 962:
        if (w = "-webkit-" + w + (w.charCodeAt(5) === 102 ? "-ms-" + w : "") + w, M + z === 211 && w.charCodeAt(13) === 105 && 0 < w.indexOf("transform", 10)) return w.substring(0, w.indexOf(";", 27) + 1).replace(ee, "$1-webkit-$2") + w;
    }
    return w;
  }
  function x(L, P) {
    var M = L.indexOf(P === 1 ? ":" : "{"), z = L.substring(0, P !== 3 ? M : 10);
    return M = L.substring(M + 1, L.length - 1), je(P !== 2 ? z : z.replace(Y, "$1"), M, P);
  }
  function k(L, P) {
    var M = f(P, P.charCodeAt(0), P.charCodeAt(1), P.charCodeAt(2));
    return M !== P + ";" ? M.replace(le, " or ($1)").substring(4) : "(" + P + ")";
  }
  function _(L, P, M, z, w, H, A, ue, te, Q) {
    for (var q = 0, ce = P, ve; q < $e; ++q)
      switch (ve = We[q].call(B, L, ce, M, z, w, H, A, ue, te, Q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ce = ve;
      }
    if (ce !== P) return ce;
  }
  function S(L) {
    switch (L) {
      case void 0:
      case null:
        $e = We.length = 0;
        break;
      default:
        if (typeof L == "function") We[$e++] = L;
        else if (typeof L == "object") for (var P = 0, M = L.length; P < M; ++P)
          S(L[P]);
        else Je = !!L | 0;
    }
    return S;
  }
  function g(L) {
    return L = L.prefix, L !== void 0 && (je = null, L ? typeof L != "function" ? Ne = 1 : (Ne = 2, je = L) : Ne = 0), g;
  }
  function B(L, P) {
    var M = L;
    if (33 > M.charCodeAt(0) && (M = M.trim()), Xe = M, M = [Xe], 0 < $e) {
      var z = _(-1, P, M, M, ye, me, 0, 0, 0, 0);
      z !== void 0 && typeof z == "string" && (P = z);
    }
    var w = s(nt, M, P, 0, 0);
    return 0 < $e && (z = _(-2, w, M, M, ye, me, w.length, 0, 0, 0), z !== void 0 && (w = z)), Xe = "", Le = 0, me = ye = 1, w;
  }
  var N = /^\0+/g, se = /[\0\r\f]/g, K = /: */g, D = /zoo|gra/, ee = /([,: ])(transform)/g, F = /,\r+?/g, U = /([\t\r\n ])*\f?&/g, j = /@(k\w+)\s*(\S*)\s*/, W = /::(place)/g, V = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, fe = /\(\s*(.*)\s*\)/g, le = /([\s\S]*?);/g, Fe = /-self|flex-/g, Y = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ge = /stretch|:\s*\w+\-(?:conte|avail)/, Ve = /([^-])(image-set\()/, me = 1, ye = 1, Le = 0, Ne = 1, nt = [], We = [], $e = 0, je = null, Je = 0, Xe = "";
  return B.use = S, B.set = g, i !== void 0 && g(i), B;
}
var Ji = {
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
function Qi(i) {
  var s = /* @__PURE__ */ Object.create(null);
  return function(l) {
    return s[l] === void 0 && (s[l] = i(l)), s[l];
  };
}
var ea = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ko = /* @__PURE__ */ Qi(
  function(i) {
    return ea.test(i) || i.charCodeAt(0) === 111 && i.charCodeAt(1) === 110 && i.charCodeAt(2) < 91;
  }
  /* Z+1 */
), jn = Fo(), ta = {
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
}, ra = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, na = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Bo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Bn = {};
Bn[jn.ForwardRef] = na;
Bn[jn.Memo] = Bo;
function Eo(i) {
  return jn.isMemo(i) ? Bo : Bn[i.$$typeof] || ta;
}
var oa = Object.defineProperty, ia = Object.getOwnPropertyNames, To = Object.getOwnPropertySymbols, aa = Object.getOwnPropertyDescriptor, sa = Object.getPrototypeOf, _o = Object.prototype;
function Ho(i, s, l) {
  if (typeof s != "string") {
    if (_o) {
      var p = sa(s);
      p && p !== _o && Ho(i, p, l);
    }
    var f = ia(s);
    To && (f = f.concat(To(s)));
    for (var x = Eo(i), k = Eo(s), _ = 0; _ < f.length; ++_) {
      var S = f[_];
      if (!ra[S] && !(l && l[S]) && !(k && k[S]) && !(x && x[S])) {
        var g = aa(s, S);
        try {
          oa(i, S, g);
        } catch {
        }
      }
    }
  }
  return i;
}
var la = Ho;
const ua = /* @__PURE__ */ No(la);
var _e = { env: { NODE_ENV: "production" } };
function Lt() {
  return (Lt = Object.assign || function(i) {
    for (var s = 1; s < arguments.length; s++) {
      var l = arguments[s];
      for (var p in l) Object.prototype.hasOwnProperty.call(l, p) && (i[p] = l[p]);
    }
    return i;
  }).apply(this, arguments);
}
var Co = function(i, s) {
  for (var l = [i[0]], p = 0, f = s.length; p < f; p += 1) l.push(s[p], i[p + 1]);
  return l;
}, In = function(i) {
  return i !== null && typeof i == "object" && (i.toString ? i.toString() : Object.prototype.toString.call(i)) === "[object Object]" && !$n.typeOf(i);
}, on = Object.freeze([]), qt = Object.freeze({});
function Ir(i) {
  return typeof i == "function";
}
function Nn(i) {
  return _e.env.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Hn(i) {
  return i && typeof i.styledComponentId == "string";
}
var dr = typeof _e < "u" && _e.env !== void 0 && (_e.env.REACT_APP_SC_ATTR || _e.env.SC_ATTR) || "data-styled", Un = typeof window < "u" && "HTMLElement" in window, ca = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof _e < "u" && _e.env !== void 0 && (_e.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && _e.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? _e.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && _e.env.REACT_APP_SC_DISABLE_SPEEDY : _e.env.SC_DISABLE_SPEEDY !== void 0 && _e.env.SC_DISABLE_SPEEDY !== "" ? _e.env.SC_DISABLE_SPEEDY !== "false" && _e.env.SC_DISABLE_SPEEDY : _e.env.NODE_ENV !== "production")), pa = _e.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function fa() {
  for (var i = arguments.length <= 0 ? void 0 : arguments[0], s = [], l = 1, p = arguments.length; l < p; l += 1) s.push(l < 0 || arguments.length <= l ? void 0 : arguments[l]);
  return s.forEach(function(f) {
    i = i.replace(/%[a-z]/, f);
  }), i;
}
function yr(i) {
  for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), p = 1; p < s; p++) l[p - 1] = arguments[p];
  throw _e.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + i + " for more information." + (l.length > 0 ? " Args: " + l.join(", ") : "")) : new Error(fa.apply(void 0, [pa[i]].concat(l)).trim());
}
var da = function() {
  function i(l) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = l;
  }
  var s = i.prototype;
  return s.indexOfGroup = function(l) {
    for (var p = 0, f = 0; f < l; f++) p += this.groupSizes[f];
    return p;
  }, s.insertRules = function(l, p) {
    if (l >= this.groupSizes.length) {
      for (var f = this.groupSizes, x = f.length, k = x; l >= k; ) (k <<= 1) < 0 && yr(16, "" + l);
      this.groupSizes = new Uint32Array(k), this.groupSizes.set(f), this.length = k;
      for (var _ = x; _ < k; _++) this.groupSizes[_] = 0;
    }
    for (var S = this.indexOfGroup(l + 1), g = 0, B = p.length; g < B; g++) this.tag.insertRule(S, p[g]) && (this.groupSizes[l]++, S++);
  }, s.clearGroup = function(l) {
    if (l < this.length) {
      var p = this.groupSizes[l], f = this.indexOfGroup(l), x = f + p;
      this.groupSizes[l] = 0;
      for (var k = f; k < x; k++) this.tag.deleteRule(f);
    }
  }, s.getGroup = function(l) {
    var p = "";
    if (l >= this.length || this.groupSizes[l] === 0) return p;
    for (var f = this.groupSizes[l], x = this.indexOfGroup(l), k = x + f, _ = x; _ < k; _++) p += this.tag.getRule(_) + `/*!sc*/
`;
    return p;
  }, i;
}(), rn = /* @__PURE__ */ new Map(), an = /* @__PURE__ */ new Map(), Pr = 1, Kr = function(i) {
  if (rn.has(i)) return rn.get(i);
  for (; an.has(Pr); ) Pr++;
  var s = Pr++;
  return _e.env.NODE_ENV !== "production" && ((0 | s) < 0 || s > 1 << 30) && yr(16, "" + s), rn.set(i, s), an.set(s, i), s;
}, ha = function(i) {
  return an.get(i);
}, ma = function(i, s) {
  s >= Pr && (Pr = s + 1), rn.set(i, s), an.set(s, i);
}, ya = "style[" + dr + '][data-styled-version="5.3.11"]', va = new RegExp("^" + dr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ga = function(i, s, l) {
  for (var p, f = l.split(","), x = 0, k = f.length; x < k; x++) (p = f[x]) && i.registerName(s, p);
}, Sa = function(i, s) {
  for (var l = (s.textContent || "").split(`/*!sc*/
`), p = [], f = 0, x = l.length; f < x; f++) {
    var k = l[f].trim();
    if (k) {
      var _ = k.match(va);
      if (_) {
        var S = 0 | parseInt(_[1], 10), g = _[2];
        S !== 0 && (ma(g, S), ga(i, g, _[3]), i.getTag().insertRules(S, p)), p.length = 0;
      } else p.push(k);
    }
  }
}, wa = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Uo = function(i) {
  var s = document.head, l = i || s, p = document.createElement("style"), f = function(_) {
    for (var S = _.childNodes, g = S.length; g >= 0; g--) {
      var B = S[g];
      if (B && B.nodeType === 1 && B.hasAttribute(dr)) return B;
    }
  }(l), x = f !== void 0 ? f.nextSibling : null;
  p.setAttribute(dr, "active"), p.setAttribute("data-styled-version", "5.3.11");
  var k = wa();
  return k && p.setAttribute("nonce", k), l.insertBefore(p, x), p;
}, xa = function() {
  function i(l) {
    var p = this.element = Uo(l);
    p.appendChild(document.createTextNode("")), this.sheet = function(f) {
      if (f.sheet) return f.sheet;
      for (var x = document.styleSheets, k = 0, _ = x.length; k < _; k++) {
        var S = x[k];
        if (S.ownerNode === f) return S;
      }
      yr(17);
    }(p), this.length = 0;
  }
  var s = i.prototype;
  return s.insertRule = function(l, p) {
    try {
      return this.sheet.insertRule(p, l), this.length++, !0;
    } catch {
      return !1;
    }
  }, s.deleteRule = function(l) {
    this.sheet.deleteRule(l), this.length--;
  }, s.getRule = function(l) {
    var p = this.sheet.cssRules[l];
    return p !== void 0 && typeof p.cssText == "string" ? p.cssText : "";
  }, i;
}(), ka = function() {
  function i(l) {
    var p = this.element = Uo(l);
    this.nodes = p.childNodes, this.length = 0;
  }
  var s = i.prototype;
  return s.insertRule = function(l, p) {
    if (l <= this.length && l >= 0) {
      var f = document.createTextNode(p), x = this.nodes[l];
      return this.element.insertBefore(f, x || null), this.length++, !0;
    }
    return !1;
  }, s.deleteRule = function(l) {
    this.element.removeChild(this.nodes[l]), this.length--;
  }, s.getRule = function(l) {
    return l < this.length ? this.nodes[l].textContent : "";
  }, i;
}(), Ea = function() {
  function i(l) {
    this.rules = [], this.length = 0;
  }
  var s = i.prototype;
  return s.insertRule = function(l, p) {
    return l <= this.length && (this.rules.splice(l, 0, p), this.length++, !0);
  }, s.deleteRule = function(l) {
    this.rules.splice(l, 1), this.length--;
  }, s.getRule = function(l) {
    return l < this.length ? this.rules[l] : "";
  }, i;
}(), bo = Un, Ta = { isServer: !Un, useCSSOMInjection: !ca }, Vo = function() {
  function i(l, p, f) {
    l === void 0 && (l = qt), p === void 0 && (p = {}), this.options = Lt({}, Ta, {}, l), this.gs = p, this.names = new Map(f), this.server = !!l.isServer, !this.server && Un && bo && (bo = !1, function(x) {
      for (var k = document.querySelectorAll(ya), _ = 0, S = k.length; _ < S; _++) {
        var g = k[_];
        g && g.getAttribute(dr) !== "active" && (Sa(x, g), g.parentNode && g.parentNode.removeChild(g));
      }
    }(this));
  }
  i.registerId = function(l) {
    return Kr(l);
  };
  var s = i.prototype;
  return s.reconstructWithOptions = function(l, p) {
    return p === void 0 && (p = !0), new i(Lt({}, this.options, {}, l), this.gs, p && this.names || void 0);
  }, s.allocateGSInstance = function(l) {
    return this.gs[l] = (this.gs[l] || 0) + 1;
  }, s.getTag = function() {
    return this.tag || (this.tag = (f = (p = this.options).isServer, x = p.useCSSOMInjection, k = p.target, l = f ? new Ea(k) : x ? new xa(k) : new ka(k), new da(l)));
    var l, p, f, x, k;
  }, s.hasNameForId = function(l, p) {
    return this.names.has(l) && this.names.get(l).has(p);
  }, s.registerName = function(l, p) {
    if (Kr(l), this.names.has(l)) this.names.get(l).add(p);
    else {
      var f = /* @__PURE__ */ new Set();
      f.add(p), this.names.set(l, f);
    }
  }, s.insertRules = function(l, p, f) {
    this.registerName(l, p), this.getTag().insertRules(Kr(l), f);
  }, s.clearNames = function(l) {
    this.names.has(l) && this.names.get(l).clear();
  }, s.clearRules = function(l) {
    this.getTag().clearGroup(Kr(l)), this.clearNames(l);
  }, s.clearTag = function() {
    this.tag = void 0;
  }, s.toString = function() {
    return function(l) {
      for (var p = l.getTag(), f = p.length, x = "", k = 0; k < f; k++) {
        var _ = ha(k);
        if (_ !== void 0) {
          var S = l.names.get(_), g = p.getGroup(k);
          if (S && g && S.size) {
            var B = dr + ".g" + k + '[id="' + _ + '"]', N = "";
            S !== void 0 && S.forEach(function(se) {
              se.length > 0 && (N += se + ",");
            }), x += "" + g + B + '{content:"' + N + `"}/*!sc*/
`;
          }
        }
      }
      return x;
    }(this);
  }, i;
}(), _a = /(a)(d)/gi, Ao = function(i) {
  return String.fromCharCode(i + (i > 25 ? 39 : 97));
};
function Mn(i) {
  var s, l = "";
  for (s = Math.abs(i); s > 52; s = s / 52 | 0) l = Ao(s % 52) + l;
  return (Ao(s % 52) + l).replace(_a, "$1-$2");
}
var lr = function(i, s) {
  for (var l = s.length; l; ) i = 33 * i ^ s.charCodeAt(--l);
  return i;
}, Wo = function(i) {
  return lr(5381, i);
};
function Ca(i) {
  for (var s = 0; s < i.length; s += 1) {
    var l = i[s];
    if (Ir(l) && !Hn(l)) return !1;
  }
  return !0;
}
var ba = Wo("5.3.11"), Aa = function() {
  function i(s, l, p) {
    this.rules = s, this.staticRulesId = "", this.isStatic = _e.env.NODE_ENV === "production" && (p === void 0 || p.isStatic) && Ca(s), this.componentId = l, this.baseHash = lr(ba, l), this.baseStyle = p, Vo.registerId(l);
  }
  return i.prototype.generateAndInjectStyles = function(s, l, p) {
    var f = this.componentId, x = [];
    if (this.baseStyle && x.push(this.baseStyle.generateAndInjectStyles(s, l, p)), this.isStatic && !p.hash) if (this.staticRulesId && l.hasNameForId(f, this.staticRulesId)) x.push(this.staticRulesId);
    else {
      var k = hr(this.rules, s, l, p).join(""), _ = Mn(lr(this.baseHash, k) >>> 0);
      if (!l.hasNameForId(f, _)) {
        var S = p(k, "." + _, void 0, f);
        l.insertRules(f, _, S);
      }
      x.push(_), this.staticRulesId = _;
    }
    else {
      for (var g = this.rules.length, B = lr(this.baseHash, p.hash), N = "", se = 0; se < g; se++) {
        var K = this.rules[se];
        if (typeof K == "string") N += K, _e.env.NODE_ENV !== "production" && (B = lr(B, K + se));
        else if (K) {
          var D = hr(K, s, l, p), ee = Array.isArray(D) ? D.join("") : D;
          B = lr(B, ee + se), N += ee;
        }
      }
      if (N) {
        var F = Mn(B >>> 0);
        if (!l.hasNameForId(f, F)) {
          var U = p(N, "." + F, void 0, f);
          l.insertRules(f, F, U);
        }
        x.push(F);
      }
    }
    return x.join(" ");
  }, i;
}(), Ra = /^\s*\/\/.*$/gm, Pa = [":", "[", ".", "#"];
function Oa(i) {
  var s, l, p, f, x = qt, k = x.options, _ = k === void 0 ? qt : k, S = x.plugins, g = S === void 0 ? on : S, B = new Ki(_), N = [], se = /* @__PURE__ */ function(ee) {
    function F(U) {
      if (U) try {
        ee(U + "}");
      } catch {
      }
    }
    return function(U, j, W, V, C, fe, le, Fe, Y, ge) {
      switch (U) {
        case 1:
          if (Y === 0 && j.charCodeAt(0) === 64) return ee(j + ";"), "";
          break;
        case 2:
          if (Fe === 0) return j + "/*|*/";
          break;
        case 3:
          switch (Fe) {
            case 102:
            case 112:
              return ee(W[0] + j), "";
            default:
              return j + (ge === 0 ? "/*|*/" : "");
          }
        case -2:
          j.split("/*|*/}").forEach(F);
      }
    };
  }(function(ee) {
    N.push(ee);
  }), K = function(ee, F, U) {
    return F === 0 && Pa.indexOf(U[l.length]) !== -1 || U.match(f) ? ee : "." + s;
  };
  function D(ee, F, U, j) {
    j === void 0 && (j = "&");
    var W = ee.replace(Ra, ""), V = F && U ? U + " " + F + " { " + W + " }" : W;
    return s = j, l = F, p = new RegExp("\\" + l + "\\b", "g"), f = new RegExp("(\\" + l + "\\b){2,}"), B(U || !F ? "" : F, V);
  }
  return B.use([].concat(g, [function(ee, F, U) {
    ee === 2 && U.length && U[0].lastIndexOf(l) > 0 && (U[0] = U[0].replace(p, K));
  }, se, function(ee) {
    if (ee === -2) {
      var F = N;
      return N = [], F;
    }
  }])), D.hash = g.length ? g.reduce(function(ee, F) {
    return F.name || yr(15), lr(ee, F.name);
  }, 5381).toString() : "", D;
}
var Go = Et.createContext();
Go.Consumer;
var qo = Et.createContext(), Ia = (qo.Consumer, new Vo()), Dn = Oa();
function Na() {
  return zn(Go) || Ia;
}
function Ma() {
  return zn(qo) || Dn;
}
var Da = function() {
  function i(s, l) {
    var p = this;
    this.inject = function(f, x) {
      x === void 0 && (x = Dn);
      var k = p.name + x.hash;
      f.hasNameForId(p.id, k) || f.insertRules(p.id, k, x(p.rules, k, "@keyframes"));
    }, this.toString = function() {
      return yr(12, String(p.name));
    }, this.name = s, this.id = "sc-keyframes-" + s, this.rules = l;
  }
  return i.prototype.getName = function(s) {
    return s === void 0 && (s = Dn), this.name + s.hash;
  }, i;
}(), Fa = /([A-Z])/, La = /([A-Z])/g, za = /^ms-/, $a = function(i) {
  return "-" + i.toLowerCase();
};
function Ro(i) {
  return Fa.test(i) ? i.replace(La, $a).replace(za, "-ms-") : i;
}
var Po = function(i) {
  return i == null || i === !1 || i === "";
};
function hr(i, s, l, p) {
  if (Array.isArray(i)) {
    for (var f, x = [], k = 0, _ = i.length; k < _; k += 1) (f = hr(i[k], s, l, p)) !== "" && (Array.isArray(f) ? x.push.apply(x, f) : x.push(f));
    return x;
  }
  if (Po(i)) return "";
  if (Hn(i)) return "." + i.styledComponentId;
  if (Ir(i)) {
    if (typeof (g = i) != "function" || g.prototype && g.prototype.isReactComponent || !s) return i;
    var S = i(s);
    return _e.env.NODE_ENV !== "production" && $n.isElement(S) && console.warn(Nn(i) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), hr(S, s, l, p);
  }
  var g;
  return i instanceof Da ? l ? (i.inject(l, p), i.getName(p)) : i : In(i) ? function B(N, se) {
    var K, D, ee = [];
    for (var F in N) N.hasOwnProperty(F) && !Po(N[F]) && (Array.isArray(N[F]) && N[F].isCss || Ir(N[F]) ? ee.push(Ro(F) + ":", N[F], ";") : In(N[F]) ? ee.push.apply(ee, B(N[F], F)) : ee.push(Ro(F) + ": " + (K = F, (D = N[F]) == null || typeof D == "boolean" || D === "" ? "" : typeof D != "number" || D === 0 || K in Ji || K.startsWith("--") ? String(D).trim() : D + "px") + ";"));
    return se ? [se + " {"].concat(ee, ["}"]) : ee;
  }(i) : i.toString();
}
var Oo = function(i) {
  return Array.isArray(i) && (i.isCss = !0), i;
};
function ja(i) {
  for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), p = 1; p < s; p++) l[p - 1] = arguments[p];
  return Ir(i) || In(i) ? Oo(hr(Co(on, [i].concat(l)))) : l.length === 0 && i.length === 1 && typeof i[0] == "string" ? i : Oo(hr(Co(i, l)));
}
var Io = /invalid hook call/i, Jr = /* @__PURE__ */ new Set(), Ba = function(i, s) {
  if (_e.env.NODE_ENV !== "production") {
    var l = "The component " + i + (s ? ' with the id of "' + s + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, p = console.error;
    try {
      var f = !0;
      console.error = function(x) {
        if (Io.test(x)) f = !1, Jr.delete(l);
        else {
          for (var k = arguments.length, _ = new Array(k > 1 ? k - 1 : 0), S = 1; S < k; S++) _[S - 1] = arguments[S];
          p.apply(void 0, [x].concat(_));
        }
      }, Or(), f && !Jr.has(l) && (console.warn(l), Jr.add(l));
    } catch (x) {
      Io.test(x.message) && Jr.delete(l);
    } finally {
      console.error = p;
    }
  }
}, Ha = function(i, s, l) {
  return l === void 0 && (l = qt), i.theme !== l.theme && i.theme || s || l.theme;
}, Ua = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Va = /(^-|-$)/g;
function Cn(i) {
  return i.replace(Ua, "-").replace(Va, "");
}
var Wa = function(i) {
  return Mn(Wo(i) >>> 0);
};
function Qr(i) {
  return typeof i == "string" && (_e.env.NODE_ENV === "production" || i.charAt(0) === i.charAt(0).toLowerCase());
}
var Fn = function(i) {
  return typeof i == "function" || typeof i == "object" && i !== null && !Array.isArray(i);
}, Ga = function(i) {
  return i !== "__proto__" && i !== "constructor" && i !== "prototype";
};
function qa(i, s, l) {
  var p = i[l];
  Fn(s) && Fn(p) ? Yo(p, s) : i[l] = s;
}
function Yo(i) {
  for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), p = 1; p < s; p++) l[p - 1] = arguments[p];
  for (var f = 0, x = l; f < x.length; f++) {
    var k = x[f];
    if (Fn(k)) for (var _ in k) Ga(_) && qa(i, k[_], _);
  }
  return i;
}
var Xo = Et.createContext();
Xo.Consumer;
var bn = {};
function Zo(i, s, l) {
  var p = Hn(i), f = !Qr(i), x = s.attrs, k = x === void 0 ? on : x, _ = s.componentId, S = _ === void 0 ? function(j, W) {
    var V = typeof j != "string" ? "sc" : Cn(j);
    bn[V] = (bn[V] || 0) + 1;
    var C = V + "-" + Wa("5.3.11" + V + bn[V]);
    return W ? W + "-" + C : C;
  }(s.displayName, s.parentComponentId) : _, g = s.displayName, B = g === void 0 ? function(j) {
    return Qr(j) ? "styled." + j : "Styled(" + Nn(j) + ")";
  }(i) : g, N = s.displayName && s.componentId ? Cn(s.displayName) + "-" + s.componentId : s.componentId || S, se = p && i.attrs ? Array.prototype.concat(i.attrs, k).filter(Boolean) : k, K = s.shouldForwardProp;
  p && i.shouldForwardProp && (K = s.shouldForwardProp ? function(j, W, V) {
    return i.shouldForwardProp(j, W, V) && s.shouldForwardProp(j, W, V);
  } : i.shouldForwardProp);
  var D, ee = new Aa(l, N, p ? i.componentStyle : void 0), F = ee.isStatic && k.length === 0, U = function(j, W) {
    return function(V, C, fe, le) {
      var Fe = V.attrs, Y = V.componentStyle, ge = V.defaultProps, Ve = V.foldedComponentIds, me = V.shouldForwardProp, ye = V.styledComponentId, Le = V.target, Ne = function(z, w, H) {
        z === void 0 && (z = qt);
        var A = Lt({}, w, { theme: z }), ue = {};
        return H.forEach(function(te) {
          var Q, q, ce, ve = te;
          for (Q in Ir(ve) && (ve = ve(A)), ve) A[Q] = ue[Q] = Q === "className" ? (q = ue[Q], ce = ve[Q], q && ce ? q + " " + ce : q || ce) : ve[Q];
        }), [A, ue];
      }(Ha(C, zn(Xo), ge) || qt, C, Fe), nt = Ne[0], We = Ne[1], $e = function(z, w, H, A) {
        var ue = Na(), te = Ma(), Q = w ? z.generateAndInjectStyles(qt, ue, te) : z.generateAndInjectStyles(H, ue, te);
        return _e.env.NODE_ENV !== "production" && !w && A && A(Q), Q;
      }(Y, le, nt, _e.env.NODE_ENV !== "production" ? V.warnTooManyClasses : void 0), je = fe, Je = We.$as || C.$as || We.as || C.as || Le, Xe = Qr(Je), L = We !== C ? Lt({}, C, {}, We) : C, P = {};
      for (var M in L) M[0] !== "$" && M !== "as" && (M === "forwardedAs" ? P.as = L[M] : (me ? me(M, ko, Je) : !Xe || ko(M)) && (P[M] = L[M]));
      return C.style && We.style !== C.style && (P.style = Lt({}, C.style, {}, We.style)), P.className = Array.prototype.concat(Ve, ye, $e !== ye ? $e : null, C.className, We.className).filter(Boolean).join(" "), P.ref = je, ci(Je, P);
    }(D, j, W, F);
  };
  return U.displayName = B, (D = Et.forwardRef(U)).attrs = se, D.componentStyle = ee, D.displayName = B, D.shouldForwardProp = K, D.foldedComponentIds = p ? Array.prototype.concat(i.foldedComponentIds, i.styledComponentId) : on, D.styledComponentId = N, D.target = p ? i.target : i, D.withComponent = function(j) {
    var W = s.componentId, V = function(fe, le) {
      if (fe == null) return {};
      var Fe, Y, ge = {}, Ve = Object.keys(fe);
      for (Y = 0; Y < Ve.length; Y++) Fe = Ve[Y], le.indexOf(Fe) >= 0 || (ge[Fe] = fe[Fe]);
      return ge;
    }(s, ["componentId"]), C = W && W + "-" + (Qr(j) ? j : Cn(Nn(j)));
    return Zo(j, Lt({}, V, { attrs: se, componentId: C }), l);
  }, Object.defineProperty(D, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(j) {
    this._foldedDefaultProps = p ? Yo({}, i.defaultProps, j) : j;
  } }), _e.env.NODE_ENV !== "production" && (Ba(B, N), D.warnTooManyClasses = /* @__PURE__ */ function(j, W) {
    var V = {}, C = !1;
    return function(fe) {
      if (!C && (V[fe] = !0, Object.keys(V).length >= 200)) {
        var le = W ? ' with the id of "' + W + '"' : "";
        console.warn("Over 200 classes were generated for component " + j + le + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), C = !0, V = {};
      }
    };
  }(B, N)), Object.defineProperty(D, "toString", { value: function() {
    return "." + D.styledComponentId;
  } }), f && ua(D, i, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), D;
}
var Ln = function(i) {
  return function s(l, p, f) {
    if (f === void 0 && (f = qt), !$n.isValidElementType(p)) return yr(1, String(p));
    var x = function() {
      return l(p, f, ja.apply(void 0, arguments));
    };
    return x.withConfig = function(k) {
      return s(l, p, Lt({}, f, {}, k));
    }, x.attrs = function(k) {
      return s(l, p, Lt({}, f, { attrs: Array.prototype.concat(f.attrs, k).filter(Boolean) }));
    }, x;
  }(Zo, i);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(i) {
  Ln[i] = Ln(i);
});
_e.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), _e.env.NODE_ENV !== "production" && _e.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Ya = Ln.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, Ko = ({ gaData: i, hidePrev: s, hideNext: l, slideNav: p }) => /* @__PURE__ */ Ue.jsxs(Ya, { children: [
  !s && /* @__PURE__ */ Ue.jsx(On, { gaData: { ...i, text: "left chevron" }, children: /* @__PURE__ */ Ue.jsxs(
    "button",
    {
      className: "scroll-control-prev",
      type: "button",
      onClick: () => p(-1),
      tabIndex: -1,
      children: [
        /* @__PURE__ */ Ue.jsx("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ Ue.jsx("span", { className: "visually-hidden", children: "Previous" })
      ]
    }
  ) }),
  !l && /* @__PURE__ */ Ue.jsx(On, { gaData: { ...i, text: "right chevron" }, children: /* @__PURE__ */ Ue.jsxs(
    "button",
    {
      className: "scroll-control-next",
      type: "button",
      onClick: () => p(1),
      tabIndex: -1,
      children: [
        /* @__PURE__ */ Ue.jsx("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ Ue.jsx("span", { className: "visually-hidden", children: "Next" })
      ]
    }
  ) })
] });
Ko.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: he.object,
  hidePrev: he.bool,
  hideNext: he.bool,
  slideNav: he.func.isRequired
};
const Jo = pi(function(s, l) {
  const {
    id: p,
    selected: f,
    title: x,
    selectTab: k,
    leftKeyPressed: _,
    rightKeyPressed: S,
    icon: g,
    gaData: B
  } = s, N = Or(null);
  fi(
    l,
    () => ({
      focus() {
        N.current.focus();
      },
      scrollIntoView() {
        var ee, F, U, j, W, V, C;
        const K = ((ee = N.current) == null ? void 0 : ee.offsetWidth) / 2 + N.current.offsetLeft, D = ((U = (F = N.current) == null ? void 0 : F.offsetParent) == null ? void 0 : U.scrollLeft) + ((W = (j = N.current) == null ? void 0 : j.offsetParent) == null ? void 0 : W.offsetWidth) / 2;
        (C = (V = N.current) == null ? void 0 : V.offsetParent) == null || C.scrollBy({
          left: K - D
        });
      }
    }),
    []
  );
  const se = (K) => {
    K.keyCode === 37 ? (K.preventDefault(), _()) : K.keyCode === 39 && (K.preventDefault(), S());
  };
  return /* @__PURE__ */ Ue.jsx(On, { gaData: { ...B, text: x }, children: /* @__PURE__ */ Ue.jsxs(
    "a",
    {
      ref: N,
      className: `nav-item nav-link ${f ? "active" : ""}`,
      id: p,
      href: `#nav-${p}`,
      role: "tab",
      "aria-controls": `nav-${p}`,
      "aria-selected": f,
      onClick: (K) => k(K, p, x),
      onKeyDown: se,
      tabIndex: f ? "" : "-1",
      children: [
        x,
        " ",
        g && /* @__PURE__ */ Ue.jsx("i", { className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} me-1` })
      ]
    }
  ) });
});
Jo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: he.object,
  id: he.string.isRequired,
  selected: he.bool.isRequired,
  title: he.string.isRequired,
  selectTab: he.func.isRequired,
  leftKeyPressed: he.func.isRequired,
  rightKeyPressed: he.func.isRequired,
  icon: he.arrayOf(he.string)
};
function Xa() {
  const i = Or({}), s = di(
    (l) => (p) => {
      i.current[l] = p;
    },
    []
  );
  return [i, s];
}
const Za = ({ id: i, bgColor: s, selected: l, children: p }) => l && /* @__PURE__ */ Ue.jsx(
  "div",
  {
    className: `tab-pane fade show ${l ? "show active" : ""} ${s === "bg-dark" ? "text-white" : ""}`,
    id: `nav-${i}`,
    role: "tabpanel",
    "aria-labelledby": `nav-${i}-tab`,
    children: p
  }
);
Za.propTypes = {
  id: he.string.isRequired,
  bgColor: he.string,
  selected: he.bool,
  children: he.oneOfType([he.array, he.element])
};
const Ka = ({
  initialTab: i = "",
  children: s,
  bgColor: l = "",
  onTabChange: p = (f) => {
  }
}) => {
  const f = Et.Children.toArray(s), x = Or(!1), [k, _] = yn(
    i && i !== "null" ? i : f[0].props.id
  ), S = Or(null), [g, B] = Xa(), { isReact: N, isBootstrap: se } = zo(), K = (Y) => {
    var ge;
    p(Y), (ge = g.current[Y]) == null || ge.focus(), _(Y);
  }, [D, ee] = yn(0), [F, U] = yn();
  br(() => {
    const Y = () => {
      ee(S.current.scrollLeft);
    };
    return S.current.addEventListener("scroll", Y), Y(), () => {
      S.current && S.current.removeEventListener("scroll", Y);
    };
  }, [F]), br(() => {
    const Y = () => {
      U(
        S.current.scrollWidth - S.current.offsetWidth
      );
    };
    return window.addEventListener("resize", Y), Y(), () => {
      S.current && window.removeEventListener("resize", Y);
    };
  }, []), br(() => {
    var Y;
    (Y = g.current[k]) == null || Y.scrollIntoView();
  }, [k]), br(() => {
    x.current && i && i !== "null" && k !== i && _(i);
  }, [i]), br(() => {
    x.current = !0;
  }, []);
  const j = {
    event: "select",
    action: "click",
    name: "onclick",
    type: "carousel",
    region: "main content",
    text: ""
  }, W = {
    event: "link",
    action: "click",
    name: "onclick",
    type: "internal link",
    text: ""
  }, V = f.map((Y) => Et.cloneElement(Y, {
    bgColor: l,
    selected: k === Y.props.id
  })), C = (Y) => {
    const ge = S.current, Ve = ge.scrollWidth - ge.clientWidth;
    let ye = ge.scrollLeft + 200 * Y;
    ye = Math.max(0, Math.min(Ve, ye)), ge.scrollTo({
      left: ye,
      behavior: "smooth"
    });
  }, fe = (Y, ge, Ve) => {
    Y.preventDefault(), K(ge);
  }, le = (Y = !0) => {
    const ge = f.length, Ve = Y ? 1 : -1, me = f.findIndex((Le) => Le.props.id === k), ye = f[(ge + me + Ve) % ge].props.id;
    K(ye);
  };
  let Fe = "uds-tabbed-panels";
  return l === "bg-dark" && (Fe += " uds-tabbed-panels-dark"), /* @__PURE__ */ Ue.jsxs("div", { className: l, children: [
    /* @__PURE__ */ Ue.jsxs("nav", { className: Fe, children: [
      /* @__PURE__ */ Ue.jsx("div", { className: "nav nav-tabs", role: "tablist", ref: S, children: f.map((Y, ge) => /* @__PURE__ */ Ue.jsx(
        Jo,
        {
          ref: B(Y.props.id),
          id: Y.props.id,
          title: Y.props.title,
          selected: k === Y.props.id,
          gaData: W,
          selectTab: N && fe,
          leftKeyPressed: N && (() => le(!1)),
          rightKeyPressed: N && (() => le()),
          icon: Y.props.icon,
          index: ge
        },
        Y.props.id
      )) }),
      /* @__PURE__ */ Ue.jsx(
        Ko,
        {
          hidePrev: D <= 0,
          hideNext: D >= F,
          gaData: j,
          slideNav: N && C
        }
      )
    ] }),
    /* @__PURE__ */ Ue.jsx(
      "div",
      {
        className: "tab-content",
        tabIndex: 0,
        role: "tabpanel",
        id: "nav-tabContent",
        children: V
      }
    )
  ] });
};
Ka.propTypes = {
  initialTab: he.string,
  children: he.arrayOf(he.element).isRequired,
  bgColor: he.string,
  onTabChange: he.func
};
export {
  Za as Tab,
  Ka as TabbedPanels
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
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */
