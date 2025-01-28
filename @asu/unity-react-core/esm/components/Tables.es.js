import v, { useEffect as S } from "react";
var y = { exports: {} }, m = {};
var j;
function w() {
  if (j) return m;
  j = 1;
  var c = v, o = Symbol.for("react.element"), n = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, r = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(a, s, x) {
    var l, d = {}, h = null, f = null;
    x !== void 0 && (h = "" + x), s.key !== void 0 && (h = "" + s.key), s.ref !== void 0 && (f = s.ref);
    for (l in s) t.call(s, l) && !i.hasOwnProperty(l) && (d[l] = s[l]);
    if (a && a.defaultProps) for (l in s = a.defaultProps, s) d[l] === void 0 && (d[l] = s[l]);
    return { $$typeof: o, type: a, key: h, ref: f, props: d, _owner: r.current };
  }
  return m.Fragment = n, m.jsx = p, m.jsxs = p, m;
}
y.exports = w();
var e = y.exports;
function _() {
  function c() {
    const t = ".uds-table-fixed-wrapper", r = ".uds-table.uds-table-fixed table", i = ".scroll-control.previous";
    document.querySelectorAll(t).forEach((a, s) => {
      const x = a.querySelector(r);
      x.setAttribute("id", `uds-table-${s}`);
      const l = x.querySelector("tbody tr > *"), d = a.querySelector(i);
      d.style.left = `${l.offsetWidth}px`;
    });
  }
  function o() {
    const t = ".uds-table-fixed", r = ".uds-table-fixed-wrapper", i = ".scroll-control.previous", p = ".scroll-control.next";
    document.querySelectorAll(r).forEach((s, x) => {
      const l = s.querySelector(t), d = s.querySelector(i), h = s.querySelector(p);
      ["click", "focus"].forEach((f) => {
        d.addEventListener(f, function() {
          l.scrollLeft -= 100;
        }), h.addEventListener(f, function() {
          l.scrollLeft += 100;
        });
      });
    });
  }
  function n(t, r) {
    let i;
    return (...p) => {
      clearTimeout(i), i = setTimeout(() => {
        t.apply(this, p);
      }, r);
    };
  }
  c(), o(), window.addEventListener("resize", function() {
    n(c, 100)();
  });
}
const u = (c, o, n) => Math.round(c * (o + n)).toLocaleString("en-US"), b = ({ columns: c }) => {
  let o = 2024;
  const n = new Array(c).fill(null).map((t, r) => o - r).reverse();
  return /* @__PURE__ */ e.jsxs("table", { children: [
    /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsxs("tr", { children: [
      /* @__PURE__ */ e.jsx("th", { scope: "col", children: "Enrollment" }),
      n.map((t, r) => /* @__PURE__ */ e.jsxs("th", { scope: "col", children: [
        "Fall ",
        t
      ] }, r))
    ] }) }),
    /* @__PURE__ */ e.jsxs("tbody", { children: [
      /* @__PURE__ */ e.jsxs("tr", { children: [
        /* @__PURE__ */ e.jsxs("th", { scope: "row", children: [
          /* @__PURE__ */ e.jsxs("p", { children: [
            "use of ",
            /* @__PURE__ */ e.jsx("code", { children: "<a>" }),
            " in cells",
            " ",
            /* @__PURE__ */ e.jsx("a", { href: "#", children: "example link" })
          ] }),
          "Metropolitan campus population"
        ] }),
        n.map((t, r) => /* @__PURE__ */ e.jsx("td", { children: u(t, 35, r) }, r))
      ] }),
      /* @__PURE__ */ e.jsxs("tr", { children: [
        /* @__PURE__ */ e.jsx("th", { scope: "row", className: "indent", children: "Tempe" }),
        n.map((t, r) => /* @__PURE__ */ e.jsx("td", { children: u(t, 25, r) }, r))
      ] }),
      /* @__PURE__ */ e.jsxs("tr", { children: [
        /* @__PURE__ */ e.jsx("th", { scope: "row", className: "indent", children: "Downtown" }),
        n.map((t, r) => /* @__PURE__ */ e.jsx("td", { children: u(t, 7, r) }, r))
      ] }),
      /* @__PURE__ */ e.jsxs("tr", { children: [
        /* @__PURE__ */ e.jsx("th", { scope: "row", className: "indent", children: "Polytechnic" }),
        n.map((t, r) => /* @__PURE__ */ e.jsx("td", { children: u(t, 1.6, r / 2) }, r))
      ] }),
      /* @__PURE__ */ e.jsxs("tr", { children: [
        /* @__PURE__ */ e.jsx("th", { scope: "row", className: "indent", children: "West" }),
        n.map((t, r) => /* @__PURE__ */ e.jsx("td", { children: u(t, 0.8, r / 4) }, r))
      ] }),
      /* @__PURE__ */ e.jsxs("tr", { children: [
        /* @__PURE__ */ e.jsx("th", { scope: "row", className: "indent", children: "Thunderbird" }),
        n.map((t, r) => /* @__PURE__ */ e.jsx("td", { children: u(t, 0.1, r / 10) }, r))
      ] }),
      /* @__PURE__ */ e.jsxs("tr", { children: [
        /* @__PURE__ */ e.jsx("th", { scope: "row", className: "normal", children: "Skysong Campus" }),
        n.map((t, r) => /* @__PURE__ */ e.jsx("td", { children: u(t, 5, r / 5) }, r))
      ] }),
      /* @__PURE__ */ e.jsxs("tr", { children: [
        /* @__PURE__ */ e.jsx("th", { scope: "row", children: "Total" }),
        n.map((t, r) => /* @__PURE__ */ e.jsx("td", { children: u(t, 50, r) }, r))
      ] })
    ] })
  ] });
}, E = ({ columns: c, fixed: o = !1 }) => (S(() => {
  o && _();
}, []), o ? /* @__PURE__ */ e.jsxs("div", { className: "uds-table-fixed-wrapper", children: [
  /* @__PURE__ */ e.jsx("div", { className: "scroll-control previous", children: /* @__PURE__ */ e.jsxs("button", { type: "button", className: "btn btn-circle btn-circle-alt-gray", children: [
    /* @__PURE__ */ e.jsx("i", { className: "fas fa-chevron-left" }),
    /* @__PURE__ */ e.jsx("span", { className: "visually-hidden", children: "Previous" })
  ] }) }),
  /* @__PURE__ */ e.jsx("div", { className: "scroll-control next", children: /* @__PURE__ */ e.jsxs("button", { type: "button", className: "btn btn-circle btn-circle-alt-gray", children: [
    /* @__PURE__ */ e.jsx("i", { className: "fas fa-chevron-right" }),
    /* @__PURE__ */ e.jsx("span", { className: "visually-hidden", children: "Next" })
  ] }) }),
  /* @__PURE__ */ e.jsx("div", { className: "uds-table uds-table-fixed", tabIndex: 0, children: /* @__PURE__ */ e.jsx(b, { columns: c }) })
] }) : /* @__PURE__ */ e.jsx("div", { className: "uds-table", tabIndex: 0, children: /* @__PURE__ */ e.jsx(b, { columns: c }) }));
export {
  E as Table
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
