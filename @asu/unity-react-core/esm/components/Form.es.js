import x from "react";
function O(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var y = { exports: {} }, i = {};
var _;
function R() {
  if (_) return i;
  _ = 1;
  var e = x, f = Symbol.for("react.element"), s = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, p = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(o, n, l) {
    var u, a = {}, m = null, d = null;
    l !== void 0 && (m = "" + l), n.key !== void 0 && (m = "" + n.key), n.ref !== void 0 && (d = n.ref);
    for (u in n) c.call(n, u) && !r.hasOwnProperty(u) && (a[u] = n[u]);
    if (o && o.defaultProps) for (u in n = o.defaultProps, n) a[u] === void 0 && (a[u] = n[u]);
    return { $$typeof: f, type: o, key: m, ref: d, props: a, _owner: p.current };
  }
  return i.Fragment = s, i.jsx = t, i.jsxs = t, i;
}
y.exports = R();
var j = y.exports, v = { exports: {} };
(function(e) {
  (function() {
    var f = {}.hasOwnProperty;
    function s() {
      for (var r = "", t = 0; t < arguments.length; t++) {
        var o = arguments[t];
        o && (r = p(r, c(o)));
      }
      return r;
    }
    function c(r) {
      if (typeof r == "string" || typeof r == "number")
        return r;
      if (typeof r != "object")
        return "";
      if (Array.isArray(r))
        return s.apply(null, r);
      if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]"))
        return r.toString();
      var t = "";
      for (var o in r)
        f.call(r, o) && r[o] && (t = p(t, o));
      return t;
    }
    function p(r, t) {
      return t ? r ? r + " " + t : r + t : r;
    }
    e.exports ? (s.default = s, e.exports = s) : window.classNames = s;
  })();
})(v);
var S = v.exports;
const h = /* @__PURE__ */ O(S), b = [
  "",
  "uds-form-white",
  "uds-form-gray1",
  "uds-form-gray2",
  "uds-form-gray7"
], w = ({
  background: e,
  children: f,
  ...s
}) => /* @__PURE__ */ j.jsx("form", { className: h("uds-form", e), ...s, children: f });
export {
  w as Form,
  b as formBackground
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
