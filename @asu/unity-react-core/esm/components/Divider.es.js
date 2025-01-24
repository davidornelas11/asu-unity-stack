import v from "react";
var m = { exports: {} }, o = {};
var f;
function R() {
  if (f) return o;
  f = 1;
  var t = v, a = Symbol.for("react.element"), d = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, x = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(n, r, p) {
    var e, i = {}, u = null, _ = null;
    p !== void 0 && (u = "" + p), r.key !== void 0 && (u = "" + r.key), r.ref !== void 0 && (_ = r.ref);
    for (e in r) l.call(r, e) && !y.hasOwnProperty(e) && (i[e] = r[e]);
    if (n && n.defaultProps) for (e in r = n.defaultProps, r) i[e] === void 0 && (i[e] = r[e]);
    return { $$typeof: a, type: n, key: u, ref: _, props: i, _owner: x.current };
  }
  return o.Fragment = d, o.jsx = s, o.jsxs = s, o;
}
m.exports = R();
var c = m.exports, O = /* @__PURE__ */ ((t) => (t.COPY = "copy", t))(O || {});
const E = ({ type: t }) => t == "copy" ? /* @__PURE__ */ c.jsx("hr", { className: "copy-divider" }) : /* @__PURE__ */ c.jsx("hr", {});
export {
  E as Divider,
  O as DividerType
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
