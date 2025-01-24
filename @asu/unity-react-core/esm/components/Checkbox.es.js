import g from "react";
var u = { exports: {} }, n = {};
var r;
function f() {
  if (r) return n;
  r = 1;
  var h = g, m = Symbol.for("react.element"), p = Symbol.for("react.fragment"), k = Object.prototype.hasOwnProperty, x = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(c, a, s) {
    var t, i = {}, l = null, d = null;
    s !== void 0 && (l = "" + s), a.key !== void 0 && (l = "" + a.key), a.ref !== void 0 && (d = a.ref);
    for (t in a) k.call(a, t) && !b.hasOwnProperty(t) && (i[t] = a[t]);
    if (c && c.defaultProps) for (t in a = c.defaultProps, a) i[t] === void 0 && (i[t] = a[t]);
    return { $$typeof: m, type: c, key: l, ref: d, props: i, _owner: x.current };
  }
  return n.Fragment = p, n.jsx = o, n.jsxs = o, n;
}
u.exports = f();
var e = u.exports;
const j = () => /* @__PURE__ */ e.jsxs("form", { className: "uds-form", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "form-check", children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        className: "form-check-input",
        type: "checkbox",
        id: "loneCheckbox1",
        value: "option1",
        "data-ga-input": "checkbox",
        "data-ga-input-name": "onclick",
        "data-ga-input-event": "select",
        "data-ga-input-action": "click",
        "data-ga-input-region": "main content",
        "data-ga-input-section": "I like checkboxes"
      }
    ),
    /* @__PURE__ */ e.jsx("label", { className: "form-check-label", htmlFor: "loneCheckbox1", children: "I like checkboxes" })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "form-check", children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        className: "form-check-input",
        type: "checkbox",
        id: "loneCheckbox2",
        value: "option1",
        "data-ga-input": "checkbox",
        "data-ga-input-name": "onclick",
        "data-ga-input-event": "select",
        "data-ga-input-action": "click",
        "data-ga-input-region": "main content",
        "data-ga-input-section": "Multi-line content Multi-line content Multi-line content..."
      }
    ),
    /* @__PURE__ */ e.jsx("label", { className: "form-check-label", htmlFor: "loneCheckbox2", children: "Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content Multi-line content" })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "form-check", children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        className: "form-check-input",
        type: "checkbox",
        "aria-describedby": "myValidCheckMsg",
        id: "validLoneCheckbox",
        value: "option1",
        checked: !0,
        "data-ga-input": "checkbox",
        "data-ga-input-name": "onclick",
        "data-ga-input-event": "select",
        "data-ga-input-action": "click",
        "data-ga-input-region": "main content",
        "data-ga-input-section": "I accept"
      }
    ),
    /* @__PURE__ */ e.jsx("label", { className: "form-check-label", htmlFor: "validLoneCheckbox", children: "I accept" }),
    /* @__PURE__ */ e.jsxs("small", { id: "myValidCheckMsg", className: "valid-feedback is-valid", children: [
      /* @__PURE__ */ e.jsx("span", { title: "Alert", className: "fa fa-icon fa-check-circle" }),
      "Success message"
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "form-check", children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        className: "form-check-input",
        type: "checkbox",
        "aria-describedby": "myInvalidCheckMsg",
        id: "invalidLoneCheckbox",
        value: "option1",
        "data-ga-input": "checkbox",
        "data-ga-input-name": "onclick",
        "data-ga-input-event": "select",
        "data-ga-input-action": "click",
        "data-ga-input-region": "main content",
        "data-ga-input-section": "I also accept"
      }
    ),
    /* @__PURE__ */ e.jsx("label", { className: "form-check-label", htmlFor: "invalidLoneCheckbox", children: "I also accept" }),
    /* @__PURE__ */ e.jsxs("small", { id: "myInvalidCheckMsg", className: "invalid-feedback is-invalid", children: [
      /* @__PURE__ */ e.jsx("span", { title: "Alert", className: "fa fa-icon fa-exclamation-triangle" }),
      "Form error message"
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("fieldset", { children: [
    /* @__PURE__ */ e.jsx("legend", { children: "A Group of Checkboxes" }),
    /* @__PURE__ */ e.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          className: "form-check-input",
          type: "checkbox",
          id: "checkbox1",
          value: "option1",
          "data-ga-input": "checkbox",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "1"
        }
      ),
      /* @__PURE__ */ e.jsx("label", { className: "form-check-label", htmlFor: "checkbox1", children: "1" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          className: "form-check-input",
          type: "checkbox",
          id: "checkbox2",
          value: "option2",
          checked: !0,
          "data-ga-input": "checkbox",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "2"
        }
      ),
      /* @__PURE__ */ e.jsx("label", { className: "form-check-label", htmlFor: "checkbox2", children: "2" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          className: "form-check-input",
          type: "checkbox",
          id: "checkbox3",
          value: "option3",
          disabled: !0,
          "data-ga-input": "checkbox",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "3"
        }
      ),
      /* @__PURE__ */ e.jsx("label", { className: "form-check-label", htmlFor: "checkbox3", children: "3 (disabled)" })
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("fieldset", { children: [
    /* @__PURE__ */ e.jsx("legend", { children: "A Group of Valid Checkboxes" }),
    /* @__PURE__ */ e.jsxs("small", { id: "myValidCheckboxMsg", className: "valid-feedback is-valid", children: [
      /* @__PURE__ */ e.jsx("span", { title: "Alert", className: "fa fa-icon fa-check-circle" }),
      "Success message"
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          className: "form-check-input",
          type: "checkbox",
          "aria-describedby": "myValidCheckboxMsg",
          id: "validCheckbox1",
          value: "option1",
          "data-ga-input": "checkbox",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "1"
        }
      ),
      /* @__PURE__ */ e.jsx("label", { className: "form-check-label", htmlFor: "validCheckbox1", children: "1" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          className: "form-check-input",
          type: "checkbox",
          "aria-describedby": "myValidCheckboxMsg",
          id: "validCheckbox2",
          value: "option2",
          checked: !0,
          "data-ga-input": "checkbox",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "2"
        }
      ),
      /* @__PURE__ */ e.jsx("label", { className: "form-check-label", htmlFor: "validCheckbox2", children: "2" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          className: "form-check-input",
          type: "checkbox",
          "aria-describedby": "myValidCheckboxMsg",
          id: "validCheckbox3",
          value: "option3",
          disabled: !0,
          "data-ga-input": "checkbox",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "3"
        }
      ),
      /* @__PURE__ */ e.jsx("label", { className: "form-check-label", htmlFor: "validCheckbox3", children: "3 (disabled)" })
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("fieldset", { children: [
    /* @__PURE__ */ e.jsx("legend", { children: "A Group of Invalid Checkboxes" }),
    /* @__PURE__ */ e.jsxs("small", { id: "myInvalidCheckboxMsg", className: "invalid-feedback is-invalid", children: [
      /* @__PURE__ */ e.jsx("span", { title: "Alert", className: "fa fa-icon fa-exclamation-triangle" }),
      "Form error message"
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          className: "form-check-input",
          type: "checkbox",
          "aria-describedby": "myInvalidCheckboxMsg",
          id: "invalidCheckbox1",
          value: "option1",
          "data-ga-input": "checkbox",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "1"
        }
      ),
      /* @__PURE__ */ e.jsx("label", { className: "form-check-label", htmlFor: "invalidCheckbox1", children: "1" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          className: "form-check-input",
          type: "checkbox",
          "aria-describedby": "myInvalidCheckboxMsg",
          id: "invalidCheckbox2",
          value: "option2",
          checked: !0,
          "data-ga-input": "checkbox",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "2"
        }
      ),
      /* @__PURE__ */ e.jsx("label", { className: "form-check-label", htmlFor: "invalidCheckbox2", children: "2" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          className: "form-check-input",
          type: "checkbox",
          "aria-describedby": "myInvalidCheckboxMsg",
          id: "invalidCheckbox3",
          value: "option3",
          disabled: !0,
          "data-ga-input": "checkbox",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "3"
        }
      ),
      /* @__PURE__ */ e.jsx("label", { className: "form-check-label", htmlFor: "invalidCheckbox3", children: "3 (disabled)" })
    ] })
  ] })
] });
export {
  j as Checkboxes
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
