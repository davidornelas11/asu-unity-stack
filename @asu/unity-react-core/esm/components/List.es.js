import h from "react";
function y(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var v = { exports: {} }, m = {};
var x;
function S() {
  if (x) return m;
  x = 1;
  var r = h, o = Symbol.for("react.element"), s = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(n, u, l) {
    var i, R = {}, D = null, _ = null;
    l !== void 0 && (D = "" + l), u.key !== void 0 && (D = "" + u.key), u.ref !== void 0 && (_ = u.ref);
    for (i in u) d.call(u, i) && !e.hasOwnProperty(i) && (R[i] = u[i]);
    if (n && n.defaultProps) for (i in u = n.defaultProps, u) R[i] === void 0 && (R[i] = u[i]);
    return { $$typeof: o, type: n, key: D, ref: _, props: R, _owner: a.current };
  }
  return m.Fragment = s, m.jsx = t, m.jsxs = t, m;
}
v.exports = S();
var p = v.exports, N = { exports: {} };
(function(r) {
  (function() {
    var o = {}.hasOwnProperty;
    function s() {
      for (var e = "", t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        n && (e = a(e, d(n)));
      }
      return e;
    }
    function d(e) {
      if (typeof e == "string" || typeof e == "number")
        return e;
      if (typeof e != "object")
        return "";
      if (Array.isArray(e))
        return s.apply(null, e);
      if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]"))
        return e.toString();
      var t = "";
      for (var n in e)
        o.call(e, n) && e[n] && (t = a(t, n));
      return t;
    }
    function a(e, t) {
      return t ? e ? e + " " + t : e + t : e;
    }
    r.exports ? (s.default = s, r.exports = s) : window.classNames = s;
  })();
})(N);
var P = N.exports;
const U = /* @__PURE__ */ y(P);
var f = /* @__PURE__ */ ((r) => (r.UNORDERED = "unordered", r.ORDERED = "ordered", r.ICON = "icon", r.STEP = "step", r.DISPLAY = "display", r))(f || {}), E = /* @__PURE__ */ ((r) => (r.UL = "ul", r.OL = "ol", r))(E || {}), c = /* @__PURE__ */ ((r) => (r.NONE = "none", r.LIGHT = "light", r.MEDIUM = "medium", r.DARK = "dark", r))(c || {}), O = /* @__PURE__ */ ((r) => (r.DEFAULT = "default", r.PRIMARY = "primary", r.SECONDARY = "secondary", r))(O || {});
const j = (r) => {
  switch (r) {
    case E.OL:
    case f.ORDERED:
    case f.STEP:
      return E.OL;
    default:
      return E.UL;
  }
}, A = ({
  listType: r,
  content: o,
  icon: s,
  nestedType: d,
  nestedItems: a
}) => {
  const [e, ...t] = Array.isArray(o) ? o : [o];
  let n = null;
  if (a != null && a.length) {
    const u = d || r, l = j(u);
    n = /* @__PURE__ */ p.jsx(l, { children: a.map((i, R) => /* @__PURE__ */ p.jsx(A, { listType: u, ...i }, R)) });
  }
  return /* @__PURE__ */ p.jsxs("li", { children: [
    s && /* @__PURE__ */ p.jsx("span", { className: `fa-li ${s == null ? void 0 : s[0]} fa-${s == null ? void 0 : s[1]}` }),
    e,
    " ",
    t.map((u, l) => [/* @__PURE__ */ p.jsx("br", {}, `br-${l}`), /* @__PURE__ */ p.jsx("span", { children: u }, l)]),
    n
  ] });
}, w = ({
  listType: r = f.UNORDERED,
  backgroundColor: o = c.NONE,
  listItemStyleColor: s = O.DEFAULT,
  items: d
}) => {
  const a = j(r);
  let e = "maroon", t = "maroon";
  o === c.DARK && (e = "gold", t = "gold"), r === f.STEP && (e = "uds-steplist-maroon", t = "uds-steplist-gold", o === c.DARK && (e = "uds-steplist-gold"));
  const n = U({
    "uds-list": r === f.UNORDERED || r === f.ORDERED,
    "uds-list fa-ul": r === f.ICON,
    "uds-list uds-steplist": r === f.STEP,
    "uds-list uds-display-list": r === f.DISPLAY,
    "light-smokemode": o === c.LIGHT,
    smokemode: o === c.MEDIUM,
    darkmode: o === c.DARK,
    [`${e}`]: s === O.PRIMARY,
    // Intentional space ` ${secondaryColor}` for when primary and secondary colors are the same
    [` ${t}`]: s === O.SECONDARY
  });
  return /* @__PURE__ */ p.jsx(a, { className: n || null, children: d.map((u, l) => /* @__PURE__ */ p.jsx(A, { listType: r, ...u }, l)) });
};
export {
  w as List
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
