import Ue, { Component as Ai, forwardRef as Ri, useId as Oi, useRef as Ni, useContext as Zn, createElement as Pi } from "react";
function Kn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Jo = { exports: {} }, Rr = {};
var xo;
function Ii() {
  if (xo) return Rr;
  xo = 1;
  var r = Ue, o = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(x, w, m) {
    var P, I = {}, q = null, J = null;
    m !== void 0 && (q = "" + m), w.key !== void 0 && (q = "" + w.key), w.ref !== void 0 && (J = w.ref);
    for (P in w) s.call(w, P) && !d.hasOwnProperty(P) && (I[P] = w[P]);
    if (x && x.defaultProps) for (P in w = x.defaultProps, w) I[P] === void 0 && (I[P] = w[P]);
    return { $$typeof: o, type: x, key: q, ref: J, props: I, _owner: c.current };
  }
  return Rr.Fragment = a, Rr.jsx = g, Rr.jsxs = g, Rr;
}
Jo.exports = Ii();
var D = Jo.exports, Qo = { exports: {} };
(function(r) {
  (function() {
    var o = {}.hasOwnProperty;
    function a() {
      for (var d = "", g = 0; g < arguments.length; g++) {
        var x = arguments[g];
        x && (d = c(d, s(x)));
      }
      return d;
    }
    function s(d) {
      if (typeof d == "string" || typeof d == "number")
        return d;
      if (typeof d != "object")
        return "";
      if (Array.isArray(d))
        return a.apply(null, d);
      if (d.toString !== Object.prototype.toString && !d.toString.toString().includes("[native code]"))
        return d.toString();
      var g = "";
      for (var x in d)
        o.call(d, x) && d[x] && (g = c(g, x));
      return g;
    }
    function c(d, g) {
      return g ? d ? d + " " + g : d + g : d;
    }
    r.exports ? (a.default = a, r.exports = a) : window.classNames = a;
  })();
})(Qo);
var Mi = Qo.exports;
const cr = /* @__PURE__ */ Kn(Mi);
var ei = { exports: {} }, bn = { exports: {} }, xe = {};
var ko;
function Fi() {
  if (ko) return xe;
  ko = 1;
  var r = typeof Symbol == "function" && Symbol.for, o = r ? Symbol.for("react.element") : 60103, a = r ? Symbol.for("react.portal") : 60106, s = r ? Symbol.for("react.fragment") : 60107, c = r ? Symbol.for("react.strict_mode") : 60108, d = r ? Symbol.for("react.profiler") : 60114, g = r ? Symbol.for("react.provider") : 60109, x = r ? Symbol.for("react.context") : 60110, w = r ? Symbol.for("react.async_mode") : 60111, m = r ? Symbol.for("react.concurrent_mode") : 60111, P = r ? Symbol.for("react.forward_ref") : 60112, I = r ? Symbol.for("react.suspense") : 60113, q = r ? Symbol.for("react.suspense_list") : 60120, J = r ? Symbol.for("react.memo") : 60115, L = r ? Symbol.for("react.lazy") : 60116, Q = r ? Symbol.for("react.block") : 60121, B = r ? Symbol.for("react.fundamental") : 60117, U = r ? Symbol.for("react.responder") : 60118, W = r ? Symbol.for("react.scope") : 60119;
  function ee(C) {
    if (typeof C == "object" && C !== null) {
      var oe = C.$$typeof;
      switch (oe) {
        case o:
          switch (C = C.type, C) {
            case w:
            case m:
            case s:
            case d:
            case c:
            case I:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case x:
                case P:
                case L:
                case J:
                case g:
                  return C;
                default:
                  return oe;
              }
          }
        case a:
          return oe;
      }
    }
  }
  function G(C) {
    return ee(C) === m;
  }
  return xe.AsyncMode = w, xe.ConcurrentMode = m, xe.ContextConsumer = x, xe.ContextProvider = g, xe.Element = o, xe.ForwardRef = P, xe.Fragment = s, xe.Lazy = L, xe.Memo = J, xe.Portal = a, xe.Profiler = d, xe.StrictMode = c, xe.Suspense = I, xe.isAsyncMode = function(C) {
    return G(C) || ee(C) === w;
  }, xe.isConcurrentMode = G, xe.isContextConsumer = function(C) {
    return ee(C) === x;
  }, xe.isContextProvider = function(C) {
    return ee(C) === g;
  }, xe.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === o;
  }, xe.isForwardRef = function(C) {
    return ee(C) === P;
  }, xe.isFragment = function(C) {
    return ee(C) === s;
  }, xe.isLazy = function(C) {
    return ee(C) === L;
  }, xe.isMemo = function(C) {
    return ee(C) === J;
  }, xe.isPortal = function(C) {
    return ee(C) === a;
  }, xe.isProfiler = function(C) {
    return ee(C) === d;
  }, xe.isStrictMode = function(C) {
    return ee(C) === c;
  }, xe.isSuspense = function(C) {
    return ee(C) === I;
  }, xe.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === s || C === m || C === d || C === c || C === I || C === q || typeof C == "object" && C !== null && (C.$$typeof === L || C.$$typeof === J || C.$$typeof === g || C.$$typeof === x || C.$$typeof === P || C.$$typeof === B || C.$$typeof === U || C.$$typeof === W || C.$$typeof === Q);
  }, xe.typeOf = ee, xe;
}
var bo;
function ti() {
  return bo || (bo = 1, bn.exports = Fi()), bn.exports;
}
var En, Eo;
function Di() {
  if (Eo) return En;
  Eo = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return En = r, En;
}
var _n, _o;
function Li() {
  if (_o) return _n;
  _o = 1;
  var r = Di();
  function o() {
  }
  function a() {
  }
  return a.resetWarningCache = o, _n = function() {
    function s(g, x, w, m, P, I) {
      if (I !== r) {
        var q = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw q.name = "Invariant Violation", q;
      }
    }
    s.isRequired = s;
    function c() {
      return s;
    }
    var d = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: c,
      element: s,
      elementType: s,
      instanceOf: c,
      node: s,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: a,
      resetWarningCache: o
    };
    return d.PropTypes = d, d;
  }, _n;
}
ei.exports = Li()();
var ji = ei.exports;
const T = /* @__PURE__ */ Kn(ji);
var Fn = function() {
  return Fn = Object.assign || function(r) {
    for (var o, a = 1, s = arguments.length; a < s; a++) {
      o = arguments[a];
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (r[c] = o[c]);
    }
    return r;
  }, Fn.apply(this, arguments);
}, zi = function(r, o) {
  var a = {};
  for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && o.indexOf(s) < 0 && (a[s] = r[s]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, s = Object.getOwnPropertySymbols(r); c < s.length; c++)
      o.indexOf(s[c]) < 0 && Object.prototype.propertyIsEnumerable.call(r, s[c]) && (a[s[c]] = r[s[c]]);
  return a;
};
function fn(r) {
  var o = function(a) {
    var s = a.bgStyle, c = a.borderRadius, d = a.iconFillColor, g = a.round, x = a.size, w = zi(a, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return Ue.createElement(
      "svg",
      Fn({ viewBox: "0 0 64 64", width: x, height: x }, w),
      g ? Ue.createElement("circle", { cx: "32", cy: "32", r: "31", fill: r.color, style: s }) : Ue.createElement("rect", { width: "64", height: "64", rx: c, ry: c, fill: r.color, style: s }),
      Ue.createElement("path", { d: r.path, fill: d })
    );
  };
  return o.defaultProps = {
    bgStyle: {},
    borderRadius: 0,
    iconFillColor: "white",
    size: 64
  }, o;
}
var $i = fn({
  color: "#7f7f7f",
  networkName: "email",
  path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
});
function pn(r) {
  var o = Object.entries(r).filter(function(a) {
    var s = a[1];
    return s != null;
  }).map(function(a) {
    var s = a[0], c = a[1];
    return "".concat(encodeURIComponent(s), "=").concat(encodeURIComponent(String(c)));
  });
  return o.length > 0 ? "?".concat(o.join("&")) : "";
}
var Bi = /* @__PURE__ */ function() {
  var r = function(o, a) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, c) {
      s.__proto__ = c;
    } || function(s, c) {
      for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (s[d] = c[d]);
    }, r(o, a);
  };
  return function(o, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    r(o, a);
    function s() {
      this.constructor = o;
    }
    o.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
  };
}(), Lt = function() {
  return Lt = Object.assign || function(r) {
    for (var o, a = 1, s = arguments.length; a < s; a++) {
      o = arguments[a];
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (r[c] = o[c]);
    }
    return r;
  }, Lt.apply(this, arguments);
}, Hi = function(r, o, a, s) {
  function c(d) {
    return d instanceof a ? d : new a(function(g) {
      g(d);
    });
  }
  return new (a || (a = Promise))(function(d, g) {
    function x(P) {
      try {
        m(s.next(P));
      } catch (I) {
        g(I);
      }
    }
    function w(P) {
      try {
        m(s.throw(P));
      } catch (I) {
        g(I);
      }
    }
    function m(P) {
      P.done ? d(P.value) : c(P.value).then(x, w);
    }
    m((s = s.apply(r, o || [])).next());
  });
}, Ui = function(r, o) {
  var a = { label: 0, sent: function() {
    if (d[0] & 1) throw d[1];
    return d[1];
  }, trys: [], ops: [] }, s, c, d, g;
  return g = { next: x(0), throw: x(1), return: x(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function x(m) {
    return function(P) {
      return w([m, P]);
    };
  }
  function w(m) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; a; ) try {
      if (s = 1, c && (d = m[0] & 2 ? c.return : m[0] ? c.throw || ((d = c.return) && d.call(c), 0) : c.next) && !(d = d.call(c, m[1])).done) return d;
      switch (c = 0, d && (m = [m[0] & 2, d.value]), m[0]) {
        case 0:
        case 1:
          d = m;
          break;
        case 4:
          return a.label++, { value: m[1], done: !1 };
        case 5:
          a.label++, c = m[1], m = [0];
          continue;
        case 7:
          m = a.ops.pop(), a.trys.pop();
          continue;
        default:
          if (d = a.trys, !(d = d.length > 0 && d[d.length - 1]) && (m[0] === 6 || m[0] === 2)) {
            a = 0;
            continue;
          }
          if (m[0] === 3 && (!d || m[1] > d[0] && m[1] < d[3])) {
            a.label = m[1];
            break;
          }
          if (m[0] === 6 && a.label < d[1]) {
            a.label = d[1], d = m;
            break;
          }
          if (d && a.label < d[2]) {
            a.label = d[2], a.ops.push(m);
            break;
          }
          d[2] && a.ops.pop(), a.trys.pop();
          continue;
      }
      m = o.call(r, a);
    } catch (P) {
      m = [6, P], c = 0;
    } finally {
      s = d = 0;
    }
    if (m[0] & 5) throw m[1];
    return { value: m[0] ? m[1] : void 0, done: !0 };
  }
}, ri = function(r, o) {
  var a = {};
  for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && o.indexOf(s) < 0 && (a[s] = r[s]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, s = Object.getOwnPropertySymbols(r); c < s.length; c++)
      o.indexOf(s[c]) < 0 && Object.prototype.propertyIsEnumerable.call(r, s[c]) && (a[s[c]] = r[s[c]]);
  return a;
}, Wi = function(r) {
  return !!r && (typeof r == "object" || typeof r == "function") && typeof r.then == "function";
}, Vi = function(r, o) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - r / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - o / 2
  };
}, Gi = function(r, o) {
  return {
    top: (window.screen.height - o) / 2,
    left: (window.screen.width - r) / 2
  };
};
function qi(r, o, a) {
  var s = o.height, c = o.width, d = ri(o, ["height", "width"]), g = Lt({ height: s, width: c, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, d), x = window.open(r, "", Object.keys(g).map(function(m) {
    return "".concat(m, "=").concat(g[m]);
  }).join(", "));
  if (a)
    var w = window.setInterval(function() {
      try {
        (x === null || x.closed) && (window.clearInterval(w), a(x));
      } catch (m) {
        console.error(m);
      }
    }, 1e3);
  return x;
}
var Yi = (
  /** @class */
  function(r) {
    Bi(o, r);
    function o() {
      var a = r !== null && r.apply(this, arguments) || this;
      return a.openShareDialog = function(s) {
        var c = a.props, d = c.onShareWindowClose, g = c.windowHeight, x = g === void 0 ? 400 : g, w = c.windowPosition, m = w === void 0 ? "windowCenter" : w, P = c.windowWidth, I = P === void 0 ? 550 : P, q = Lt({ height: x, width: I }, m === "windowCenter" ? Vi(I, x) : Gi(I, x));
        qi(s, q, d);
      }, a.handleClick = function(s) {
        return Hi(a, void 0, void 0, function() {
          var c, d, g, x, w, m, P, I, q, J;
          return Ui(this, function(L) {
            switch (L.label) {
              case 0:
                return c = this.props, d = c.beforeOnClick, g = c.disabled, x = c.networkLink, w = c.onClick, m = c.url, P = c.openShareDialogOnClick, I = c.opts, q = x(m, I), g ? [
                  2
                  /*return*/
                ] : (s.preventDefault(), d ? (J = d(), Wi(J) ? [4, J] : [3, 2]) : [3, 2]);
              case 1:
                L.sent(), L.label = 2;
              case 2:
                return P && this.openShareDialog(q), w && w(s, q), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, a;
    }
    return o.prototype.render = function() {
      var a = this.props;
      a.beforeOnClick;
      var s = a.children, c = a.className, d = a.disabled, g = a.disabledStyle, x = a.forwardedRef;
      a.networkLink;
      var w = a.networkName;
      a.onShareWindowClose, a.openShareDialogOnClick, a.opts;
      var m = a.resetButtonStyle, P = a.style;
      a.url, a.windowHeight, a.windowPosition, a.windowWidth;
      var I = ri(a, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), q = cr("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!d,
        disabled: !!d
      }, c), J = Lt(Lt(m ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, P), d && g);
      return Ue.createElement("button", Lt({}, I, { "aria-label": I["aria-label"] || w, className: q, onClick: this.handleClick, ref: x, style: J }), s);
    }, o.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, o;
  }(Ai)
), an = function() {
  return an = Object.assign || function(r) {
    for (var o, a = 1, s = arguments.length; a < s; a++) {
      o = arguments[a];
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (r[c] = o[c]);
    }
    return r;
  }, an.apply(this, arguments);
};
function dn(r, o, a, s) {
  function c(d, g) {
    var x = a(d), w = an({}, d), m = Object.keys(x);
    return m.forEach(function(P) {
      delete w[P];
    }), Ue.createElement(Yi, an({}, s, w, { forwardedRef: g, networkName: r, networkLink: o, opts: a(d) }));
  }
  return c.displayName = "ShareButton-".concat(r), Ri(c);
}
function Xi(r, o) {
  var a = o.subject, s = o.body, c = o.separator;
  return "mailto:" + pn({ subject: a, body: s ? s + c + r : r });
}
var Zi = dn("email", Xi, function(r) {
  return {
    subject: r.subject,
    body: r.body,
    separator: r.separator || " "
  };
}, {
  openShareDialogOnClick: !1,
  onClick: function(r, o) {
    window.location.href = o;
  }
}), To = fn({
  color: "#3b5998",
  networkName: "facebook",
  path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
}), Ki = /* @__PURE__ */ function() {
  var r = function(o, a) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, c) {
      s.__proto__ = c;
    } || function(s, c) {
      for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (s[d] = c[d]);
    }, r(o, a);
  };
  return function(o, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    r(o, a);
    function s() {
      this.constructor = o;
    }
    o.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
  };
}(), Ji = (
  /** @class */
  function(r) {
    Ki(o, r);
    function o(a) {
      var s = r.call(this, a) || this;
      return s.name = "AssertionError", s;
    }
    return o;
  }(Error)
);
function Nr(r, o) {
  if (!r)
    throw new Ji(o);
}
function Qi(r, o) {
  var a = o.quote, s = o.hashtag;
  return Nr(r, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + pn({
    u: r,
    quote: a,
    hashtag: s
  });
}
var Co = dn("facebook", Qi, function(r) {
  return {
    quote: r.quote,
    hashtag: r.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
}), Ao = fn({
  color: "#007fb1",
  networkName: "linkedin",
  path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
});
function ea(r, o) {
  var a = o.title, s = o.summary, c = o.source;
  return Nr(r, "linkedin.url"), "https://linkedin.com/shareArticle" + pn({ url: r, mini: "true", title: a, summary: s, source: c });
}
var Ro = dn("linkedin", ea, function(r) {
  var o = r.title, a = r.summary, s = r.source;
  return { title: o, summary: a, source: s };
}, {
  windowWidth: 750,
  windowHeight: 600
}), Oo = fn({
  color: "#00aced",
  networkName: "twitter",
  path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
});
function ta(r, o) {
  var a = o.title, s = o.via, c = o.hashtags, d = c === void 0 ? [] : c, g = o.related, x = g === void 0 ? [] : g;
  return Nr(r, "twitter.url"), Nr(Array.isArray(d), "twitter.hashtags is not an array"), Nr(Array.isArray(x), "twitter.related is not an array"), "https://twitter.com/share" + pn({
    url: r,
    text: a,
    via: s,
    hashtags: d.length > 0 ? d.join(",") : void 0,
    related: x.length > 0 ? x.join(",") : void 0
  });
}
var No = dn("twitter", ta, function(r) {
  return {
    hashtags: r.hashtags,
    title: r.title,
    via: r.via,
    related: r.related
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function Dn(r) {
  "@babel/helpers - typeof";
  return Dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Dn(r);
}
var ra;
function Ln() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ra;
  return o ? r.split(" ").map(function(a) {
    return o[a] || a;
  }).join(" ") : r;
}
var na = (typeof window > "u" ? "undefined" : Dn(window)) === "object" && window.Element || function() {
};
function oa(r, o, a) {
  if (!(r[o] instanceof na))
    return new Error("Invalid prop `" + o + "` supplied to `" + a + "`. Expected prop to be an instance of Element. Validation failed.");
}
T.oneOfType([T.string, T.func, oa, T.shape({
  current: T.any
})]);
var jn = T.oneOfType([T.func, T.string, T.shape({
  $$typeof: T.symbol,
  render: T.func
}), T.arrayOf(T.oneOfType([T.func, T.string, T.shape({
  $$typeof: T.symbol,
  render: T.func
})]))]), ia = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];
function zn() {
  return zn = Object.assign ? Object.assign.bind() : function(r) {
    for (var o = 1; o < arguments.length; o++) {
      var a = arguments[o];
      for (var s in a)
        Object.prototype.hasOwnProperty.call(a, s) && (r[s] = a[s]);
    }
    return r;
  }, zn.apply(this, arguments);
}
function aa(r, o) {
  if (r == null) return {};
  var a = sa(r, o), s, c;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(r);
    for (c = 0; c < d.length; c++)
      s = d[c], !(o.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(r, s) && (a[s] = r[s]);
  }
  return a;
}
function sa(r, o) {
  if (r == null) return {};
  var a = {}, s = Object.keys(r), c, d;
  for (d = 0; d < s.length; d++)
    c = s[d], !(o.indexOf(c) >= 0) && (a[c] = r[c]);
  return a;
}
var la = {
  /** Aria label */
  "aria-label": T.string,
  /** Pass children so this component can wrap them */
  children: T.node,
  /** Add custom class */
  className: T.string,
  /** Change existing className with a new className */
  cssModule: T.object,
  /** Add custom class to list tag */
  listClassName: T.string,
  /** Set a custom element for list tag */
  listTag: jn,
  /** Set a custom element for this component */
  tag: jn
};
function ni(r) {
  var o = r.className, a = r.listClassName, s = r.cssModule, c = r.children, d = r.tag, g = d === void 0 ? "nav" : d, x = r.listTag, w = x === void 0 ? "ol" : x, m = r["aria-label"], P = m === void 0 ? "breadcrumb" : m, I = aa(r, ia), q = Ln(cr(o), s), J = Ln(cr("breadcrumb", a), s);
  return /* @__PURE__ */ Ue.createElement(g, zn({}, I, {
    className: q,
    "aria-label": P
  }), /* @__PURE__ */ Ue.createElement(w, {
    className: J
  }, c));
}
ni.propTypes = la;
var ua = ["className", "cssModule", "active", "tag"];
function $n() {
  return $n = Object.assign ? Object.assign.bind() : function(r) {
    for (var o = 1; o < arguments.length; o++) {
      var a = arguments[o];
      for (var s in a)
        Object.prototype.hasOwnProperty.call(a, s) && (r[s] = a[s]);
    }
    return r;
  }, $n.apply(this, arguments);
}
function ca(r, o) {
  if (r == null) return {};
  var a = fa(r, o), s, c;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(r);
    for (c = 0; c < d.length; c++)
      s = d[c], !(o.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(r, s) && (a[s] = r[s]);
  }
  return a;
}
function fa(r, o) {
  if (r == null) return {};
  var a = {}, s = Object.keys(r), c, d;
  for (d = 0; d < s.length; d++)
    c = s[d], !(o.indexOf(c) >= 0) && (a[c] = r[c]);
  return a;
}
var pa = {
  /** Adds a visual "active" state to a Breadcrumb Item */
  active: T.bool,
  /** Add custom class to the element */
  className: T.string,
  /** Change existing className with a new className */
  cssModule: T.object,
  /** Set a custom element for this component */
  tag: jn
};
function Bn(r) {
  var o = r.className, a = r.cssModule, s = r.active, c = r.tag, d = c === void 0 ? "li" : c, g = ca(r, ua), x = Ln(cr(o, s ? "active" : !1, "breadcrumb-item"), a);
  return /* @__PURE__ */ Ue.createElement(d, $n({}, g, {
    className: x,
    "aria-current": s ? "page" : void 0
  }));
}
Bn.propTypes = pa;
function qt(r) {
  "@babel/helpers - typeof";
  return qt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, qt(r);
}
function Hn(r, o) {
  return Hn = Object.setPrototypeOf || function(s, c) {
    return s.__proto__ = c, s;
  }, Hn(r, o);
}
function da() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function rn(r, o, a) {
  return da() ? rn = Reflect.construct : rn = function(c, d, g) {
    var x = [null];
    x.push.apply(x, d);
    var w = Function.bind.apply(c, x), m = new w();
    return g && Hn(m, g.prototype), m;
  }, rn.apply(null, arguments);
}
function bt(r) {
  return ha(r) || ma(r) || ga(r) || va();
}
function ha(r) {
  if (Array.isArray(r)) return Un(r);
}
function ma(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function ga(r, o) {
  if (r) {
    if (typeof r == "string") return Un(r, o);
    var a = Object.prototype.toString.call(r).slice(8, -1);
    if (a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set") return Array.from(r);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Un(r, o);
  }
}
function Un(r, o) {
  (o == null || o > r.length) && (o = r.length);
  for (var a = 0, s = new Array(o); a < o; a++) s[a] = r[a];
  return s;
}
function va() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ya = Object.hasOwnProperty, Po = Object.setPrototypeOf, wa = Object.isFrozen, Sa = Object.getPrototypeOf, xa = Object.getOwnPropertyDescriptor, Ke = Object.freeze, ht = Object.seal, ka = Object.create, oi = typeof Reflect < "u" && Reflect, sn = oi.apply, Wn = oi.construct;
sn || (sn = function(o, a, s) {
  return o.apply(a, s);
});
Ke || (Ke = function(o) {
  return o;
});
ht || (ht = function(o) {
  return o;
});
Wn || (Wn = function(o, a) {
  return rn(o, bt(a));
});
var ba = mt(Array.prototype.forEach), Io = mt(Array.prototype.pop), Or = mt(Array.prototype.push), nn = mt(String.prototype.toLowerCase), Tn = mt(String.prototype.toString), Mo = mt(String.prototype.match), kt = mt(String.prototype.replace), Ea = mt(String.prototype.indexOf), _a = mt(String.prototype.trim), Ve = mt(RegExp.prototype.test), Cn = Ta(TypeError);
function mt(r) {
  return function(o) {
    for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
      s[c - 1] = arguments[c];
    return sn(r, o, s);
  };
}
function Ta(r) {
  return function() {
    for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    return Wn(r, a);
  };
}
function le(r, o, a) {
  var s;
  a = (s = a) !== null && s !== void 0 ? s : nn, Po && Po(r, null);
  for (var c = o.length; c--; ) {
    var d = o[c];
    if (typeof d == "string") {
      var g = a(d);
      g !== d && (wa(o) || (o[c] = g), d = g);
    }
    r[d] = !0;
  }
  return r;
}
function sr(r) {
  var o = ka(null), a;
  for (a in r)
    sn(ya, r, [a]) === !0 && (o[a] = r[a]);
  return o;
}
function Zr(r, o) {
  for (; r !== null; ) {
    var a = xa(r, o);
    if (a) {
      if (a.get)
        return mt(a.get);
      if (typeof a.value == "function")
        return mt(a.value);
    }
    r = Sa(r);
  }
  function s(c) {
    return console.warn("fallback value for", c), null;
  }
  return s;
}
var Fo = Ke(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), An = Ke(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Rn = Ke(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ca = Ke(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), On = Ke(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Aa = Ke(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Do = Ke(["#text"]), Lo = Ke(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Nn = Ke(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), jo = Ke(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Kr = Ke(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ra = ht(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Oa = ht(/<%[\w\W]*|[\w\W]*%>/gm), Na = ht(/\${[\w\W]*}/gm), Pa = ht(/^data-[\-\w.\u00B7-\uFFFF]/), Ia = ht(/^aria-[\-\w]+$/), Ma = ht(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Fa = ht(/^(?:\w+script|data):/i), Da = ht(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), La = ht(/^html$/i), ja = ht(/^[a-z][.\w]*(-[.\w]+)+$/i), za = function() {
  return typeof window > "u" ? null : window;
}, $a = function(o, a) {
  if (qt(o) !== "object" || typeof o.createPolicy != "function")
    return null;
  var s = null, c = "data-tt-policy-suffix";
  a.currentScript && a.currentScript.hasAttribute(c) && (s = a.currentScript.getAttribute(c));
  var d = "dompurify" + (s ? "#" + s : "");
  try {
    return o.createPolicy(d, {
      createHTML: function(x) {
        return x;
      },
      createScriptURL: function(x) {
        return x;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + d + " could not be created."), null;
  }
};
function ii() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : za(), o = function(h) {
    return ii(h);
  };
  if (o.version = "2.5.7", o.removed = [], !r || !r.document || r.document.nodeType !== 9)
    return o.isSupported = !1, o;
  var a = r.document, s = r.document, c = r.DocumentFragment, d = r.HTMLTemplateElement, g = r.Node, x = r.Element, w = r.NodeFilter, m = r.NamedNodeMap, P = m === void 0 ? r.NamedNodeMap || r.MozNamedAttrMap : m, I = r.HTMLFormElement, q = r.DOMParser, J = r.trustedTypes, L = x.prototype, Q = Zr(L, "cloneNode"), B = Zr(L, "nextSibling"), U = Zr(L, "childNodes"), W = Zr(L, "parentNode");
  if (typeof d == "function") {
    var ee = s.createElement("template");
    ee.content && ee.content.ownerDocument && (s = ee.content.ownerDocument);
  }
  var G = $a(J, a), C = G ? G.createHTML("") : "", oe = s, he = oe.implementation, Be = oe.createNodeIterator, He = oe.createDocumentFragment, Ge = oe.getElementsByTagName, nt = a.importNode, be = {};
  try {
    be = sr(s).documentMode ? s.documentMode : {};
  } catch {
  }
  var Te = {};
  o.isSupported = typeof W == "function" && he && he.createHTMLDocument !== void 0 && be !== 9;
  var ze = Ra, Pe = Oa, ot = Na, We = Pa, De = Ia, Le = Fa, Je = Da, Xe = ja, z = Ma, N = null, j = le({}, [].concat(bt(Fo), bt(An), bt(Rn), bt(On), bt(Do))), $ = null, b = le({}, [].concat(bt(Lo), bt(Nn), bt(jo), bt(Kr))), V = Object.seal(Object.create(null, {
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
  })), R = null, ce = null, ne = !0, re = !0, X = !1, fe = !0, me = !1, ae = !0, ge = !1, pe = !1, _e = !1, je = !1, Ee = !1, Qe = !1, $e = !0, ve = !1, Y = "user-content-", ye = !0, et = !1, Ze = {}, Me = null, Xt = le({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Zt = null, fr = le({}, ["audio", "video", "img", "source", "image", "track"]), Tt = null, Ct = le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), zt = "http://www.w3.org/1998/Math/MathML", $t = "http://www.w3.org/2000/svg", it = "http://www.w3.org/1999/xhtml", Et = it, Kt = !1, qe = null, Jt = le({}, [zt, $t, it], Tn), tt, we = ["application/xhtml+xml", "text/html"], At = "text/html", Ae, rt = null, pt = s.createElement("form"), Rt = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, at = function(h) {
    rt && rt === h || ((!h || qt(h) !== "object") && (h = {}), h = sr(h), tt = // eslint-disable-next-line unicorn/prefer-includes
    we.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? tt = At : tt = h.PARSER_MEDIA_TYPE, Ae = tt === "application/xhtml+xml" ? Tn : nn, N = "ALLOWED_TAGS" in h ? le({}, h.ALLOWED_TAGS, Ae) : j, $ = "ALLOWED_ATTR" in h ? le({}, h.ALLOWED_ATTR, Ae) : b, qe = "ALLOWED_NAMESPACES" in h ? le({}, h.ALLOWED_NAMESPACES, Tn) : Jt, Tt = "ADD_URI_SAFE_ATTR" in h ? le(
      sr(Ct),
      // eslint-disable-line indent
      h.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      Ae
      // eslint-disable-line indent
    ) : Ct, Zt = "ADD_DATA_URI_TAGS" in h ? le(
      sr(fr),
      // eslint-disable-line indent
      h.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      Ae
      // eslint-disable-line indent
    ) : fr, Me = "FORBID_CONTENTS" in h ? le({}, h.FORBID_CONTENTS, Ae) : Xt, R = "FORBID_TAGS" in h ? le({}, h.FORBID_TAGS, Ae) : {}, ce = "FORBID_ATTR" in h ? le({}, h.FORBID_ATTR, Ae) : {}, Ze = "USE_PROFILES" in h ? h.USE_PROFILES : !1, ne = h.ALLOW_ARIA_ATTR !== !1, re = h.ALLOW_DATA_ATTR !== !1, X = h.ALLOW_UNKNOWN_PROTOCOLS || !1, fe = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, me = h.SAFE_FOR_TEMPLATES || !1, ae = h.SAFE_FOR_XML !== !1, ge = h.WHOLE_DOCUMENT || !1, je = h.RETURN_DOM || !1, Ee = h.RETURN_DOM_FRAGMENT || !1, Qe = h.RETURN_TRUSTED_TYPE || !1, _e = h.FORCE_BODY || !1, $e = h.SANITIZE_DOM !== !1, ve = h.SANITIZE_NAMED_PROPS || !1, ye = h.KEEP_CONTENT !== !1, et = h.IN_PLACE || !1, z = h.ALLOWED_URI_REGEXP || z, Et = h.NAMESPACE || it, V = h.CUSTOM_ELEMENT_HANDLING || {}, h.CUSTOM_ELEMENT_HANDLING && Rt(h.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (V.tagNameCheck = h.CUSTOM_ELEMENT_HANDLING.tagNameCheck), h.CUSTOM_ELEMENT_HANDLING && Rt(h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (V.attributeNameCheck = h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (V.allowCustomizedBuiltInElements = h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), me && (re = !1), Ee && (je = !0), Ze && (N = le({}, bt(Do)), $ = [], Ze.html === !0 && (le(N, Fo), le($, Lo)), Ze.svg === !0 && (le(N, An), le($, Nn), le($, Kr)), Ze.svgFilters === !0 && (le(N, Rn), le($, Nn), le($, Kr)), Ze.mathMl === !0 && (le(N, On), le($, jo), le($, Kr))), h.ADD_TAGS && (N === j && (N = sr(N)), le(N, h.ADD_TAGS, Ae)), h.ADD_ATTR && ($ === b && ($ = sr($)), le($, h.ADD_ATTR, Ae)), h.ADD_URI_SAFE_ATTR && le(Tt, h.ADD_URI_SAFE_ATTR, Ae), h.FORBID_CONTENTS && (Me === Xt && (Me = sr(Me)), le(Me, h.FORBID_CONTENTS, Ae)), ye && (N["#text"] = !0), ge && le(N, ["html", "head", "body"]), N.table && (le(N, ["tbody"]), delete R.tbody), Ke && Ke(h), rt = h);
  }, Qt = le({}, ["mi", "mo", "mn", "ms", "mtext"]), Bt = le({}, ["annotation-xml"]), er = le({}, ["title", "style", "font", "a", "script"]), Ot = le({}, An);
  le(Ot, Rn), le(Ot, Ca);
  var Ht = le({}, On);
  le(Ht, Aa);
  var pr = function(h) {
    var A = W(h);
    (!A || !A.tagName) && (A = {
      namespaceURI: Et,
      tagName: "template"
    });
    var F = nn(h.tagName), de = nn(A.tagName);
    return qe[h.namespaceURI] ? h.namespaceURI === $t ? A.namespaceURI === it ? F === "svg" : A.namespaceURI === zt ? F === "svg" && (de === "annotation-xml" || Qt[de]) : !!Ot[F] : h.namespaceURI === zt ? A.namespaceURI === it ? F === "math" : A.namespaceURI === $t ? F === "math" && Bt[de] : !!Ht[F] : h.namespaceURI === it ? A.namespaceURI === $t && !Bt[de] || A.namespaceURI === zt && !Qt[de] ? !1 : !Ht[F] && (er[F] || !Ot[F]) : !!(tt === "application/xhtml+xml" && qe[h.namespaceURI]) : !1;
  }, Ye = function(h) {
    Or(o.removed, {
      element: h
    });
    try {
      h.parentNode.removeChild(h);
    } catch {
      try {
        h.outerHTML = C;
      } catch {
        h.remove();
      }
    }
  }, Ut = function(h, A) {
    try {
      Or(o.removed, {
        attribute: A.getAttributeNode(h),
        from: A
      });
    } catch {
      Or(o.removed, {
        attribute: null,
        from: A
      });
    }
    if (A.removeAttribute(h), h === "is" && !$[h])
      if (je || Ee)
        try {
          Ye(A);
        } catch {
        }
      else
        try {
          A.setAttribute(h, "");
        } catch {
        }
  }, Nt = function(h) {
    var A, F;
    if (_e)
      h = "<remove></remove>" + h;
    else {
      var de = Mo(h, /^[\r\n\t ]+/);
      F = de && de[0];
    }
    tt === "application/xhtml+xml" && Et === it && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    var Se = G ? G.createHTML(h) : h;
    if (Et === it)
      try {
        A = new q().parseFromString(Se, tt);
      } catch {
      }
    if (!A || !A.documentElement) {
      A = he.createDocument(Et, "template", null);
      try {
        A.documentElement.innerHTML = Kt ? C : Se;
      } catch {
      }
    }
    var Fe = A.body || A.documentElement;
    return h && F && Fe.insertBefore(s.createTextNode(F), Fe.childNodes[0] || null), Et === it ? Ge.call(A, ge ? "html" : "body")[0] : ge ? A.documentElement : Fe;
  }, tr = function(h) {
    return Be.call(
      h.ownerDocument || h,
      h,
      // eslint-disable-next-line no-bitwise
      w.SHOW_ELEMENT | w.SHOW_COMMENT | w.SHOW_TEXT | w.SHOW_PROCESSING_INSTRUCTION | w.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, Pt = function(h) {
    return h instanceof I && (typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || !(h.attributes instanceof P) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function");
  }, gt = function(h) {
    return qt(g) === "object" ? h instanceof g : h && qt(h) === "object" && typeof h.nodeType == "number" && typeof h.nodeName == "string";
  }, st = function(h, A, F) {
    Te[h] && ba(Te[h], function(de) {
      de.call(o, A, F, rt);
    });
  }, _t = function(h) {
    var A;
    if (st("beforeSanitizeElements", h, null), Pt(h) || Ve(/[\u0080-\uFFFF]/, h.nodeName))
      return Ye(h), !0;
    var F = Ae(h.nodeName);
    if (st("uponSanitizeElement", h, {
      tagName: F,
      allowedTags: N
    }), h.hasChildNodes() && !gt(h.firstElementChild) && (!gt(h.content) || !gt(h.content.firstElementChild)) && Ve(/<[/\w]/g, h.innerHTML) && Ve(/<[/\w]/g, h.textContent) || F === "select" && Ve(/<template/i, h.innerHTML) || h.nodeType === 7 || ae && h.nodeType === 8 && Ve(/<[/\w]/g, h.data))
      return Ye(h), !0;
    if (!N[F] || R[F]) {
      if (!R[F] && Wt(F) && (V.tagNameCheck instanceof RegExp && Ve(V.tagNameCheck, F) || V.tagNameCheck instanceof Function && V.tagNameCheck(F)))
        return !1;
      if (ye && !Me[F]) {
        var de = W(h) || h.parentNode, Se = U(h) || h.childNodes;
        if (Se && de)
          for (var Fe = Se.length, Ie = Fe - 1; Ie >= 0; --Ie) {
            var lt = Q(Se[Ie], !0);
            lt.__removalCount = (h.__removalCount || 0) + 1, de.insertBefore(lt, B(h));
          }
      }
      return Ye(h), !0;
    }
    return h instanceof x && !pr(h) || (F === "noscript" || F === "noembed" || F === "noframes") && Ve(/<\/no(script|embed|frames)/i, h.innerHTML) ? (Ye(h), !0) : (me && h.nodeType === 3 && (A = h.textContent, A = kt(A, ze, " "), A = kt(A, Pe, " "), A = kt(A, ot, " "), h.textContent !== A && (Or(o.removed, {
      element: h.cloneNode()
    }), h.textContent = A)), st("afterSanitizeElements", h, null), !1);
  }, dr = function(h, A, F) {
    if ($e && (A === "id" || A === "name") && (F in s || F in pt))
      return !1;
    if (!(re && !ce[A] && Ve(We, A))) {
      if (!(ne && Ve(De, A))) {
        if (!$[A] || ce[A]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Wt(h) && (V.tagNameCheck instanceof RegExp && Ve(V.tagNameCheck, h) || V.tagNameCheck instanceof Function && V.tagNameCheck(h)) && (V.attributeNameCheck instanceof RegExp && Ve(V.attributeNameCheck, A) || V.attributeNameCheck instanceof Function && V.attributeNameCheck(A)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            A === "is" && V.allowCustomizedBuiltInElements && (V.tagNameCheck instanceof RegExp && Ve(V.tagNameCheck, F) || V.tagNameCheck instanceof Function && V.tagNameCheck(F)))
          ) return !1;
        } else if (!Tt[A]) {
          if (!Ve(z, kt(F, Je, ""))) {
            if (!((A === "src" || A === "xlink:href" || A === "href") && h !== "script" && Ea(F, "data:") === 0 && Zt[h])) {
              if (!(X && !Ve(Le, kt(F, Je, "")))) {
                if (F)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Wt = function(h) {
    return h !== "annotation-xml" && Mo(h, Xe);
  }, It = function(h) {
    var A, F, de, Se;
    st("beforeSanitizeAttributes", h, null);
    var Fe = h.attributes;
    if (Fe) {
      var Ie = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: $
      };
      for (Se = Fe.length; Se--; ) {
        A = Fe[Se];
        var lt = A, Oe = lt.name, dt = lt.namespaceURI;
        if (F = Oe === "value" ? A.value : _a(A.value), de = Ae(Oe), Ie.attrName = de, Ie.attrValue = F, Ie.keepAttr = !0, Ie.forceKeepAttr = void 0, st("uponSanitizeAttribute", h, Ie), F = Ie.attrValue, !Ie.forceKeepAttr && (Ut(Oe, h), !!Ie.keepAttr)) {
          if (!fe && Ve(/\/>/i, F)) {
            Ut(Oe, h);
            continue;
          }
          me && (F = kt(F, ze, " "), F = kt(F, Pe, " "), F = kt(F, ot, " "));
          var vt = Ae(h.nodeName);
          if (dr(vt, de, F)) {
            if (ve && (de === "id" || de === "name") && (Ut(Oe, h), F = Y + F), ae && Ve(/((--!?|])>)|<\/(style|title)/i, F)) {
              Ut(Oe, h);
              continue;
            }
            if (G && qt(J) === "object" && typeof J.getAttributeType == "function" && !dt)
              switch (J.getAttributeType(vt, de)) {
                case "TrustedHTML": {
                  F = G.createHTML(F);
                  break;
                }
                case "TrustedScriptURL": {
                  F = G.createScriptURL(F);
                  break;
                }
              }
            try {
              dt ? h.setAttributeNS(dt, Oe, F) : h.setAttribute(Oe, F), Pt(h) ? Ye(h) : Io(o.removed);
            } catch {
            }
          }
        }
      }
      st("afterSanitizeAttributes", h, null);
    }
  }, Mt = function H(h) {
    var A, F = tr(h);
    for (st("beforeSanitizeShadowDOM", h, null); A = F.nextNode(); )
      st("uponSanitizeShadowNode", A, null), !_t(A) && (A.content instanceof c && H(A.content), It(A));
    st("afterSanitizeShadowDOM", h, null);
  };
  return o.sanitize = function(H) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, A, F, de, Se, Fe;
    if (Kt = !H, Kt && (H = "<!-->"), typeof H != "string" && !gt(H))
      if (typeof H.toString == "function") {
        if (H = H.toString(), typeof H != "string")
          throw Cn("dirty is not a string, aborting");
      } else
        throw Cn("toString is not a function");
    if (!o.isSupported) {
      if (qt(r.toStaticHTML) === "object" || typeof r.toStaticHTML == "function") {
        if (typeof H == "string")
          return r.toStaticHTML(H);
        if (gt(H))
          return r.toStaticHTML(H.outerHTML);
      }
      return H;
    }
    if (pe || at(h), o.removed = [], typeof H == "string" && (et = !1), et) {
      if (H.nodeName) {
        var Ie = Ae(H.nodeName);
        if (!N[Ie] || R[Ie])
          throw Cn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (H instanceof g)
      A = Nt("<!---->"), F = A.ownerDocument.importNode(H, !0), F.nodeType === 1 && F.nodeName === "BODY" || F.nodeName === "HTML" ? A = F : A.appendChild(F);
    else {
      if (!je && !me && !ge && // eslint-disable-next-line unicorn/prefer-includes
      H.indexOf("<") === -1)
        return G && Qe ? G.createHTML(H) : H;
      if (A = Nt(H), !A)
        return je ? null : Qe ? C : "";
    }
    A && _e && Ye(A.firstChild);
    for (var lt = tr(et ? H : A); de = lt.nextNode(); )
      de.nodeType === 3 && de === Se || _t(de) || (de.content instanceof c && Mt(de.content), It(de), Se = de);
    if (Se = null, et)
      return H;
    if (je) {
      if (Ee)
        for (Fe = He.call(A.ownerDocument); A.firstChild; )
          Fe.appendChild(A.firstChild);
      else
        Fe = A;
      return ($.shadowroot || $.shadowrootmod) && (Fe = nt.call(a, Fe, !0)), Fe;
    }
    var Oe = ge ? A.outerHTML : A.innerHTML;
    return ge && N["!doctype"] && A.ownerDocument && A.ownerDocument.doctype && A.ownerDocument.doctype.name && Ve(La, A.ownerDocument.doctype.name) && (Oe = "<!DOCTYPE " + A.ownerDocument.doctype.name + `>
` + Oe), me && (Oe = kt(Oe, ze, " "), Oe = kt(Oe, Pe, " "), Oe = kt(Oe, ot, " ")), G && Qe ? G.createHTML(Oe) : Oe;
  }, o.setConfig = function(H) {
    at(H), pe = !0;
  }, o.clearConfig = function() {
    rt = null, pe = !1;
  }, o.isValidAttribute = function(H, h, A) {
    rt || at({});
    var F = Ae(H), de = Ae(h);
    return dr(F, de, A);
  }, o.addHook = function(H, h) {
    typeof h == "function" && (Te[H] = Te[H] || [], Or(Te[H], h));
  }, o.removeHook = function(H) {
    if (Te[H])
      return Io(Te[H]);
  }, o.removeHooks = function(H) {
    Te[H] && (Te[H] = []);
  }, o.removeAllHooks = function() {
    Te = {};
  }, o;
}
var Ba = ii();
const Pn = (r) => ({ __html: Ba.sanitize(r) });
T.shape({
  event: T.string,
  action: T.string,
  name: T.string,
  region: T.string,
  section: T.string,
  component: T.string,
  type: T.string,
  text: T.string
});
const Ha = ({
  event: r = "",
  action: o = "",
  name: a = "",
  type: s = "",
  section: c = "",
  text: d = "",
  region: g = "",
  component: x = ""
}) => {
  const { dataLayer: w } = window, m = {
    event: r.toLowerCase(),
    action: o.toLowerCase(),
    name: a.toLowerCase(),
    type: s.toLowerCase(),
    region: g.toLowerCase(),
    section: c.toLowerCase(),
    text: d.toLowerCase(),
    component: x.toLowerCase()
  };
  w && w.push(m);
};
T.shape({
  url: T.string,
  altText: T.string,
  cssClass: T.arrayOf(T.string),
  size: T.oneOf(["small", "medium", "large"])
});
T.shape({
  text: T.string,
  maxWidth: T.string,
  cssClass: T.arrayOf(T.string),
  highlightColor: T.oneOf(["gold", "black"])
});
T.shape({
  color: T.oneOf(["gold", "maroon", "gray", "dark"]),
  content: T.shape({
    icon: T.string,
    header: T.string,
    body: T.string
  })
});
const Ua = T.shape({
  text: T.string,
  name: T.string,
  event: T.string,
  action: T.string,
  type: T.string,
  region: T.string,
  section: T.string,
  component: T.string
});
var lr = {};
var zo;
function Wa() {
  if (zo) return lr;
  zo = 1;
  var r = Ue;
  function o(e) {
    for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, u = 1; u < arguments.length; u++) i += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + e + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = Object.prototype.hasOwnProperty, s = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, c = {}, d = {};
  function g(e) {
    return a.call(d, e) ? !0 : a.call(c, e) ? !1 : s.test(e) ? d[e] = !0 : (c[e] = !0, !1);
  }
  function x(e, i, u, p, k, v, E) {
    this.acceptsBooleans = i === 2 || i === 3 || i === 4, this.attributeName = p, this.attributeNamespace = k, this.mustUseProperty = u, this.propertyName = e, this.type = i, this.sanitizeURL = v, this.removeEmptyString = E;
  }
  var w = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    w[e] = new x(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var i = e[0];
    w[i] = new x(i, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    w[e] = new x(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    w[e] = new x(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    w[e] = new x(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    w[e] = new x(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    w[e] = new x(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    w[e] = new x(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    w[e] = new x(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var m = /[\-:]([a-z])/g;
  function P(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var i = e.replace(
      m,
      P
    );
    w[i] = new x(i, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var i = e.replace(m, P);
    w[i] = new x(i, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var i = e.replace(m, P);
    w[i] = new x(i, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    w[e] = new x(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new x("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    w[e] = new x(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  var I = {
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
  }, q = ["Webkit", "ms", "Moz", "O"];
  Object.keys(I).forEach(function(e) {
    q.forEach(function(i) {
      i = i + e.charAt(0).toUpperCase() + e.substring(1), I[i] = I[e];
    });
  });
  var J = /["'&<>]/;
  function L(e) {
    if (typeof e == "boolean" || typeof e == "number") return "" + e;
    e = "" + e;
    var i = J.exec(e);
    if (i) {
      var u = "", p, k = 0;
      for (p = i.index; p < e.length; p++) {
        switch (e.charCodeAt(p)) {
          case 34:
            i = "&quot;";
            break;
          case 38:
            i = "&amp;";
            break;
          case 39:
            i = "&#x27;";
            break;
          case 60:
            i = "&lt;";
            break;
          case 62:
            i = "&gt;";
            break;
          default:
            continue;
        }
        k !== p && (u += e.substring(k, p)), k = p + 1, u += i;
      }
      e = k !== p ? u + e.substring(k, p) : u;
    }
    return e;
  }
  var Q = /([A-Z])/g, B = /^ms-/, U = Array.isArray;
  function W(e, i) {
    return { insertionMode: e, selectedValue: i };
  }
  function ee(e, i, u) {
    switch (i) {
      case "select":
        return W(1, u.value != null ? u.value : u.defaultValue);
      case "svg":
        return W(2, null);
      case "math":
        return W(3, null);
      case "foreignObject":
        return W(1, null);
      case "table":
        return W(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return W(5, null);
      case "colgroup":
        return W(7, null);
      case "tr":
        return W(6, null);
    }
    return 4 <= e.insertionMode || e.insertionMode === 0 ? W(1, null) : e;
  }
  var G = /* @__PURE__ */ new Map();
  function C(e, i, u) {
    if (typeof u != "object") throw Error(o(62));
    i = !0;
    for (var p in u) if (a.call(u, p)) {
      var k = u[p];
      if (k != null && typeof k != "boolean" && k !== "") {
        if (p.indexOf("--") === 0) {
          var v = L(p);
          k = L(("" + k).trim());
        } else {
          v = p;
          var E = G.get(v);
          E !== void 0 || (E = L(v.replace(Q, "-$1").toLowerCase().replace(B, "-ms-")), G.set(v, E)), v = E, k = typeof k == "number" ? k === 0 || a.call(I, p) ? "" + k : k + "px" : L(("" + k).trim());
        }
        i ? (i = !1, e.push(' style="', v, ":", k)) : e.push(";", v, ":", k);
      }
    }
    i || e.push('"');
  }
  function oe(e, i, u, p) {
    switch (u) {
      case "style":
        C(e, i, p);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") {
      if (i = w.hasOwnProperty(u) ? w[u] : null, i !== null) {
        switch (typeof p) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!i.acceptsBooleans) return;
        }
        switch (u = i.attributeName, i.type) {
          case 3:
            p && e.push(" ", u, '=""');
            break;
          case 4:
            p === !0 ? e.push(" ", u, '=""') : p !== !1 && e.push(" ", u, '="', L(p), '"');
            break;
          case 5:
            isNaN(p) || e.push(" ", u, '="', L(p), '"');
            break;
          case 6:
            !isNaN(p) && 1 <= p && e.push(" ", u, '="', L(p), '"');
            break;
          default:
            i.sanitizeURL && (p = "" + p), e.push(" ", u, '="', L(p), '"');
        }
      } else if (g(u)) {
        switch (typeof p) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (i = u.toLowerCase().slice(0, 5), i !== "data-" && i !== "aria-") return;
        }
        e.push(" ", u, '="', L(p), '"');
      }
    }
  }
  function he(e, i, u) {
    if (i != null) {
      if (u != null) throw Error(o(60));
      if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
      i = i.__html, i != null && e.push("" + i);
    }
  }
  function Be(e) {
    var i = "";
    return r.Children.forEach(e, function(u) {
      u != null && (i += u);
    }), i;
  }
  function He(e, i, u, p) {
    e.push(be(u));
    var k = u = null, v;
    for (v in i) if (a.call(i, v)) {
      var E = i[v];
      if (E != null) switch (v) {
        case "children":
          u = E;
          break;
        case "dangerouslySetInnerHTML":
          k = E;
          break;
        default:
          oe(e, p, v, E);
      }
    }
    return e.push(">"), he(e, k, u), typeof u == "string" ? (e.push(L(u)), null) : u;
  }
  var Ge = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, nt = /* @__PURE__ */ new Map();
  function be(e) {
    var i = nt.get(e);
    if (i === void 0) {
      if (!Ge.test(e)) throw Error(o(65, e));
      i = "<" + e, nt.set(e, i);
    }
    return i;
  }
  function Te(e, i, u, p, k) {
    switch (i) {
      case "select":
        e.push(be("select"));
        var v = null, E = null;
        for (ie in u) if (a.call(u, ie)) {
          var M = u[ie];
          if (M != null) switch (ie) {
            case "children":
              v = M;
              break;
            case "dangerouslySetInnerHTML":
              E = M;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              oe(e, p, ie, M);
          }
        }
        return e.push(">"), he(e, E, v), v;
      case "option":
        E = k.selectedValue, e.push(be("option"));
        var Z = M = null, te = null, ie = null;
        for (v in u) if (a.call(u, v)) {
          var Ne = u[v];
          if (Ne != null) switch (v) {
            case "children":
              M = Ne;
              break;
            case "selected":
              te = Ne;
              break;
            case "dangerouslySetInnerHTML":
              ie = Ne;
              break;
            case "value":
              Z = Ne;
            default:
              oe(e, p, v, Ne);
          }
        }
        if (E != null) if (u = Z !== null ? "" + Z : Be(M), U(E)) {
          for (p = 0; p < E.length; p++)
            if ("" + E[p] === u) {
              e.push(' selected=""');
              break;
            }
        } else "" + E === u && e.push(' selected=""');
        else te && e.push(' selected=""');
        return e.push(">"), he(e, ie, M), M;
      case "textarea":
        e.push(be("textarea")), ie = E = v = null;
        for (M in u) if (a.call(u, M) && (Z = u[M], Z != null)) switch (M) {
          case "children":
            ie = Z;
            break;
          case "value":
            v = Z;
            break;
          case "defaultValue":
            E = Z;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(o(91));
          default:
            oe(
              e,
              p,
              M,
              Z
            );
        }
        if (v === null && E !== null && (v = E), e.push(">"), ie != null) {
          if (v != null) throw Error(o(92));
          if (U(ie) && 1 < ie.length) throw Error(o(93));
          v = "" + ie;
        }
        return typeof v == "string" && v[0] === `
` && e.push(`
`), v !== null && e.push(L("" + v)), null;
      case "input":
        e.push(be("input")), Z = ie = M = v = null;
        for (E in u) if (a.call(u, E) && (te = u[E], te != null)) switch (E) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(o(399, "input"));
          case "defaultChecked":
            Z = te;
            break;
          case "defaultValue":
            M = te;
            break;
          case "checked":
            ie = te;
            break;
          case "value":
            v = te;
            break;
          default:
            oe(e, p, E, te);
        }
        return ie !== null ? oe(e, p, "checked", ie) : Z !== null && oe(e, p, "checked", Z), v !== null ? oe(e, p, "value", v) : M !== null && oe(e, p, "value", M), e.push("/>"), null;
      case "menuitem":
        e.push(be("menuitem"));
        for (var yt in u) if (a.call(u, yt) && (v = u[yt], v != null)) switch (yt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(o(400));
          default:
            oe(e, p, yt, v);
        }
        return e.push(">"), null;
      case "title":
        e.push(be("title")), v = null;
        for (Ne in u) if (a.call(u, Ne) && (E = u[Ne], E != null)) switch (Ne) {
          case "children":
            v = E;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(o(434));
          default:
            oe(e, p, Ne, E);
        }
        return e.push(">"), v;
      case "listing":
      case "pre":
        e.push(be(i)), E = v = null;
        for (Z in u) if (a.call(u, Z) && (M = u[Z], M != null)) switch (Z) {
          case "children":
            v = M;
            break;
          case "dangerouslySetInnerHTML":
            E = M;
            break;
          default:
            oe(e, p, Z, M);
        }
        if (e.push(">"), E != null) {
          if (v != null) throw Error(o(60));
          if (typeof E != "object" || !("__html" in E)) throw Error(o(61));
          u = E.__html, u != null && (typeof u == "string" && 0 < u.length && u[0] === `
` ? e.push(`
`, u) : e.push("" + u));
        }
        return typeof v == "string" && v[0] === `
` && e.push(`
`), v;
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
        e.push(be(i));
        for (var wt in u) if (a.call(u, wt) && (v = u[wt], v != null)) switch (wt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(o(399, i));
          default:
            oe(e, p, wt, v);
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
        return He(
          e,
          u,
          i,
          p
        );
      case "html":
        return k.insertionMode === 0 && e.push("<!DOCTYPE html>"), He(e, u, i, p);
      default:
        if (i.indexOf("-") === -1 && typeof u.is != "string") return He(e, u, i, p);
        e.push(be(i)), E = v = null;
        for (te in u) if (a.call(u, te) && (M = u[te], M != null)) switch (te) {
          case "children":
            v = M;
            break;
          case "dangerouslySetInnerHTML":
            E = M;
            break;
          case "style":
            C(e, p, M);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            g(te) && typeof M != "function" && typeof M != "symbol" && e.push(" ", te, '="', L(M), '"');
        }
        return e.push(">"), he(e, E, v), v;
    }
  }
  function ze(e, i, u) {
    if (e.push('<!--$?--><template id="'), u === null) throw Error(o(395));
    return e.push(u), e.push('"></template>');
  }
  function Pe(e, i, u, p) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return e.push('<div hidden id="'), e.push(i.segmentPrefix), i = p.toString(16), e.push(i), e.push('">');
      case 2:
        return e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(i.segmentPrefix), i = p.toString(16), e.push(i), e.push('">');
      case 3:
        return e.push('<math aria-hidden="true" style="display:none" id="'), e.push(i.segmentPrefix), i = p.toString(16), e.push(i), e.push('">');
      case 4:
        return e.push('<table hidden id="'), e.push(i.segmentPrefix), i = p.toString(16), e.push(i), e.push('">');
      case 5:
        return e.push('<table hidden><tbody id="'), e.push(i.segmentPrefix), i = p.toString(16), e.push(i), e.push('">');
      case 6:
        return e.push('<table hidden><tr id="'), e.push(i.segmentPrefix), i = p.toString(16), e.push(i), e.push('">');
      case 7:
        return e.push('<table hidden><colgroup id="'), e.push(i.segmentPrefix), i = p.toString(16), e.push(i), e.push('">');
      default:
        throw Error(o(397));
    }
  }
  function ot(e, i) {
    switch (i.insertionMode) {
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
        throw Error(o(397));
    }
  }
  var We = /[<\u2028\u2029]/g;
  function De(e) {
    return JSON.stringify(e).replace(We, function(i) {
      switch (i) {
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
  function Le(e, i) {
    return i = i === void 0 ? "" : i, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: i + "P:", segmentPrefix: i + "S:", boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
  }
  function Je(e, i, u, p) {
    return u.generateStaticMarkup ? (e.push(L(i)), !1) : (i === "" ? e = p : (p && e.push("<!-- -->"), e.push(L(i)), e = !0), e);
  }
  var Xe = Object.assign, z = Symbol.for("react.element"), N = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), V = Symbol.for("react.provider"), R = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), me = Symbol.for("react.scope"), ae = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), pe = Symbol.for("react.default_value"), _e = Symbol.iterator;
  function je(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case j:
        return "Fragment";
      case N:
        return "Portal";
      case b:
        return "Profiler";
      case $:
        return "StrictMode";
      case ne:
        return "Suspense";
      case re:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case R:
        return (e.displayName || "Context") + ".Consumer";
      case V:
        return (e._context.displayName || "Context") + ".Provider";
      case ce:
        var i = e.render;
        return e = e.displayName, e || (e = i.displayName || i.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case X:
        return i = e.displayName || null, i !== null ? i : je(e.type) || "Memo";
      case fe:
        i = e._payload, e = e._init;
        try {
          return je(e(i));
        } catch {
        }
    }
    return null;
  }
  var Ee = {};
  function Qe(e, i) {
    if (e = e.contextTypes, !e) return Ee;
    var u = {}, p;
    for (p in e) u[p] = i[p];
    return u;
  }
  var $e = null;
  function ve(e, i) {
    if (e !== i) {
      e.context._currentValue2 = e.parentValue, e = e.parent;
      var u = i.parent;
      if (e === null) {
        if (u !== null) throw Error(o(401));
      } else {
        if (u === null) throw Error(o(401));
        ve(e, u);
      }
      i.context._currentValue2 = i.value;
    }
  }
  function Y(e) {
    e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && Y(e);
  }
  function ye(e) {
    var i = e.parent;
    i !== null && ye(i), e.context._currentValue2 = e.value;
  }
  function et(e, i) {
    if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(o(402));
    e.depth === i.depth ? ve(e, i) : et(e, i);
  }
  function Ze(e, i) {
    var u = i.parent;
    if (u === null) throw Error(o(402));
    e.depth === u.depth ? ve(e, u) : Ze(e, u), i.context._currentValue2 = i.value;
  }
  function Me(e) {
    var i = $e;
    i !== e && (i === null ? ye(e) : e === null ? Y(i) : i.depth === e.depth ? ve(i, e) : i.depth > e.depth ? et(i, e) : Ze(i, e), $e = e);
  }
  var Xt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(e, i) {
    e = e._reactInternals, e.queue !== null && e.queue.push(i);
  }, enqueueReplaceState: function(e, i) {
    e = e._reactInternals, e.replace = !0, e.queue = [i];
  }, enqueueForceUpdate: function() {
  } };
  function Zt(e, i, u, p) {
    var k = e.state !== void 0 ? e.state : null;
    e.updater = Xt, e.props = u, e.state = k;
    var v = { queue: [], replace: !1 };
    e._reactInternals = v;
    var E = i.contextType;
    if (e.context = typeof E == "object" && E !== null ? E._currentValue2 : p, E = i.getDerivedStateFromProps, typeof E == "function" && (E = E(u, k), k = E == null ? k : Xe({}, k, E), e.state = k), typeof i.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (i = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), i !== e.state && Xt.enqueueReplaceState(e, e.state, null), v.queue !== null && 0 < v.queue.length) if (i = v.queue, E = v.replace, v.queue = null, v.replace = !1, E && i.length === 1) e.state = i[0];
    else {
      for (v = E ? i[0] : e.state, k = !0, E = E ? 1 : 0; E < i.length; E++) {
        var M = i[E];
        M = typeof M == "function" ? M.call(e, v, u, p) : M, M != null && (k ? (k = !1, v = Xe({}, v, M)) : Xe(v, M));
      }
      e.state = v;
    }
    else v.queue = null;
  }
  var fr = { id: 1, overflow: "" };
  function Tt(e, i, u) {
    var p = e.id;
    e = e.overflow;
    var k = 32 - Ct(p) - 1;
    p &= ~(1 << k), u += 1;
    var v = 32 - Ct(i) + k;
    if (30 < v) {
      var E = k - k % 5;
      return v = (p & (1 << E) - 1).toString(32), p >>= E, k -= E, { id: 1 << 32 - Ct(i) + k | u << k | p, overflow: v + e };
    }
    return { id: 1 << v | u << k | p, overflow: e };
  }
  var Ct = Math.clz32 ? Math.clz32 : it, zt = Math.log, $t = Math.LN2;
  function it(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (zt(e) / $t | 0) | 0;
  }
  function Et(e, i) {
    return e === i && (e !== 0 || 1 / e === 1 / i) || e !== e && i !== i;
  }
  var Kt = typeof Object.is == "function" ? Object.is : Et, qe = null, Jt = null, tt = null, we = null, At = !1, Ae = !1, rt = 0, pt = null, Rt = 0;
  function at() {
    if (qe === null) throw Error(o(321));
    return qe;
  }
  function Qt() {
    if (0 < Rt) throw Error(o(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Bt() {
    return we === null ? tt === null ? (At = !1, tt = we = Qt()) : (At = !0, we = tt) : we.next === null ? (At = !1, we = we.next = Qt()) : (At = !0, we = we.next), we;
  }
  function er() {
    Jt = qe = null, Ae = !1, tt = null, Rt = 0, we = pt = null;
  }
  function Ot(e, i) {
    return typeof i == "function" ? i(e) : i;
  }
  function Ht(e, i, u) {
    if (qe = at(), we = Bt(), At) {
      var p = we.queue;
      if (i = p.dispatch, pt !== null && (u = pt.get(p), u !== void 0)) {
        pt.delete(p), p = we.memoizedState;
        do
          p = e(p, u.action), u = u.next;
        while (u !== null);
        return we.memoizedState = p, [p, i];
      }
      return [we.memoizedState, i];
    }
    return e = e === Ot ? typeof i == "function" ? i() : i : u !== void 0 ? u(i) : i, we.memoizedState = e, e = we.queue = { last: null, dispatch: null }, e = e.dispatch = Ye.bind(null, qe, e), [we.memoizedState, e];
  }
  function pr(e, i) {
    if (qe = at(), we = Bt(), i = i === void 0 ? null : i, we !== null) {
      var u = we.memoizedState;
      if (u !== null && i !== null) {
        var p = u[1];
        e: if (p === null) p = !1;
        else {
          for (var k = 0; k < p.length && k < i.length; k++) if (!Kt(i[k], p[k])) {
            p = !1;
            break e;
          }
          p = !0;
        }
        if (p) return u[0];
      }
    }
    return e = e(), we.memoizedState = [e, i], e;
  }
  function Ye(e, i, u) {
    if (25 <= Rt) throw Error(o(301));
    if (e === qe) if (Ae = !0, e = { action: u, next: null }, pt === null && (pt = /* @__PURE__ */ new Map()), u = pt.get(i), u === void 0) pt.set(i, e);
    else {
      for (i = u; i.next !== null; ) i = i.next;
      i.next = e;
    }
  }
  function Ut() {
    throw Error(o(394));
  }
  function Nt() {
  }
  var tr = { readContext: function(e) {
    return e._currentValue2;
  }, useContext: function(e) {
    return at(), e._currentValue2;
  }, useMemo: pr, useReducer: Ht, useRef: function(e) {
    qe = at(), we = Bt();
    var i = we.memoizedState;
    return i === null ? (e = { current: e }, we.memoizedState = e) : i;
  }, useState: function(e) {
    return Ht(Ot, e);
  }, useInsertionEffect: Nt, useLayoutEffect: function() {
  }, useCallback: function(e, i) {
    return pr(function() {
      return e;
    }, i);
  }, useImperativeHandle: Nt, useEffect: Nt, useDebugValue: Nt, useDeferredValue: function(e) {
    return at(), e;
  }, useTransition: function() {
    return at(), [
      !1,
      Ut
    ];
  }, useId: function() {
    var e = Jt.treeContext, i = e.overflow;
    e = e.id, e = (e & ~(1 << 32 - Ct(e) - 1)).toString(32) + i;
    var u = Pt;
    if (u === null) throw Error(o(404));
    return i = rt++, e = ":" + u.idPrefix + "R" + e, 0 < i && (e += "H" + i.toString(32)), e + ":";
  }, useMutableSource: function(e, i) {
    return at(), i(e._source);
  }, useSyncExternalStore: function(e, i, u) {
    if (u === void 0) throw Error(o(407));
    return u();
  } }, Pt = null, gt = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function st(e) {
    return console.error(e), null;
  }
  function _t() {
  }
  function dr(e, i, u, p, k, v, E, M, Z) {
    var te = [], ie = /* @__PURE__ */ new Set();
    return i = { destination: null, responseState: i, progressiveChunkSize: p === void 0 ? 12800 : p, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ie, pingedTasks: te, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: k === void 0 ? st : k, onAllReady: _t, onShellReady: E === void 0 ? _t : E, onShellError: _t, onFatalError: _t }, u = It(i, 0, null, u, !1, !1), u.parentFlushed = !0, e = Wt(i, e, null, u, ie, Ee, null, fr), te.push(e), i;
  }
  function Wt(e, i, u, p, k, v, E, M) {
    e.allPendingTasks++, u === null ? e.pendingRootTasks++ : u.pendingTasks++;
    var Z = { node: i, ping: function() {
      var te = e.pingedTasks;
      te.push(Z), te.length === 1 && wr(e);
    }, blockedBoundary: u, blockedSegment: p, abortSet: k, legacyContext: v, context: E, treeContext: M };
    return k.add(Z), Z;
  }
  function It(e, i, u, p, k, v) {
    return { status: 0, id: -1, index: i, parentFlushed: !1, chunks: [], children: [], formatContext: p, boundary: u, lastPushedText: k, textEmbedded: v };
  }
  function Mt(e, i) {
    if (e = e.onError(i), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
  }
  function H(e, i) {
    var u = e.onShellError;
    u(i), u = e.onFatalError, u(i), e.destination !== null ? (e.status = 2, e.destination.destroy(i)) : (e.status = 1, e.fatalError = i);
  }
  function h(e, i, u, p, k) {
    for (qe = {}, Jt = i, rt = 0, e = u(p, k); Ae; ) Ae = !1, rt = 0, Rt += 1, we = null, e = u(p, k);
    return er(), e;
  }
  function A(e, i, u, p) {
    var k = u.render(), v = p.childContextTypes;
    if (v != null) {
      var E = i.legacyContext;
      if (typeof u.getChildContext != "function") p = E;
      else {
        u = u.getChildContext();
        for (var M in u) if (!(M in v)) throw Error(o(108, je(p) || "Unknown", M));
        p = Xe({}, E, u);
      }
      i.legacyContext = p, Se(e, i, k), i.legacyContext = E;
    } else Se(e, i, k);
  }
  function F(e, i) {
    if (e && e.defaultProps) {
      i = Xe({}, i), e = e.defaultProps;
      for (var u in e) i[u] === void 0 && (i[u] = e[u]);
      return i;
    }
    return i;
  }
  function de(e, i, u, p, k) {
    if (typeof u == "function") if (u.prototype && u.prototype.isReactComponent) {
      k = Qe(u, i.legacyContext);
      var v = u.contextType;
      v = new u(p, typeof v == "object" && v !== null ? v._currentValue2 : k), Zt(v, u, p, k), A(e, i, v, u);
    } else {
      v = Qe(u, i.legacyContext), k = h(e, i, u, p, v);
      var E = rt !== 0;
      if (typeof k == "object" && k !== null && typeof k.render == "function" && k.$$typeof === void 0) Zt(k, u, p, v), A(e, i, k, u);
      else if (E) {
        p = i.treeContext, i.treeContext = Tt(p, 1, 0);
        try {
          Se(e, i, k);
        } finally {
          i.treeContext = p;
        }
      } else Se(e, i, k);
    }
    else if (typeof u == "string") {
      switch (k = i.blockedSegment, v = Te(k.chunks, u, p, e.responseState, k.formatContext), k.lastPushedText = !1, E = k.formatContext, k.formatContext = ee(E, u, p), Ie(e, i, v), k.formatContext = E, u) {
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
          k.chunks.push("</", u, ">");
      }
      k.lastPushedText = !1;
    } else {
      switch (u) {
        case ge:
        case ae:
        case $:
        case b:
        case j:
          Se(e, i, p.children);
          return;
        case re:
          Se(e, i, p.children);
          return;
        case me:
          throw Error(o(343));
        case ne:
          e: {
            u = i.blockedBoundary, k = i.blockedSegment, v = p.fallback, p = p.children, E = /* @__PURE__ */ new Set();
            var M = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: E, errorDigest: null }, Z = It(e, k.chunks.length, M, k.formatContext, !1, !1);
            k.children.push(Z), k.lastPushedText = !1;
            var te = It(e, 0, null, k.formatContext, !1, !1);
            te.parentFlushed = !0, i.blockedBoundary = M, i.blockedSegment = te;
            try {
              if (Ie(
                e,
                i,
                p
              ), e.responseState.generateStaticMarkup || te.lastPushedText && te.textEmbedded && te.chunks.push("<!-- -->"), te.status = 1, dt(M, te), M.pendingTasks === 0) break e;
            } catch (ie) {
              te.status = 4, M.forceClientRender = !0, M.errorDigest = Mt(e, ie);
            } finally {
              i.blockedBoundary = u, i.blockedSegment = k;
            }
            i = Wt(e, v, u, Z, E, i.legacyContext, i.context, i.treeContext), e.pingedTasks.push(i);
          }
          return;
      }
      if (typeof u == "object" && u !== null) switch (u.$$typeof) {
        case ce:
          if (p = h(e, i, u.render, p, k), rt !== 0) {
            u = i.treeContext, i.treeContext = Tt(u, 1, 0);
            try {
              Se(e, i, p);
            } finally {
              i.treeContext = u;
            }
          } else Se(e, i, p);
          return;
        case X:
          u = u.type, p = F(u, p), de(e, i, u, p, k);
          return;
        case V:
          if (k = p.children, u = u._context, p = p.value, v = u._currentValue2, u._currentValue2 = p, E = $e, $e = p = { parent: E, depth: E === null ? 0 : E.depth + 1, context: u, parentValue: v, value: p }, i.context = p, Se(e, i, k), e = $e, e === null) throw Error(o(403));
          p = e.parentValue, e.context._currentValue2 = p === pe ? e.context._defaultValue : p, e = $e = e.parent, i.context = e;
          return;
        case R:
          p = p.children, p = p(u._currentValue2), Se(e, i, p);
          return;
        case fe:
          k = u._init, u = k(u._payload), p = F(u, p), de(
            e,
            i,
            u,
            p,
            void 0
          );
          return;
      }
      throw Error(o(130, u == null ? u : typeof u, ""));
    }
  }
  function Se(e, i, u) {
    if (i.node = u, typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case z:
          de(e, i, u.type, u.props, u.ref);
          return;
        case N:
          throw Error(o(257));
        case fe:
          var p = u._init;
          u = p(u._payload), Se(e, i, u);
          return;
      }
      if (U(u)) {
        Fe(e, i, u);
        return;
      }
      if (u === null || typeof u != "object" ? p = null : (p = _e && u[_e] || u["@@iterator"], p = typeof p == "function" ? p : null), p && (p = p.call(u))) {
        if (u = p.next(), !u.done) {
          var k = [];
          do
            k.push(u.value), u = p.next();
          while (!u.done);
          Fe(e, i, k);
        }
        return;
      }
      throw e = Object.prototype.toString.call(u), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : e));
    }
    typeof u == "string" ? (p = i.blockedSegment, p.lastPushedText = Je(i.blockedSegment.chunks, u, e.responseState, p.lastPushedText)) : typeof u == "number" && (p = i.blockedSegment, p.lastPushedText = Je(i.blockedSegment.chunks, "" + u, e.responseState, p.lastPushedText));
  }
  function Fe(e, i, u) {
    for (var p = u.length, k = 0; k < p; k++) {
      var v = i.treeContext;
      i.treeContext = Tt(v, p, k);
      try {
        Ie(e, i, u[k]);
      } finally {
        i.treeContext = v;
      }
    }
  }
  function Ie(e, i, u) {
    var p = i.blockedSegment.formatContext, k = i.legacyContext, v = i.context;
    try {
      return Se(e, i, u);
    } catch (Z) {
      if (er(), typeof Z == "object" && Z !== null && typeof Z.then == "function") {
        u = Z;
        var E = i.blockedSegment, M = It(e, E.chunks.length, null, E.formatContext, E.lastPushedText, !0);
        E.children.push(M), E.lastPushedText = !1, e = Wt(e, i.node, i.blockedBoundary, M, i.abortSet, i.legacyContext, i.context, i.treeContext).ping, u.then(e, e), i.blockedSegment.formatContext = p, i.legacyContext = k, i.context = v, Me(v);
      } else throw i.blockedSegment.formatContext = p, i.legacyContext = k, i.context = v, Me(v), Z;
    }
  }
  function lt(e) {
    var i = e.blockedBoundary;
    e = e.blockedSegment, e.status = 3, vt(this, i, e);
  }
  function Oe(e, i, u) {
    var p = e.blockedBoundary;
    e.blockedSegment.status = 3, p === null ? (i.allPendingTasks--, i.status !== 2 && (i.status = 2, i.destination !== null && i.destination.push(null))) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, e = u === void 0 ? Error(o(432)) : u, p.errorDigest = i.onError(e), p.parentFlushed && i.clientRenderedBoundaries.push(p)), p.fallbackAbortableTasks.forEach(function(k) {
      return Oe(k, i, u);
    }), p.fallbackAbortableTasks.clear(), i.allPendingTasks--, i.allPendingTasks === 0 && (p = i.onAllReady, p()));
  }
  function dt(e, i) {
    if (i.chunks.length === 0 && i.children.length === 1 && i.children[0].boundary === null) {
      var u = i.children[0];
      u.id = i.id, u.parentFlushed = !0, u.status === 1 && dt(e, u);
    } else e.completedSegments.push(i);
  }
  function vt(e, i, u) {
    if (i === null) {
      if (u.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(o(389));
        e.completedRootSegment = u;
      }
      e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = _t, i = e.onShellReady, i());
    } else i.pendingTasks--, i.forceClientRender || (i.pendingTasks === 0 ? (u.parentFlushed && u.status === 1 && dt(i, u), i.parentFlushed && e.completedBoundaries.push(i), i.fallbackAbortableTasks.forEach(lt, e), i.fallbackAbortableTasks.clear()) : u.parentFlushed && u.status === 1 && (dt(i, u), i.completedSegments.length === 1 && i.parentFlushed && e.partialBoundaries.push(i)));
    e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
  }
  function wr(e) {
    if (e.status !== 2) {
      var i = $e, u = gt.current;
      gt.current = tr;
      var p = Pt;
      Pt = e.responseState;
      try {
        var k = e.pingedTasks, v;
        for (v = 0; v < k.length; v++) {
          var E = k[v], M = e, Z = E.blockedSegment;
          if (Z.status === 0) {
            Me(E.context);
            try {
              Se(M, E, E.node), M.responseState.generateStaticMarkup || Z.lastPushedText && Z.textEmbedded && Z.chunks.push("<!-- -->"), E.abortSet.delete(E), Z.status = 1, vt(M, E.blockedBoundary, Z);
            } catch (ut) {
              if (er(), typeof ut == "object" && ut !== null && typeof ut.then == "function") {
                var te = E.ping;
                ut.then(te, te);
              } else {
                E.abortSet.delete(E), Z.status = 4;
                var ie = E.blockedBoundary, Ne = ut, yt = Mt(M, Ne);
                if (ie === null ? H(M, Ne) : (ie.pendingTasks--, ie.forceClientRender || (ie.forceClientRender = !0, ie.errorDigest = yt, ie.parentFlushed && M.clientRenderedBoundaries.push(ie))), M.allPendingTasks--, M.allPendingTasks === 0) {
                  var wt = M.onAllReady;
                  wt();
                }
              }
            } finally {
            }
          }
        }
        k.splice(0, v), e.destination !== null && hr(e, e.destination);
      } catch (ut) {
        Mt(e, ut), H(e, ut);
      } finally {
        Pt = p, gt.current = u, u === tr && Me(i);
      }
    }
  }
  function rr(e, i, u) {
    switch (u.parentFlushed = !0, u.status) {
      case 0:
        var p = u.id = e.nextSegmentId++;
        return u.lastPushedText = !1, u.textEmbedded = !1, e = e.responseState, i.push('<template id="'), i.push(e.placeholderPrefix), e = p.toString(16), i.push(e), i.push('"></template>');
      case 1:
        u.status = 2;
        var k = !0;
        p = u.chunks;
        var v = 0;
        u = u.children;
        for (var E = 0; E < u.length; E++) {
          for (k = u[E]; v < k.index; v++) i.push(p[v]);
          k = nr(e, i, k);
        }
        for (; v < p.length - 1; v++) i.push(p[v]);
        return v < p.length && (k = i.push(p[v])), k;
      default:
        throw Error(o(390));
    }
  }
  function nr(e, i, u) {
    var p = u.boundary;
    if (p === null) return rr(e, i, u);
    if (p.parentFlushed = !0, p.forceClientRender) return e.responseState.generateStaticMarkup || (p = p.errorDigest, i.push("<!--$!-->"), i.push("<template"), p && (i.push(' data-dgst="'), p = L(p), i.push(p), i.push('"')), i.push("></template>")), rr(e, i, u), e = e.responseState.generateStaticMarkup ? !0 : i.push("<!--/$-->"), e;
    if (0 < p.pendingTasks) {
      p.rootSegmentID = e.nextSegmentId++, 0 < p.completedSegments.length && e.partialBoundaries.push(p);
      var k = e.responseState, v = k.nextSuspenseID++;
      return k = k.boundaryPrefix + v.toString(16), p = p.id = k, ze(i, e.responseState, p), rr(e, i, u), i.push("<!--/$-->");
    }
    if (p.byteSize > e.progressiveChunkSize) return p.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(p), ze(i, e.responseState, p.id), rr(e, i, u), i.push("<!--/$-->");
    if (e.responseState.generateStaticMarkup || i.push("<!--$-->"), u = p.completedSegments, u.length !== 1) throw Error(o(391));
    return nr(e, i, u[0]), e = e.responseState.generateStaticMarkup ? !0 : i.push("<!--/$-->"), e;
  }
  function Sr(e, i, u) {
    return Pe(i, e.responseState, u.formatContext, u.id), nr(e, i, u), ot(i, u.formatContext);
  }
  function xr(e, i, u) {
    for (var p = u.completedSegments, k = 0; k < p.length; k++) kr(e, i, u, p[k]);
    if (p.length = 0, e = e.responseState, p = u.id, u = u.rootSegmentID, i.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? i.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, i.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), p === null) throw Error(o(395));
    return u = u.toString(16), i.push(p), i.push('","'), i.push(e.segmentPrefix), i.push(u), i.push('")<\/script>');
  }
  function kr(e, i, u, p) {
    if (p.status === 2) return !0;
    var k = p.id;
    if (k === -1) {
      if ((p.id = u.rootSegmentID) === -1) throw Error(o(392));
      return Sr(e, i, p);
    }
    return Sr(e, i, p), e = e.responseState, i.push(e.startInlineScript), e.sentCompleteSegmentFunction ? i.push('$RS("') : (e.sentCompleteSegmentFunction = !0, i.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), i.push(e.segmentPrefix), k = k.toString(16), i.push(k), i.push('","'), i.push(e.placeholderPrefix), i.push(k), i.push('")<\/script>');
  }
  function hr(e, i) {
    try {
      var u = e.completedRootSegment;
      if (u !== null && e.pendingRootTasks === 0) {
        nr(e, i, u), e.completedRootSegment = null;
        var p = e.responseState.bootstrapChunks;
        for (u = 0; u < p.length - 1; u++) i.push(p[u]);
        u < p.length && i.push(p[u]);
      }
      var k = e.clientRenderedBoundaries, v;
      for (v = 0; v < k.length; v++) {
        var E = k[v];
        p = i;
        var M = e.responseState, Z = E.id, te = E.errorDigest, ie = E.errorMessage, Ne = E.errorComponentStack;
        if (p.push(M.startInlineScript), M.sentClientRenderFunction ? p.push('$RX("') : (M.sentClientRenderFunction = !0, p.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), Z === null) throw Error(o(395));
        if (p.push(Z), p.push('"'), te || ie || Ne) {
          p.push(",");
          var yt = De(te || "");
          p.push(yt);
        }
        if (ie || Ne) {
          p.push(",");
          var wt = De(ie || "");
          p.push(wt);
        }
        if (Ne) {
          p.push(",");
          var ut = De(Ne);
          p.push(ut);
        }
        if (!p.push(")<\/script>")) {
          e.destination = null, v++, k.splice(0, v);
          return;
        }
      }
      k.splice(0, v);
      var or = e.completedBoundaries;
      for (v = 0; v < or.length; v++) if (!xr(e, i, or[v])) {
        e.destination = null, v++, or.splice(0, v);
        return;
      }
      or.splice(0, v);
      var Ft = e.partialBoundaries;
      for (v = 0; v < Ft.length; v++) {
        var Er = Ft[v];
        e: {
          k = e, E = i;
          var ir = Er.completedSegments;
          for (M = 0; M < ir.length; M++) if (!kr(k, E, Er, ir[M])) {
            M++, ir.splice(0, M);
            var Lr = !1;
            break e;
          }
          ir.splice(0, M), Lr = !0;
        }
        if (!Lr) {
          e.destination = null, v++, Ft.splice(0, v);
          return;
        }
      }
      Ft.splice(0, v);
      var Vt = e.completedBoundaries;
      for (v = 0; v < Vt.length; v++) if (!xr(e, i, Vt[v])) {
        e.destination = null, v++, Vt.splice(0, v);
        return;
      }
      Vt.splice(0, v);
    } finally {
      e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && i.push(null);
    }
  }
  function Fr(e, i) {
    try {
      var u = e.abortableTasks;
      u.forEach(function(p) {
        return Oe(p, e, i);
      }), u.clear(), e.destination !== null && hr(e, e.destination);
    } catch (p) {
      Mt(e, p), H(e, p);
    }
  }
  function Dr() {
  }
  function br(e, i, u, p) {
    var k = !1, v = null, E = "", M = { push: function(te) {
      return te !== null && (E += te), !0;
    }, destroy: function(te) {
      k = !0, v = te;
    } }, Z = !1;
    if (e = dr(e, Le(u, i ? i.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Dr, void 0, function() {
      Z = !0;
    }), wr(e), Fr(e, p), e.status === 1) e.status = 2, M.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = M;
      try {
        hr(e, M);
      } catch (te) {
        Mt(e, te), H(e, te);
      }
    }
    if (k) throw v;
    if (!Z) throw Error(o(426));
    return E;
  }
  return lr.renderToNodeStream = function() {
    throw Error(o(207));
  }, lr.renderToStaticMarkup = function(e, i) {
    return br(e, i, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, lr.renderToStaticNodeStream = function() {
    throw Error(o(208));
  }, lr.renderToString = function(e, i) {
    return br(e, i, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, lr.version = "18.3.1", lr;
}
var Jr = {};
var $o;
function Va() {
  if ($o) return Jr;
  $o = 1;
  var r = Ue;
  function o(t) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, l = 1; l < arguments.length; l++) n += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = null, s = 0;
  function c(t, n) {
    if (n.length !== 0) if (512 < n.length) 0 < s && (t.enqueue(new Uint8Array(a.buffer, 0, s)), a = new Uint8Array(512), s = 0), t.enqueue(n);
    else {
      var l = a.length - s;
      l < n.length && (l === 0 ? t.enqueue(a) : (a.set(n.subarray(0, l), s), t.enqueue(a), n = n.subarray(l)), a = new Uint8Array(512), s = 0), a.set(n, s), s += n.length;
    }
  }
  function d(t, n) {
    return c(t, n), !0;
  }
  function g(t) {
    a && 0 < s && (t.enqueue(new Uint8Array(a.buffer, 0, s)), a = null, s = 0);
  }
  var x = new TextEncoder();
  function w(t) {
    return x.encode(t);
  }
  function m(t) {
    return x.encode(t);
  }
  function P(t, n) {
    typeof t.error == "function" ? t.error(n) : t.close();
  }
  var I = Object.prototype.hasOwnProperty, q = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, J = {}, L = {};
  function Q(t) {
    return I.call(L, t) ? !0 : I.call(J, t) ? !1 : q.test(t) ? L[t] = !0 : (J[t] = !0, !1);
  }
  function B(t, n, l, f, S, y, _) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = f, this.attributeNamespace = S, this.mustUseProperty = l, this.propertyName = t, this.type = n, this.sanitizeURL = y, this.removeEmptyString = _;
  }
  var U = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    U[t] = new B(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var n = t[0];
    U[n] = new B(n, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    U[t] = new B(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    U[t] = new B(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    U[t] = new B(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    U[t] = new B(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    U[t] = new B(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    U[t] = new B(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    U[t] = new B(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var W = /[\-:]([a-z])/g;
  function ee(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var n = t.replace(
      W,
      ee
    );
    U[n] = new B(n, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var n = t.replace(W, ee);
    U[n] = new B(n, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var n = t.replace(W, ee);
    U[n] = new B(n, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    U[t] = new B(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), U.xlinkHref = new B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    U[t] = new B(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  var G = {
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
  Object.keys(G).forEach(function(t) {
    C.forEach(function(n) {
      n = n + t.charAt(0).toUpperCase() + t.substring(1), G[n] = G[t];
    });
  });
  var oe = /["'&<>]/;
  function he(t) {
    if (typeof t == "boolean" || typeof t == "number") return "" + t;
    t = "" + t;
    var n = oe.exec(t);
    if (n) {
      var l = "", f, S = 0;
      for (f = n.index; f < t.length; f++) {
        switch (t.charCodeAt(f)) {
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
        S !== f && (l += t.substring(S, f)), S = f + 1, l += n;
      }
      t = S !== f ? l + t.substring(S, f) : l;
    }
    return t;
  }
  var Be = /([A-Z])/g, He = /^ms-/, Ge = Array.isArray, nt = m("<script>"), be = m("<\/script>"), Te = m('<script src="'), ze = m('<script type="module" src="'), Pe = m('" async=""><\/script>'), ot = /(<\/|<)(s)(cript)/gi;
  function We(t, n, l, f) {
    return "" + n + (l === "s" ? "\\u0073" : "\\u0053") + f;
  }
  function De(t, n, l, f, S) {
    t = t === void 0 ? "" : t, n = n === void 0 ? nt : m('<script nonce="' + he(n) + '">');
    var y = [];
    if (l !== void 0 && y.push(n, w(("" + l).replace(ot, We)), be), f !== void 0) for (l = 0; l < f.length; l++) y.push(Te, w(he(f[l])), Pe);
    if (S !== void 0) for (f = 0; f < S.length; f++) y.push(ze, w(he(S[f])), Pe);
    return { bootstrapChunks: y, startInlineScript: n, placeholderPrefix: m(t + "P:"), segmentPrefix: m(t + "S:"), boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Le(t, n) {
    return { insertionMode: t, selectedValue: n };
  }
  function Je(t) {
    return Le(t === "http://www.w3.org/2000/svg" ? 2 : t === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Xe(t, n, l) {
    switch (n) {
      case "select":
        return Le(1, l.value != null ? l.value : l.defaultValue);
      case "svg":
        return Le(2, null);
      case "math":
        return Le(3, null);
      case "foreignObject":
        return Le(1, null);
      case "table":
        return Le(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Le(5, null);
      case "colgroup":
        return Le(7, null);
      case "tr":
        return Le(6, null);
    }
    return 4 <= t.insertionMode || t.insertionMode === 0 ? Le(1, null) : t;
  }
  var z = m("<!-- -->");
  function N(t, n, l, f) {
    return n === "" ? f : (f && t.push(z), t.push(w(he(n))), !0);
  }
  var j = /* @__PURE__ */ new Map(), $ = m(' style="'), b = m(":"), V = m(";");
  function R(t, n, l) {
    if (typeof l != "object") throw Error(o(62));
    n = !0;
    for (var f in l) if (I.call(l, f)) {
      var S = l[f];
      if (S != null && typeof S != "boolean" && S !== "") {
        if (f.indexOf("--") === 0) {
          var y = w(he(f));
          S = w(he(("" + S).trim()));
        } else {
          y = f;
          var _ = j.get(y);
          _ !== void 0 || (_ = m(he(y.replace(Be, "-$1").toLowerCase().replace(He, "-ms-"))), j.set(y, _)), y = _, S = typeof S == "number" ? S === 0 || I.call(G, f) ? w("" + S) : w(S + "px") : w(he(("" + S).trim()));
        }
        n ? (n = !1, t.push($, y, b, S)) : t.push(V, y, b, S);
      }
    }
    n || t.push(re);
  }
  var ce = m(" "), ne = m('="'), re = m('"'), X = m('=""');
  function fe(t, n, l, f) {
    switch (l) {
      case "style":
        R(t, n, f);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") {
      if (n = U.hasOwnProperty(l) ? U[l] : null, n !== null) {
        switch (typeof f) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!n.acceptsBooleans) return;
        }
        switch (l = w(n.attributeName), n.type) {
          case 3:
            f && t.push(ce, l, X);
            break;
          case 4:
            f === !0 ? t.push(ce, l, X) : f !== !1 && t.push(ce, l, ne, w(he(f)), re);
            break;
          case 5:
            isNaN(f) || t.push(ce, l, ne, w(he(f)), re);
            break;
          case 6:
            !isNaN(f) && 1 <= f && t.push(ce, l, ne, w(he(f)), re);
            break;
          default:
            n.sanitizeURL && (f = "" + f), t.push(ce, l, ne, w(he(f)), re);
        }
      } else if (Q(l)) {
        switch (typeof f) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (n = l.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-") return;
        }
        t.push(ce, w(l), ne, w(he(f)), re);
      }
    }
  }
  var me = m(">"), ae = m("/>");
  function ge(t, n, l) {
    if (n != null) {
      if (l != null) throw Error(o(60));
      if (typeof n != "object" || !("__html" in n)) throw Error(o(61));
      n = n.__html, n != null && t.push(w("" + n));
    }
  }
  function pe(t) {
    var n = "";
    return r.Children.forEach(t, function(l) {
      l != null && (n += l);
    }), n;
  }
  var _e = m(' selected=""');
  function je(t, n, l, f) {
    t.push(ve(l));
    var S = l = null, y;
    for (y in n) if (I.call(n, y)) {
      var _ = n[y];
      if (_ != null) switch (y) {
        case "children":
          l = _;
          break;
        case "dangerouslySetInnerHTML":
          S = _;
          break;
        default:
          fe(t, f, y, _);
      }
    }
    return t.push(me), ge(t, S, l), typeof l == "string" ? (t.push(w(he(l))), null) : l;
  }
  var Ee = m(`
`), Qe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, $e = /* @__PURE__ */ new Map();
  function ve(t) {
    var n = $e.get(t);
    if (n === void 0) {
      if (!Qe.test(t)) throw Error(o(65, t));
      n = m("<" + t), $e.set(t, n);
    }
    return n;
  }
  var Y = m("<!DOCTYPE html>");
  function ye(t, n, l, f, S) {
    switch (n) {
      case "select":
        t.push(ve("select"));
        var y = null, _ = null;
        for (se in l) if (I.call(l, se)) {
          var O = l[se];
          if (O != null) switch (se) {
            case "children":
              y = O;
              break;
            case "dangerouslySetInnerHTML":
              _ = O;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              fe(t, f, se, O);
          }
        }
        return t.push(me), ge(t, _, y), y;
      case "option":
        _ = S.selectedValue, t.push(ve("option"));
        var K = O = null, ue = null, se = null;
        for (y in l) if (I.call(l, y)) {
          var Re = l[y];
          if (Re != null) switch (y) {
            case "children":
              O = Re;
              break;
            case "selected":
              ue = Re;
              break;
            case "dangerouslySetInnerHTML":
              se = Re;
              break;
            case "value":
              K = Re;
            default:
              fe(t, f, y, Re);
          }
        }
        if (_ != null) if (l = K !== null ? "" + K : pe(O), Ge(_)) {
          for (f = 0; f < _.length; f++)
            if ("" + _[f] === l) {
              t.push(_e);
              break;
            }
        } else "" + _ === l && t.push(_e);
        else ue && t.push(_e);
        return t.push(me), ge(t, se, O), O;
      case "textarea":
        t.push(ve("textarea")), se = _ = y = null;
        for (O in l) if (I.call(l, O) && (K = l[O], K != null)) switch (O) {
          case "children":
            se = K;
            break;
          case "value":
            y = K;
            break;
          case "defaultValue":
            _ = K;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(o(91));
          default:
            fe(t, f, O, K);
        }
        if (y === null && _ !== null && (y = _), t.push(me), se != null) {
          if (y != null) throw Error(o(92));
          if (Ge(se) && 1 < se.length) throw Error(o(93));
          y = "" + se;
        }
        return typeof y == "string" && y[0] === `
` && t.push(Ee), y !== null && t.push(w(he("" + y))), null;
      case "input":
        t.push(ve("input")), K = se = O = y = null;
        for (_ in l) if (I.call(l, _) && (ue = l[_], ue != null)) switch (_) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(o(399, "input"));
          case "defaultChecked":
            K = ue;
            break;
          case "defaultValue":
            O = ue;
            break;
          case "checked":
            se = ue;
            break;
          case "value":
            y = ue;
            break;
          default:
            fe(t, f, _, ue);
        }
        return se !== null ? fe(
          t,
          f,
          "checked",
          se
        ) : K !== null && fe(t, f, "checked", K), y !== null ? fe(t, f, "value", y) : O !== null && fe(t, f, "value", O), t.push(ae), null;
      case "menuitem":
        t.push(ve("menuitem"));
        for (var ft in l) if (I.call(l, ft) && (y = l[ft], y != null)) switch (ft) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(o(400));
          default:
            fe(t, f, ft, y);
        }
        return t.push(me), null;
      case "title":
        t.push(ve("title")), y = null;
        for (Re in l) if (I.call(l, Re) && (_ = l[Re], _ != null)) switch (Re) {
          case "children":
            y = _;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(o(434));
          default:
            fe(t, f, Re, _);
        }
        return t.push(me), y;
      case "listing":
      case "pre":
        t.push(ve(n)), _ = y = null;
        for (K in l) if (I.call(l, K) && (O = l[K], O != null)) switch (K) {
          case "children":
            y = O;
            break;
          case "dangerouslySetInnerHTML":
            _ = O;
            break;
          default:
            fe(t, f, K, O);
        }
        if (t.push(me), _ != null) {
          if (y != null) throw Error(o(60));
          if (typeof _ != "object" || !("__html" in _)) throw Error(o(61));
          l = _.__html, l != null && (typeof l == "string" && 0 < l.length && l[0] === `
` ? t.push(Ee, w(l)) : t.push(w("" + l)));
        }
        return typeof y == "string" && y[0] === `
` && t.push(Ee), y;
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
        t.push(ve(n));
        for (var St in l) if (I.call(l, St) && (y = l[St], y != null)) switch (St) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(o(399, n));
          default:
            fe(t, f, St, y);
        }
        return t.push(ae), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return je(t, l, n, f);
      case "html":
        return S.insertionMode === 0 && t.push(Y), je(t, l, n, f);
      default:
        if (n.indexOf("-") === -1 && typeof l.is != "string") return je(t, l, n, f);
        t.push(ve(n)), _ = y = null;
        for (ue in l) if (I.call(l, ue) && (O = l[ue], O != null)) switch (ue) {
          case "children":
            y = O;
            break;
          case "dangerouslySetInnerHTML":
            _ = O;
            break;
          case "style":
            R(t, f, O);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            Q(ue) && typeof O != "function" && typeof O != "symbol" && t.push(ce, w(ue), ne, w(he(O)), re);
        }
        return t.push(me), ge(t, _, y), y;
    }
  }
  var et = m("</"), Ze = m(">"), Me = m('<template id="'), Xt = m('"></template>'), Zt = m("<!--$-->"), fr = m('<!--$?--><template id="'), Tt = m('"></template>'), Ct = m("<!--$!-->"), zt = m("<!--/$-->"), $t = m("<template"), it = m('"'), Et = m(' data-dgst="');
  m(' data-msg="'), m(' data-stck="');
  var Kt = m("></template>");
  function qe(t, n, l) {
    if (c(t, fr), l === null) throw Error(o(395));
    return c(t, l), d(t, Tt);
  }
  var Jt = m('<div hidden id="'), tt = m('">'), we = m("</div>"), At = m('<svg aria-hidden="true" style="display:none" id="'), Ae = m('">'), rt = m("</svg>"), pt = m('<math aria-hidden="true" style="display:none" id="'), Rt = m('">'), at = m("</math>"), Qt = m('<table hidden id="'), Bt = m('">'), er = m("</table>"), Ot = m('<table hidden><tbody id="'), Ht = m('">'), pr = m("</tbody></table>"), Ye = m('<table hidden><tr id="'), Ut = m('">'), Nt = m("</tr></table>"), tr = m('<table hidden><colgroup id="'), Pt = m('">'), gt = m("</colgroup></table>");
  function st(t, n, l, f) {
    switch (l.insertionMode) {
      case 0:
      case 1:
        return c(t, Jt), c(t, n.segmentPrefix), c(t, w(f.toString(16))), d(t, tt);
      case 2:
        return c(t, At), c(t, n.segmentPrefix), c(t, w(f.toString(16))), d(t, Ae);
      case 3:
        return c(t, pt), c(t, n.segmentPrefix), c(t, w(f.toString(16))), d(t, Rt);
      case 4:
        return c(t, Qt), c(t, n.segmentPrefix), c(t, w(f.toString(16))), d(t, Bt);
      case 5:
        return c(t, Ot), c(t, n.segmentPrefix), c(t, w(f.toString(16))), d(t, Ht);
      case 6:
        return c(t, Ye), c(t, n.segmentPrefix), c(t, w(f.toString(16))), d(t, Ut);
      case 7:
        return c(
          t,
          tr
        ), c(t, n.segmentPrefix), c(t, w(f.toString(16))), d(t, Pt);
      default:
        throw Error(o(397));
    }
  }
  function _t(t, n) {
    switch (n.insertionMode) {
      case 0:
      case 1:
        return d(t, we);
      case 2:
        return d(t, rt);
      case 3:
        return d(t, at);
      case 4:
        return d(t, er);
      case 5:
        return d(t, pr);
      case 6:
        return d(t, Nt);
      case 7:
        return d(t, gt);
      default:
        throw Error(o(397));
    }
  }
  var dr = m('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Wt = m('$RS("'), It = m('","'), Mt = m('")<\/script>'), H = m('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), h = m('$RC("'), A = m('","'), F = m('")<\/script>'), de = m('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Se = m('$RX("'), Fe = m('"'), Ie = m(")<\/script>"), lt = m(","), Oe = /[<\u2028\u2029]/g;
  function dt(t) {
    return JSON.stringify(t).replace(Oe, function(n) {
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
  var vt = Object.assign, wr = Symbol.for("react.element"), rr = Symbol.for("react.portal"), nr = Symbol.for("react.fragment"), Sr = Symbol.for("react.strict_mode"), xr = Symbol.for("react.profiler"), kr = Symbol.for("react.provider"), hr = Symbol.for("react.context"), Fr = Symbol.for("react.forward_ref"), Dr = Symbol.for("react.suspense"), br = Symbol.for("react.suspense_list"), e = Symbol.for("react.memo"), i = Symbol.for("react.lazy"), u = Symbol.for("react.scope"), p = Symbol.for("react.debug_trace_mode"), k = Symbol.for("react.legacy_hidden"), v = Symbol.for("react.default_value"), E = Symbol.iterator;
  function M(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case nr:
        return "Fragment";
      case rr:
        return "Portal";
      case xr:
        return "Profiler";
      case Sr:
        return "StrictMode";
      case Dr:
        return "Suspense";
      case br:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case hr:
        return (t.displayName || "Context") + ".Consumer";
      case kr:
        return (t._context.displayName || "Context") + ".Provider";
      case Fr:
        var n = t.render;
        return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case e:
        return n = t.displayName || null, n !== null ? n : M(t.type) || "Memo";
      case i:
        n = t._payload, t = t._init;
        try {
          return M(t(n));
        } catch {
        }
    }
    return null;
  }
  var Z = {};
  function te(t, n) {
    if (t = t.contextTypes, !t) return Z;
    var l = {}, f;
    for (f in t) l[f] = n[f];
    return l;
  }
  var ie = null;
  function Ne(t, n) {
    if (t !== n) {
      t.context._currentValue = t.parentValue, t = t.parent;
      var l = n.parent;
      if (t === null) {
        if (l !== null) throw Error(o(401));
      } else {
        if (l === null) throw Error(o(401));
        Ne(t, l);
      }
      n.context._currentValue = n.value;
    }
  }
  function yt(t) {
    t.context._currentValue = t.parentValue, t = t.parent, t !== null && yt(t);
  }
  function wt(t) {
    var n = t.parent;
    n !== null && wt(n), t.context._currentValue = t.value;
  }
  function ut(t, n) {
    if (t.context._currentValue = t.parentValue, t = t.parent, t === null) throw Error(o(402));
    t.depth === n.depth ? Ne(t, n) : ut(t, n);
  }
  function or(t, n) {
    var l = n.parent;
    if (l === null) throw Error(o(402));
    t.depth === l.depth ? Ne(t, l) : or(t, l), n.context._currentValue = n.value;
  }
  function Ft(t) {
    var n = ie;
    n !== t && (n === null ? wt(t) : t === null ? yt(n) : n.depth === t.depth ? Ne(n, t) : n.depth > t.depth ? ut(n, t) : or(n, t), ie = t);
  }
  var Er = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(t, n) {
    t = t._reactInternals, t.queue !== null && t.queue.push(n);
  }, enqueueReplaceState: function(t, n) {
    t = t._reactInternals, t.replace = !0, t.queue = [n];
  }, enqueueForceUpdate: function() {
  } };
  function ir(t, n, l, f) {
    var S = t.state !== void 0 ? t.state : null;
    t.updater = Er, t.props = l, t.state = S;
    var y = { queue: [], replace: !1 };
    t._reactInternals = y;
    var _ = n.contextType;
    if (t.context = typeof _ == "object" && _ !== null ? _._currentValue : f, _ = n.getDerivedStateFromProps, typeof _ == "function" && (_ = _(l, S), S = _ == null ? S : vt({}, S, _), t.state = S), typeof n.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function")) if (n = t.state, typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && Er.enqueueReplaceState(t, t.state, null), y.queue !== null && 0 < y.queue.length) if (n = y.queue, _ = y.replace, y.queue = null, y.replace = !1, _ && n.length === 1) t.state = n[0];
    else {
      for (y = _ ? n[0] : t.state, S = !0, _ = _ ? 1 : 0; _ < n.length; _++) {
        var O = n[_];
        O = typeof O == "function" ? O.call(t, y, l, f) : O, O != null && (S ? (S = !1, y = vt({}, y, O)) : vt(y, O));
      }
      t.state = y;
    }
    else y.queue = null;
  }
  var Lr = { id: 1, overflow: "" };
  function Vt(t, n, l) {
    var f = t.id;
    t = t.overflow;
    var S = 32 - jr(f) - 1;
    f &= ~(1 << S), l += 1;
    var y = 32 - jr(n) + S;
    if (30 < y) {
      var _ = S - S % 5;
      return y = (f & (1 << _) - 1).toString(32), f >>= _, S -= _, { id: 1 << 32 - jr(n) + S | l << S | f, overflow: y + t };
    }
    return { id: 1 << y | l << S | f, overflow: t };
  }
  var jr = Math.clz32 ? Math.clz32 : Si, yi = Math.log, wi = Math.LN2;
  function Si(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (yi(t) / wi | 0) | 0;
  }
  function xi(t, n) {
    return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
  }
  var ki = typeof Object.is == "function" ? Object.is : xi, Dt = null, hn = null, zr = null, Ce = null, _r = !1, $r = !1, Tr = 0, Gt = null, Br = 0;
  function ar() {
    if (Dt === null) throw Error(o(321));
    return Dt;
  }
  function no() {
    if (0 < Br) throw Error(o(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function mn() {
    return Ce === null ? zr === null ? (_r = !1, zr = Ce = no()) : (_r = !0, Ce = zr) : Ce.next === null ? (_r = !1, Ce = Ce.next = no()) : (_r = !0, Ce = Ce.next), Ce;
  }
  function gn() {
    hn = Dt = null, $r = !1, zr = null, Br = 0, Ce = Gt = null;
  }
  function oo(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function io(t, n, l) {
    if (Dt = ar(), Ce = mn(), _r) {
      var f = Ce.queue;
      if (n = f.dispatch, Gt !== null && (l = Gt.get(f), l !== void 0)) {
        Gt.delete(f), f = Ce.memoizedState;
        do
          f = t(f, l.action), l = l.next;
        while (l !== null);
        return Ce.memoizedState = f, [f, n];
      }
      return [Ce.memoizedState, n];
    }
    return t = t === oo ? typeof n == "function" ? n() : n : l !== void 0 ? l(n) : n, Ce.memoizedState = t, t = Ce.queue = { last: null, dispatch: null }, t = t.dispatch = bi.bind(null, Dt, t), [Ce.memoizedState, t];
  }
  function ao(t, n) {
    if (Dt = ar(), Ce = mn(), n = n === void 0 ? null : n, Ce !== null) {
      var l = Ce.memoizedState;
      if (l !== null && n !== null) {
        var f = l[1];
        e: if (f === null) f = !1;
        else {
          for (var S = 0; S < f.length && S < n.length; S++) if (!ki(n[S], f[S])) {
            f = !1;
            break e;
          }
          f = !0;
        }
        if (f) return l[0];
      }
    }
    return t = t(), Ce.memoizedState = [t, n], t;
  }
  function bi(t, n, l) {
    if (25 <= Br) throw Error(o(301));
    if (t === Dt) if ($r = !0, t = { action: l, next: null }, Gt === null && (Gt = /* @__PURE__ */ new Map()), l = Gt.get(n), l === void 0) Gt.set(n, t);
    else {
      for (n = l; n.next !== null; ) n = n.next;
      n.next = t;
    }
  }
  function Ei() {
    throw Error(o(394));
  }
  function Hr() {
  }
  var so = { readContext: function(t) {
    return t._currentValue;
  }, useContext: function(t) {
    return ar(), t._currentValue;
  }, useMemo: ao, useReducer: io, useRef: function(t) {
    Dt = ar(), Ce = mn();
    var n = Ce.memoizedState;
    return n === null ? (t = { current: t }, Ce.memoizedState = t) : n;
  }, useState: function(t) {
    return io(oo, t);
  }, useInsertionEffect: Hr, useLayoutEffect: function() {
  }, useCallback: function(t, n) {
    return ao(function() {
      return t;
    }, n);
  }, useImperativeHandle: Hr, useEffect: Hr, useDebugValue: Hr, useDeferredValue: function(t) {
    return ar(), t;
  }, useTransition: function() {
    return ar(), [!1, Ei];
  }, useId: function() {
    var t = hn.treeContext, n = t.overflow;
    t = t.id, t = (t & ~(1 << 32 - jr(t) - 1)).toString(32) + n;
    var l = Ur;
    if (l === null) throw Error(o(404));
    return n = Tr++, t = ":" + l.idPrefix + "R" + t, 0 < n && (t += "H" + n.toString(32)), t + ":";
  }, useMutableSource: function(t, n) {
    return ar(), n(t._source);
  }, useSyncExternalStore: function(t, n, l) {
    if (l === void 0) throw Error(o(407));
    return l();
  } }, Ur = null, vn = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function _i(t) {
    return console.error(t), null;
  }
  function Cr() {
  }
  function Ti(t, n, l, f, S, y, _, O, K) {
    var ue = [], se = /* @__PURE__ */ new Set();
    return n = { destination: null, responseState: n, progressiveChunkSize: f === void 0 ? 12800 : f, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: se, pingedTasks: ue, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: S === void 0 ? _i : S, onAllReady: y === void 0 ? Cr : y, onShellReady: _ === void 0 ? Cr : _, onShellError: O === void 0 ? Cr : O, onFatalError: K === void 0 ? Cr : K }, l = Wr(n, 0, null, l, !1, !1), l.parentFlushed = !0, t = yn(n, t, null, l, se, Z, null, Lr), ue.push(t), n;
  }
  function yn(t, n, l, f, S, y, _, O) {
    t.allPendingTasks++, l === null ? t.pendingRootTasks++ : l.pendingTasks++;
    var K = { node: n, ping: function() {
      var ue = t.pingedTasks;
      ue.push(K), ue.length === 1 && mo(t);
    }, blockedBoundary: l, blockedSegment: f, abortSet: S, legacyContext: y, context: _, treeContext: O };
    return S.add(K), K;
  }
  function Wr(t, n, l, f, S, y) {
    return { status: 0, id: -1, index: n, parentFlushed: !1, chunks: [], children: [], formatContext: f, boundary: l, lastPushedText: S, textEmbedded: y };
  }
  function Ar(t, n) {
    if (t = t.onError(n), t != null && typeof t != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function Vr(t, n) {
    var l = t.onShellError;
    l(n), l = t.onFatalError, l(n), t.destination !== null ? (t.status = 2, P(t.destination, n)) : (t.status = 1, t.fatalError = n);
  }
  function lo(t, n, l, f, S) {
    for (Dt = {}, hn = n, Tr = 0, t = l(f, S); $r; ) $r = !1, Tr = 0, Br += 1, Ce = null, t = l(f, S);
    return gn(), t;
  }
  function uo(t, n, l, f) {
    var S = l.render(), y = f.childContextTypes;
    if (y != null) {
      var _ = n.legacyContext;
      if (typeof l.getChildContext != "function") f = _;
      else {
        l = l.getChildContext();
        for (var O in l) if (!(O in y)) throw Error(o(108, M(f) || "Unknown", O));
        f = vt({}, _, l);
      }
      n.legacyContext = f, ct(t, n, S), n.legacyContext = _;
    } else ct(t, n, S);
  }
  function co(t, n) {
    if (t && t.defaultProps) {
      n = vt({}, n), t = t.defaultProps;
      for (var l in t) n[l] === void 0 && (n[l] = t[l]);
      return n;
    }
    return n;
  }
  function wn(t, n, l, f, S) {
    if (typeof l == "function") if (l.prototype && l.prototype.isReactComponent) {
      S = te(l, n.legacyContext);
      var y = l.contextType;
      y = new l(f, typeof y == "object" && y !== null ? y._currentValue : S), ir(y, l, f, S), uo(t, n, y, l);
    } else {
      y = te(l, n.legacyContext), S = lo(t, n, l, f, y);
      var _ = Tr !== 0;
      if (typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0) ir(S, l, f, y), uo(t, n, S, l);
      else if (_) {
        f = n.treeContext, n.treeContext = Vt(f, 1, 0);
        try {
          ct(t, n, S);
        } finally {
          n.treeContext = f;
        }
      } else ct(t, n, S);
    }
    else if (typeof l == "string") {
      switch (S = n.blockedSegment, y = ye(S.chunks, l, f, t.responseState, S.formatContext), S.lastPushedText = !1, _ = S.formatContext, S.formatContext = Xe(_, l, f), Sn(t, n, y), S.formatContext = _, l) {
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
          S.chunks.push(et, w(l), Ze);
      }
      S.lastPushedText = !1;
    } else {
      switch (l) {
        case k:
        case p:
        case Sr:
        case xr:
        case nr:
          ct(t, n, f.children);
          return;
        case br:
          ct(t, n, f.children);
          return;
        case u:
          throw Error(o(343));
        case Dr:
          e: {
            l = n.blockedBoundary, S = n.blockedSegment, y = f.fallback, f = f.children, _ = /* @__PURE__ */ new Set();
            var O = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: _, errorDigest: null }, K = Wr(t, S.chunks.length, O, S.formatContext, !1, !1);
            S.children.push(K), S.lastPushedText = !1;
            var ue = Wr(t, 0, null, S.formatContext, !1, !1);
            ue.parentFlushed = !0, n.blockedBoundary = O, n.blockedSegment = ue;
            try {
              if (Sn(
                t,
                n,
                f
              ), ue.lastPushedText && ue.textEmbedded && ue.chunks.push(z), ue.status = 1, Gr(O, ue), O.pendingTasks === 0) break e;
            } catch (se) {
              ue.status = 4, O.forceClientRender = !0, O.errorDigest = Ar(t, se);
            } finally {
              n.blockedBoundary = l, n.blockedSegment = S;
            }
            n = yn(t, y, l, K, _, n.legacyContext, n.context, n.treeContext), t.pingedTasks.push(n);
          }
          return;
      }
      if (typeof l == "object" && l !== null) switch (l.$$typeof) {
        case Fr:
          if (f = lo(t, n, l.render, f, S), Tr !== 0) {
            l = n.treeContext, n.treeContext = Vt(l, 1, 0);
            try {
              ct(t, n, f);
            } finally {
              n.treeContext = l;
            }
          } else ct(t, n, f);
          return;
        case e:
          l = l.type, f = co(l, f), wn(t, n, l, f, S);
          return;
        case kr:
          if (S = f.children, l = l._context, f = f.value, y = l._currentValue, l._currentValue = f, _ = ie, ie = f = { parent: _, depth: _ === null ? 0 : _.depth + 1, context: l, parentValue: y, value: f }, n.context = f, ct(t, n, S), t = ie, t === null) throw Error(o(403));
          f = t.parentValue, t.context._currentValue = f === v ? t.context._defaultValue : f, t = ie = t.parent, n.context = t;
          return;
        case hr:
          f = f.children, f = f(l._currentValue), ct(t, n, f);
          return;
        case i:
          S = l._init, l = S(l._payload), f = co(l, f), wn(t, n, l, f, void 0);
          return;
      }
      throw Error(o(
        130,
        l == null ? l : typeof l,
        ""
      ));
    }
  }
  function ct(t, n, l) {
    if (n.node = l, typeof l == "object" && l !== null) {
      switch (l.$$typeof) {
        case wr:
          wn(t, n, l.type, l.props, l.ref);
          return;
        case rr:
          throw Error(o(257));
        case i:
          var f = l._init;
          l = f(l._payload), ct(t, n, l);
          return;
      }
      if (Ge(l)) {
        fo(t, n, l);
        return;
      }
      if (l === null || typeof l != "object" ? f = null : (f = E && l[E] || l["@@iterator"], f = typeof f == "function" ? f : null), f && (f = f.call(l))) {
        if (l = f.next(), !l.done) {
          var S = [];
          do
            S.push(l.value), l = f.next();
          while (!l.done);
          fo(t, n, S);
        }
        return;
      }
      throw t = Object.prototype.toString.call(l), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t));
    }
    typeof l == "string" ? (f = n.blockedSegment, f.lastPushedText = N(n.blockedSegment.chunks, l, t.responseState, f.lastPushedText)) : typeof l == "number" && (f = n.blockedSegment, f.lastPushedText = N(n.blockedSegment.chunks, "" + l, t.responseState, f.lastPushedText));
  }
  function fo(t, n, l) {
    for (var f = l.length, S = 0; S < f; S++) {
      var y = n.treeContext;
      n.treeContext = Vt(y, f, S);
      try {
        Sn(t, n, l[S]);
      } finally {
        n.treeContext = y;
      }
    }
  }
  function Sn(t, n, l) {
    var f = n.blockedSegment.formatContext, S = n.legacyContext, y = n.context;
    try {
      return ct(t, n, l);
    } catch (K) {
      if (gn(), typeof K == "object" && K !== null && typeof K.then == "function") {
        l = K;
        var _ = n.blockedSegment, O = Wr(t, _.chunks.length, null, _.formatContext, _.lastPushedText, !0);
        _.children.push(O), _.lastPushedText = !1, t = yn(t, n.node, n.blockedBoundary, O, n.abortSet, n.legacyContext, n.context, n.treeContext).ping, l.then(t, t), n.blockedSegment.formatContext = f, n.legacyContext = S, n.context = y, Ft(y);
      } else throw n.blockedSegment.formatContext = f, n.legacyContext = S, n.context = y, Ft(y), K;
    }
  }
  function Ci(t) {
    var n = t.blockedBoundary;
    t = t.blockedSegment, t.status = 3, ho(this, n, t);
  }
  function po(t, n, l) {
    var f = t.blockedBoundary;
    t.blockedSegment.status = 3, f === null ? (n.allPendingTasks--, n.status !== 2 && (n.status = 2, n.destination !== null && n.destination.close())) : (f.pendingTasks--, f.forceClientRender || (f.forceClientRender = !0, t = l === void 0 ? Error(o(432)) : l, f.errorDigest = n.onError(t), f.parentFlushed && n.clientRenderedBoundaries.push(f)), f.fallbackAbortableTasks.forEach(function(S) {
      return po(S, n, l);
    }), f.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0 && (f = n.onAllReady, f()));
  }
  function Gr(t, n) {
    if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
      var l = n.children[0];
      l.id = n.id, l.parentFlushed = !0, l.status === 1 && Gr(t, l);
    } else t.completedSegments.push(n);
  }
  function ho(t, n, l) {
    if (n === null) {
      if (l.parentFlushed) {
        if (t.completedRootSegment !== null) throw Error(o(389));
        t.completedRootSegment = l;
      }
      t.pendingRootTasks--, t.pendingRootTasks === 0 && (t.onShellError = Cr, n = t.onShellReady, n());
    } else n.pendingTasks--, n.forceClientRender || (n.pendingTasks === 0 ? (l.parentFlushed && l.status === 1 && Gr(n, l), n.parentFlushed && t.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(Ci, t), n.fallbackAbortableTasks.clear()) : l.parentFlushed && l.status === 1 && (Gr(n, l), n.completedSegments.length === 1 && n.parentFlushed && t.partialBoundaries.push(n)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function mo(t) {
    if (t.status !== 2) {
      var n = ie, l = vn.current;
      vn.current = so;
      var f = Ur;
      Ur = t.responseState;
      try {
        var S = t.pingedTasks, y;
        for (y = 0; y < S.length; y++) {
          var _ = S[y], O = t, K = _.blockedSegment;
          if (K.status === 0) {
            Ft(_.context);
            try {
              ct(O, _, _.node), K.lastPushedText && K.textEmbedded && K.chunks.push(z), _.abortSet.delete(_), K.status = 1, ho(O, _.blockedBoundary, K);
            } catch (xt) {
              if (gn(), typeof xt == "object" && xt !== null && typeof xt.then == "function") {
                var ue = _.ping;
                xt.then(ue, ue);
              } else {
                _.abortSet.delete(_), K.status = 4;
                var se = _.blockedBoundary, Re = xt, ft = Ar(O, Re);
                if (se === null ? Vr(O, Re) : (se.pendingTasks--, se.forceClientRender || (se.forceClientRender = !0, se.errorDigest = ft, se.parentFlushed && O.clientRenderedBoundaries.push(se))), O.allPendingTasks--, O.allPendingTasks === 0) {
                  var St = O.onAllReady;
                  St();
                }
              }
            } finally {
            }
          }
        }
        S.splice(0, y), t.destination !== null && xn(t, t.destination);
      } catch (xt) {
        Ar(t, xt), Vr(t, xt);
      } finally {
        Ur = f, vn.current = l, l === so && Ft(n);
      }
    }
  }
  function qr(t, n, l) {
    switch (l.parentFlushed = !0, l.status) {
      case 0:
        var f = l.id = t.nextSegmentId++;
        return l.lastPushedText = !1, l.textEmbedded = !1, t = t.responseState, c(n, Me), c(n, t.placeholderPrefix), t = w(f.toString(16)), c(n, t), d(n, Xt);
      case 1:
        l.status = 2;
        var S = !0;
        f = l.chunks;
        var y = 0;
        l = l.children;
        for (var _ = 0; _ < l.length; _++) {
          for (S = l[_]; y < S.index; y++) c(n, f[y]);
          S = Yr(t, n, S);
        }
        for (; y < f.length - 1; y++) c(n, f[y]);
        return y < f.length && (S = d(n, f[y])), S;
      default:
        throw Error(o(390));
    }
  }
  function Yr(t, n, l) {
    var f = l.boundary;
    if (f === null) return qr(t, n, l);
    if (f.parentFlushed = !0, f.forceClientRender) f = f.errorDigest, d(n, Ct), c(n, $t), f && (c(n, Et), c(n, w(he(f))), c(n, it)), d(n, Kt), qr(t, n, l);
    else if (0 < f.pendingTasks) {
      f.rootSegmentID = t.nextSegmentId++, 0 < f.completedSegments.length && t.partialBoundaries.push(f);
      var S = t.responseState, y = S.nextSuspenseID++;
      S = m(S.boundaryPrefix + y.toString(16)), f = f.id = S, qe(n, t.responseState, f), qr(t, n, l);
    } else if (f.byteSize > t.progressiveChunkSize) f.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(f), qe(n, t.responseState, f.id), qr(t, n, l);
    else {
      if (d(n, Zt), l = f.completedSegments, l.length !== 1) throw Error(o(391));
      Yr(t, n, l[0]);
    }
    return d(n, zt);
  }
  function go(t, n, l) {
    return st(n, t.responseState, l.formatContext, l.id), Yr(t, n, l), _t(n, l.formatContext);
  }
  function vo(t, n, l) {
    for (var f = l.completedSegments, S = 0; S < f.length; S++) yo(t, n, l, f[S]);
    if (f.length = 0, t = t.responseState, f = l.id, l = l.rootSegmentID, c(n, t.startInlineScript), t.sentCompleteBoundaryFunction ? c(n, h) : (t.sentCompleteBoundaryFunction = !0, c(n, H)), f === null) throw Error(o(395));
    return l = w(l.toString(16)), c(n, f), c(n, A), c(n, t.segmentPrefix), c(n, l), d(n, F);
  }
  function yo(t, n, l, f) {
    if (f.status === 2) return !0;
    var S = f.id;
    if (S === -1) {
      if ((f.id = l.rootSegmentID) === -1) throw Error(o(392));
      return go(t, n, f);
    }
    return go(t, n, f), t = t.responseState, c(n, t.startInlineScript), t.sentCompleteSegmentFunction ? c(n, Wt) : (t.sentCompleteSegmentFunction = !0, c(n, dr)), c(n, t.segmentPrefix), S = w(S.toString(16)), c(n, S), c(n, It), c(n, t.placeholderPrefix), c(n, S), d(n, Mt);
  }
  function xn(t, n) {
    a = new Uint8Array(512), s = 0;
    try {
      var l = t.completedRootSegment;
      if (l !== null && t.pendingRootTasks === 0) {
        Yr(t, n, l), t.completedRootSegment = null;
        var f = t.responseState.bootstrapChunks;
        for (l = 0; l < f.length - 1; l++) c(n, f[l]);
        l < f.length && d(n, f[l]);
      }
      var S = t.clientRenderedBoundaries, y;
      for (y = 0; y < S.length; y++) {
        var _ = S[y];
        f = n;
        var O = t.responseState, K = _.id, ue = _.errorDigest, se = _.errorMessage, Re = _.errorComponentStack;
        if (c(f, O.startInlineScript), O.sentClientRenderFunction ? c(f, Se) : (O.sentClientRenderFunction = !0, c(
          f,
          de
        )), K === null) throw Error(o(395));
        c(f, K), c(f, Fe), (ue || se || Re) && (c(f, lt), c(f, w(dt(ue || "")))), (se || Re) && (c(f, lt), c(f, w(dt(se || "")))), Re && (c(f, lt), c(f, w(dt(Re)))), d(f, Ie);
      }
      S.splice(0, y);
      var ft = t.completedBoundaries;
      for (y = 0; y < ft.length; y++) vo(t, n, ft[y]);
      ft.splice(0, y), g(n), a = new Uint8Array(512), s = 0;
      var St = t.partialBoundaries;
      for (y = 0; y < St.length; y++) {
        var xt = St[y];
        e: {
          S = t, _ = n;
          var Xr = xt.completedSegments;
          for (O = 0; O < Xr.length; O++) if (!yo(
            S,
            _,
            xt,
            Xr[O]
          )) {
            O++, Xr.splice(0, O);
            var So = !1;
            break e;
          }
          Xr.splice(0, O), So = !0;
        }
        if (!So) {
          t.destination = null, y++, St.splice(0, y);
          return;
        }
      }
      St.splice(0, y);
      var kn = t.completedBoundaries;
      for (y = 0; y < kn.length; y++) vo(t, n, kn[y]);
      kn.splice(0, y);
    } finally {
      g(n), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && n.close();
    }
  }
  function wo(t, n) {
    try {
      var l = t.abortableTasks;
      l.forEach(function(f) {
        return po(f, t, n);
      }), l.clear(), t.destination !== null && xn(t, t.destination);
    } catch (f) {
      Ar(t, f), Vr(t, f);
    }
  }
  return Jr.renderToReadableStream = function(t, n) {
    return new Promise(function(l, f) {
      var S, y, _ = new Promise(function(se, Re) {
        y = se, S = Re;
      }), O = Ti(t, De(n ? n.identifierPrefix : void 0, n ? n.nonce : void 0, n ? n.bootstrapScriptContent : void 0, n ? n.bootstrapScripts : void 0, n ? n.bootstrapModules : void 0), Je(n ? n.namespaceURI : void 0), n ? n.progressiveChunkSize : void 0, n ? n.onError : void 0, y, function() {
        var se = new ReadableStream({ type: "bytes", pull: function(Re) {
          if (O.status === 1) O.status = 2, P(Re, O.fatalError);
          else if (O.status !== 2 && O.destination === null) {
            O.destination = Re;
            try {
              xn(O, Re);
            } catch (ft) {
              Ar(O, ft), Vr(O, ft);
            }
          }
        }, cancel: function() {
          wo(O);
        } }, { highWaterMark: 0 });
        se.allReady = _, l(se);
      }, function(se) {
        _.catch(function() {
        }), f(se);
      }, S);
      if (n && n.signal) {
        var K = n.signal, ue = function() {
          wo(O, K.reason), K.removeEventListener("abort", ue);
        };
        K.addEventListener("abort", ue);
      }
      mo(O);
    });
  }, Jr.version = "18.3.1", Jr;
}
var vr, ai;
vr = Wa(), ai = Va();
vr.version;
vr.renderToString;
vr.renderToStaticMarkup;
vr.renderToNodeStream;
vr.renderToStaticNodeStream;
ai.renderToReadableStream;
const Ga = "staticMarkup";
function qa() {
  const o = Oi().indexOf(Ga) > -1 ? !0 : void 0;
  return {
    isBootstrap: o,
    isReact: o ? void 0 : !0
  };
}
const Ya = ({ gaData: r, prefix: o = "", children: a }) => {
  const { isReact: s } = qa(), { onClick: c, ...d } = a.props;
  if (s)
    return Ue.cloneElement(a, {
      ...d,
      onClick: (w) => (Ha(r), c ? c(w) : !0)
    });
  let g = "";
  ["input", "header", "header-input"].includes(o) && (g = `-${o}`);
  const x = {
    [`data-ga${g}`]: r.text,
    [`data-ga${g}-name`]: r.name,
    [`data-ga${g}-event`]: r.event,
    [`data-ga${g}-action`]: r.action,
    [`data-ga${g}-type`]: r.type,
    [`data-ga${g}-region`]: r.region,
    [`data-ga${g}-section`]: r.section,
    [`data-ga${g}-component`]: r.component
  };
  return Ue.cloneElement(a, {
    ...d,
    onClick: c,
    ...x
  });
}, Xa = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Pr = ({
  label: r,
  cardTitle: o,
  gaData: a,
  ariaLabel: s,
  block: c,
  color: d,
  disabled: g,
  element: x,
  href: w,
  icon: m,
  innerRef: P,
  onClick: I,
  size: q,
  classes: J,
  target: L,
  ...Q
}) => {
  const B = cr("btn", {
    [`btn-${d}`]: !0,
    "btn-md": q === "small",
    "btn-sm": q === "xsmall",
    "btn-block": c,
    disabled: g
  });
  let U = x;
  return w && x === "button" && (U = "a"), /* @__PURE__ */ D.jsx(
    Ya,
    {
      gaData: {
        ...Xa,
        section: o,
        // @deprecated - remove at some point
        ...a,
        text: r
      },
      children: /* @__PURE__ */ D.jsxs(
        U,
        {
          type: U === "button" && I ? "button" : void 0,
          ...Q,
          className: cr(J) || B,
          href: w,
          ref: P,
          onClick: I,
          "aria-label": s,
          target: U === "a" ? L : null,
          children: [
            m && /* @__PURE__ */ D.jsx("i", { className: `${m == null ? void 0 : m[0]} fa-${m == null ? void 0 : m[1]} me-1` }),
            r
          ]
        }
      )
    }
  );
};
Pr.propTypes = {
  /**
   * Button label
   */
  label: T.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: T.string,
  /**
   * Google Analytics event data
   */
  gaData: Ua,
  /**
    ARIA label for accessibility
  */
  ariaLabel: T.string,
  /**
    Render button as a block-button?
  */
  block: T.bool,
  /**
    Button background color
  */
  color: T.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: T.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: T.oneOfType([
    T.func,
    T.string,
    T.shape({ $$typeof: T.symbol, render: T.func }),
    T.arrayOf(
      T.oneOfType([
        T.func,
        T.string,
        T.shape({ $$typeof: T.symbol, render: T.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: T.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: T.arrayOf(T.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: T.oneOfType([
    T.object,
    T.func,
    T.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: T.func,
  /**
    Button size
  */
  size: T.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: T.arrayOf(T.string),
  /**
   Link target type
   */
  target: T.oneOf(["_blank", "_self", "_top", "_parent"])
};
Pr.defaultProps = {
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
var Jn = ti();
function Za(r) {
  function o(z, N, j, $, b) {
    for (var V = 0, R = 0, ce = 0, ne = 0, re, X, fe = 0, me = 0, ae, ge = ae = re = 0, pe = 0, _e = 0, je = 0, Ee = 0, Qe = j.length, $e = Qe - 1, ve, Y = "", ye = "", et = "", Ze = "", Me; pe < Qe; ) {
      if (X = j.charCodeAt(pe), pe === $e && R + ne + ce + V !== 0 && (R !== 0 && (X = R === 47 ? 10 : 47), ne = ce = V = 0, Qe++, $e++), R + ne + ce + V === 0) {
        if (pe === $e && (0 < _e && (Y = Y.replace(q, "")), 0 < Y.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Y += j.charAt(pe);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (Y = Y.trim(), re = Y.charCodeAt(0), ae = 1, Ee = ++pe; pe < Qe; ) {
              switch (X = j.charCodeAt(pe)) {
                case 123:
                  ae++;
                  break;
                case 125:
                  ae--;
                  break;
                case 47:
                  switch (X = j.charCodeAt(pe + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = pe + 1; ge < $e; ++ge)
                          switch (j.charCodeAt(ge)) {
                            case 47:
                              if (X === 42 && j.charCodeAt(ge - 1) === 42 && pe + 2 !== ge) {
                                pe = ge + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (X === 47) {
                                pe = ge + 1;
                                break e;
                              }
                          }
                        pe = ge;
                      }
                  }
                  break;
                case 91:
                  X++;
                case 40:
                  X++;
                case 34:
                case 39:
                  for (; pe++ < $e && j.charCodeAt(pe) !== X; )
                    ;
              }
              if (ae === 0) break;
              pe++;
            }
            switch (ae = j.substring(Ee, pe), re === 0 && (re = (Y = Y.replace(I, "").trim()).charCodeAt(0)), re) {
              case 64:
                switch (0 < _e && (Y = Y.replace(q, "")), X = Y.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    _e = N;
                    break;
                  default:
                    _e = ot;
                }
                if (ae = o(N, _e, ae, X, b + 1), Ee = ae.length, 0 < De && (_e = a(ot, Y, je), Me = x(3, ae, _e, N, Te, be, Ee, X, b, $), Y = _e.join(""), Me !== void 0 && (Ee = (ae = Me.trim()).length) === 0 && (X = 0, ae = "")), 0 < Ee) switch (X) {
                  case 115:
                    Y = Y.replace(oe, g);
                  case 100:
                  case 109:
                  case 45:
                    ae = Y + "{" + ae + "}";
                    break;
                  case 107:
                    Y = Y.replace(W, "$1 $2"), ae = Y + "{" + ae + "}", ae = Pe === 1 || Pe === 2 && d("@" + ae, 3) ? "@-webkit-" + ae + "@" + ae : "@" + ae;
                    break;
                  default:
                    ae = Y + ae, $ === 112 && (ae = (ye += ae, ""));
                }
                else ae = "";
                break;
              default:
                ae = o(N, a(N, Y, je), ae, $, b + 1);
            }
            et += ae, ae = je = _e = ge = re = 0, Y = "", X = j.charCodeAt(++pe);
            break;
          case 125:
          case 59:
            if (Y = (0 < _e ? Y.replace(q, "") : Y).trim(), 1 < (Ee = Y.length)) switch (ge === 0 && (re = Y.charCodeAt(0), re === 45 || 96 < re && 123 > re) && (Ee = (Y = Y.replace(" ", ":")).length), 0 < De && (Me = x(1, Y, N, z, Te, be, ye.length, $, b, $)) !== void 0 && (Ee = (Y = Me.trim()).length) === 0 && (Y = "\0\0"), re = Y.charCodeAt(0), X = Y.charCodeAt(1), re) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  Ze += Y + j.charAt(pe);
                  break;
                }
              default:
                Y.charCodeAt(Ee - 1) !== 58 && (ye += c(Y, re, X, Y.charCodeAt(2)));
            }
            je = _e = ge = re = 0, Y = "", X = j.charCodeAt(++pe);
        }
      }
      switch (X) {
        case 13:
        case 10:
          R === 47 ? R = 0 : 1 + re === 0 && $ !== 107 && 0 < Y.length && (_e = 1, Y += "\0"), 0 < De * Je && x(0, Y, N, z, Te, be, ye.length, $, b, $), be = 1, Te++;
          break;
        case 59:
        case 125:
          if (R + ne + ce + V === 0) {
            be++;
            break;
          }
        default:
          switch (be++, ve = j.charAt(pe), X) {
            case 9:
            case 32:
              if (ne + V + R === 0) switch (fe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ve = "";
                  break;
                default:
                  X !== 32 && (ve = " ");
              }
              break;
            case 0:
              ve = "\\0";
              break;
            case 12:
              ve = "\\f";
              break;
            case 11:
              ve = "\\v";
              break;
            case 38:
              ne + R + V === 0 && (_e = je = 1, ve = "\f" + ve);
              break;
            case 108:
              if (ne + R + V + ze === 0 && 0 < ge) switch (pe - ge) {
                case 2:
                  fe === 112 && j.charCodeAt(pe - 3) === 58 && (ze = fe);
                case 8:
                  me === 111 && (ze = me);
              }
              break;
            case 58:
              ne + R + V === 0 && (ge = pe);
              break;
            case 44:
              R + ce + ne + V === 0 && (_e = 1, ve += "\r");
              break;
            case 34:
            case 39:
              R === 0 && (ne = ne === X ? 0 : ne === 0 ? X : ne);
              break;
            case 91:
              ne + R + ce === 0 && V++;
              break;
            case 93:
              ne + R + ce === 0 && V--;
              break;
            case 41:
              ne + R + V === 0 && ce--;
              break;
            case 40:
              if (ne + R + V === 0) {
                if (re === 0) switch (2 * fe + 3 * me) {
                  case 533:
                    break;
                  default:
                    re = 1;
                }
                ce++;
              }
              break;
            case 64:
              R + ce + ne + V + ge + ae === 0 && (ae = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ne + V + ce)) switch (R) {
                case 0:
                  switch (2 * X + 3 * j.charCodeAt(pe + 1)) {
                    case 235:
                      R = 47;
                      break;
                    case 220:
                      Ee = pe, R = 42;
                  }
                  break;
                case 42:
                  X === 47 && fe === 42 && Ee + 2 !== pe && (j.charCodeAt(Ee + 2) === 33 && (ye += j.substring(Ee, pe + 1)), ve = "", R = 0);
              }
          }
          R === 0 && (Y += ve);
      }
      me = fe, fe = X, pe++;
    }
    if (Ee = ye.length, 0 < Ee) {
      if (_e = N, 0 < De && (Me = x(2, ye, _e, z, Te, be, Ee, $, b, $), Me !== void 0 && (ye = Me).length === 0)) return Ze + ye + et;
      if (ye = _e.join(",") + "{" + ye + "}", Pe * ze !== 0) {
        switch (Pe !== 2 || d(ye, 2) || (ze = 0), ze) {
          case 111:
            ye = ye.replace(G, ":-moz-$1") + ye;
            break;
          case 112:
            ye = ye.replace(ee, "::-webkit-input-$1") + ye.replace(ee, "::-moz-$1") + ye.replace(ee, ":-ms-input-$1") + ye;
        }
        ze = 0;
      }
    }
    return Ze + ye + et;
  }
  function a(z, N, j) {
    var $ = N.trim().split(B);
    N = $;
    var b = $.length, V = z.length;
    switch (V) {
      case 0:
      case 1:
        var R = 0;
        for (z = V === 0 ? "" : z[0] + " "; R < b; ++R)
          N[R] = s(z, N[R], j).trim();
        break;
      default:
        var ce = R = 0;
        for (N = []; R < b; ++R)
          for (var ne = 0; ne < V; ++ne)
            N[ce++] = s(z[ne] + " ", $[R], j).trim();
    }
    return N;
  }
  function s(z, N, j) {
    var $ = N.charCodeAt(0);
    switch (33 > $ && ($ = (N = N.trim()).charCodeAt(0)), $) {
      case 38:
        return N.replace(U, "$1" + z.trim());
      case 58:
        return z.trim() + N.replace(U, "$1" + z.trim());
      default:
        if (0 < 1 * j && 0 < N.indexOf("\f")) return N.replace(U, (z.charCodeAt(0) === 58 ? "" : "$1") + z.trim());
    }
    return z + N;
  }
  function c(z, N, j, $) {
    var b = z + ";", V = 2 * N + 3 * j + 4 * $;
    if (V === 944) {
      z = b.indexOf(":", 9) + 1;
      var R = b.substring(z, b.length - 1).trim();
      return R = b.substring(0, z).trim() + R + ";", Pe === 1 || Pe === 2 && d(R, 1) ? "-webkit-" + R + R : R;
    }
    if (Pe === 0 || Pe === 2 && !d(b, 1)) return b;
    switch (V) {
      case 1015:
        return b.charCodeAt(10) === 97 ? "-webkit-" + b + b : b;
      case 951:
        return b.charCodeAt(3) === 116 ? "-webkit-" + b + b : b;
      case 963:
        return b.charCodeAt(5) === 110 ? "-webkit-" + b + b : b;
      case 1009:
        if (b.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + b + b;
      case 978:
        return "-webkit-" + b + "-moz-" + b + b;
      case 1019:
      case 983:
        return "-webkit-" + b + "-moz-" + b + "-ms-" + b + b;
      case 883:
        if (b.charCodeAt(8) === 45) return "-webkit-" + b + b;
        if (0 < b.indexOf("image-set(", 11)) return b.replace(nt, "$1-webkit-$2") + b;
        break;
      case 932:
        if (b.charCodeAt(4) === 45) switch (b.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + b.replace("-grow", "") + "-webkit-" + b + "-ms-" + b.replace("grow", "positive") + b;
          case 115:
            return "-webkit-" + b + "-ms-" + b.replace("shrink", "negative") + b;
          case 98:
            return "-webkit-" + b + "-ms-" + b.replace("basis", "preferred-size") + b;
        }
        return "-webkit-" + b + "-ms-" + b + b;
      case 964:
        return "-webkit-" + b + "-ms-flex-" + b + b;
      case 1023:
        if (b.charCodeAt(8) !== 99) break;
        return R = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + R + "-webkit-" + b + "-ms-flex-pack" + R + b;
      case 1005:
        return L.test(b) ? b.replace(J, ":-webkit-") + b.replace(J, ":-moz-") + b : b;
      case 1e3:
        switch (R = b.substring(13).trim(), N = R.indexOf("-") + 1, R.charCodeAt(0) + R.charCodeAt(N)) {
          case 226:
            R = b.replace(C, "tb");
            break;
          case 232:
            R = b.replace(C, "tb-rl");
            break;
          case 220:
            R = b.replace(C, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + R + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (N = (b = z).length - 10, R = (b.charCodeAt(N) === 33 ? b.substring(0, N) : b).substring(z.indexOf(":", 7) + 1).trim(), V = R.charCodeAt(0) + (R.charCodeAt(7) | 0)) {
          case 203:
            if (111 > R.charCodeAt(8)) break;
          case 115:
            b = b.replace(R, "-webkit-" + R) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(R, "-webkit-" + (102 < V ? "inline-" : "") + "box") + ";" + b.replace(R, "-webkit-" + R) + ";" + b.replace(R, "-ms-" + R + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45) switch (b.charCodeAt(6)) {
          case 105:
            return R = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + R + "-ms-flex-" + R + b;
          case 115:
            return "-webkit-" + b + "-ms-flex-item-" + b.replace(Be, "") + b;
          default:
            return "-webkit-" + b + "-ms-flex-line-pack" + b.replace("align-content", "").replace(Be, "") + b;
        }
        break;
      case 973:
      case 989:
        if (b.charCodeAt(3) !== 45 || b.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Ge.test(z) === !0) return (R = z.substring(z.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(z.replace("stretch", "fill-available"), N, j, $).replace(":fill-available", ":stretch") : b.replace(R, "-webkit-" + R) + b.replace(R, "-moz-" + R.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, j + $ === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10)) return b.substring(0, b.indexOf(";", 27) + 1).replace(Q, "$1-webkit-$2") + b;
    }
    return b;
  }
  function d(z, N) {
    var j = z.indexOf(N === 1 ? ":" : "{"), $ = z.substring(0, N !== 3 ? j : 10);
    return j = z.substring(j + 1, z.length - 1), Le(N !== 2 ? $ : $.replace(He, "$1"), j, N);
  }
  function g(z, N) {
    var j = c(N, N.charCodeAt(0), N.charCodeAt(1), N.charCodeAt(2));
    return j !== N + ";" ? j.replace(he, " or ($1)").substring(4) : "(" + N + ")";
  }
  function x(z, N, j, $, b, V, R, ce, ne, re) {
    for (var X = 0, fe = N, me; X < De; ++X)
      switch (me = We[X].call(P, z, fe, j, $, b, V, R, ce, ne, re)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          fe = me;
      }
    if (fe !== N) return fe;
  }
  function w(z) {
    switch (z) {
      case void 0:
      case null:
        De = We.length = 0;
        break;
      default:
        if (typeof z == "function") We[De++] = z;
        else if (typeof z == "object") for (var N = 0, j = z.length; N < j; ++N)
          w(z[N]);
        else Je = !!z | 0;
    }
    return w;
  }
  function m(z) {
    return z = z.prefix, z !== void 0 && (Le = null, z ? typeof z != "function" ? Pe = 1 : (Pe = 2, Le = z) : Pe = 0), m;
  }
  function P(z, N) {
    var j = z;
    if (33 > j.charCodeAt(0) && (j = j.trim()), Xe = j, j = [Xe], 0 < De) {
      var $ = x(-1, N, j, j, Te, be, 0, 0, 0, 0);
      $ !== void 0 && typeof $ == "string" && (N = $);
    }
    var b = o(ot, j, N, 0, 0);
    return 0 < De && ($ = x(-2, b, j, j, Te, be, b.length, 0, 0, 0), $ !== void 0 && (b = $)), Xe = "", ze = 0, be = Te = 1, b;
  }
  var I = /^\0+/g, q = /[\0\r\f]/g, J = /: */g, L = /zoo|gra/, Q = /([,: ])(transform)/g, B = /,\r+?/g, U = /([\t\r\n ])*\f?&/g, W = /@(k\w+)\s*(\S*)\s*/, ee = /::(place)/g, G = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, oe = /\(\s*(.*)\s*\)/g, he = /([\s\S]*?);/g, Be = /-self|flex-/g, He = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ge = /stretch|:\s*\w+\-(?:conte|avail)/, nt = /([^-])(image-set\()/, be = 1, Te = 1, ze = 0, Pe = 1, ot = [], We = [], De = 0, Le = null, Je = 0, Xe = "";
  return P.use = w, P.set = m, r !== void 0 && m(r), P;
}
var Ka = {
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
function Ja(r) {
  var o = /* @__PURE__ */ Object.create(null);
  return function(a) {
    return o[a] === void 0 && (o[a] = r(a)), o[a];
  };
}
var Qa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Bo = /* @__PURE__ */ Ja(
  function(r) {
    return Qa.test(r) || r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Qn = ti(), es = {
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
}, ts = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, rs = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, si = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, eo = {};
eo[Qn.ForwardRef] = rs;
eo[Qn.Memo] = si;
function Ho(r) {
  return Qn.isMemo(r) ? si : eo[r.$$typeof] || es;
}
var ns = Object.defineProperty, os = Object.getOwnPropertyNames, Uo = Object.getOwnPropertySymbols, is = Object.getOwnPropertyDescriptor, as = Object.getPrototypeOf, Wo = Object.prototype;
function li(r, o, a) {
  if (typeof o != "string") {
    if (Wo) {
      var s = as(o);
      s && s !== Wo && li(r, s, a);
    }
    var c = os(o);
    Uo && (c = c.concat(Uo(o)));
    for (var d = Ho(r), g = Ho(o), x = 0; x < c.length; ++x) {
      var w = c[x];
      if (!ts[w] && !(a && a[w]) && !(g && g[w]) && !(d && d[w])) {
        var m = is(o, w);
        try {
          ns(r, w, m);
        } catch {
        }
      }
    }
  }
  return r;
}
var ss = li;
const ls = /* @__PURE__ */ Kn(ss);
var ke = { env: { NODE_ENV: "production" } };
function jt() {
  return (jt = Object.assign || function(r) {
    for (var o = 1; o < arguments.length; o++) {
      var a = arguments[o];
      for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (r[s] = a[s]);
    }
    return r;
  }).apply(this, arguments);
}
var Vo = function(r, o) {
  for (var a = [r[0]], s = 0, c = o.length; s < c; s += 1) a.push(o[s], r[s + 1]);
  return a;
}, Vn = function(r) {
  return r !== null && typeof r == "object" && (r.toString ? r.toString() : Object.prototype.toString.call(r)) === "[object Object]" && !Jn.typeOf(r);
}, ln = Object.freeze([]), Yt = Object.freeze({});
function Mr(r) {
  return typeof r == "function";
}
function Gn(r) {
  return ke.env.NODE_ENV !== "production" && typeof r == "string" && r || r.displayName || r.name || "Component";
}
function to(r) {
  return r && typeof r.styledComponentId == "string";
}
var mr = typeof ke < "u" && ke.env !== void 0 && (ke.env.REACT_APP_SC_ATTR || ke.env.SC_ATTR) || "data-styled", ro = typeof window < "u" && "HTMLElement" in window, us = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ke < "u" && ke.env !== void 0 && (ke.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ke.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ke.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ke.env.REACT_APP_SC_DISABLE_SPEEDY : ke.env.SC_DISABLE_SPEEDY !== void 0 && ke.env.SC_DISABLE_SPEEDY !== "" ? ke.env.SC_DISABLE_SPEEDY !== "false" && ke.env.SC_DISABLE_SPEEDY : ke.env.NODE_ENV !== "production")), cs = ke.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function fs() {
  for (var r = arguments.length <= 0 ? void 0 : arguments[0], o = [], a = 1, s = arguments.length; a < s; a += 1) o.push(a < 0 || arguments.length <= a ? void 0 : arguments[a]);
  return o.forEach(function(c) {
    r = r.replace(/%[a-z]/, c);
  }), r;
}
function yr(r) {
  for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) a[s - 1] = arguments[s];
  throw ke.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + r + " for more information." + (a.length > 0 ? " Args: " + a.join(", ") : "")) : new Error(fs.apply(void 0, [cs[r]].concat(a)).trim());
}
var ps = function() {
  function r(a) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = a;
  }
  var o = r.prototype;
  return o.indexOfGroup = function(a) {
    for (var s = 0, c = 0; c < a; c++) s += this.groupSizes[c];
    return s;
  }, o.insertRules = function(a, s) {
    if (a >= this.groupSizes.length) {
      for (var c = this.groupSizes, d = c.length, g = d; a >= g; ) (g <<= 1) < 0 && yr(16, "" + a);
      this.groupSizes = new Uint32Array(g), this.groupSizes.set(c), this.length = g;
      for (var x = d; x < g; x++) this.groupSizes[x] = 0;
    }
    for (var w = this.indexOfGroup(a + 1), m = 0, P = s.length; m < P; m++) this.tag.insertRule(w, s[m]) && (this.groupSizes[a]++, w++);
  }, o.clearGroup = function(a) {
    if (a < this.length) {
      var s = this.groupSizes[a], c = this.indexOfGroup(a), d = c + s;
      this.groupSizes[a] = 0;
      for (var g = c; g < d; g++) this.tag.deleteRule(c);
    }
  }, o.getGroup = function(a) {
    var s = "";
    if (a >= this.length || this.groupSizes[a] === 0) return s;
    for (var c = this.groupSizes[a], d = this.indexOfGroup(a), g = d + c, x = d; x < g; x++) s += this.tag.getRule(x) + `/*!sc*/
`;
    return s;
  }, r;
}(), on = /* @__PURE__ */ new Map(), un = /* @__PURE__ */ new Map(), Ir = 1, Qr = function(r) {
  if (on.has(r)) return on.get(r);
  for (; un.has(Ir); ) Ir++;
  var o = Ir++;
  return ke.env.NODE_ENV !== "production" && ((0 | o) < 0 || o > 1 << 30) && yr(16, "" + o), on.set(r, o), un.set(o, r), o;
}, ds = function(r) {
  return un.get(r);
}, hs = function(r, o) {
  o >= Ir && (Ir = o + 1), on.set(r, o), un.set(o, r);
}, ms = "style[" + mr + '][data-styled-version="5.3.11"]', gs = new RegExp("^" + mr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), vs = function(r, o, a) {
  for (var s, c = a.split(","), d = 0, g = c.length; d < g; d++) (s = c[d]) && r.registerName(o, s);
}, ys = function(r, o) {
  for (var a = (o.textContent || "").split(`/*!sc*/
`), s = [], c = 0, d = a.length; c < d; c++) {
    var g = a[c].trim();
    if (g) {
      var x = g.match(gs);
      if (x) {
        var w = 0 | parseInt(x[1], 10), m = x[2];
        w !== 0 && (hs(m, w), vs(r, m, x[3]), r.getTag().insertRules(w, s)), s.length = 0;
      } else s.push(g);
    }
  }
}, ws = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ui = function(r) {
  var o = document.head, a = r || o, s = document.createElement("style"), c = function(x) {
    for (var w = x.childNodes, m = w.length; m >= 0; m--) {
      var P = w[m];
      if (P && P.nodeType === 1 && P.hasAttribute(mr)) return P;
    }
  }(a), d = c !== void 0 ? c.nextSibling : null;
  s.setAttribute(mr, "active"), s.setAttribute("data-styled-version", "5.3.11");
  var g = ws();
  return g && s.setAttribute("nonce", g), a.insertBefore(s, d), s;
}, Ss = function() {
  function r(a) {
    var s = this.element = ui(a);
    s.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var d = document.styleSheets, g = 0, x = d.length; g < x; g++) {
        var w = d[g];
        if (w.ownerNode === c) return w;
      }
      yr(17);
    }(s), this.length = 0;
  }
  var o = r.prototype;
  return o.insertRule = function(a, s) {
    try {
      return this.sheet.insertRule(s, a), this.length++, !0;
    } catch {
      return !1;
    }
  }, o.deleteRule = function(a) {
    this.sheet.deleteRule(a), this.length--;
  }, o.getRule = function(a) {
    var s = this.sheet.cssRules[a];
    return s !== void 0 && typeof s.cssText == "string" ? s.cssText : "";
  }, r;
}(), xs = function() {
  function r(a) {
    var s = this.element = ui(a);
    this.nodes = s.childNodes, this.length = 0;
  }
  var o = r.prototype;
  return o.insertRule = function(a, s) {
    if (a <= this.length && a >= 0) {
      var c = document.createTextNode(s), d = this.nodes[a];
      return this.element.insertBefore(c, d || null), this.length++, !0;
    }
    return !1;
  }, o.deleteRule = function(a) {
    this.element.removeChild(this.nodes[a]), this.length--;
  }, o.getRule = function(a) {
    return a < this.length ? this.nodes[a].textContent : "";
  }, r;
}(), ks = function() {
  function r(a) {
    this.rules = [], this.length = 0;
  }
  var o = r.prototype;
  return o.insertRule = function(a, s) {
    return a <= this.length && (this.rules.splice(a, 0, s), this.length++, !0);
  }, o.deleteRule = function(a) {
    this.rules.splice(a, 1), this.length--;
  }, o.getRule = function(a) {
    return a < this.length ? this.rules[a] : "";
  }, r;
}(), Go = ro, bs = { isServer: !ro, useCSSOMInjection: !us }, ci = function() {
  function r(a, s, c) {
    a === void 0 && (a = Yt), s === void 0 && (s = {}), this.options = jt({}, bs, {}, a), this.gs = s, this.names = new Map(c), this.server = !!a.isServer, !this.server && ro && Go && (Go = !1, function(d) {
      for (var g = document.querySelectorAll(ms), x = 0, w = g.length; x < w; x++) {
        var m = g[x];
        m && m.getAttribute(mr) !== "active" && (ys(d, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  r.registerId = function(a) {
    return Qr(a);
  };
  var o = r.prototype;
  return o.reconstructWithOptions = function(a, s) {
    return s === void 0 && (s = !0), new r(jt({}, this.options, {}, a), this.gs, s && this.names || void 0);
  }, o.allocateGSInstance = function(a) {
    return this.gs[a] = (this.gs[a] || 0) + 1;
  }, o.getTag = function() {
    return this.tag || (this.tag = (c = (s = this.options).isServer, d = s.useCSSOMInjection, g = s.target, a = c ? new ks(g) : d ? new Ss(g) : new xs(g), new ps(a)));
    var a, s, c, d, g;
  }, o.hasNameForId = function(a, s) {
    return this.names.has(a) && this.names.get(a).has(s);
  }, o.registerName = function(a, s) {
    if (Qr(a), this.names.has(a)) this.names.get(a).add(s);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(s), this.names.set(a, c);
    }
  }, o.insertRules = function(a, s, c) {
    this.registerName(a, s), this.getTag().insertRules(Qr(a), c);
  }, o.clearNames = function(a) {
    this.names.has(a) && this.names.get(a).clear();
  }, o.clearRules = function(a) {
    this.getTag().clearGroup(Qr(a)), this.clearNames(a);
  }, o.clearTag = function() {
    this.tag = void 0;
  }, o.toString = function() {
    return function(a) {
      for (var s = a.getTag(), c = s.length, d = "", g = 0; g < c; g++) {
        var x = ds(g);
        if (x !== void 0) {
          var w = a.names.get(x), m = s.getGroup(g);
          if (w && m && w.size) {
            var P = mr + ".g" + g + '[id="' + x + '"]', I = "";
            w !== void 0 && w.forEach(function(q) {
              q.length > 0 && (I += q + ",");
            }), d += "" + m + P + '{content:"' + I + `"}/*!sc*/
`;
          }
        }
      }
      return d;
    }(this);
  }, r;
}(), Es = /(a)(d)/gi, qo = function(r) {
  return String.fromCharCode(r + (r > 25 ? 39 : 97));
};
function qn(r) {
  var o, a = "";
  for (o = Math.abs(r); o > 52; o = o / 52 | 0) a = qo(o % 52) + a;
  return (qo(o % 52) + a).replace(Es, "$1-$2");
}
var ur = function(r, o) {
  for (var a = o.length; a; ) r = 33 * r ^ o.charCodeAt(--a);
  return r;
}, fi = function(r) {
  return ur(5381, r);
};
function _s(r) {
  for (var o = 0; o < r.length; o += 1) {
    var a = r[o];
    if (Mr(a) && !to(a)) return !1;
  }
  return !0;
}
var Ts = fi("5.3.11"), Cs = function() {
  function r(o, a, s) {
    this.rules = o, this.staticRulesId = "", this.isStatic = ke.env.NODE_ENV === "production" && (s === void 0 || s.isStatic) && _s(o), this.componentId = a, this.baseHash = ur(Ts, a), this.baseStyle = s, ci.registerId(a);
  }
  return r.prototype.generateAndInjectStyles = function(o, a, s) {
    var c = this.componentId, d = [];
    if (this.baseStyle && d.push(this.baseStyle.generateAndInjectStyles(o, a, s)), this.isStatic && !s.hash) if (this.staticRulesId && a.hasNameForId(c, this.staticRulesId)) d.push(this.staticRulesId);
    else {
      var g = gr(this.rules, o, a, s).join(""), x = qn(ur(this.baseHash, g) >>> 0);
      if (!a.hasNameForId(c, x)) {
        var w = s(g, "." + x, void 0, c);
        a.insertRules(c, x, w);
      }
      d.push(x), this.staticRulesId = x;
    }
    else {
      for (var m = this.rules.length, P = ur(this.baseHash, s.hash), I = "", q = 0; q < m; q++) {
        var J = this.rules[q];
        if (typeof J == "string") I += J, ke.env.NODE_ENV !== "production" && (P = ur(P, J + q));
        else if (J) {
          var L = gr(J, o, a, s), Q = Array.isArray(L) ? L.join("") : L;
          P = ur(P, Q + q), I += Q;
        }
      }
      if (I) {
        var B = qn(P >>> 0);
        if (!a.hasNameForId(c, B)) {
          var U = s(I, "." + B, void 0, c);
          a.insertRules(c, B, U);
        }
        d.push(B);
      }
    }
    return d.join(" ");
  }, r;
}(), As = /^\s*\/\/.*$/gm, Rs = [":", "[", ".", "#"];
function Os(r) {
  var o, a, s, c, d = Yt, g = d.options, x = g === void 0 ? Yt : g, w = d.plugins, m = w === void 0 ? ln : w, P = new Za(x), I = [], q = /* @__PURE__ */ function(Q) {
    function B(U) {
      if (U) try {
        Q(U + "}");
      } catch {
      }
    }
    return function(U, W, ee, G, C, oe, he, Be, He, Ge) {
      switch (U) {
        case 1:
          if (He === 0 && W.charCodeAt(0) === 64) return Q(W + ";"), "";
          break;
        case 2:
          if (Be === 0) return W + "/*|*/";
          break;
        case 3:
          switch (Be) {
            case 102:
            case 112:
              return Q(ee[0] + W), "";
            default:
              return W + (Ge === 0 ? "/*|*/" : "");
          }
        case -2:
          W.split("/*|*/}").forEach(B);
      }
    };
  }(function(Q) {
    I.push(Q);
  }), J = function(Q, B, U) {
    return B === 0 && Rs.indexOf(U[a.length]) !== -1 || U.match(c) ? Q : "." + o;
  };
  function L(Q, B, U, W) {
    W === void 0 && (W = "&");
    var ee = Q.replace(As, ""), G = B && U ? U + " " + B + " { " + ee + " }" : ee;
    return o = W, a = B, s = new RegExp("\\" + a + "\\b", "g"), c = new RegExp("(\\" + a + "\\b){2,}"), P(U || !B ? "" : B, G);
  }
  return P.use([].concat(m, [function(Q, B, U) {
    Q === 2 && U.length && U[0].lastIndexOf(a) > 0 && (U[0] = U[0].replace(s, J));
  }, q, function(Q) {
    if (Q === -2) {
      var B = I;
      return I = [], B;
    }
  }])), L.hash = m.length ? m.reduce(function(Q, B) {
    return B.name || yr(15), ur(Q, B.name);
  }, 5381).toString() : "", L;
}
var pi = Ue.createContext();
pi.Consumer;
var di = Ue.createContext(), Ns = (di.Consumer, new ci()), Yn = Os();
function Ps() {
  return Zn(pi) || Ns;
}
function Is() {
  return Zn(di) || Yn;
}
var Ms = function() {
  function r(o, a) {
    var s = this;
    this.inject = function(c, d) {
      d === void 0 && (d = Yn);
      var g = s.name + d.hash;
      c.hasNameForId(s.id, g) || c.insertRules(s.id, g, d(s.rules, g, "@keyframes"));
    }, this.toString = function() {
      return yr(12, String(s.name));
    }, this.name = o, this.id = "sc-keyframes-" + o, this.rules = a;
  }
  return r.prototype.getName = function(o) {
    return o === void 0 && (o = Yn), this.name + o.hash;
  }, r;
}(), Fs = /([A-Z])/, Ds = /([A-Z])/g, Ls = /^ms-/, js = function(r) {
  return "-" + r.toLowerCase();
};
function Yo(r) {
  return Fs.test(r) ? r.replace(Ds, js).replace(Ls, "-ms-") : r;
}
var Xo = function(r) {
  return r == null || r === !1 || r === "";
};
function gr(r, o, a, s) {
  if (Array.isArray(r)) {
    for (var c, d = [], g = 0, x = r.length; g < x; g += 1) (c = gr(r[g], o, a, s)) !== "" && (Array.isArray(c) ? d.push.apply(d, c) : d.push(c));
    return d;
  }
  if (Xo(r)) return "";
  if (to(r)) return "." + r.styledComponentId;
  if (Mr(r)) {
    if (typeof (m = r) != "function" || m.prototype && m.prototype.isReactComponent || !o) return r;
    var w = r(o);
    return ke.env.NODE_ENV !== "production" && Jn.isElement(w) && console.warn(Gn(r) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), gr(w, o, a, s);
  }
  var m;
  return r instanceof Ms ? a ? (r.inject(a, s), r.getName(s)) : r : Vn(r) ? function P(I, q) {
    var J, L, Q = [];
    for (var B in I) I.hasOwnProperty(B) && !Xo(I[B]) && (Array.isArray(I[B]) && I[B].isCss || Mr(I[B]) ? Q.push(Yo(B) + ":", I[B], ";") : Vn(I[B]) ? Q.push.apply(Q, P(I[B], B)) : Q.push(Yo(B) + ": " + (J = B, (L = I[B]) == null || typeof L == "boolean" || L === "" ? "" : typeof L != "number" || L === 0 || J in Ka || J.startsWith("--") ? String(L).trim() : L + "px") + ";"));
    return q ? [q + " {"].concat(Q, ["}"]) : Q;
  }(r) : r.toString();
}
var Zo = function(r) {
  return Array.isArray(r) && (r.isCss = !0), r;
};
function zs(r) {
  for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) a[s - 1] = arguments[s];
  return Mr(r) || Vn(r) ? Zo(gr(Vo(ln, [r].concat(a)))) : a.length === 0 && r.length === 1 && typeof r[0] == "string" ? r : Zo(gr(Vo(r, a)));
}
var Ko = /invalid hook call/i, en = /* @__PURE__ */ new Set(), $s = function(r, o) {
  if (ke.env.NODE_ENV !== "production") {
    var a = "The component " + r + (o ? ' with the id of "' + o + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, s = console.error;
    try {
      var c = !0;
      console.error = function(d) {
        if (Ko.test(d)) c = !1, en.delete(a);
        else {
          for (var g = arguments.length, x = new Array(g > 1 ? g - 1 : 0), w = 1; w < g; w++) x[w - 1] = arguments[w];
          s.apply(void 0, [d].concat(x));
        }
      }, Ni(), c && !en.has(a) && (console.warn(a), en.add(a));
    } catch (d) {
      Ko.test(d.message) && en.delete(a);
    } finally {
      console.error = s;
    }
  }
}, Bs = function(r, o, a) {
  return a === void 0 && (a = Yt), r.theme !== a.theme && r.theme || o || a.theme;
}, Hs = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Us = /(^-|-$)/g;
function In(r) {
  return r.replace(Hs, "-").replace(Us, "");
}
var Ws = function(r) {
  return qn(fi(r) >>> 0);
};
function tn(r) {
  return typeof r == "string" && (ke.env.NODE_ENV === "production" || r.charAt(0) === r.charAt(0).toLowerCase());
}
var Xn = function(r) {
  return typeof r == "function" || typeof r == "object" && r !== null && !Array.isArray(r);
}, Vs = function(r) {
  return r !== "__proto__" && r !== "constructor" && r !== "prototype";
};
function Gs(r, o, a) {
  var s = r[a];
  Xn(o) && Xn(s) ? hi(s, o) : r[a] = o;
}
function hi(r) {
  for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) a[s - 1] = arguments[s];
  for (var c = 0, d = a; c < d.length; c++) {
    var g = d[c];
    if (Xn(g)) for (var x in g) Vs(x) && Gs(r, g[x], x);
  }
  return r;
}
var mi = Ue.createContext();
mi.Consumer;
var Mn = {};
function gi(r, o, a) {
  var s = to(r), c = !tn(r), d = o.attrs, g = d === void 0 ? ln : d, x = o.componentId, w = x === void 0 ? function(W, ee) {
    var G = typeof W != "string" ? "sc" : In(W);
    Mn[G] = (Mn[G] || 0) + 1;
    var C = G + "-" + Ws("5.3.11" + G + Mn[G]);
    return ee ? ee + "-" + C : C;
  }(o.displayName, o.parentComponentId) : x, m = o.displayName, P = m === void 0 ? function(W) {
    return tn(W) ? "styled." + W : "Styled(" + Gn(W) + ")";
  }(r) : m, I = o.displayName && o.componentId ? In(o.displayName) + "-" + o.componentId : o.componentId || w, q = s && r.attrs ? Array.prototype.concat(r.attrs, g).filter(Boolean) : g, J = o.shouldForwardProp;
  s && r.shouldForwardProp && (J = o.shouldForwardProp ? function(W, ee, G) {
    return r.shouldForwardProp(W, ee, G) && o.shouldForwardProp(W, ee, G);
  } : r.shouldForwardProp);
  var L, Q = new Cs(a, I, s ? r.componentStyle : void 0), B = Q.isStatic && g.length === 0, U = function(W, ee) {
    return function(G, C, oe, he) {
      var Be = G.attrs, He = G.componentStyle, Ge = G.defaultProps, nt = G.foldedComponentIds, be = G.shouldForwardProp, Te = G.styledComponentId, ze = G.target, Pe = function($, b, V) {
        $ === void 0 && ($ = Yt);
        var R = jt({}, b, { theme: $ }), ce = {};
        return V.forEach(function(ne) {
          var re, X, fe, me = ne;
          for (re in Mr(me) && (me = me(R)), me) R[re] = ce[re] = re === "className" ? (X = ce[re], fe = me[re], X && fe ? X + " " + fe : X || fe) : me[re];
        }), [R, ce];
      }(Bs(C, Zn(mi), Ge) || Yt, C, Be), ot = Pe[0], We = Pe[1], De = function($, b, V, R) {
        var ce = Ps(), ne = Is(), re = b ? $.generateAndInjectStyles(Yt, ce, ne) : $.generateAndInjectStyles(V, ce, ne);
        return ke.env.NODE_ENV !== "production" && !b && R && R(re), re;
      }(He, he, ot, ke.env.NODE_ENV !== "production" ? G.warnTooManyClasses : void 0), Le = oe, Je = We.$as || C.$as || We.as || C.as || ze, Xe = tn(Je), z = We !== C ? jt({}, C, {}, We) : C, N = {};
      for (var j in z) j[0] !== "$" && j !== "as" && (j === "forwardedAs" ? N.as = z[j] : (be ? be(j, Bo, Je) : !Xe || Bo(j)) && (N[j] = z[j]));
      return C.style && We.style !== C.style && (N.style = jt({}, C.style, {}, We.style)), N.className = Array.prototype.concat(nt, Te, De !== Te ? De : null, C.className, We.className).filter(Boolean).join(" "), N.ref = Le, Pi(Je, N);
    }(L, W, ee, B);
  };
  return U.displayName = P, (L = Ue.forwardRef(U)).attrs = q, L.componentStyle = Q, L.displayName = P, L.shouldForwardProp = J, L.foldedComponentIds = s ? Array.prototype.concat(r.foldedComponentIds, r.styledComponentId) : ln, L.styledComponentId = I, L.target = s ? r.target : r, L.withComponent = function(W) {
    var ee = o.componentId, G = function(oe, he) {
      if (oe == null) return {};
      var Be, He, Ge = {}, nt = Object.keys(oe);
      for (He = 0; He < nt.length; He++) Be = nt[He], he.indexOf(Be) >= 0 || (Ge[Be] = oe[Be]);
      return Ge;
    }(o, ["componentId"]), C = ee && ee + "-" + (tn(W) ? W : In(Gn(W)));
    return gi(W, jt({}, G, { attrs: q, componentId: C }), a);
  }, Object.defineProperty(L, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(W) {
    this._foldedDefaultProps = s ? hi({}, r.defaultProps, W) : W;
  } }), ke.env.NODE_ENV !== "production" && ($s(P, I), L.warnTooManyClasses = /* @__PURE__ */ function(W, ee) {
    var G = {}, C = !1;
    return function(oe) {
      if (!C && (G[oe] = !0, Object.keys(G).length >= 200)) {
        var he = ee ? ' with the id of "' + ee + '"' : "";
        console.warn("Over 200 classes were generated for component " + W + he + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), C = !0, G = {};
      }
    };
  }(P, I)), Object.defineProperty(L, "toString", { value: function() {
    return "." + L.styledComponentId;
  } }), c && ls(L, r, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), L;
}
var cn = function(r) {
  return function o(a, s, c) {
    if (c === void 0 && (c = Yt), !Jn.isValidElementType(s)) return yr(1, String(s));
    var d = function() {
      return a(s, c, zs.apply(void 0, arguments));
    };
    return d.withConfig = function(g) {
      return o(a, s, jt({}, c, {}, g));
    }, d.attrs = function(g) {
      return o(a, s, jt({}, c, { attrs: Array.prototype.concat(c.attrs, g).filter(Boolean) }));
    }, d;
  }(gi, r);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(r) {
  cn[r] = cn(r);
});
ke.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), ke.env.NODE_ENV !== "production" && ke.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const qs = cn.div`
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
`, Ys = cn.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`, vi = ({
  type: r,
  articleUrl: o,
  publicationDate: a,
  title: s,
  body: c,
  authorEmail: d,
  authorName: g,
  authorPhone: x,
  authorTitle: w,
  breadcrumbs: m,
  calendarUrl: P,
  eventLocation: I,
  eventTime: q,
  headerImageUrl: J,
  registrationUrl: L,
  zoomUrl: Q
}) => {
  const B = cr("col", "col-12", {
    "col-lg-8": r === "event" && (L || Q || P)
  }), U = () => L ? /* @__PURE__ */ D.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ D.jsx(Pr, { color: "maroon", href: L, label: "Register" }) }) : /* @__PURE__ */ D.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ D.jsx(Pr, { color: "maroon", href: Q, label: "Attend on Zoom" }) }), W = () => /* @__PURE__ */ D.jsx("div", { className: "row pb-2", "data-testid": "author-info", children: /* @__PURE__ */ D.jsxs("div", { className: "col col-12", children: [
    /* @__PURE__ */ D.jsx("div", { className: "author highlight-gold", children: g }),
    w && /* @__PURE__ */ D.jsx("div", { className: "author-title", children: w }),
    d && /* @__PURE__ */ D.jsxs("div", { className: "author-contact", children: [
      /* @__PURE__ */ D.jsx("span", { className: "icon-bg", children: /* @__PURE__ */ D.jsx("i", { className: "fas fa-envelope" }) }),
      /* @__PURE__ */ D.jsx("a", { href: `mailto: ${d}`, children: d })
    ] }),
    x && /* @__PURE__ */ D.jsxs("div", { className: "author-contact", children: [
      /* @__PURE__ */ D.jsx("span", { className: "icon-bg", children: /* @__PURE__ */ D.jsx("i", { className: "fas fa-phone" }) }),
      /* @__PURE__ */ D.jsx("a", { href: `tel: ${x}`, children: x })
    ] })
  ] }) }), ee = () => /* @__PURE__ */ D.jsxs(
    Ys,
    {
      className: "row row-spaced mt-3 pt-6 pb-2 event-info",
      "data-testid": "event-info",
      children: [
        /* @__PURE__ */ D.jsxs("div", { className: "col col-lg-4 col-md-6 col-12", children: [
          /* @__PURE__ */ D.jsx("h4", { children: "For more information contact:" }),
          /* @__PURE__ */ D.jsx("div", { className: "event-author", children: g }),
          /* @__PURE__ */ D.jsx("div", { className: "event-author-title", children: w }),
          (d || x) && /* @__PURE__ */ D.jsxs("div", { className: "event-author-info", children: [
            d && /* @__PURE__ */ D.jsx("div", { children: /* @__PURE__ */ D.jsx("a", { href: `mailto: ${d}`, children: d }) }),
            x && /* @__PURE__ */ D.jsx("div", { children: /* @__PURE__ */ D.jsx("a", { href: `tel: ${x}`, children: x }) })
          ] })
        ] }),
        /* @__PURE__ */ D.jsxs("div", { className: "col col-lg-4 col-md-6 col-12", children: [
          /* @__PURE__ */ D.jsx("h4", { children: "Share this event:" }),
          /* @__PURE__ */ D.jsxs("div", { className: "article-social-media", children: [
            /* @__PURE__ */ D.jsx(Co, { url: o, quote: s, children: /* @__PURE__ */ D.jsx(
              To,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ D.jsx(No, { url: o, quote: s, children: /* @__PURE__ */ D.jsx(
              Oo,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ D.jsx(Zi, { url: d, quote: s, children: /* @__PURE__ */ D.jsx(
              $i,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ D.jsx(Ro, { url: o, quote: s, children: /* @__PURE__ */ D.jsx(
              Ao,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) })
          ] })
        ] })
      ]
    }
  ), G = () => /* @__PURE__ */ D.jsxs("div", { className: "col col-12 col-lg-4 col-md-6", children: [
    /* @__PURE__ */ D.jsxs("h4", { children: [
      /* @__PURE__ */ D.jsx("i", { className: "fas fa-map-marker-alt" }),
      "Location:"
    ] }),
    /* @__PURE__ */ D.jsx("div", { dangerouslySetInnerHTML: Pn(I) }),
    L && Q && /* @__PURE__ */ D.jsx("a", { href: Q, children: "Attend on Zoom" })
  ] }), C = (oe) => /* @__PURE__ */ D.jsx(
    Bn,
    {
      active: oe.active,
      tag: "li",
      className: "breadcrumb-item",
      children: /* @__PURE__ */ D.jsx(Bn, { tag: "a", href: oe.url, children: oe.title })
    },
    oe.title
  );
  return /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    J && r !== "event" && /* @__PURE__ */ D.jsx(
      "div",
      {
        "data-testid": "uds-hero",
        className: "uds-hero uds-hero-md",
        style: {
          backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${J})`
        }
      }
    ),
    /* @__PURE__ */ D.jsxs(qs, { className: `container ${r}-container wrapper-container`, children: [
      m && /* @__PURE__ */ D.jsx("div", { className: "row pt-4", "data-testid": "breadcrumbs", children: /* @__PURE__ */ D.jsx("div", { className: "col col-12", children: /* @__PURE__ */ D.jsx(ni, { listClassName: "breadcrumb", children: m.map((oe) => C(oe)) }) }) }),
      /* @__PURE__ */ D.jsxs("div", { className: "row pb-2 pt-3", children: [
        /* @__PURE__ */ D.jsx("div", { className: B, children: /* @__PURE__ */ D.jsx("h2", { "data-testid": "title", children: s }) }),
        r === "event" && /* @__PURE__ */ D.jsxs("div", { className: "col col-lg-4 col-xs-12", children: [
          (L || Q) && U(),
          P && /* @__PURE__ */ D.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ D.jsx(
            Pr,
            {
              color: "gray",
              size: "small",
              href: P,
              label: "Add to calendar"
            }
          ) })
        ] })
      ] }),
      r === "event" ? /* @__PURE__ */ D.jsxs("div", { className: "row row-spaced pt-3 mb-2", children: [
        q && /* @__PURE__ */ D.jsxs("div", { className: "col col-lg-4 col-md-6 col-sm-12", children: [
          /* @__PURE__ */ D.jsxs("h4", { children: [
            /* @__PURE__ */ D.jsx("i", { className: "far fa-calendar" }),
            "Date and time:"
          ] }),
          /* @__PURE__ */ D.jsx(
            "div",
            {
              dangerouslySetInnerHTML: Pn(q)
            }
          )
        ] }),
        (L && Q || I) && G()
      ] }) : /* @__PURE__ */ D.jsx("div", { className: "row row-spaced pt-2", children: /* @__PURE__ */ D.jsxs("div", { className: "col col-12", children: [
        /* @__PURE__ */ D.jsxs("div", { className: "article-social-media", children: [
          /* @__PURE__ */ D.jsx(Co, { url: o, quote: s, children: /* @__PURE__ */ D.jsx(
            To,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) }),
          /* @__PURE__ */ D.jsx(No, { url: o, quote: s, children: /* @__PURE__ */ D.jsx(
            Oo,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) }),
          /* @__PURE__ */ D.jsx(Ro, { url: o, quote: s, children: /* @__PURE__ */ D.jsx(
            Ao,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) })
        ] }),
        a && /* @__PURE__ */ D.jsx("i", { className: "news-date", children: a })
      ] }) }),
      /* @__PURE__ */ D.jsx("div", { className: "row", children: /* @__PURE__ */ D.jsx(
        "div",
        {
          className: "col col-12",
          dangerouslySetInnerHTML: Pn(c),
          "data-testid": "body"
        }
      ) }),
      r === "news" && W(),
      r === "event" && ee()
    ] })
  ] });
};
vi.propTypes = {
  /**
   * Type of article
   */
  type: T.oneOf(["event", "news"]),
  /**
   * This is the relative or absolute url to the full-page article
   */
  articleUrl: T.string.isRequired,
  /**
   * Date for the article
   */
  publicationDate: T.string.isRequired,
  /**
   * Title
   */
  title: T.string.isRequired,
  /**
   * Body content for the article
   */
  body: T.string.isRequired,
  /**
   * Article author email
   */
  authorEmail: T.string,
  /**
   * Article author full name
   */
  authorName: T.string.isRequired,
  /**
   * Article author phone number
   */
  authorPhone: T.string,
  /**
   * Article author title
   */
  authorTitle: T.string,
  /**
   * Breadcrumbs array
   */
  breadcrumbs: T.arrayOf(
    T.shape({
      title: T.string,
      url: T.string,
      active: T.bool
    })
  ),
  /**
   * URL for an "add to calendar" button
   */
  calendarUrl: T.string,
  /**
   * Article image
   */
  headerImageUrl: T.string,
  /**
   * Event location
   */
  eventLocation: T.string,
  /**
   * Event time
   */
  eventTime: T.string,
  /**
   * URL for a registation button
   */
  registrationUrl: T.string,
  /**
   * URL for a Zoom button
   */
  zoomUrl: T.string
};
vi.defaultProps = {
  type: "news",
  authorEmail: void 0,
  authorPhone: void 0,
  authorTitle: void 0,
  breadcrumbs: void 0,
  calendarUrl: void 0,
  headerImageUrl: void 0,
  eventLocation: void 0,
  eventTime: void 0,
  registrationUrl: void 0,
  zoomUrl: void 0
};
export {
  vi as Article
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
