import Se, { useRef as Ot, useContext as We, createElement as Et } from "react";
function Ye(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ht = { exports: {} }, ve = {};
var Ke;
function Pt() {
  if (Ke) return ve;
  Ke = 1;
  var e = Se, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, d, m) {
    var y, v = {}, D = null, z = null;
    m !== void 0 && (D = "" + m), d.key !== void 0 && (D = "" + d.key), d.ref !== void 0 && (z = d.ref);
    for (y in d) n.call(d, y) && !i.hasOwnProperty(y) && (v[y] = d[y]);
    if (u && u.defaultProps) for (y in d = u.defaultProps, d) v[y] === void 0 && (v[y] = d[y]);
    return { $$typeof: r, type: u, key: D, ref: z, props: v, _owner: a.current };
  }
  return ve.Fragment = t, ve.jsx = s, ve.jsxs = s, ve;
}
ht.exports = Pt();
var te = ht.exports, ft = { exports: {} };
(function(e) {
  (function() {
    var r = {}.hasOwnProperty;
    function t() {
      for (var i = "", s = 0; s < arguments.length; s++) {
        var u = arguments[s];
        u && (i = a(i, n(u)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return t.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var s = "";
      for (var u in i)
        r.call(i, u) && i[u] && (s = a(s, u));
      return s;
    }
    function a(i, s) {
      return s ? i ? i + " " + s : i + s : i;
    }
    e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
  })();
})(ft);
var Rt = ft.exports;
const xe = /* @__PURE__ */ Ye(Rt);
var mt = { exports: {} }, Ne = { exports: {} }, N = {};
var Qe;
function Tt() {
  if (Qe) return N;
  Qe = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, D = e ? Symbol.for("react.suspense_list") : 60120, z = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function k(c) {
    if (typeof c == "object" && c !== null) {
      var W = c.$$typeof;
      switch (W) {
        case r:
          switch (c = c.type, c) {
            case d:
            case m:
            case n:
            case i:
            case a:
            case v:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case u:
                case y:
                case A:
                case z:
                case s:
                  return c;
                default:
                  return W;
              }
          }
        case t:
          return W;
      }
    }
  }
  function O(c) {
    return k(c) === m;
  }
  return N.AsyncMode = d, N.ConcurrentMode = m, N.ContextConsumer = u, N.ContextProvider = s, N.Element = r, N.ForwardRef = y, N.Fragment = n, N.Lazy = A, N.Memo = z, N.Portal = t, N.Profiler = i, N.StrictMode = a, N.Suspense = v, N.isAsyncMode = function(c) {
    return O(c) || k(c) === d;
  }, N.isConcurrentMode = O, N.isContextConsumer = function(c) {
    return k(c) === u;
  }, N.isContextProvider = function(c) {
    return k(c) === s;
  }, N.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === r;
  }, N.isForwardRef = function(c) {
    return k(c) === y;
  }, N.isFragment = function(c) {
    return k(c) === n;
  }, N.isLazy = function(c) {
    return k(c) === A;
  }, N.isMemo = function(c) {
    return k(c) === z;
  }, N.isPortal = function(c) {
    return k(c) === t;
  }, N.isProfiler = function(c) {
    return k(c) === i;
  }, N.isStrictMode = function(c) {
    return k(c) === a;
  }, N.isSuspense = function(c) {
    return k(c) === v;
  }, N.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === m || c === i || c === a || c === v || c === D || typeof c == "object" && c !== null && (c.$$typeof === A || c.$$typeof === z || c.$$typeof === s || c.$$typeof === u || c.$$typeof === y || c.$$typeof === S || c.$$typeof === $ || c.$$typeof === x || c.$$typeof === C);
  }, N.typeOf = k, N;
}
var Je;
function yt() {
  return Je || (Je = 1, Ne.exports = Tt()), Ne.exports;
}
var Ie, et;
function Nt() {
  if (et) return Ie;
  et = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ie = e, Ie;
}
var je, tt;
function It() {
  if (tt) return je;
  tt = 1;
  var e = Nt();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, je = function() {
    function n(s, u, d, m, y, v) {
      if (v !== e) {
        var D = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw D.name = "Invariant Violation", D;
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
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, je;
}
mt.exports = It()();
var jt = mt.exports;
const j = /* @__PURE__ */ Ye(jt), Dt = j.shape({
  url: j.string,
  altText: j.string,
  cssClass: j.arrayOf(j.string),
  size: j.oneOf(["small", "medium", "large"])
}), De = j.shape({
  text: j.string,
  maxWidth: j.string,
  cssClass: j.arrayOf(j.string),
  highlightColor: j.oneOf(["gold", "black"])
});
j.shape({
  color: j.oneOf(["gold", "maroon", "gray", "dark"]),
  content: j.shape({
    icon: j.string,
    header: j.string,
    body: j.string
  })
});
j.shape({
  text: j.string,
  name: j.string,
  event: j.string,
  action: j.string,
  type: j.string,
  region: j.string,
  section: j.string,
  component: j.string
});
var Ge = yt();
function $t(e) {
  function r(f, p, h, w, o) {
    for (var E = 0, l = 0, M = 0, P = 0, R, b, L = 0, G = 0, _, B = _ = R = 0, T = 0, V = 0, ye = 0, H = 0, Ae = h.length, ge = Ae - 1, Q, g = "", F = "", Re = "", Te = "", ae; T < Ae; ) {
      if (b = h.charCodeAt(T), T === ge && l + P + M + E !== 0 && (l !== 0 && (b = l === 47 ? 10 : 47), P = M = E = 0, Ae++, ge++), l + P + M + E === 0) {
        if (T === ge && (0 < V && (g = g.replace(D, "")), 0 < g.trim().length)) {
          switch (b) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              g += h.charAt(T);
          }
          b = 59;
        }
        switch (b) {
          case 123:
            for (g = g.trim(), R = g.charCodeAt(0), _ = 1, H = ++T; T < Ae; ) {
              switch (b = h.charCodeAt(T)) {
                case 123:
                  _++;
                  break;
                case 125:
                  _--;
                  break;
                case 47:
                  switch (b = h.charCodeAt(T + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (B = T + 1; B < ge; ++B)
                          switch (h.charCodeAt(B)) {
                            case 47:
                              if (b === 42 && h.charCodeAt(B - 1) === 42 && T + 2 !== B) {
                                T = B + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (b === 47) {
                                T = B + 1;
                                break e;
                              }
                          }
                        T = B;
                      }
                  }
                  break;
                case 91:
                  b++;
                case 40:
                  b++;
                case 34:
                case 39:
                  for (; T++ < ge && h.charCodeAt(T) !== b; )
                    ;
              }
              if (_ === 0) break;
              T++;
            }
            switch (_ = h.substring(H, T), R === 0 && (R = (g = g.replace(v, "").trim()).charCodeAt(0)), R) {
              case 64:
                switch (0 < V && (g = g.replace(D, "")), b = g.charCodeAt(1), b) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    V = p;
                    break;
                  default:
                    V = he;
                }
                if (_ = r(p, V, _, b, o + 1), H = _.length, 0 < X && (V = t(he, g, ye), ae = u(3, _, V, p, Z, U, H, b, o, w), g = V.join(""), ae !== void 0 && (H = (_ = ae.trim()).length) === 0 && (b = 0, _ = "")), 0 < H) switch (b) {
                  case 115:
                    g = g.replace(W, s);
                  case 100:
                  case 109:
                  case 45:
                    _ = g + "{" + _ + "}";
                    break;
                  case 107:
                    g = g.replace(x, "$1 $2"), _ = g + "{" + _ + "}", _ = Y === 1 || Y === 2 && i("@" + _, 3) ? "@-webkit-" + _ + "@" + _ : "@" + _;
                    break;
                  default:
                    _ = g + _, w === 112 && (_ = (F += _, ""));
                }
                else _ = "";
                break;
              default:
                _ = r(p, t(p, g, ye), _, w, o + 1);
            }
            Re += _, _ = ye = V = B = R = 0, g = "", b = h.charCodeAt(++T);
            break;
          case 125:
          case 59:
            if (g = (0 < V ? g.replace(D, "") : g).trim(), 1 < (H = g.length)) switch (B === 0 && (R = g.charCodeAt(0), R === 45 || 96 < R && 123 > R) && (H = (g = g.replace(" ", ":")).length), 0 < X && (ae = u(1, g, p, f, Z, U, F.length, w, o, w)) !== void 0 && (H = (g = ae.trim()).length) === 0 && (g = "\0\0"), R = g.charCodeAt(0), b = g.charCodeAt(1), R) {
              case 0:
                break;
              case 64:
                if (b === 105 || b === 99) {
                  Te += g + h.charAt(T);
                  break;
                }
              default:
                g.charCodeAt(H - 1) !== 58 && (F += a(g, R, b, g.charCodeAt(2)));
            }
            ye = V = B = R = 0, g = "", b = h.charCodeAt(++T);
        }
      }
      switch (b) {
        case 13:
        case 10:
          l === 47 ? l = 0 : 1 + R === 0 && w !== 107 && 0 < g.length && (V = 1, g += "\0"), 0 < X * le && u(0, g, p, f, Z, U, F.length, w, o, w), U = 1, Z++;
          break;
        case 59:
        case 125:
          if (l + P + M + E === 0) {
            U++;
            break;
          }
        default:
          switch (U++, Q = h.charAt(T), b) {
            case 9:
            case 32:
              if (P + E + l === 0) switch (L) {
                case 44:
                case 58:
                case 9:
                case 32:
                  Q = "";
                  break;
                default:
                  b !== 32 && (Q = " ");
              }
              break;
            case 0:
              Q = "\\0";
              break;
            case 12:
              Q = "\\f";
              break;
            case 11:
              Q = "\\v";
              break;
            case 38:
              P + l + E === 0 && (V = ye = 1, Q = "\f" + Q);
              break;
            case 108:
              if (P + l + E + ee === 0 && 0 < B) switch (T - B) {
                case 2:
                  L === 112 && h.charCodeAt(T - 3) === 58 && (ee = L);
                case 8:
                  G === 111 && (ee = G);
              }
              break;
            case 58:
              P + l + E === 0 && (B = T);
              break;
            case 44:
              l + M + P + E === 0 && (V = 1, Q += "\r");
              break;
            case 34:
            case 39:
              l === 0 && (P = P === b ? 0 : P === 0 ? b : P);
              break;
            case 91:
              P + l + M === 0 && E++;
              break;
            case 93:
              P + l + M === 0 && E--;
              break;
            case 41:
              P + l + E === 0 && M--;
              break;
            case 40:
              if (P + l + E === 0) {
                if (R === 0) switch (2 * L + 3 * G) {
                  case 533:
                    break;
                  default:
                    R = 1;
                }
                M++;
              }
              break;
            case 64:
              l + M + P + E + B + _ === 0 && (_ = 1);
              break;
            case 42:
            case 47:
              if (!(0 < P + E + M)) switch (l) {
                case 0:
                  switch (2 * b + 3 * h.charCodeAt(T + 1)) {
                    case 235:
                      l = 47;
                      break;
                    case 220:
                      H = T, l = 42;
                  }
                  break;
                case 42:
                  b === 47 && L === 42 && H + 2 !== T && (h.charCodeAt(H + 2) === 33 && (F += h.substring(H, T + 1)), Q = "", l = 0);
              }
          }
          l === 0 && (g += Q);
      }
      G = L, L = b, T++;
    }
    if (H = F.length, 0 < H) {
      if (V = p, 0 < X && (ae = u(2, F, V, f, Z, U, H, w, o, w), ae !== void 0 && (F = ae).length === 0)) return Te + F + Re;
      if (F = V.join(",") + "{" + F + "}", Y * ee !== 0) {
        switch (Y !== 2 || i(F, 2) || (ee = 0), ee) {
          case 111:
            F = F.replace(O, ":-moz-$1") + F;
            break;
          case 112:
            F = F.replace(k, "::-webkit-input-$1") + F.replace(k, "::-moz-$1") + F.replace(k, ":-ms-input-$1") + F;
        }
        ee = 0;
      }
    }
    return Te + F + Re;
  }
  function t(f, p, h) {
    var w = p.trim().split(S);
    p = w;
    var o = w.length, E = f.length;
    switch (E) {
      case 0:
      case 1:
        var l = 0;
        for (f = E === 0 ? "" : f[0] + " "; l < o; ++l)
          p[l] = n(f, p[l], h).trim();
        break;
      default:
        var M = l = 0;
        for (p = []; l < o; ++l)
          for (var P = 0; P < E; ++P)
            p[M++] = n(f[P] + " ", w[l], h).trim();
    }
    return p;
  }
  function n(f, p, h) {
    var w = p.charCodeAt(0);
    switch (33 > w && (w = (p = p.trim()).charCodeAt(0)), w) {
      case 38:
        return p.replace($, "$1" + f.trim());
      case 58:
        return f.trim() + p.replace($, "$1" + f.trim());
      default:
        if (0 < 1 * h && 0 < p.indexOf("\f")) return p.replace($, (f.charCodeAt(0) === 58 ? "" : "$1") + f.trim());
    }
    return f + p;
  }
  function a(f, p, h, w) {
    var o = f + ";", E = 2 * p + 3 * h + 4 * w;
    if (E === 944) {
      f = o.indexOf(":", 9) + 1;
      var l = o.substring(f, o.length - 1).trim();
      return l = o.substring(0, f).trim() + l + ";", Y === 1 || Y === 2 && i(l, 1) ? "-webkit-" + l + l : l;
    }
    if (Y === 0 || Y === 2 && !i(o, 1)) return o;
    switch (E) {
      case 1015:
        return o.charCodeAt(10) === 97 ? "-webkit-" + o + o : o;
      case 951:
        return o.charCodeAt(3) === 116 ? "-webkit-" + o + o : o;
      case 963:
        return o.charCodeAt(5) === 110 ? "-webkit-" + o + o : o;
      case 1009:
        if (o.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + o + o;
      case 978:
        return "-webkit-" + o + "-moz-" + o + o;
      case 1019:
      case 983:
        return "-webkit-" + o + "-moz-" + o + "-ms-" + o + o;
      case 883:
        if (o.charCodeAt(8) === 45) return "-webkit-" + o + o;
        if (0 < o.indexOf("image-set(", 11)) return o.replace(ce, "$1-webkit-$2") + o;
        break;
      case 932:
        if (o.charCodeAt(4) === 45) switch (o.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + o.replace("-grow", "") + "-webkit-" + o + "-ms-" + o.replace("grow", "positive") + o;
          case 115:
            return "-webkit-" + o + "-ms-" + o.replace("shrink", "negative") + o;
          case 98:
            return "-webkit-" + o + "-ms-" + o.replace("basis", "preferred-size") + o;
        }
        return "-webkit-" + o + "-ms-" + o + o;
      case 964:
        return "-webkit-" + o + "-ms-flex-" + o + o;
      case 1023:
        if (o.charCodeAt(8) !== 99) break;
        return l = o.substring(o.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + l + "-webkit-" + o + "-ms-flex-pack" + l + o;
      case 1005:
        return A.test(o) ? o.replace(z, ":-webkit-") + o.replace(z, ":-moz-") + o : o;
      case 1e3:
        switch (l = o.substring(13).trim(), p = l.indexOf("-") + 1, l.charCodeAt(0) + l.charCodeAt(p)) {
          case 226:
            l = o.replace(c, "tb");
            break;
          case 232:
            l = o.replace(c, "tb-rl");
            break;
          case 220:
            l = o.replace(c, "lr");
            break;
          default:
            return o;
        }
        return "-webkit-" + o + "-ms-" + l + o;
      case 1017:
        if (o.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (p = (o = f).length - 10, l = (o.charCodeAt(p) === 33 ? o.substring(0, p) : o).substring(f.indexOf(":", 7) + 1).trim(), E = l.charCodeAt(0) + (l.charCodeAt(7) | 0)) {
          case 203:
            if (111 > l.charCodeAt(8)) break;
          case 115:
            o = o.replace(l, "-webkit-" + l) + ";" + o;
            break;
          case 207:
          case 102:
            o = o.replace(l, "-webkit-" + (102 < E ? "inline-" : "") + "box") + ";" + o.replace(l, "-webkit-" + l) + ";" + o.replace(l, "-ms-" + l + "box") + ";" + o;
        }
        return o + ";";
      case 938:
        if (o.charCodeAt(5) === 45) switch (o.charCodeAt(6)) {
          case 105:
            return l = o.replace("-items", ""), "-webkit-" + o + "-webkit-box-" + l + "-ms-flex-" + l + o;
          case 115:
            return "-webkit-" + o + "-ms-flex-item-" + o.replace(q, "") + o;
          default:
            return "-webkit-" + o + "-ms-flex-line-pack" + o.replace("align-content", "").replace(q, "") + o;
        }
        break;
      case 973:
      case 989:
        if (o.charCodeAt(3) !== 45 || o.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (oe.test(f) === !0) return (l = f.substring(f.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(f.replace("stretch", "fill-available"), p, h, w).replace(":fill-available", ":stretch") : o.replace(l, "-webkit-" + l) + o.replace(l, "-moz-" + l.replace("fill-", "")) + o;
        break;
      case 962:
        if (o = "-webkit-" + o + (o.charCodeAt(5) === 102 ? "-ms-" + o : "") + o, h + w === 211 && o.charCodeAt(13) === 105 && 0 < o.indexOf("transform", 10)) return o.substring(0, o.indexOf(";", 27) + 1).replace(C, "$1-webkit-$2") + o;
    }
    return o;
  }
  function i(f, p) {
    var h = f.indexOf(p === 1 ? ":" : "{"), w = f.substring(0, p !== 3 ? h : 10);
    return h = f.substring(h + 1, f.length - 1), fe(p !== 2 ? w : w.replace(J, "$1"), h, p);
  }
  function s(f, p) {
    var h = a(p, p.charCodeAt(0), p.charCodeAt(1), p.charCodeAt(2));
    return h !== p + ";" ? h.replace(ne, " or ($1)").substring(4) : "(" + p + ")";
  }
  function u(f, p, h, w, o, E, l, M, P, R) {
    for (var b = 0, L = p, G; b < X; ++b)
      switch (G = K[b].call(y, f, L, h, w, o, E, l, M, P, R)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          L = G;
      }
    if (L !== p) return L;
  }
  function d(f) {
    switch (f) {
      case void 0:
      case null:
        X = K.length = 0;
        break;
      default:
        if (typeof f == "function") K[X++] = f;
        else if (typeof f == "object") for (var p = 0, h = f.length; p < h; ++p)
          d(f[p]);
        else le = !!f | 0;
    }
    return d;
  }
  function m(f) {
    return f = f.prefix, f !== void 0 && (fe = null, f ? typeof f != "function" ? Y = 1 : (Y = 2, fe = f) : Y = 0), m;
  }
  function y(f, p) {
    var h = f;
    if (33 > h.charCodeAt(0) && (h = h.trim()), me = h, h = [me], 0 < X) {
      var w = u(-1, p, h, h, Z, U, 0, 0, 0, 0);
      w !== void 0 && typeof w == "string" && (p = w);
    }
    var o = r(he, h, p, 0, 0);
    return 0 < X && (w = u(-2, o, h, h, Z, U, o.length, 0, 0, 0), w !== void 0 && (o = w)), me = "", ee = 0, U = Z = 1, o;
  }
  var v = /^\0+/g, D = /[\0\r\f]/g, z = /: */g, A = /zoo|gra/, C = /([,: ])(transform)/g, S = /,\r+?/g, $ = /([\t\r\n ])*\f?&/g, x = /@(k\w+)\s*(\S*)\s*/, k = /::(place)/g, O = /:(read-only)/g, c = /[svh]\w+-[tblr]{2}/, W = /\(\s*(.*)\s*\)/g, ne = /([\s\S]*?);/g, q = /-self|flex-/g, J = /[^]*?(:[rp][el]a[\w-]+)[^]*/, oe = /stretch|:\s*\w+\-(?:conte|avail)/, ce = /([^-])(image-set\()/, U = 1, Z = 1, ee = 0, Y = 1, he = [], K = [], X = 0, fe = null, le = 0, me = "";
  return y.use = d, y.set = m, e !== void 0 && m(e), y;
}
var zt = {
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
function Mt(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Ft = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, rt = /* @__PURE__ */ Mt(
  function(e) {
    return Ft.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ue = yt(), Lt = {
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
}, Vt = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ht = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, gt = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, qe = {};
qe[Ue.ForwardRef] = Ht;
qe[Ue.Memo] = gt;
function nt(e) {
  return Ue.isMemo(e) ? gt : qe[e.$$typeof] || Lt;
}
var Bt = Object.defineProperty, Wt = Object.getOwnPropertyNames, ot = Object.getOwnPropertySymbols, Yt = Object.getOwnPropertyDescriptor, Gt = Object.getPrototypeOf, at = Object.prototype;
function vt(e, r, t) {
  if (typeof r != "string") {
    if (at) {
      var n = Gt(r);
      n && n !== at && vt(e, n, t);
    }
    var a = Wt(r);
    ot && (a = a.concat(ot(r)));
    for (var i = nt(e), s = nt(r), u = 0; u < a.length; ++u) {
      var d = a[u];
      if (!Vt[d] && !(t && t[d]) && !(s && s[d]) && !(i && i[d])) {
        var m = Yt(r, d);
        try {
          Bt(e, d, m);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ut = vt;
const qt = /* @__PURE__ */ Ye(Ut);
var I = { env: { NODE_ENV: "production" } };
function re() {
  return (re = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var it = function(e, r) {
  for (var t = [e[0]], n = 0, a = r.length; n < a; n += 1) t.push(r[n], e[n + 1]);
  return t;
}, Me = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ge.typeOf(e);
}, Ee = Object.freeze([]), ie = Object.freeze({});
function be(e) {
  return typeof e == "function";
}
function Fe(e) {
  return I.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Xe(e) {
  return e && typeof e.styledComponentId == "string";
}
var ue = typeof I < "u" && I.env !== void 0 && (I.env.REACT_APP_SC_ATTR || I.env.SC_ATTR) || "data-styled", Ze = typeof window < "u" && "HTMLElement" in window, Xt = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof I < "u" && I.env !== void 0 && (I.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && I.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? I.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && I.env.REACT_APP_SC_DISABLE_SPEEDY : I.env.SC_DISABLE_SPEEDY !== void 0 && I.env.SC_DISABLE_SPEEDY !== "" ? I.env.SC_DISABLE_SPEEDY !== "false" && I.env.SC_DISABLE_SPEEDY : I.env.NODE_ENV !== "production")), Zt = I.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Kt() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1) r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function pe(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  throw I.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Kt.apply(void 0, [Zt[e]].concat(t)).trim());
}
var Qt = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, a = 0; a < t; a++) n += this.groupSizes[a];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var a = this.groupSizes, i = a.length, s = i; t >= s; ) (s <<= 1) < 0 && pe(16, "" + t);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(a), this.length = s;
      for (var u = i; u < s; u++) this.groupSizes[u] = 0;
    }
    for (var d = this.indexOfGroup(t + 1), m = 0, y = n.length; m < y; m++) this.tag.insertRule(d, n[m]) && (this.groupSizes[t]++, d++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], a = this.indexOfGroup(t), i = a + n;
      this.groupSizes[t] = 0;
      for (var s = a; s < i; s++) this.tag.deleteRule(a);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var a = this.groupSizes[t], i = this.indexOfGroup(t), s = i + a, u = i; u < s; u++) n += this.tag.getRule(u) + `/*!sc*/
`;
    return n;
  }, e;
}(), Oe = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), we = 1, ke = function(e) {
  if (Oe.has(e)) return Oe.get(e);
  for (; Pe.has(we); ) we++;
  var r = we++;
  return I.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && pe(16, "" + r), Oe.set(e, r), Pe.set(r, e), r;
}, Jt = function(e) {
  return Pe.get(e);
}, er = function(e, r) {
  r >= we && (we = r + 1), Oe.set(e, r), Pe.set(r, e);
}, tr = "style[" + ue + '][data-styled-version="5.3.11"]', rr = new RegExp("^" + ue + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), nr = function(e, r, t) {
  for (var n, a = t.split(","), i = 0, s = a.length; i < s; i++) (n = a[i]) && e.registerName(r, n);
}, or = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], a = 0, i = t.length; a < i; a++) {
    var s = t[a].trim();
    if (s) {
      var u = s.match(rr);
      if (u) {
        var d = 0 | parseInt(u[1], 10), m = u[2];
        d !== 0 && (er(m, d), nr(e, m, u[3]), e.getTag().insertRules(d, n)), n.length = 0;
      } else n.push(s);
    }
  }
}, ar = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, wt = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), a = function(u) {
    for (var d = u.childNodes, m = d.length; m >= 0; m--) {
      var y = d[m];
      if (y && y.nodeType === 1 && y.hasAttribute(ue)) return y;
    }
  }(t), i = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(ue, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var s = ar();
  return s && n.setAttribute("nonce", s), t.insertBefore(n, i), n;
}, ir = function() {
  function e(t) {
    var n = this.element = wt(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var i = document.styleSheets, s = 0, u = i.length; s < u; s++) {
        var d = i[s];
        if (d.ownerNode === a) return d;
      }
      pe(17);
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
}(), sr = function() {
  function e(t) {
    var n = this.element = wt(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var a = document.createTextNode(n), i = this.nodes[t];
      return this.element.insertBefore(a, i || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), cr = function() {
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
}(), st = Ze, lr = { isServer: !Ze, useCSSOMInjection: !Xt }, bt = function() {
  function e(t, n, a) {
    t === void 0 && (t = ie), n === void 0 && (n = {}), this.options = re({}, lr, {}, t), this.gs = n, this.names = new Map(a), this.server = !!t.isServer, !this.server && Ze && st && (st = !1, function(i) {
      for (var s = document.querySelectorAll(tr), u = 0, d = s.length; u < d; u++) {
        var m = s[u];
        m && m.getAttribute(ue) !== "active" && (or(i, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  e.registerId = function(t) {
    return ke(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(re({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, i = n.useCSSOMInjection, s = n.target, t = a ? new cr(s) : i ? new ir(s) : new sr(s), new Qt(t)));
    var t, n, a, i, s;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (ke(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(t, a);
    }
  }, r.insertRules = function(t, n, a) {
    this.registerName(t, n), this.getTag().insertRules(ke(t), a);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(ke(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), a = n.length, i = "", s = 0; s < a; s++) {
        var u = Jt(s);
        if (u !== void 0) {
          var d = t.names.get(u), m = n.getGroup(s);
          if (d && m && d.size) {
            var y = ue + ".g" + s + '[id="' + u + '"]', v = "";
            d !== void 0 && d.forEach(function(D) {
              D.length > 0 && (v += D + ",");
            }), i += "" + m + y + '{content:"' + v + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), ur = /(a)(d)/gi, ct = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Le(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = ct(r % 52) + t;
  return (ct(r % 52) + t).replace(ur, "$1-$2");
}
var se = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, St = function(e) {
  return se(5381, e);
};
function dr(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (be(t) && !Xe(t)) return !1;
  }
  return !0;
}
var pr = St("5.3.11"), hr = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = I.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && dr(r), this.componentId = t, this.baseHash = se(pr, t), this.baseStyle = n, bt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var a = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(a, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var s = de(this.rules, r, t, n).join(""), u = Le(se(this.baseHash, s) >>> 0);
      if (!t.hasNameForId(a, u)) {
        var d = n(s, "." + u, void 0, a);
        t.insertRules(a, u, d);
      }
      i.push(u), this.staticRulesId = u;
    }
    else {
      for (var m = this.rules.length, y = se(this.baseHash, n.hash), v = "", D = 0; D < m; D++) {
        var z = this.rules[D];
        if (typeof z == "string") v += z, I.env.NODE_ENV !== "production" && (y = se(y, z + D));
        else if (z) {
          var A = de(z, r, t, n), C = Array.isArray(A) ? A.join("") : A;
          y = se(y, C + D), v += C;
        }
      }
      if (v) {
        var S = Le(y >>> 0);
        if (!t.hasNameForId(a, S)) {
          var $ = n(v, "." + S, void 0, a);
          t.insertRules(a, S, $);
        }
        i.push(S);
      }
    }
    return i.join(" ");
  }, e;
}(), fr = /^\s*\/\/.*$/gm, mr = [":", "[", ".", "#"];
function yr(e) {
  var r, t, n, a, i = ie, s = i.options, u = s === void 0 ? ie : s, d = i.plugins, m = d === void 0 ? Ee : d, y = new $t(u), v = [], D = /* @__PURE__ */ function(C) {
    function S($) {
      if ($) try {
        C($ + "}");
      } catch {
      }
    }
    return function($, x, k, O, c, W, ne, q, J, oe) {
      switch ($) {
        case 1:
          if (J === 0 && x.charCodeAt(0) === 64) return C(x + ";"), "";
          break;
        case 2:
          if (q === 0) return x + "/*|*/";
          break;
        case 3:
          switch (q) {
            case 102:
            case 112:
              return C(k[0] + x), "";
            default:
              return x + (oe === 0 ? "/*|*/" : "");
          }
        case -2:
          x.split("/*|*/}").forEach(S);
      }
    };
  }(function(C) {
    v.push(C);
  }), z = function(C, S, $) {
    return S === 0 && mr.indexOf($[t.length]) !== -1 || $.match(a) ? C : "." + r;
  };
  function A(C, S, $, x) {
    x === void 0 && (x = "&");
    var k = C.replace(fr, ""), O = S && $ ? $ + " " + S + " { " + k + " }" : k;
    return r = x, t = S, n = new RegExp("\\" + t + "\\b", "g"), a = new RegExp("(\\" + t + "\\b){2,}"), y($ || !S ? "" : S, O);
  }
  return y.use([].concat(m, [function(C, S, $) {
    C === 2 && $.length && $[0].lastIndexOf(t) > 0 && ($[0] = $[0].replace(n, z));
  }, D, function(C) {
    if (C === -2) {
      var S = v;
      return v = [], S;
    }
  }])), A.hash = m.length ? m.reduce(function(C, S) {
    return S.name || pe(15), se(C, S.name);
  }, 5381).toString() : "", A;
}
var At = Se.createContext();
At.Consumer;
var xt = Se.createContext(), gr = (xt.Consumer, new bt()), Ve = yr();
function vr() {
  return We(At) || gr;
}
function wr() {
  return We(xt) || Ve;
}
var br = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(a, i) {
      i === void 0 && (i = Ve);
      var s = n.name + i.hash;
      a.hasNameForId(n.id, s) || a.insertRules(n.id, s, i(n.rules, s, "@keyframes"));
    }, this.toString = function() {
      return pe(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Ve), this.name + r.hash;
  }, e;
}(), Sr = /([A-Z])/, Ar = /([A-Z])/g, xr = /^ms-/, kr = function(e) {
  return "-" + e.toLowerCase();
};
function lt(e) {
  return Sr.test(e) ? e.replace(Ar, kr).replace(xr, "-ms-") : e;
}
var ut = function(e) {
  return e == null || e === !1 || e === "";
};
function de(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var a, i = [], s = 0, u = e.length; s < u; s += 1) (a = de(e[s], r, t, n)) !== "" && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
    return i;
  }
  if (ut(e)) return "";
  if (Xe(e)) return "." + e.styledComponentId;
  if (be(e)) {
    if (typeof (m = e) != "function" || m.prototype && m.prototype.isReactComponent || !r) return e;
    var d = e(r);
    return I.env.NODE_ENV !== "production" && Ge.isElement(d) && console.warn(Fe(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), de(d, r, t, n);
  }
  var m;
  return e instanceof br ? t ? (e.inject(t, n), e.getName(n)) : e : Me(e) ? function y(v, D) {
    var z, A, C = [];
    for (var S in v) v.hasOwnProperty(S) && !ut(v[S]) && (Array.isArray(v[S]) && v[S].isCss || be(v[S]) ? C.push(lt(S) + ":", v[S], ";") : Me(v[S]) ? C.push.apply(C, y(v[S], S)) : C.push(lt(S) + ": " + (z = S, (A = v[S]) == null || typeof A == "boolean" || A === "" ? "" : typeof A != "number" || A === 0 || z in zt || z.startsWith("--") ? String(A).trim() : A + "px") + ";"));
    return D ? [D + " {"].concat(C, ["}"]) : C;
  }(e) : e.toString();
}
var dt = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Cr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  return be(e) || Me(e) ? dt(de(it(Ee, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : dt(de(it(e, t)));
}
var pt = /invalid hook call/i, Ce = /* @__PURE__ */ new Set(), _r = function(e, r) {
  if (I.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(i) {
        if (pt.test(i)) a = !1, Ce.delete(t);
        else {
          for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), d = 1; d < s; d++) u[d - 1] = arguments[d];
          n.apply(void 0, [i].concat(u));
        }
      }, Ot(), a && !Ce.has(t) && (console.warn(t), Ce.add(t));
    } catch (i) {
      pt.test(i.message) && Ce.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Or = function(e, r, t) {
  return t === void 0 && (t = ie), e.theme !== t.theme && e.theme || r || t.theme;
}, Er = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Pr = /(^-|-$)/g;
function $e(e) {
  return e.replace(Er, "-").replace(Pr, "");
}
var Rr = function(e) {
  return Le(St(e) >>> 0);
};
function _e(e) {
  return typeof e == "string" && (I.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var He = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Tr = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Nr(e, r, t) {
  var n = e[t];
  He(r) && He(n) ? kt(n, r) : e[t] = r;
}
function kt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  for (var a = 0, i = t; a < i.length; a++) {
    var s = i[a];
    if (He(s)) for (var u in s) Tr(u) && Nr(e, s[u], u);
  }
  return e;
}
var Ct = Se.createContext();
Ct.Consumer;
var ze = {};
function _t(e, r, t) {
  var n = Xe(e), a = !_e(e), i = r.attrs, s = i === void 0 ? Ee : i, u = r.componentId, d = u === void 0 ? function(x, k) {
    var O = typeof x != "string" ? "sc" : $e(x);
    ze[O] = (ze[O] || 0) + 1;
    var c = O + "-" + Rr("5.3.11" + O + ze[O]);
    return k ? k + "-" + c : c;
  }(r.displayName, r.parentComponentId) : u, m = r.displayName, y = m === void 0 ? function(x) {
    return _e(x) ? "styled." + x : "Styled(" + Fe(x) + ")";
  }(e) : m, v = r.displayName && r.componentId ? $e(r.displayName) + "-" + r.componentId : r.componentId || d, D = n && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, z = r.shouldForwardProp;
  n && e.shouldForwardProp && (z = r.shouldForwardProp ? function(x, k, O) {
    return e.shouldForwardProp(x, k, O) && r.shouldForwardProp(x, k, O);
  } : e.shouldForwardProp);
  var A, C = new hr(t, v, n ? e.componentStyle : void 0), S = C.isStatic && s.length === 0, $ = function(x, k) {
    return function(O, c, W, ne) {
      var q = O.attrs, J = O.componentStyle, oe = O.defaultProps, ce = O.foldedComponentIds, U = O.shouldForwardProp, Z = O.styledComponentId, ee = O.target, Y = function(w, o, E) {
        w === void 0 && (w = ie);
        var l = re({}, o, { theme: w }), M = {};
        return E.forEach(function(P) {
          var R, b, L, G = P;
          for (R in be(G) && (G = G(l)), G) l[R] = M[R] = R === "className" ? (b = M[R], L = G[R], b && L ? b + " " + L : b || L) : G[R];
        }), [l, M];
      }(Or(c, We(Ct), oe) || ie, c, q), he = Y[0], K = Y[1], X = function(w, o, E, l) {
        var M = vr(), P = wr(), R = o ? w.generateAndInjectStyles(ie, M, P) : w.generateAndInjectStyles(E, M, P);
        return I.env.NODE_ENV !== "production" && !o && l && l(R), R;
      }(J, ne, he, I.env.NODE_ENV !== "production" ? O.warnTooManyClasses : void 0), fe = W, le = K.$as || c.$as || K.as || c.as || ee, me = _e(le), f = K !== c ? re({}, c, {}, K) : c, p = {};
      for (var h in f) h[0] !== "$" && h !== "as" && (h === "forwardedAs" ? p.as = f[h] : (U ? U(h, rt, le) : !me || rt(h)) && (p[h] = f[h]));
      return c.style && K.style !== c.style && (p.style = re({}, c.style, {}, K.style)), p.className = Array.prototype.concat(ce, Z, X !== Z ? X : null, c.className, K.className).filter(Boolean).join(" "), p.ref = fe, Et(le, p);
    }(A, x, k, S);
  };
  return $.displayName = y, (A = Se.forwardRef($)).attrs = D, A.componentStyle = C, A.displayName = y, A.shouldForwardProp = z, A.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ee, A.styledComponentId = v, A.target = n ? e.target : e, A.withComponent = function(x) {
    var k = r.componentId, O = function(W, ne) {
      if (W == null) return {};
      var q, J, oe = {}, ce = Object.keys(W);
      for (J = 0; J < ce.length; J++) q = ce[J], ne.indexOf(q) >= 0 || (oe[q] = W[q]);
      return oe;
    }(r, ["componentId"]), c = k && k + "-" + (_e(x) ? x : $e(Fe(x)));
    return _t(x, re({}, O, { attrs: D, componentId: c }), t);
  }, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = n ? kt({}, e.defaultProps, x) : x;
  } }), I.env.NODE_ENV !== "production" && (_r(y, v), A.warnTooManyClasses = /* @__PURE__ */ function(x, k) {
    var O = {}, c = !1;
    return function(W) {
      if (!c && (O[W] = !0, Object.keys(O).length >= 200)) {
        var ne = k ? ' with the id of "' + k + '"' : "";
        console.warn("Over 200 classes were generated for component " + x + ne + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), c = !0, O = {};
      }
    };
  }(y, v)), Object.defineProperty(A, "toString", { value: function() {
    return "." + A.styledComponentId;
  } }), a && qt(A, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), A;
}
var Be = function(e) {
  return function r(t, n, a) {
    if (a === void 0 && (a = ie), !Ge.isValidElementType(n)) return pe(1, String(n));
    var i = function() {
      return t(n, a, Cr.apply(void 0, arguments));
    };
    return i.withConfig = function(s) {
      return r(t, n, re({}, a, {}, s));
    }, i.attrs = function(s) {
      return r(t, n, re({}, a, { attrs: Array.prototype.concat(a.attrs, s).filter(Boolean) }));
    }, i;
  }(_t, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Be[e] = Be(e);
});
I.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), I.env.NODE_ENV !== "production" && I.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Ir = Be.img`
  width: 100%;
`;
function jr({ image: e, title: r, contents: t }) {
  return console.log({ image: e, title: r, contents: t }), /* @__PURE__ */ te.jsx("div", { children: "TODO: to be implemented" });
}
function Dr({
  image: e,
  subTitle: r,
  title: t,
  contents: n,
  contentsColor: a
}) {
  const i = {
    small: "uds-hero-sm",
    medium: "uds-hero-md",
    large: "uds-hero-lg",
    undefined: ""
  }, s = {
    gold: "highlight-gold",
    black: "highlight-black",
    white: "highlight-white",
    none: "text-white",
    undefined: ""
  }, u = {
    black: "text-dark",
    white: "text-white",
    undefined: ""
  };
  return /* @__PURE__ */ te.jsxs(
    "div",
    {
      className: xe("uds-hero", {
        [i[e == null ? void 0 : e.size]]: e == null ? void 0 : e.size
      }),
      children: [
        /* @__PURE__ */ te.jsx("div", { className: "hero-overlay" }),
        /* @__PURE__ */ te.jsx(
          Ir,
          {
            className: "hero",
            src: e == null ? void 0 : e.url,
            alt: e == null ? void 0 : e.altText,
            "data-testid": "hero-image"
          }
        ),
        r && /* @__PURE__ */ te.jsx("div", { role: "doc-subtitle", "data-testid": "hero-subtitle", children: /* @__PURE__ */ te.jsx(
          "span",
          {
            className: xe({
              [u[r.color]]: r.color,
              [s[r.highlightColor]]: r.highlightColor
            }),
            children: r.text
          }
        ) }),
        t && /* @__PURE__ */ te.jsx("h1", { style: { maxWidth: t.maxWidth || "" }, "data-testid": "hero-title", children: /* @__PURE__ */ te.jsx(
          "span",
          {
            className: xe({
              [u[t.color]]: t.color,
              [s[t.highlightColor]]: t.highlightColor
            }),
            children: t.text
          }
        ) }),
        n && /* @__PURE__ */ te.jsx(
          "div",
          {
            "data-testid": "hero-content",
            className: xe("content", {
              [u[a]]: a
            }),
            children: n.map((d, m) => (
              // eslint-disable-next-line react/no-array-index-key
              /* @__PURE__ */ te.jsx("p", { children: d.text }, `content-${m}`)
            ))
          }
        )
      ]
    }
  );
}
const $r = (e) => {
  const r = e.type || "heading-hero";
  return {
    "heading-hero": () => Dr(e),
    "story-hero": () => jr(e),
    undefined: () => (console.error(
      `the type '${r}' is not supported by the 'Hero' component.`
    ), null)
  }[r]();
};
$r.propTypes = {
  type: j.oneOf(["heading-hero", "story-hero"]),
  image: Dt,
  title: De,
  subTitle: De,
  contents: j.arrayOf(De),
  contentsColor: j.string
};
export {
  $r as Hero
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
