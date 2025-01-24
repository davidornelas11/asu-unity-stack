import h from "react";
function j(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var v = { exports: {} }, c = {};
var b;
function O() {
  if (b) return c;
  b = 1;
  var t = h, u = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, f = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r = { key: !0, ref: !0, __self: !0, __source: !0 };
  function e(n, o, m) {
    var i, l = {}, d = null, _ = null;
    m !== void 0 && (d = "" + m), o.key !== void 0 && (d = "" + o.key), o.ref !== void 0 && (_ = o.ref);
    for (i in o) a.call(o, i) && !r.hasOwnProperty(i) && (l[i] = o[i]);
    if (n && n.defaultProps) for (i in o = n.defaultProps, o) l[i] === void 0 && (l[i] = o[i]);
    return { $$typeof: u, type: n, key: d, ref: _, props: l, _owner: f.current };
  }
  return c.Fragment = s, c.jsx = e, c.jsxs = e, c;
}
v.exports = O();
var p = v.exports, x = { exports: {} };
(function(t) {
  (function() {
    var u = {}.hasOwnProperty;
    function s() {
      for (var r = "", e = 0; e < arguments.length; e++) {
        var n = arguments[e];
        n && (r = f(r, a(n)));
      }
      return r;
    }
    function a(r) {
      if (typeof r == "string" || typeof r == "number")
        return r;
      if (typeof r != "object")
        return "";
      if (Array.isArray(r))
        return s.apply(null, r);
      if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]"))
        return r.toString();
      var e = "";
      for (var n in r)
        u.call(r, n) && r[n] && (e = f(e, n));
      return e;
    }
    function f(r, e) {
      return e ? r ? r + " " + e : r + e : r;
    }
    t.exports ? (s.default = s, t.exports = s) : window.classNames = s;
  })();
})(x);
var R = x.exports;
const y = /* @__PURE__ */ j(R), S = [
  "",
  "bg-white",
  "bg-gray-1",
  "bg-gray-2",
  "bg-gray-7"
], E = ({
  linkItems: t = [],
  backgroundColor: u = "",
  ...s
}) => t.length === 0 ? null : /* @__PURE__ */ p.jsx("nav", { className: "uds-content-align", "aria-label": "breadcrumbs", ...s, children: /* @__PURE__ */ p.jsx("ol", { className: y("breadcrumb", u), children: t.map((a) => /* @__PURE__ */ p.jsx(
  "li",
  {
    "aria-current": a.active ? "page" : void 0,
    className: y("breadcrumb-item", { active: a.active }),
    children: /* @__PURE__ */ p.jsx("a", { href: a.href, children: a.label })
  },
  a.href
)) }) });
export {
  E as Breadcrumbs,
  S as breadcrumbBgColors
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
