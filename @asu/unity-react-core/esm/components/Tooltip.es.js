import x, { useState as v, useRef as h } from "react";
var R = { exports: {} }, t = {};
var m;
function j() {
  if (m) return t;
  m = 1;
  var o = x, l = Symbol.for("react.element"), p = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, u = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(i, e, _) {
    var r, s = {}, d = null, f = null;
    _ !== void 0 && (d = "" + _), e.key !== void 0 && (d = "" + e.key), e.ref !== void 0 && (f = e.ref);
    for (r in e) n.call(e, r) && !y.hasOwnProperty(r) && (s[r] = e[r]);
    if (i && i.defaultProps) for (r in e = i.defaultProps, e) s[r] === void 0 && (s[r] = e[r]);
    return { $$typeof: l, type: i, key: d, ref: f, props: s, _owner: u.current };
  }
  return t.Fragment = p, t.jsx = c, t.jsxs = c, t;
}
R.exports = j();
var a = R.exports;
let E = 0;
const b = ({
  title: o,
  content: l,
  triggerElement: p
}) => {
  const [n] = v(`tooltip-${E++}`), u = h(null);
  return /* @__PURE__ */ a.jsxs("span", { className: "uds-tooltip-container", children: [
    x.cloneElement(p, {
      ref: u,
      "aria-describedby": n,
      tabindex: 0
    }),
    /* @__PURE__ */ a.jsxs("div", { role: "tooltip", className: "uds-tooltip-description", id: n, children: [
      o && /* @__PURE__ */ a.jsx("span", { className: "uds-tooltip-heading", children: o }),
      l
    ] })
  ] });
};
export {
  b as Tooltip
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
