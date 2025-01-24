import x from "react";
var u = { exports: {} }, t = {};
var r;
function k() {
  if (r) return t;
  r = 1;
  var m = x, p = Symbol.for("react.element"), g = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, f = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(d, i, s) {
    var e, n = {}, o = null, c = null;
    s !== void 0 && (o = "" + s), i.key !== void 0 && (o = "" + i.key), i.ref !== void 0 && (c = i.ref);
    for (e in i) h.call(i, e) && !v.hasOwnProperty(e) && (n[e] = i[e]);
    if (d && d.defaultProps) for (e in i = d.defaultProps, i) n[e] === void 0 && (n[e] = i[e]);
    return { $$typeof: p, type: d, key: o, ref: c, props: n, _owner: f.current };
  }
  return t.Fragment = g, t.jsx = l, t.jsxs = l, t;
}
u.exports = k();
var a = u.exports;
const R = () => /* @__PURE__ */ a.jsxs("form", { className: "uds-form", children: [
  /* @__PURE__ */ a.jsxs("fieldset", { children: [
    /* @__PURE__ */ a.jsx("legend", { children: "A Group of Radios" }),
    /* @__PURE__ */ a.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "form-check-input",
          type: "radio",
          name: "exampleRadios",
          id: "exampleRadios1",
          value: "option1",
          checked: !0,
          "data-ga-input": "radio button",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "Default radio"
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "form-check-label", htmlFor: "exampleRadios1", children: "Default radio" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "form-check-input",
          type: "radio",
          name: "exampleRadios",
          id: "exampleRadios2",
          value: "option2",
          "data-ga-input": "radio button",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "Second default radio"
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "form-check-label", htmlFor: "exampleRadios2", children: "Second default radio" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "form-check-input",
          type: "radio",
          name: "exampleRadios",
          id: "exampleRadios3",
          value: "option3",
          "data-ga-input": "radio button",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "Third default radio"
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "form-check-label", htmlFor: "exampleRadios3", children: "Third default radio" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "form-check disabled", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "form-check-input",
          type: "radio",
          name: "exampleRadios",
          id: "exampleRadios4",
          value: "option4",
          disabled: !0,
          "data-ga-input": "radio button",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "Disabled radio"
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "form-check-label", htmlFor: "exampleRadios4", children: "Disabled radio" })
    ] })
  ] }),
  /* @__PURE__ */ a.jsxs("fieldset", { children: [
    /* @__PURE__ */ a.jsx("legend", { children: "A Group of Invalid Radios" }),
    /* @__PURE__ */ a.jsxs("small", { id: "myInvalidRadiosMsg", className: "invalid-feedback is-invalid", children: [
      /* @__PURE__ */ a.jsx("span", { title: "Alert", className: "fa fa-icon fa-exclamation-triangle" }),
      "Form error message"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "form-check-input",
          type: "radio",
          name: "invalidRadios",
          "aria-describedby": "myInvalidRadiosMsg",
          id: "invalidRadios1",
          value: "option1",
          checked: !0,
          "data-ga-input": "radio button",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "Default radio"
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "form-check-label", htmlFor: "invalidRadios1", children: "Default radio" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "form-check-input",
          type: "radio",
          name: "invalidRadios",
          "aria-describedby": "myInvalidRadiosMsg",
          id: "invalidRadios2",
          value: "option2",
          "data-ga-input": "radio button",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "Second default radio"
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "form-check-label", htmlFor: "invalidRadios2", children: "Second default radio" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "form-check-input",
          type: "radio",
          name: "invalidRadios",
          "aria-describedby": "myInvalidRadiosMsg",
          id: "invalidRadios3",
          value: "option3",
          "data-ga-input": "radio button",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "Third default radio"
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "form-check-label", htmlFor: "invalidRadios3", children: "Third default radio" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "form-check disabled", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "form-check-input",
          type: "radio",
          name: "invalidRadios",
          "aria-describedby": "myInvalidRadiosMsg",
          id: "invalidRadios4",
          value: "option4",
          disabled: !0,
          "data-ga-input": "radio button",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "Disabled radio"
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "form-check-label", htmlFor: "invalidRadios4", children: "Disabled radio" })
    ] })
  ] }),
  /* @__PURE__ */ a.jsxs("fieldset", { children: [
    /* @__PURE__ */ a.jsx("legend", { children: "A Group of Valid Radios" }),
    /* @__PURE__ */ a.jsxs("small", { id: "myValidRadiosMsg", className: "valid-feedback is-valid", children: [
      /* @__PURE__ */ a.jsx("span", { title: "Alert", className: "fa fa-icon fa-check-circle" }),
      "Success message"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "form-check-input",
          type: "radio",
          name: "validRadios",
          "aria-describedby": "myValidRadiosMsg",
          id: "validRadios1",
          value: "option1",
          checked: !0,
          "data-ga-input": "radio button",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "Default radio"
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "form-check-label", htmlFor: "validRadios1", children: "Default radio" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "form-check-input",
          type: "radio",
          name: "validRadios",
          "aria-describedby": "myValidRadiosMsg",
          id: "validRadios2",
          value: "option2",
          "data-ga-input": "radio button",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "Second default radio"
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "form-check-label", htmlFor: "validRadios2", children: "Second default radio" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "form-check", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "form-check-input",
          type: "radio",
          name: "validRadios",
          "aria-describedby": "myValidRadiosMsg",
          id: "validRadios3",
          value: "option3",
          "data-ga-input": "radio button",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "Third default radio"
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "form-check-label", htmlFor: "validRadios3", children: "Third default radio" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "form-check disabled", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "form-check-input",
          type: "radio",
          name: "validRadios",
          "aria-describedby": "myValidRadiosMsg",
          id: "validRadios4",
          value: "option4",
          disabled: !0,
          "data-ga-input": "radio button",
          "data-ga-input-name": "onclick",
          "data-ga-input-event": "select",
          "data-ga-input-action": "click",
          "data-ga-input-region": "main content",
          "data-ga-input-section": "Disabled radio"
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "form-check-label", htmlFor: "validRadios4", children: "Disabled radio" })
    ] })
  ] })
] });
export {
  R as Radios
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
