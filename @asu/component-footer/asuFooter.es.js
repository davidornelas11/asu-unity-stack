import yt, { useState as Yr, useEffect as qr } from "react";
import Ur from "react-dom";
function Qr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wa, oa = Ur;
Wa = oa.createRoot, oa.hydrateRoot;
var Ga = { exports: {} }, Ge = {};
var ia;
function Jr() {
  if (ia) return Ge;
  ia = 1;
  var e = yt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, f) {
    var m, y = {}, b = null, T = null;
    f !== void 0 && (b = "" + f), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (T = l.ref);
    for (m in l) a.call(l, m) && !A.hasOwnProperty(m) && (y[m] = l[m]);
    if (s && s.defaultProps) for (m in l = s.defaultProps, l) y[m] === void 0 && (y[m] = l[m]);
    return { $$typeof: t, type: s, key: b, ref: T, props: y, _owner: r.current };
  }
  return Ge.Fragment = n, Ge.jsx = i, Ge.jsxs = i, Ge;
}
Ga.exports = Jr();
var d = Ga.exports, Ya = { exports: {} }, Wt, sa;
function Kr() {
  if (sa) return Wt;
  sa = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Wt = e, Wt;
}
var Gt, la;
function _r() {
  if (la) return Gt;
  la = 1;
  var e = Kr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Gt = function() {
    function a(i, s, l, f, m, y) {
      if (y !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    a.isRequired = a;
    function r() {
      return a;
    }
    var A = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: r,
      element: a,
      elementType: a,
      instanceOf: r,
      node: a,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return A.PropTypes = A, A;
  }, Gt;
}
Ya.exports = _r()();
var W = Ya.exports;
const p = /* @__PURE__ */ Qr(W);
function $r({
  packageName: e = "",
  component: t = "",
  type: n = "",
  configuration: a = {}
}) {
  if (!e || !t) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[e] = {
    component: t,
    type: n,
    configuration: a
  };
}
const eA = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
};
var tA = { env: { NODE_ENV: "production" } };
const ca = () => {
};
let On = {}, qa = {}, Ua = null, Qa = {
  mark: ca,
  measure: ca
};
try {
  typeof window < "u" && (On = window), typeof document < "u" && (qa = document), typeof MutationObserver < "u" && (Ua = MutationObserver), typeof performance < "u" && (Qa = performance);
} catch {
}
const {
  userAgent: fa = ""
} = On.navigator || {}, de = On, P = qa, ua = Ua, lt = Qa;
de.document;
const se = !!P.documentElement && !!P.head && typeof P.addEventListener == "function" && typeof P.createElement == "function", Ja = ~fa.indexOf("MSIE") || ~fa.indexOf("Trident/");
var N = "classic", Ka = "duotone", G = "sharp", Y = "sharp-duotone", nA = [N, Ka, G, Y], aA = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds"
  }
}, da = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, rA = ["kit"], AA = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, oA = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, iA = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
}, sA = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds"
  }
}, lA = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds"
  }
}, cA = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, fA = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid"
  }
}, uA = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    duotone: "fad",
    brands: "fab"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds"
  }
}, _a = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fad: "duotone",
    "fa-duotone": "duotone",
    fab: "brands",
    "fa-brands": "brands"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid"
  }
}, dA = ["solid", "regular", "light", "thin", "duotone", "brands"], $a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mA = $a.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Qe = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, pA = [...Object.keys(cA), ...dA, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Qe.GROUP, Qe.SWAP_OPACITY, Qe.PRIMARY, Qe.SECONDARY].concat($a.map((e) => "".concat(e, "x"))).concat(mA.map((e) => "w-".concat(e))), vA = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, gA = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, bA = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, ma = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const oe = "___FONT_AWESOME___", rn = 16, er = "fa", tr = "svg-inline--fa", Ne = "data-fa-i2svg", An = "data-fa-pseudo-element", hA = "data-fa-pseudo-element-pending", En = "data-prefix", In = "data-icon", pa = "fontawesome-i2svg", yA = "async", xA = ["HTML", "HEAD", "STYLE", "SCRIPT"], nr = (() => {
  try {
    return tA.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), ar = [N, G, Y];
function tt(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[N];
    }
  });
}
const rr = {
  ..._a
};
rr[N] = {
  ..._a[N],
  ...da.kit,
  ...da["kit-duotone"]
};
const Te = tt(rr), on = {
  ...uA
};
on[N] = {
  ...on[N],
  ...ma.kit,
  ...ma["kit-duotone"]
};
const $e = tt(on), sn = {
  ...fA
};
sn[N] = {
  ...sn[N],
  ...bA.kit
};
const Pe = tt(sn), ln = {
  ...lA
};
ln[N] = {
  ...ln[N],
  ...gA.kit
};
const TA = tt(ln), PA = AA, Ar = "fa-layers-text", NA = oA, OA = {
  ...aA
};
tt(OA);
const EA = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Yt = Qe, Le = /* @__PURE__ */ new Set();
Object.keys($e[N]).map(Le.add.bind(Le));
Object.keys($e[G]).map(Le.add.bind(Le));
Object.keys($e[Y]).map(Le.add.bind(Le));
const IA = [...rA, ...pA], Ke = de.FontAwesomeConfig || {};
function CA(e) {
  var t = P.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function DA(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
P && typeof P.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, a] = t;
  const r = DA(CA(n));
  r != null && (Ke[a] = r);
});
const or = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: er,
  replacementClass: tr,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Ke.familyPrefix && (Ke.cssPrefix = Ke.familyPrefix);
const Be = {
  ...or,
  ...Ke
};
Be.autoReplaceSvg || (Be.observeMutations = !1);
const v = {};
Object.keys(or).forEach((e) => {
  Object.defineProperty(v, e, {
    enumerable: !0,
    set: function(t) {
      Be[e] = t, _e.forEach((n) => n(v));
    },
    get: function() {
      return Be[e];
    }
  });
});
Object.defineProperty(v, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Be.cssPrefix = e, _e.forEach((t) => t(v));
  },
  get: function() {
    return Be.cssPrefix;
  }
});
de.FontAwesomeConfig = v;
const _e = [];
function wA(e) {
  return _e.push(e), () => {
    _e.splice(_e.indexOf(e), 1);
  };
}
const le = rn, te = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function RA(e) {
  if (!e || !se)
    return;
  const t = P.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = P.head.childNodes;
  let a = null;
  for (let r = n.length - 1; r > -1; r--) {
    const A = n[r], i = (A.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(i) > -1 && (a = A);
  }
  return P.head.insertBefore(t, a), e;
}
const zA = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function et() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += zA[Math.random() * 62 | 0];
  return t;
}
function Ve(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Cn(e) {
  return e.classList ? Ve(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function ir(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function XA(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(ir(e[n]), '" '), "").trim();
}
function xt(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Dn(e) {
  return e.size !== te.size || e.x !== te.x || e.y !== te.y || e.rotate !== te.rotate || e.flipX || e.flipY;
}
function kA(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: a
  } = e;
  const r = {
    transform: "translate(".concat(n / 2, " 256)")
  }, A = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(A, " ").concat(i, " ").concat(s)
  }, f = {
    transform: "translate(".concat(a / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: l,
    path: f
  };
}
function jA(e) {
  let {
    transform: t,
    width: n = rn,
    height: a = rn,
    startCentered: r = !1
  } = e, A = "";
  return r && Ja ? A += "translate(".concat(t.x / le - n / 2, "em, ").concat(t.y / le - a / 2, "em) ") : r ? A += "translate(calc(-50% + ".concat(t.x / le, "em), calc(-50% + ").concat(t.y / le, "em)) ") : A += "translate(".concat(t.x / le, "em, ").concat(t.y / le, "em) "), A += "scale(".concat(t.size / le * (t.flipX ? -1 : 1), ", ").concat(t.size / le * (t.flipY ? -1 : 1), ") "), A += "rotate(".concat(t.rotate, "deg) "), A;
}
var FA = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function sr() {
  const e = er, t = tr, n = v.cssPrefix, a = v.replacementClass;
  let r = FA;
  if (n !== e || a !== t) {
    const A = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    r = r.replace(A, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(s, ".".concat(a));
  }
  return r;
}
let va = !1;
function qt() {
  v.autoAddCss && !va && (RA(sr()), va = !0);
}
var MA = {
  mixout() {
    return {
      dom: {
        css: sr,
        insertCss: qt
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        qt();
      },
      beforeI2svg() {
        qt();
      }
    };
  }
};
const ie = de || {};
ie[oe] || (ie[oe] = {});
ie[oe].styles || (ie[oe].styles = {});
ie[oe].hooks || (ie[oe].hooks = {});
ie[oe].shims || (ie[oe].shims = []);
var ne = ie[oe];
const lr = [], cr = function() {
  P.removeEventListener("DOMContentLoaded", cr), vt = 1, lr.map((e) => e());
};
let vt = !1;
se && (vt = (P.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(P.readyState), vt || P.addEventListener("DOMContentLoaded", cr));
function HA(e) {
  se && (vt ? setTimeout(e, 0) : lr.push(e));
}
function nt(e) {
  const {
    tag: t,
    attributes: n = {},
    children: a = []
  } = e;
  return typeof e == "string" ? ir(e) : "<".concat(t, " ").concat(XA(n), ">").concat(a.map(nt).join(""), "</").concat(t, ">");
}
function ga(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Ut = function(t, n, a, r) {
  var A = Object.keys(t), i = A.length, s = n, l, f, m;
  for (a === void 0 ? (l = 1, m = t[A[0]]) : (l = 0, m = a); l < i; l++)
    f = A[l], m = s(m, t[f], f, t);
  return m;
};
function LA(e) {
  const t = [];
  let n = 0;
  const a = e.length;
  for (; n < a; ) {
    const r = e.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < a) {
      const A = e.charCodeAt(n++);
      (A & 64512) == 56320 ? t.push(((r & 1023) << 10) + (A & 1023) + 65536) : (t.push(r), n--);
    } else
      t.push(r);
  }
  return t;
}
function cn(e) {
  const t = LA(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function BA(e, t) {
  const n = e.length;
  let a = e.charCodeAt(t), r;
  return a >= 55296 && a <= 56319 && n > t + 1 && (r = e.charCodeAt(t + 1), r >= 56320 && r <= 57343) ? (a - 55296) * 1024 + r - 56320 + 65536 : a;
}
function ba(e) {
  return Object.keys(e).reduce((t, n) => {
    const a = e[n];
    return !!a.icon ? t[a.iconName] = a.icon : t[n] = a, t;
  }, {});
}
function fn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: a = !1
  } = n, r = ba(t);
  typeof ne.hooks.addPack == "function" && !a ? ne.hooks.addPack(e, ba(t)) : ne.styles[e] = {
    ...ne.styles[e] || {},
    ...r
  }, e === "fas" && fn("fa", t);
}
const {
  styles: xe,
  shims: VA
} = ne, SA = {
  [N]: Object.values(Pe[N]),
  [G]: Object.values(Pe[G]),
  [Y]: Object.values(Pe[Y])
};
let wn = null, fr = {}, ur = {}, dr = {}, mr = {}, pr = {};
const ZA = {
  [N]: Object.keys(Te[N]),
  [G]: Object.keys(Te[G]),
  [Y]: Object.keys(Te[Y])
};
function WA(e) {
  return ~IA.indexOf(e);
}
function GA(e, t) {
  const n = t.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === e && r !== "" && !WA(r) ? r : null;
}
const vr = () => {
  const e = (a) => Ut(xe, (r, A, i) => (r[i] = Ut(A, a, {}), r), {});
  fr = e((a, r, A) => (r[3] && (a[r[3]] = A), r[2] && r[2].filter((s) => typeof s == "number").forEach((s) => {
    a[s.toString(16)] = A;
  }), a)), ur = e((a, r, A) => (a[A] = A, r[2] && r[2].filter((s) => typeof s == "string").forEach((s) => {
    a[s] = A;
  }), a)), pr = e((a, r, A) => {
    const i = r[2];
    return a[A] = A, i.forEach((s) => {
      a[s] = A;
    }), a;
  });
  const t = "far" in xe || v.autoFetchSvg, n = Ut(VA, (a, r) => {
    const A = r[0];
    let i = r[1];
    const s = r[2];
    return i === "far" && !t && (i = "fas"), typeof A == "string" && (a.names[A] = {
      prefix: i,
      iconName: s
    }), typeof A == "number" && (a.unicodes[A.toString(16)] = {
      prefix: i,
      iconName: s
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  dr = n.names, mr = n.unicodes, wn = Tt(v.styleDefault, {
    family: v.familyDefault
  });
};
wA((e) => {
  wn = Tt(e.styleDefault, {
    family: v.familyDefault
  });
});
vr();
function Rn(e, t) {
  return (fr[e] || {})[t];
}
function YA(e, t) {
  return (ur[e] || {})[t];
}
function ue(e, t) {
  return (pr[e] || {})[t];
}
function gr(e) {
  return dr[e] || {
    prefix: null,
    iconName: null
  };
}
function qA(e) {
  const t = mr[e], n = Rn("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function me() {
  return wn;
}
const zn = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Tt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = N
  } = t, a = Te[n][e], r = $e[n][e] || $e[n][a], A = e in ne.styles ? e : null;
  return r || A || null;
}
const UA = {
  [N]: Object.keys(Pe[N]),
  [G]: Object.keys(Pe[G]),
  [Y]: Object.keys(Pe[Y])
};
function Pt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, a = {
    [N]: "".concat(v.cssPrefix, "-").concat(N),
    [G]: "".concat(v.cssPrefix, "-").concat(G),
    [Y]: "".concat(v.cssPrefix, "-").concat(Y)
  };
  let r = null, A = N;
  const i = nA.filter((l) => l !== Ka);
  i.forEach((l) => {
    (e.includes(a[l]) || e.some((f) => UA[l].includes(f))) && (A = l);
  });
  const s = e.reduce((l, f) => {
    const m = GA(v.cssPrefix, f);
    if (xe[f] ? (f = SA[A].includes(f) ? TA[A][f] : f, r = f, l.prefix = f) : ZA[A].indexOf(f) > -1 ? (r = f, l.prefix = Tt(f, {
      family: A
    })) : m ? l.iconName = m : f !== v.replacementClass && !i.some((y) => f === a[y]) && l.rest.push(f), !n && l.prefix && l.iconName) {
      const y = r === "fa" ? gr(l.iconName) : {}, b = ue(l.prefix, l.iconName);
      y.prefix && (r = null), l.iconName = y.iconName || b || l.iconName, l.prefix = y.prefix || l.prefix, l.prefix === "far" && !xe.far && xe.fas && !v.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, zn());
  return (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"), !s.prefix && A === G && (xe.fass || v.autoFetchSvg) && (s.prefix = "fass", s.iconName = ue(s.prefix, s.iconName) || s.iconName), !s.prefix && A === Y && (xe.fasds || v.autoFetchSvg) && (s.prefix = "fasds", s.iconName = ue(s.prefix, s.iconName) || s.iconName), (s.prefix === "fa" || r === "fa") && (s.prefix = me() || "fas"), s;
}
class QA {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
      n[a] = arguments[a];
    const r = n.reduce(this._pullDefinitions, {});
    Object.keys(r).forEach((A) => {
      this.definitions[A] = {
        ...this.definitions[A] || {},
        ...r[A]
      }, fn(A, r[A]);
      const i = Pe[N][A];
      i && fn(i, r[A]), vr();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const a = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(a).map((r) => {
      const {
        prefix: A,
        iconName: i,
        icon: s
      } = a[r], l = s[2];
      t[A] || (t[A] = {}), l.length > 0 && l.forEach((f) => {
        typeof f == "string" && (t[A][f] = s);
      }), t[A][i] = s;
    }), t;
  }
}
let ha = [], Fe = {};
const He = {}, JA = Object.keys(He);
function KA(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return ha = e, Fe = {}, Object.keys(He).forEach((a) => {
    JA.indexOf(a) === -1 && delete He[a];
  }), ha.forEach((a) => {
    const r = a.mixout ? a.mixout() : {};
    if (Object.keys(r).forEach((A) => {
      typeof r[A] == "function" && (n[A] = r[A]), typeof r[A] == "object" && Object.keys(r[A]).forEach((i) => {
        n[A] || (n[A] = {}), n[A][i] = r[A][i];
      });
    }), a.hooks) {
      const A = a.hooks();
      Object.keys(A).forEach((i) => {
        Fe[i] || (Fe[i] = []), Fe[i].push(A[i]);
      });
    }
    a.provides && a.provides(He);
  }), n;
}
function un(e, t) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  return (Fe[e] || []).forEach((i) => {
    t = i.apply(null, [t, ...a]);
  }), t;
}
function Oe(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  (Fe[e] || []).forEach((A) => {
    A.apply(null, n);
  });
}
function pe() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return He[e] ? He[e].apply(null, t) : void 0;
}
function dn(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || me();
  if (t)
    return t = ue(n, t) || t, ga(br.definitions, n, t) || ga(ne.styles, n, t);
}
const br = new QA(), _A = () => {
  v.autoReplaceSvg = !1, v.observeMutations = !1, Oe("noAuto");
}, $A = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return se ? (Oe("beforeI2svg", e), pe("pseudoElements2svg", e), pe("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    v.autoReplaceSvg === !1 && (v.autoReplaceSvg = !0), v.observeMutations = !0, HA(() => {
      to({
        autoReplaceSvgRoot: t
      }), Oe("watch", e);
    });
  }
}, eo = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: ue(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Tt(e[0]);
      return {
        prefix: n,
        iconName: ue(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(v.cssPrefix, "-")) > -1 || e.match(PA))) {
      const t = Pt(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || me(),
        iconName: ue(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = me();
      return {
        prefix: t,
        iconName: ue(t, e) || e
      };
    }
  }
}, q = {
  noAuto: _A,
  config: v,
  dom: $A,
  parse: eo,
  library: br,
  findIconDefinition: dn,
  toHtml: nt
}, to = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = P
  } = e;
  (Object.keys(ne.styles).length > 0 || v.autoFetchSvg) && se && v.autoReplaceSvg && q.dom.i2svg({
    node: t
  });
};
function Nt(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => nt(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!se) return;
      const n = P.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function no(e) {
  let {
    children: t,
    main: n,
    mask: a,
    attributes: r,
    styles: A,
    transform: i
  } = e;
  if (Dn(i) && n.found && !a.found) {
    const {
      width: s,
      height: l
    } = n, f = {
      x: s / l / 2,
      y: 0.5
    };
    r.style = xt({
      ...A,
      "transform-origin": "".concat(f.x + i.x / 16, "em ").concat(f.y + i.y / 16, "em")
    });
  }
  return [{
    tag: "svg",
    attributes: r,
    children: t
  }];
}
function ao(e) {
  let {
    prefix: t,
    iconName: n,
    children: a,
    attributes: r,
    symbol: A
  } = e;
  const i = A === !0 ? "".concat(t, "-").concat(v.cssPrefix, "-").concat(n) : A;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: {
        ...r,
        id: i
      },
      children: a
    }]
  }];
}
function Xn(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: a,
    iconName: r,
    transform: A,
    symbol: i,
    title: s,
    maskId: l,
    titleId: f,
    extra: m,
    watchable: y = !1
  } = e, {
    width: b,
    height: T
  } = n.found ? n : t, z = a === "fak", Z = [v.replacementClass, r ? "".concat(v.cssPrefix, "-").concat(r) : ""].filter((B) => m.classes.indexOf(B) === -1).filter((B) => B !== "" || !!B).concat(m.classes).join(" ");
  let O = {
    children: [],
    attributes: {
      ...m.attributes,
      "data-prefix": a,
      "data-icon": r,
      class: Z,
      role: m.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(b, " ").concat(T)
    }
  };
  const D = z && !~m.classes.indexOf("fa-fw") ? {
    width: "".concat(b / T * 16 * 0.0625, "em")
  } : {};
  y && (O.attributes[Ne] = ""), s && (O.children.push({
    tag: "title",
    attributes: {
      id: O.attributes["aria-labelledby"] || "title-".concat(f || et())
    },
    children: [s]
  }), delete O.attributes.title);
  const E = {
    ...O,
    prefix: a,
    iconName: r,
    main: t,
    mask: n,
    maskId: l,
    transform: A,
    symbol: i,
    styles: {
      ...D,
      ...m.styles
    }
  }, {
    children: w,
    attributes: I
  } = n.found && t.found ? pe("generateAbstractMask", E) || {
    children: [],
    attributes: {}
  } : pe("generateAbstractIcon", E) || {
    children: [],
    attributes: {}
  };
  return E.children = w, E.attributes = I, i ? ao(E) : no(E);
}
function ya(e) {
  const {
    content: t,
    width: n,
    height: a,
    transform: r,
    title: A,
    extra: i,
    watchable: s = !1
  } = e, l = {
    ...i.attributes,
    ...A ? {
      title: A
    } : {},
    class: i.classes.join(" ")
  };
  s && (l[Ne] = "");
  const f = {
    ...i.styles
  };
  Dn(r) && (f.transform = jA({
    transform: r,
    startCentered: !0,
    width: n,
    height: a
  }), f["-webkit-transform"] = f.transform);
  const m = xt(f);
  m.length > 0 && (l.style = m);
  const y = [];
  return y.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), A && y.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [A]
  }), y;
}
function ro(e) {
  const {
    content: t,
    title: n,
    extra: a
  } = e, r = {
    ...a.attributes,
    ...n ? {
      title: n
    } : {},
    class: a.classes.join(" ")
  }, A = xt(a.styles);
  A.length > 0 && (r.style = A);
  const i = [];
  return i.push({
    tag: "span",
    attributes: r,
    children: [t]
  }), n && i.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), i;
}
const {
  styles: Qt
} = ne;
function mn(e) {
  const t = e[0], n = e[1], [a] = e.slice(4);
  let r = null;
  return Array.isArray(a) ? r = {
    tag: "g",
    attributes: {
      class: "".concat(v.cssPrefix, "-").concat(Yt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(v.cssPrefix, "-").concat(Yt.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(v.cssPrefix, "-").concat(Yt.PRIMARY),
        fill: "currentColor",
        d: a[1]
      }
    }]
  } : r = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: a
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: r
  };
}
const Ao = {
  found: !1,
  width: 512,
  height: 512
};
function oo(e, t) {
  !nr && !v.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function pn(e, t) {
  let n = t;
  return t === "fa" && v.styleDefault !== null && (t = me()), new Promise((a, r) => {
    if (n === "fa") {
      const A = gr(e) || {};
      e = A.iconName || e, t = A.prefix || t;
    }
    if (e && t && Qt[t] && Qt[t][e]) {
      const A = Qt[t][e];
      return a(mn(A));
    }
    oo(e, t), a({
      ...Ao,
      icon: v.showMissingIcons && e ? pe("missingIconAbstract") || {} : {}
    });
  });
}
const xa = () => {
}, vn = v.measurePerformance && lt && lt.mark && lt.measure ? lt : {
  mark: xa,
  measure: xa
}, Je = 'FA "6.6.0"', io = (e) => (vn.mark("".concat(Je, " ").concat(e, " begins")), () => hr(e)), hr = (e) => {
  vn.mark("".concat(Je, " ").concat(e, " ends")), vn.measure("".concat(Je, " ").concat(e), "".concat(Je, " ").concat(e, " begins"), "".concat(Je, " ").concat(e, " ends"));
};
var kn = {
  begin: io,
  end: hr
};
const ut = () => {
};
function Ta(e) {
  return typeof (e.getAttribute ? e.getAttribute(Ne) : null) == "string";
}
function so(e) {
  const t = e.getAttribute ? e.getAttribute(En) : null, n = e.getAttribute ? e.getAttribute(In) : null;
  return t && n;
}
function lo(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(v.replacementClass);
}
function co() {
  return v.autoReplaceSvg === !0 ? dt.replace : dt[v.autoReplaceSvg] || dt.replace;
}
function fo(e) {
  return P.createElementNS("http://www.w3.org/2000/svg", e);
}
function uo(e) {
  return P.createElement(e);
}
function yr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? fo : uo
  } = t;
  if (typeof e == "string")
    return P.createTextNode(e);
  const a = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(A) {
    a.setAttribute(A, e.attributes[A]);
  }), (e.children || []).forEach(function(A) {
    a.appendChild(yr(A, {
      ceFn: n
    }));
  }), a;
}
function mo(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const dt = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(yr(n), t);
      }), t.getAttribute(Ne) === null && v.keepOriginalSource) {
        let n = P.createComment(mo(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Cn(t).indexOf(v.replacementClass))
      return dt.replace(e);
    const a = new RegExp("".concat(v.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const A = n[0].attributes.class.split(" ").reduce((i, s) => (s === v.replacementClass || s.match(a) ? i.toSvg.push(s) : i.toNode.push(s), i), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = A.toSvg.join(" "), A.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", A.toNode.join(" "));
    }
    const r = n.map((A) => nt(A)).join(`
`);
    t.setAttribute(Ne, ""), t.innerHTML = r;
  }
};
function Pa(e) {
  e();
}
function xr(e, t) {
  const n = typeof t == "function" ? t : ut;
  if (e.length === 0)
    n();
  else {
    let a = Pa;
    v.mutateApproach === yA && (a = de.requestAnimationFrame || Pa), a(() => {
      const r = co(), A = kn.begin("mutate");
      e.map(r), A(), n();
    });
  }
}
let jn = !1;
function Tr() {
  jn = !0;
}
function gn() {
  jn = !1;
}
let gt = null;
function Na(e) {
  if (!ua || !v.observeMutations)
    return;
  const {
    treeCallback: t = ut,
    nodeCallback: n = ut,
    pseudoElementsCallback: a = ut,
    observeMutationsRoot: r = P
  } = e;
  gt = new ua((A) => {
    if (jn) return;
    const i = me();
    Ve(A).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !Ta(s.addedNodes[0]) && (v.searchPseudoElements && a(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && v.searchPseudoElements && a(s.target.parentNode), s.type === "attributes" && Ta(s.target) && ~EA.indexOf(s.attributeName))
        if (s.attributeName === "class" && so(s.target)) {
          const {
            prefix: l,
            iconName: f
          } = Pt(Cn(s.target));
          s.target.setAttribute(En, l || i), f && s.target.setAttribute(In, f);
        } else lo(s.target) && n(s.target);
    });
  }), se && gt.observe(r, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function po() {
  gt && gt.disconnect();
}
function vo(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((a, r) => {
    const A = r.split(":"), i = A[0], s = A.slice(1);
    return i && s.length > 0 && (a[i] = s.join(":").trim()), a;
  }, {})), n;
}
function go(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), a = e.innerText !== void 0 ? e.innerText.trim() : "";
  let r = Pt(Cn(e));
  return r.prefix || (r.prefix = me()), t && n && (r.prefix = t, r.iconName = n), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = YA(r.prefix, e.innerText) || Rn(r.prefix, cn(e.innerText))), !r.iconName && v.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = e.firstChild.data)), r;
}
function bo(e) {
  const t = Ve(e.attributes).reduce((r, A) => (r.name !== "class" && r.name !== "style" && (r[A.name] = A.value), r), {}), n = e.getAttribute("title"), a = e.getAttribute("data-fa-title-id");
  return v.autoA11y && (n ? t["aria-labelledby"] = "".concat(v.replacementClass, "-title-").concat(a || et()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function ho() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: te,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Oa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: a,
    rest: r
  } = go(e), A = bo(e), i = un("parseNodeAttributes", {}, e);
  let s = t.styleParser ? vo(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: te,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: r,
      styles: s,
      attributes: A
    },
    ...i
  };
}
const {
  styles: yo
} = ne;
function Pr(e) {
  const t = v.autoReplaceSvg === "nest" ? Oa(e, {
    styleParser: !1
  }) : Oa(e);
  return ~t.extra.classes.indexOf(Ar) ? pe("generateLayersText", e, t) : pe("generateSvgReplacementMutation", e, t);
}
let ae = /* @__PURE__ */ new Set();
ar.map((e) => {
  ae.add("fa-".concat(e));
});
Object.keys(Te[N]).map(ae.add.bind(ae));
Object.keys(Te[G]).map(ae.add.bind(ae));
Object.keys(Te[Y]).map(ae.add.bind(ae));
ae = [...ae];
function Ea(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!se) return Promise.resolve();
  const n = P.documentElement.classList, a = (m) => n.add("".concat(pa, "-").concat(m)), r = (m) => n.remove("".concat(pa, "-").concat(m)), A = v.autoFetchSvg ? ae : ar.map((m) => "fa-".concat(m)).concat(Object.keys(yo));
  A.includes("fa") || A.push("fa");
  const i = [".".concat(Ar, ":not([").concat(Ne, "])")].concat(A.map((m) => ".".concat(m, ":not([").concat(Ne, "])"))).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = Ve(e.querySelectorAll(i));
  } catch {
  }
  if (s.length > 0)
    a("pending"), r("complete");
  else
    return Promise.resolve();
  const l = kn.begin("onTree"), f = s.reduce((m, y) => {
    try {
      const b = Pr(y);
      b && m.push(b);
    } catch (b) {
      nr || b.name === "MissingIcon" && console.error(b);
    }
    return m;
  }, []);
  return new Promise((m, y) => {
    Promise.all(f).then((b) => {
      xr(b, () => {
        a("active"), a("complete"), r("pending"), typeof t == "function" && t(), l(), m();
      });
    }).catch((b) => {
      l(), y(b);
    });
  });
}
function xo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Pr(e).then((n) => {
    n && xr([n], t);
  });
}
function To(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = (t || {}).icon ? t : dn(t || {});
    let {
      mask: r
    } = n;
    return r && (r = (r || {}).icon ? r : dn(r || {})), e(a, {
      ...n,
      mask: r
    });
  };
}
const Po = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = te,
    symbol: a = !1,
    mask: r = null,
    maskId: A = null,
    title: i = null,
    titleId: s = null,
    classes: l = [],
    attributes: f = {},
    styles: m = {}
  } = t;
  if (!e) return;
  const {
    prefix: y,
    iconName: b,
    icon: T
  } = e;
  return Nt({
    type: "icon",
    ...e
  }, () => (Oe("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), v.autoA11y && (i ? f["aria-labelledby"] = "".concat(v.replacementClass, "-title-").concat(s || et()) : (f["aria-hidden"] = "true", f.focusable = "false")), Xn({
    icons: {
      main: mn(T),
      mask: r ? mn(r.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: y,
    iconName: b,
    transform: {
      ...te,
      ...n
    },
    symbol: a,
    title: i,
    maskId: A,
    titleId: s,
    extra: {
      attributes: f,
      styles: m,
      classes: l
    }
  })));
};
var No = {
  mixout() {
    return {
      icon: To(Po)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Ea, e.nodeCallback = xo, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = P,
        callback: a = () => {
        }
      } = t;
      return Ea(n, a);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: a,
        title: r,
        titleId: A,
        prefix: i,
        transform: s,
        symbol: l,
        mask: f,
        maskId: m,
        extra: y
      } = n;
      return new Promise((b, T) => {
        Promise.all([pn(a, i), f.iconName ? pn(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((z) => {
          let [Z, O] = z;
          b([t, Xn({
            icons: {
              main: Z,
              mask: O
            },
            prefix: i,
            iconName: a,
            transform: s,
            symbol: l,
            maskId: m,
            title: r,
            titleId: A,
            extra: y,
            watchable: !0
          })]);
        }).catch(T);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: a,
        main: r,
        transform: A,
        styles: i
      } = t;
      const s = xt(i);
      s.length > 0 && (a.style = s);
      let l;
      return Dn(A) && (l = pe("generateAbstractTransformGrouping", {
        main: r,
        transform: A,
        containerWidth: r.width,
        iconWidth: r.width
      })), n.push(l || r.icon), {
        children: n,
        attributes: a
      };
    };
  }
}, Oo = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Nt({
          type: "layer"
        }, () => {
          Oe("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let a = [];
          return e((r) => {
            Array.isArray(r) ? r.map((A) => {
              a = a.concat(A.abstract);
            }) : a = a.concat(r.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(v.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: a
          }];
        });
      }
    };
  }
}, Eo = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: a = [],
          attributes: r = {},
          styles: A = {}
        } = t;
        return Nt({
          type: "counter",
          content: e
        }, () => (Oe("beforeDOMElementCreation", {
          content: e,
          params: t
        }), ro({
          content: e.toString(),
          title: n,
          extra: {
            attributes: r,
            styles: A,
            classes: ["".concat(v.cssPrefix, "-layers-counter"), ...a]
          }
        })));
      }
    };
  }
}, Io = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = te,
          title: a = null,
          classes: r = [],
          attributes: A = {},
          styles: i = {}
        } = t;
        return Nt({
          type: "text",
          content: e
        }, () => (Oe("beforeDOMElementCreation", {
          content: e,
          params: t
        }), ya({
          content: e,
          transform: {
            ...te,
            ...n
          },
          title: a,
          extra: {
            attributes: A,
            styles: i,
            classes: ["".concat(v.cssPrefix, "-layers-text"), ...r]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: a,
        transform: r,
        extra: A
      } = n;
      let i = null, s = null;
      if (Ja) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), f = t.getBoundingClientRect();
        i = f.width / l, s = f.height / l;
      }
      return v.autoA11y && !a && (A.attributes["aria-hidden"] = "true"), Promise.resolve([t, ya({
        content: t.innerHTML,
        width: i,
        height: s,
        transform: r,
        title: a,
        extra: A,
        watchable: !0
      })]);
    };
  }
};
const Co = new RegExp('"', "ug"), Ia = [1105920, 1112319], Ca = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...sA,
  ...iA,
  ...vA
}, bn = Object.keys(Ca).reduce((e, t) => (e[t.toLowerCase()] = Ca[t], e), {}), Do = Object.keys(bn).reduce((e, t) => {
  const n = bn[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function wo(e) {
  const t = e.replace(Co, ""), n = BA(t, 0), a = n >= Ia[0] && n <= Ia[1], r = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: cn(r ? t[0] : t),
    isSecondary: a || r
  };
}
function Ro(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), a = parseInt(t), r = isNaN(a) ? "normal" : a;
  return (bn[n] || {})[r] || Do[n];
}
function Da(e, t) {
  const n = "".concat(hA).concat(t.replace(":", "-"));
  return new Promise((a, r) => {
    if (e.getAttribute(n) !== null)
      return a();
    const i = Ve(e.children).filter((b) => b.getAttribute(An) === t)[0], s = de.getComputedStyle(e, t), l = s.getPropertyValue("font-family"), f = l.match(NA), m = s.getPropertyValue("font-weight"), y = s.getPropertyValue("content");
    if (i && !f)
      return e.removeChild(i), a();
    if (f && y !== "none" && y !== "") {
      const b = s.getPropertyValue("content");
      let T = Ro(l, m);
      const {
        value: z,
        isSecondary: Z
      } = wo(b), O = f[0].startsWith("FontAwesome");
      let D = Rn(T, z), E = D;
      if (O) {
        const w = qA(z);
        w.iconName && w.prefix && (D = w.iconName, T = w.prefix);
      }
      if (D && !Z && (!i || i.getAttribute(En) !== T || i.getAttribute(In) !== E)) {
        e.setAttribute(n, E), i && e.removeChild(i);
        const w = ho(), {
          extra: I
        } = w;
        I.attributes[An] = t, pn(D, T).then((B) => {
          const Ee = Xn({
            ...w,
            icons: {
              main: B,
              mask: zn()
            },
            prefix: T,
            iconName: E,
            extra: I,
            watchable: !0
          }), ve = P.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(ve, e.firstChild) : e.appendChild(ve), ve.outerHTML = Ee.map((It) => nt(It)).join(`
`), e.removeAttribute(n), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function zo(e) {
  return Promise.all([Da(e, "::before"), Da(e, "::after")]);
}
function Xo(e) {
  return e.parentNode !== document.head && !~xA.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(An) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function wa(e) {
  if (se)
    return new Promise((t, n) => {
      const a = Ve(e.querySelectorAll("*")).filter(Xo).map(zo), r = kn.begin("searchPseudoElements");
      Tr(), Promise.all(a).then(() => {
        r(), gn(), t();
      }).catch(() => {
        r(), gn(), n();
      });
    });
}
var ko = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = wa, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = P
      } = t;
      v.searchPseudoElements && wa(n);
    };
  }
};
let Ra = !1;
var jo = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Tr(), Ra = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Na(un("mutationObserverCallbacks", {}));
      },
      noAuto() {
        po();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Ra ? gn() : Na(un("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const za = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, a) => {
    const r = a.toLowerCase().split("-"), A = r[0];
    let i = r.slice(1).join("-");
    if (A && i === "h")
      return n.flipX = !0, n;
    if (A && i === "v")
      return n.flipY = !0, n;
    if (i = parseFloat(i), isNaN(i))
      return n;
    switch (A) {
      case "grow":
        n.size = n.size + i;
        break;
      case "shrink":
        n.size = n.size - i;
        break;
      case "left":
        n.x = n.x - i;
        break;
      case "right":
        n.x = n.x + i;
        break;
      case "up":
        n.y = n.y - i;
        break;
      case "down":
        n.y = n.y + i;
        break;
      case "rotate":
        n.rotate = n.rotate + i;
        break;
    }
    return n;
  }, t);
};
var Fo = {
  mixout() {
    return {
      parse: {
        transform: (e) => za(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = za(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: a,
        containerWidth: r,
        iconWidth: A
      } = t;
      const i = {
        transform: "translate(".concat(r / 2, " 256)")
      }, s = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), l = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), f = "rotate(".concat(a.rotate, " 0 0)"), m = {
        transform: "".concat(s, " ").concat(l, " ").concat(f)
      }, y = {
        transform: "translate(".concat(A / 2 * -1, " -256)")
      }, b = {
        outer: i,
        inner: m,
        path: y
      };
      return {
        tag: "g",
        attributes: {
          ...b.outer
        },
        children: [{
          tag: "g",
          attributes: {
            ...b.inner
          },
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: {
              ...n.icon.attributes,
              ...b.path
            }
          }]
        }]
      };
    };
  }
};
const Jt = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Xa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Mo(e) {
  return e.tag === "g" ? e.children : [e];
}
var Ho = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), a = n ? Pt(n.split(" ").map((r) => r.trim())) : zn();
        return a.prefix || (a.prefix = me()), e.mask = a, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: a,
        main: r,
        mask: A,
        maskId: i,
        transform: s
      } = t;
      const {
        width: l,
        icon: f
      } = r, {
        width: m,
        icon: y
      } = A, b = kA({
        transform: s,
        containerWidth: m,
        iconWidth: l
      }), T = {
        tag: "rect",
        attributes: {
          ...Jt,
          fill: "white"
        }
      }, z = f.children ? {
        children: f.children.map(Xa)
      } : {}, Z = {
        tag: "g",
        attributes: {
          ...b.inner
        },
        children: [Xa({
          tag: f.tag,
          attributes: {
            ...f.attributes,
            ...b.path
          },
          ...z
        })]
      }, O = {
        tag: "g",
        attributes: {
          ...b.outer
        },
        children: [Z]
      }, D = "mask-".concat(i || et()), E = "clip-".concat(i || et()), w = {
        tag: "mask",
        attributes: {
          ...Jt,
          id: D,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [T, O]
      }, I = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: E
          },
          children: Mo(y)
        }, w]
      };
      return n.push(I, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(E, ")"),
          mask: "url(#".concat(D, ")"),
          ...Jt
        }
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, Lo = {
  provides(e) {
    let t = !1;
    de.matchMedia && (t = de.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], a = {
        fill: "currentColor"
      }, r = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: {
          ...a,
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        }
      });
      const A = {
        ...r,
        attributeName: "opacity"
      }, i = {
        tag: "circle",
        attributes: {
          ...a,
          cx: "256",
          cy: "364",
          r: "28"
        },
        children: []
      };
      return t || i.children.push({
        tag: "animate",
        attributes: {
          ...r,
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        }
      }, {
        tag: "animate",
        attributes: {
          ...A,
          values: "1;0;1;1;0;1;"
        }
      }), n.push(i), n.push({
        tag: "path",
        attributes: {
          ...a,
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        },
        children: t ? [] : [{
          tag: "animate",
          attributes: {
            ...A,
            values: "1;0;0;0;0;1;"
          }
        }]
      }), t || n.push({
        tag: "path",
        attributes: {
          ...a,
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        },
        children: [{
          tag: "animate",
          attributes: {
            ...A,
            values: "0;0;1;1;0;0;"
          }
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, Bo = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), a = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = a, e;
      }
    };
  }
}, Vo = [MA, No, Oo, Eo, Io, ko, jo, Fo, Ho, Lo, Bo];
KA(Vo, {
  mixoutsTo: q
});
q.noAuto;
q.config;
q.library;
q.dom;
const hn = q.parse;
q.findIconDefinition;
q.toHtml;
const So = q.icon;
q.layer;
q.text;
q.counter;
var Zo = { env: { NODE_ENV: "production" } };
function ka(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ka(Object(n), !0).forEach(function(a) {
      Me(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ka(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function bt(e) {
  "@babel/helpers - typeof";
  return bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bt(e);
}
function Me(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Wo(e, t) {
  if (e == null) return {};
  var n = {}, a = Object.keys(e), r, A;
  for (A = 0; A < a.length; A++)
    r = a[A], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Go(e, t) {
  if (e == null) return {};
  var n = Wo(e, t), a, r;
  if (Object.getOwnPropertySymbols) {
    var A = Object.getOwnPropertySymbols(e);
    for (r = 0; r < A.length; r++)
      a = A[r], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function yn(e) {
  return Yo(e) || qo(e) || Uo(e) || Qo();
}
function Yo(e) {
  if (Array.isArray(e)) return xn(e);
}
function qo(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Uo(e, t) {
  if (e) {
    if (typeof e == "string") return xn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xn(e, t);
  }
}
function xn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function Qo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jo(e) {
  var t, n = e.beat, a = e.fade, r = e.beatFade, A = e.bounce, i = e.shake, s = e.flash, l = e.spin, f = e.spinPulse, m = e.spinReverse, y = e.pulse, b = e.fixedWidth, T = e.inverse, z = e.border, Z = e.listItem, O = e.flip, D = e.size, E = e.rotation, w = e.pull, I = (t = {
    "fa-beat": n,
    "fa-fade": a,
    "fa-beat-fade": r,
    "fa-bounce": A,
    "fa-shake": i,
    "fa-flash": s,
    "fa-spin": l,
    "fa-spin-reverse": m,
    "fa-spin-pulse": f,
    "fa-pulse": y,
    "fa-fw": b,
    "fa-inverse": T,
    "fa-border": z,
    "fa-li": Z,
    "fa-flip": O === !0,
    "fa-flip-horizontal": O === "horizontal" || O === "both",
    "fa-flip-vertical": O === "vertical" || O === "both"
  }, Me(t, "fa-".concat(D), typeof D < "u" && D !== null), Me(t, "fa-rotate-".concat(E), typeof E < "u" && E !== null && E !== 0), Me(t, "fa-pull-".concat(w), typeof w < "u" && w !== null), Me(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(I).map(function(B) {
    return I[B] ? B : null;
  }).filter(function(B) {
    return B;
  });
}
function Ko(e) {
  return e = e - 0, e === e;
}
function Nr(e) {
  return Ko(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var _o = ["style"];
function $o(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ei(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var a = n.indexOf(":"), r = Nr(n.slice(0, a)), A = n.slice(a + 1).trim();
    return r.startsWith("webkit") ? t[$o(r)] = A : t[r] = A, t;
  }, {});
}
function Or(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var a = (t.children || []).map(function(l) {
    return Or(e, l);
  }), r = Object.keys(t.attributes || {}).reduce(function(l, f) {
    var m = t.attributes[f];
    switch (f) {
      case "class":
        l.attrs.className = m, delete t.attributes.class;
        break;
      case "style":
        l.attrs.style = ei(m);
        break;
      default:
        f.indexOf("aria-") === 0 || f.indexOf("data-") === 0 ? l.attrs[f.toLowerCase()] = m : l.attrs[Nr(f)] = m;
    }
    return l;
  }, {
    attrs: {}
  }), A = n.style, i = A === void 0 ? {} : A, s = Go(n, _o);
  return r.attrs.style = ee(ee({}, r.attrs.style), i), e.apply(void 0, [t.tag, ee(ee({}, r.attrs), s)].concat(yn(a)));
}
var Er = !1;
try {
  Er = Zo.env.NODE_ENV === "production";
} catch {
}
function ti() {
  if (!Er && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function ja(e) {
  if (e && bt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (hn.icon)
    return hn.icon(e);
  if (e === null)
    return null;
  if (e && bt(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function Kt(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Me({}, e, t) : {};
}
var Fa = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, ce = /* @__PURE__ */ yt.forwardRef(function(e, t) {
  var n = ee(ee({}, Fa), e), a = n.icon, r = n.mask, A = n.symbol, i = n.className, s = n.title, l = n.titleId, f = n.maskId, m = ja(a), y = Kt("classes", [].concat(yn(Jo(n)), yn((i || "").split(" ")))), b = Kt("transform", typeof n.transform == "string" ? hn.transform(n.transform) : n.transform), T = Kt("mask", ja(r)), z = So(m, ee(ee(ee(ee({}, y), b), T), {}, {
    symbol: A,
    title: s,
    titleId: l,
    maskId: f
  }));
  if (!z)
    return ti("Could not find icon", m), null;
  var Z = z.abstract, O = {
    ref: t
  };
  return Object.keys(n).forEach(function(D) {
    Fa.hasOwnProperty(D) || (O[D] = n[D]);
  }), ni(Z[0], O);
});
ce.displayName = "FontAwesomeIcon";
ce.propTypes = {
  beat: p.bool,
  border: p.bool,
  beatFade: p.bool,
  bounce: p.bool,
  className: p.string,
  fade: p.bool,
  flash: p.bool,
  mask: p.oneOfType([p.object, p.array, p.string]),
  maskId: p.string,
  fixedWidth: p.bool,
  inverse: p.bool,
  flip: p.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: p.oneOfType([p.object, p.array, p.string]),
  listItem: p.bool,
  pull: p.oneOf(["right", "left"]),
  pulse: p.bool,
  rotation: p.oneOf([0, 90, 180, 270]),
  shake: p.bool,
  size: p.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: p.bool,
  spinPulse: p.bool,
  spinReverse: p.bool,
  symbol: p.oneOfType([p.bool, p.string]),
  title: p.string,
  titleId: p.string,
  transform: p.oneOfType([p.string, p.object]),
  swapOpacity: p.bool
};
var ni = Or.bind(null, yt.createElement);
const Ir = ({ columnIndex: e, column: { title: t, links: n } }) => {
  const [a, r] = Yr(!1);
  return /* @__PURE__ */ d.jsx("div", { className: "col-xl flex-footer testname-column", children: /* @__PURE__ */ d.jsxs("div", { className: "card accordion-item desktop-disable-xl", children: [
    /* @__PURE__ */ d.jsx(
      "div",
      {
        className: "accordion-header",
        role: "button",
        onClick: () => r(!a),
        onKeyDown: () => r(!a),
        tabIndex: 0,
        "data-bs-toggle": "collapse",
        children: /* @__PURE__ */ d.jsx("div", { className: "h5", children: /* @__PURE__ */ d.jsxs(
          "a",
          {
            id: `footlink-header-${e}`,
            className: "collapsed",
            href: `#footlink-${e}`,
            role: "button",
            children: [
              t,
              /* @__PURE__ */ d.jsx(ce, { icon: eA })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ d.jsx(
      "div",
      {
        id: `footlink-${e}`,
        className: `collapse accordion-body ${a ? "show" : ""}`,
        children: n.map((A) => /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: A.url,
            title: A.title,
            children: A.text
          },
          `footlink-${t}-link-${A.text}`
        ))
      }
    )
  ] }) });
};
Ir.propTypes = {
  columnIndex: p.number.isRequired,
  column: W.shape({
    title: p.string,
    links: W.arrayOf(
      W.shape({
        url: p.string.isRequired,
        title: p.string,
        text: p.string.isRequired
      })
    )
  })
};
const Ot = ({
  contact: { title: e, contactLink: t, contributionLink: n, columns: a }
}) => /* @__PURE__ */ d.jsx("div", { className: "wrapper", id: "wrapper-footer-columns", "data-testid": "contact", children: /* @__PURE__ */ d.jsx("div", { className: "container", id: "footer-columns", children: /* @__PURE__ */ d.jsxs("div", { className: "row", "data-testid": "columns-container", children: [
  /* @__PURE__ */ d.jsxs("div", { className: "col-xl-3", id: "info-column", children: [
    /* @__PURE__ */ d.jsx("div", { className: "h5", children: e }),
    t && /* @__PURE__ */ d.jsx("p", { className: "contact-link", children: /* @__PURE__ */ d.jsx("a", { href: t, children: "Contact Us" }) }),
    n && /* @__PURE__ */ d.jsx(
      "p",
      {
        className: "contribute-button",
        "data-testid": "contact-contribution-link",
        children: /* @__PURE__ */ d.jsx("a", { href: n, className: "btn btn-small btn-gold", children: "Support ASU" })
      }
    )
  ] }),
  a && a.length && /* @__PURE__ */ d.jsx(d.Fragment, { children: a.map((r, A) => /* @__PURE__ */ d.jsx(
    Ir,
    {
      columnIndex: A,
      column: r
    },
    `footlink-${r.title}`
  )) })
] }) }) });
Ot.propTypes = {
  contact: W.shape({
    title: p.string.isRequired,
    contactLink: p.string.isRequired,
    contributionLink: p.string,
    columns: W.arrayOf(
      W.shape({
        title: p.string,
        links: W.arrayOf(
          W.shape({
            url: p.string.isRequired,
            title: p.string,
            text: p.string.isRequired
          })
        )
      })
    )
  })
};
Ot.defaultProps = {
  contact: {
    title: "",
    contactLink: "",
    contributionLink: ""
  }
};
function fe(e) {
  "@babel/helpers - typeof";
  return fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fe(e);
}
function Tn(e, t) {
  return Tn = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Tn(e, t);
}
function ai() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function mt(e, t, n) {
  return ai() ? mt = Reflect.construct : mt = function(r, A, i) {
    var s = [null];
    s.push.apply(s, A);
    var l = Function.bind.apply(r, s), f = new l();
    return i && Tn(f, i.prototype), f;
  }, mt.apply(null, arguments);
}
function _(e) {
  return ri(e) || Ai(e) || oi(e) || ii();
}
function ri(e) {
  if (Array.isArray(e)) return Pn(e);
}
function Ai(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function oi(e, t) {
  if (e) {
    if (typeof e == "string") return Pn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pn(e, t);
  }
}
function Pn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function ii() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var si = Object.hasOwnProperty, Ma = Object.setPrototypeOf, li = Object.isFrozen, ci = Object.getPrototypeOf, fi = Object.getOwnPropertyDescriptor, V = Object.freeze, Q = Object.seal, ui = Object.create, Cr = typeof Reflect < "u" && Reflect, ht = Cr.apply, Nn = Cr.construct;
ht || (ht = function(t, n, a) {
  return t.apply(n, a);
});
V || (V = function(t) {
  return t;
});
Q || (Q = function(t) {
  return t;
});
Nn || (Nn = function(t, n) {
  return mt(t, _(n));
});
var di = J(Array.prototype.forEach), Ha = J(Array.prototype.pop), Ye = J(Array.prototype.push), pt = J(String.prototype.toLowerCase), _t = J(String.prototype.toString), La = J(String.prototype.match), K = J(String.prototype.replace), mi = J(String.prototype.indexOf), pi = J(String.prototype.trim), M = J(RegExp.prototype.test), $t = vi(TypeError);
function J(e) {
  return function(t) {
    for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
      a[r - 1] = arguments[r];
    return ht(e, t, a);
  };
}
function vi(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
      n[a] = arguments[a];
    return Nn(e, n);
  };
}
function h(e, t, n) {
  var a;
  n = (a = n) !== null && a !== void 0 ? a : pt, Ma && Ma(e, null);
  for (var r = t.length; r--; ) {
    var A = t[r];
    if (typeof A == "string") {
      var i = n(A);
      i !== A && (li(t) || (t[r] = i), A = i);
    }
    e[A] = !0;
  }
  return e;
}
function ye(e) {
  var t = ui(null), n;
  for (n in e)
    ht(si, e, [n]) === !0 && (t[n] = e[n]);
  return t;
}
function ct(e, t) {
  for (; e !== null; ) {
    var n = fi(e, t);
    if (n) {
      if (n.get)
        return J(n.get);
      if (typeof n.value == "function")
        return J(n.value);
    }
    e = ci(e);
  }
  function a(r) {
    return console.warn("fallback value for", r), null;
  }
  return a;
}
var Ba = V(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), en = V(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), tn = V(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), gi = V(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), nn = V(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), bi = V(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Va = V(["#text"]), Sa = V(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), an = V(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Za = V(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ft = V(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), hi = Q(/\{\{[\w\W]*|[\w\W]*\}\}/gm), yi = Q(/<%[\w\W]*|[\w\W]*%>/gm), xi = Q(/\${[\w\W]*}/gm), Ti = Q(/^data-[\-\w.\u00B7-\uFFFF]/), Pi = Q(/^aria-[\-\w]+$/), Ni = Q(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Oi = Q(/^(?:\w+script|data):/i), Ei = Q(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ii = Q(/^html$/i), Ci = Q(/^[a-z][.\w]*(-[.\w]+)+$/i), Di = function() {
  return typeof window > "u" ? null : window;
}, wi = function(t, n) {
  if (fe(t) !== "object" || typeof t.createPolicy != "function")
    return null;
  var a = null, r = "data-tt-policy-suffix";
  n.currentScript && n.currentScript.hasAttribute(r) && (a = n.currentScript.getAttribute(r));
  var A = "dompurify" + (a ? "#" + a : "");
  try {
    return t.createPolicy(A, {
      createHTML: function(s) {
        return s;
      },
      createScriptURL: function(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + A + " could not be created."), null;
  }
};
function Dr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Di(), t = function(o) {
    return Dr(o);
  };
  if (t.version = "2.5.7", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var n = e.document, a = e.document, r = e.DocumentFragment, A = e.HTMLTemplateElement, i = e.Node, s = e.Element, l = e.NodeFilter, f = e.NamedNodeMap, m = f === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : f, y = e.HTMLFormElement, b = e.DOMParser, T = e.trustedTypes, z = s.prototype, Z = ct(z, "cloneNode"), O = ct(z, "nextSibling"), D = ct(z, "childNodes"), E = ct(z, "parentNode");
  if (typeof A == "function") {
    var w = a.createElement("template");
    w.content && w.content.ownerDocument && (a = w.content.ownerDocument);
  }
  var I = wi(T, n), B = I ? I.createHTML("") : "", Ee = a, ve = Ee.implementation, It = Ee.createNodeIterator, Rr = Ee.createDocumentFragment, zr = Ee.getElementsByTagName, Xr = n.importNode, Fn = {};
  try {
    Fn = ye(a).documentMode ? a.documentMode : {};
  } catch {
  }
  var $ = {};
  t.isSupported = typeof E == "function" && ve && ve.createHTMLDocument !== void 0 && Fn !== 9;
  var Ct = hi, Dt = yi, wt = xi, kr = Ti, jr = Pi, Fr = Oi, Mn = Ei, Mr = Ci, Rt = Ni, X = null, Hn = h({}, [].concat(_(Ba), _(en), _(tn), _(nn), _(Va))), k = null, Ln = h({}, [].concat(_(Sa), _(an), _(Za), _(ft))), C = Object.seal(Object.create(null, {
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
  })), Se = null, zt = null, Bn = !0, Xt = !0, Vn = !1, Sn = !0, Ie = !1, kt = !0, ge = !1, jt = !1, Ft = !1, Ce = !1, at = !1, rt = !1, Zn = !0, Wn = !1, Hr = "user-content-", Mt = !0, Ze = !1, De = {}, we = null, Gn = h({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Yn = null, qn = h({}, ["audio", "video", "img", "source", "image", "track"]), Ht = null, Un = h({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), At = "http://www.w3.org/1998/Math/MathML", ot = "http://www.w3.org/2000/svg", re = "http://www.w3.org/1999/xhtml", Re = re, Lt = !1, Bt = null, Lr = h({}, [At, ot, re], _t), be, Br = ["application/xhtml+xml", "text/html"], Vr = "text/html", j, ze = null, Sr = a.createElement("form"), Qn = function(o) {
    return o instanceof RegExp || o instanceof Function;
  }, Vt = function(o) {
    ze && ze === o || ((!o || fe(o) !== "object") && (o = {}), o = ye(o), be = // eslint-disable-next-line unicorn/prefer-includes
    Br.indexOf(o.PARSER_MEDIA_TYPE) === -1 ? be = Vr : be = o.PARSER_MEDIA_TYPE, j = be === "application/xhtml+xml" ? _t : pt, X = "ALLOWED_TAGS" in o ? h({}, o.ALLOWED_TAGS, j) : Hn, k = "ALLOWED_ATTR" in o ? h({}, o.ALLOWED_ATTR, j) : Ln, Bt = "ALLOWED_NAMESPACES" in o ? h({}, o.ALLOWED_NAMESPACES, _t) : Lr, Ht = "ADD_URI_SAFE_ATTR" in o ? h(
      ye(Un),
      // eslint-disable-line indent
      o.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      j
      // eslint-disable-line indent
    ) : Un, Yn = "ADD_DATA_URI_TAGS" in o ? h(
      ye(qn),
      // eslint-disable-line indent
      o.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      j
      // eslint-disable-line indent
    ) : qn, we = "FORBID_CONTENTS" in o ? h({}, o.FORBID_CONTENTS, j) : Gn, Se = "FORBID_TAGS" in o ? h({}, o.FORBID_TAGS, j) : {}, zt = "FORBID_ATTR" in o ? h({}, o.FORBID_ATTR, j) : {}, De = "USE_PROFILES" in o ? o.USE_PROFILES : !1, Bn = o.ALLOW_ARIA_ATTR !== !1, Xt = o.ALLOW_DATA_ATTR !== !1, Vn = o.ALLOW_UNKNOWN_PROTOCOLS || !1, Sn = o.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ie = o.SAFE_FOR_TEMPLATES || !1, kt = o.SAFE_FOR_XML !== !1, ge = o.WHOLE_DOCUMENT || !1, Ce = o.RETURN_DOM || !1, at = o.RETURN_DOM_FRAGMENT || !1, rt = o.RETURN_TRUSTED_TYPE || !1, Ft = o.FORCE_BODY || !1, Zn = o.SANITIZE_DOM !== !1, Wn = o.SANITIZE_NAMED_PROPS || !1, Mt = o.KEEP_CONTENT !== !1, Ze = o.IN_PLACE || !1, Rt = o.ALLOWED_URI_REGEXP || Rt, Re = o.NAMESPACE || re, C = o.CUSTOM_ELEMENT_HANDLING || {}, o.CUSTOM_ELEMENT_HANDLING && Qn(o.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (C.tagNameCheck = o.CUSTOM_ELEMENT_HANDLING.tagNameCheck), o.CUSTOM_ELEMENT_HANDLING && Qn(o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (C.attributeNameCheck = o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), o.CUSTOM_ELEMENT_HANDLING && typeof o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (C.allowCustomizedBuiltInElements = o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ie && (Xt = !1), at && (Ce = !0), De && (X = h({}, _(Va)), k = [], De.html === !0 && (h(X, Ba), h(k, Sa)), De.svg === !0 && (h(X, en), h(k, an), h(k, ft)), De.svgFilters === !0 && (h(X, tn), h(k, an), h(k, ft)), De.mathMl === !0 && (h(X, nn), h(k, Za), h(k, ft))), o.ADD_TAGS && (X === Hn && (X = ye(X)), h(X, o.ADD_TAGS, j)), o.ADD_ATTR && (k === Ln && (k = ye(k)), h(k, o.ADD_ATTR, j)), o.ADD_URI_SAFE_ATTR && h(Ht, o.ADD_URI_SAFE_ATTR, j), o.FORBID_CONTENTS && (we === Gn && (we = ye(we)), h(we, o.FORBID_CONTENTS, j)), Mt && (X["#text"] = !0), ge && h(X, ["html", "head", "body"]), X.table && (h(X, ["tbody"]), delete Se.tbody), V && V(o), ze = o);
  }, Jn = h({}, ["mi", "mo", "mn", "ms", "mtext"]), Kn = h({}, ["annotation-xml"]), Zr = h({}, ["title", "style", "font", "a", "script"]), it = h({}, en);
  h(it, tn), h(it, gi);
  var St = h({}, nn);
  h(St, bi);
  var Wr = function(o) {
    var c = E(o);
    (!c || !c.tagName) && (c = {
      namespaceURI: Re,
      tagName: "template"
    });
    var u = pt(o.tagName), x = pt(c.tagName);
    return Bt[o.namespaceURI] ? o.namespaceURI === ot ? c.namespaceURI === re ? u === "svg" : c.namespaceURI === At ? u === "svg" && (x === "annotation-xml" || Jn[x]) : !!it[u] : o.namespaceURI === At ? c.namespaceURI === re ? u === "math" : c.namespaceURI === ot ? u === "math" && Kn[x] : !!St[u] : o.namespaceURI === re ? c.namespaceURI === ot && !Kn[x] || c.namespaceURI === At && !Jn[x] ? !1 : !St[u] && (Zr[u] || !it[u]) : !!(be === "application/xhtml+xml" && Bt[o.namespaceURI]) : !1;
  }, U = function(o) {
    Ye(t.removed, {
      element: o
    });
    try {
      o.parentNode.removeChild(o);
    } catch {
      try {
        o.outerHTML = B;
      } catch {
        o.remove();
      }
    }
  }, st = function(o, c) {
    try {
      Ye(t.removed, {
        attribute: c.getAttributeNode(o),
        from: c
      });
    } catch {
      Ye(t.removed, {
        attribute: null,
        from: c
      });
    }
    if (c.removeAttribute(o), o === "is" && !k[o])
      if (Ce || at)
        try {
          U(c);
        } catch {
        }
      else
        try {
          c.setAttribute(o, "");
        } catch {
        }
  }, _n = function(o) {
    var c, u;
    if (Ft)
      o = "<remove></remove>" + o;
    else {
      var x = La(o, /^[\r\n\t ]+/);
      u = x && x[0];
    }
    be === "application/xhtml+xml" && Re === re && (o = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + o + "</body></html>");
    var S = I ? I.createHTML(o) : o;
    if (Re === re)
      try {
        c = new b().parseFromString(S, be);
      } catch {
      }
    if (!c || !c.documentElement) {
      c = ve.createDocument(Re, "template", null);
      try {
        c.documentElement.innerHTML = Lt ? B : S;
      } catch {
      }
    }
    var L = c.body || c.documentElement;
    return o && u && L.insertBefore(a.createTextNode(u), L.childNodes[0] || null), Re === re ? zr.call(c, ge ? "html" : "body")[0] : ge ? c.documentElement : L;
  }, $n = function(o) {
    return It.call(
      o.ownerDocument || o,
      o,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ea = function(o) {
    return o instanceof y && (typeof o.nodeName != "string" || typeof o.textContent != "string" || typeof o.removeChild != "function" || !(o.attributes instanceof m) || typeof o.removeAttribute != "function" || typeof o.setAttribute != "function" || typeof o.namespaceURI != "string" || typeof o.insertBefore != "function" || typeof o.hasChildNodes != "function");
  }, We = function(o) {
    return fe(i) === "object" ? o instanceof i : o && fe(o) === "object" && typeof o.nodeType == "number" && typeof o.nodeName == "string";
  }, Ae = function(o, c, u) {
    $[o] && di($[o], function(x) {
      x.call(t, c, u, ze);
    });
  }, ta = function(o) {
    var c;
    if (Ae("beforeSanitizeElements", o, null), ea(o) || M(/[\u0080-\uFFFF]/, o.nodeName))
      return U(o), !0;
    var u = j(o.nodeName);
    if (Ae("uponSanitizeElement", o, {
      tagName: u,
      allowedTags: X
    }), o.hasChildNodes() && !We(o.firstElementChild) && (!We(o.content) || !We(o.content.firstElementChild)) && M(/<[/\w]/g, o.innerHTML) && M(/<[/\w]/g, o.textContent) || u === "select" && M(/<template/i, o.innerHTML) || o.nodeType === 7 || kt && o.nodeType === 8 && M(/<[/\w]/g, o.data))
      return U(o), !0;
    if (!X[u] || Se[u]) {
      if (!Se[u] && aa(u) && (C.tagNameCheck instanceof RegExp && M(C.tagNameCheck, u) || C.tagNameCheck instanceof Function && C.tagNameCheck(u)))
        return !1;
      if (Mt && !we[u]) {
        var x = E(o) || o.parentNode, S = D(o) || o.childNodes;
        if (S && x)
          for (var L = S.length, F = L - 1; F >= 0; --F) {
            var he = Z(S[F], !0);
            he.__removalCount = (o.__removalCount || 0) + 1, x.insertBefore(he, O(o));
          }
      }
      return U(o), !0;
    }
    return o instanceof s && !Wr(o) || (u === "noscript" || u === "noembed" || u === "noframes") && M(/<\/no(script|embed|frames)/i, o.innerHTML) ? (U(o), !0) : (Ie && o.nodeType === 3 && (c = o.textContent, c = K(c, Ct, " "), c = K(c, Dt, " "), c = K(c, wt, " "), o.textContent !== c && (Ye(t.removed, {
      element: o.cloneNode()
    }), o.textContent = c)), Ae("afterSanitizeElements", o, null), !1);
  }, na = function(o, c, u) {
    if (Zn && (c === "id" || c === "name") && (u in a || u in Sr))
      return !1;
    if (!(Xt && !zt[c] && M(kr, c))) {
      if (!(Bn && M(jr, c))) {
        if (!k[c] || zt[c]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(aa(o) && (C.tagNameCheck instanceof RegExp && M(C.tagNameCheck, o) || C.tagNameCheck instanceof Function && C.tagNameCheck(o)) && (C.attributeNameCheck instanceof RegExp && M(C.attributeNameCheck, c) || C.attributeNameCheck instanceof Function && C.attributeNameCheck(c)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            c === "is" && C.allowCustomizedBuiltInElements && (C.tagNameCheck instanceof RegExp && M(C.tagNameCheck, u) || C.tagNameCheck instanceof Function && C.tagNameCheck(u)))
          ) return !1;
        } else if (!Ht[c]) {
          if (!M(Rt, K(u, Mn, ""))) {
            if (!((c === "src" || c === "xlink:href" || c === "href") && o !== "script" && mi(u, "data:") === 0 && Yn[o])) {
              if (!(Vn && !M(Fr, K(u, Mn, "")))) {
                if (u)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, aa = function(o) {
    return o !== "annotation-xml" && La(o, Mr);
  }, ra = function(o) {
    var c, u, x, S;
    Ae("beforeSanitizeAttributes", o, null);
    var L = o.attributes;
    if (L) {
      var F = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: k
      };
      for (S = L.length; S--; ) {
        c = L[S];
        var he = c, R = he.name, Zt = he.namespaceURI;
        if (u = R === "value" ? c.value : pi(c.value), x = j(R), F.attrName = x, F.attrValue = u, F.keepAttr = !0, F.forceKeepAttr = void 0, Ae("uponSanitizeAttribute", o, F), u = F.attrValue, !F.forceKeepAttr && (st(R, o), !!F.keepAttr)) {
          if (!Sn && M(/\/>/i, u)) {
            st(R, o);
            continue;
          }
          Ie && (u = K(u, Ct, " "), u = K(u, Dt, " "), u = K(u, wt, " "));
          var Aa = j(o.nodeName);
          if (na(Aa, x, u)) {
            if (Wn && (x === "id" || x === "name") && (st(R, o), u = Hr + u), kt && M(/((--!?|])>)|<\/(style|title)/i, u)) {
              st(R, o);
              continue;
            }
            if (I && fe(T) === "object" && typeof T.getAttributeType == "function" && !Zt)
              switch (T.getAttributeType(Aa, x)) {
                case "TrustedHTML": {
                  u = I.createHTML(u);
                  break;
                }
                case "TrustedScriptURL": {
                  u = I.createScriptURL(u);
                  break;
                }
              }
            try {
              Zt ? o.setAttributeNS(Zt, R, u) : o.setAttribute(R, u), ea(o) ? U(o) : Ha(t.removed);
            } catch {
            }
          }
        }
      }
      Ae("afterSanitizeAttributes", o, null);
    }
  }, Gr = function g(o) {
    var c, u = $n(o);
    for (Ae("beforeSanitizeShadowDOM", o, null); c = u.nextNode(); )
      Ae("uponSanitizeShadowNode", c, null), !ta(c) && (c.content instanceof r && g(c.content), ra(c));
    Ae("afterSanitizeShadowDOM", o, null);
  };
  return t.sanitize = function(g) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c, u, x, S, L;
    if (Lt = !g, Lt && (g = "<!-->"), typeof g != "string" && !We(g))
      if (typeof g.toString == "function") {
        if (g = g.toString(), typeof g != "string")
          throw $t("dirty is not a string, aborting");
      } else
        throw $t("toString is not a function");
    if (!t.isSupported) {
      if (fe(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof g == "string")
          return e.toStaticHTML(g);
        if (We(g))
          return e.toStaticHTML(g.outerHTML);
      }
      return g;
    }
    if (jt || Vt(o), t.removed = [], typeof g == "string" && (Ze = !1), Ze) {
      if (g.nodeName) {
        var F = j(g.nodeName);
        if (!X[F] || Se[F])
          throw $t("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (g instanceof i)
      c = _n("<!---->"), u = c.ownerDocument.importNode(g, !0), u.nodeType === 1 && u.nodeName === "BODY" || u.nodeName === "HTML" ? c = u : c.appendChild(u);
    else {
      if (!Ce && !Ie && !ge && // eslint-disable-next-line unicorn/prefer-includes
      g.indexOf("<") === -1)
        return I && rt ? I.createHTML(g) : g;
      if (c = _n(g), !c)
        return Ce ? null : rt ? B : "";
    }
    c && Ft && U(c.firstChild);
    for (var he = $n(Ze ? g : c); x = he.nextNode(); )
      x.nodeType === 3 && x === S || ta(x) || (x.content instanceof r && Gr(x.content), ra(x), S = x);
    if (S = null, Ze)
      return g;
    if (Ce) {
      if (at)
        for (L = Rr.call(c.ownerDocument); c.firstChild; )
          L.appendChild(c.firstChild);
      else
        L = c;
      return (k.shadowroot || k.shadowrootmod) && (L = Xr.call(n, L, !0)), L;
    }
    var R = ge ? c.outerHTML : c.innerHTML;
    return ge && X["!doctype"] && c.ownerDocument && c.ownerDocument.doctype && c.ownerDocument.doctype.name && M(Ii, c.ownerDocument.doctype.name) && (R = "<!DOCTYPE " + c.ownerDocument.doctype.name + `>
` + R), Ie && (R = K(R, Ct, " "), R = K(R, Dt, " "), R = K(R, wt, " ")), I && rt ? I.createHTML(R) : R;
  }, t.setConfig = function(g) {
    Vt(g), jt = !0;
  }, t.clearConfig = function() {
    ze = null, jt = !1;
  }, t.isValidAttribute = function(g, o, c) {
    ze || Vt({});
    var u = j(g), x = j(o);
    return na(u, x, c);
  }, t.addHook = function(g, o) {
    typeof o == "function" && ($[g] = $[g] || [], Ye($[g], o));
  }, t.removeHook = function(g) {
    if ($[g])
      return Ha($[g]);
  }, t.removeHooks = function(g) {
    $[g] && ($[g] = []);
  }, t.removeAllHooks = function() {
    $ = {};
  }, t;
}
Dr();
p.shape({
  event: p.string,
  action: p.string,
  name: p.string,
  region: p.string,
  section: p.string,
  component: p.string,
  type: p.string,
  text: p.string
});
const H = ({
  event: e = "",
  action: t = "",
  name: n = "",
  type: a = "",
  section: r = "",
  text: A = "",
  region: i = "",
  component: s = ""
}) => {
  const { dataLayer: l } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: n.toLowerCase(),
    type: a.toLowerCase(),
    region: i.toLowerCase(),
    section: r.toLowerCase(),
    text: A.toLowerCase(),
    component: s.toLowerCase()
  };
  l && l.push(f);
}, Ri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABwYAAAGICAYAAABLOoTXAAARHmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuYThkNDc1MywgMjAyMy8wMy8yMy0wODo1NjozNyAgICAgICAgIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iCiAgICB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICBleGlmOkV4aWZWZXJzaW9uPSIwMjMxIgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iMTc5OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjM5MiIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB0aWZmOkltYWdlV2lkdGg9IjE3OTgiCiAgIHRpZmY6SW1hZ2VMZW5ndGg9IjM5MiIKICAgdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPSIyIgogICB0aWZmOlNhbXBsZXNQZXJQaXhlbD0iMyIKICAgdGlmZjpYUmVzb2x1dGlvbj0iMTQ5OTkvMTAwIgogICB0aWZmOllSZXNvbHV0aW9uPSIxNDk5OS8xMDAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHhtcE1NOkRvY3VtZW50SUQ9Ijc1Mzk0MjQwNjYyMkM4MDE1MzlEMzQ5QkREQTdCNjhBIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9Ijc1Mzk0MjQwNjYyMkM4MDE1MzlEMzQ5QkREQTdCNjhBIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmI0MDI5ZGRlLTMyNmMtNDc2ZS1iZGIxLWViMjg3OWZlOWNmOCIKICAgZGM6Zm9ybWF0PSJpbWFnZS9wbmciCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgcGhvdG9zaG9wOkF1dGhvcnNQb3NpdGlvbj0iUmVzZWFyY2ggdW5pdmVyc2l0eSIKICAgcGhvdG9zaG9wOkhlYWRsaW5lPSJSZXBlYXRlZGx5IHJhbmtlZCAjMSBpbiBhcmVhcyB0aGF0IG1hdHRlciIKICAgcGhvdG9zaG9wOkNpdHk9IlRlbXBlIgogICBwaG90b3Nob3A6U3RhdGU9IkFyaXpvbmEiCiAgIHBob3Rvc2hvcDpDb3VudHJ5PSJVU0EiCiAgIHBob3Rvc2hvcDpDcmVkaXQ9IlUuUy4gTmV3cyAmYW1wOyBXb3JsZCBSZXBvcnQ7IFN1c3RhaW5hYmlsaXR5IFRyYWNraW5nLCBBc3Nlc3NtZW50ICZhbXA7IFJhdGluZyBTeXN0ZW07IEhpZ2hlciBUaW1lcyBFZHVjYXRpb247IgogICBwaG90b3Nob3A6U291cmNlPSJBcml6b25hIFN0YXRlIFVuaXZlcnNpdHkiCiAgIHhtcFJpZ2h0czpNYXJrZWQ9IlRydWUiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDktMThUMTA6Mjg6MTAtMDc6MDAiPgogICA8dGlmZjpCaXRzUGVyU2FtcGxlPgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaT44PC9yZGY6bGk+CiAgICAgPHJkZjpsaT44PC9yZGY6bGk+CiAgICAgPHJkZjpsaT44PC9yZGY6bGk+CiAgICA8L3JkZjpTZXE+CiAgIDwvdGlmZjpCaXRzUGVyU2FtcGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNDAyOWRkZS0zMjZjLTQ3NmUtYmRiMS1lYjI4NzlmZTljZjgiCiAgICAgIHN0RXZ0OndoZW49IjIwMjMtMDktMThUMTA6Mjg6MTAtMDc6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEJyaWRnZSAyMDI0IgogICAgICBzdEV2dDpjaGFuZ2VkPSIvbWV0YWRhdGEiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogICA8ZGM6Y3JlYXRvcj4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGk+QVNVIEVudGVycHJpc2UgQnJhbmQgU3RyYXRlZ3kgYW5kIE1hbmFnZW1lbnQ8L3JkZjpsaT4KICAgICA8cmRmOmxpPkFyaXpvbmEgU3RhdGUgVW5pdmVyc2l0eTwvcmRmOmxpPgogICAgPC9yZGY6U2VxPgogICA8L2RjOmNyZWF0b3I+CiAgIDxkYzpkZXNjcmlwdGlvbj4KICAgIDxyZGY6QWx0PgogICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+IzEgaW4gaW5ub3ZhdGlvbiYjeEE7QVNVIGFoZWFkIG9mIE1JVCBhbmQgU3RhbmZvcmQmI3hBO+KAlCBVLlMuIE5ld3MgJmFtcDsgV29ybGQgUmVwb3J0LCAyMDE24oCTMjQmI3hBOyYjeEE7IzEgaW4gc3VzdGFpbmFiaWxpdHkmI3hBO0FTVSBhaGVhZCBvZiBTdGFuZm9yZCBhbmQgVUMgQmVya2VsZXkmI3hBO+KAlCBTdXN0YWluYWJpbGl0eSBUcmFja2luZywgQXNzZXNzbWVudCAmYW1wOyBSYXRpbmcgU3lzdGVtLCAyMDIzJiN4QTsmI3hBOyMxIGluIGdsb2JhbCBpbXBhY3QmI3hBO0FTVSBhaGVhZCBvZiBNSVQgYW5kIFBlbm4gU3RhdGUmI3hBO+KAlCBUaW1lcyBIaWdoZXIgRWR1Y2F0aW9uLCAyMDIw4oCTMjMmI3hBOyYjeEE7Tm8uIDEgaW4gdGhlIFUuUyBmb3IgaW5ub3ZhdGlvbiBhbmQgZ2xvYmFsIGltcGFjdC4gTm8uIDEgaW4gTm9ydGggQW1lcmljYSBmb3Igc3VzdGFpbmFiaWxpdHkuPC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwvZGM6ZGVzY3JpcHRpb24+CiAgIDxkYzpzdWJqZWN0PgogICAgPHJkZjpCYWc+CiAgICAgPHJkZjpsaT5yYW5raW5nczwvcmRmOmxpPgogICAgIDxyZGY6bGk+aW5ub3ZhdGlvbjwvcmRmOmxpPgogICAgIDxyZGY6bGk+c3VzdGFpbmFiaWxpdHk8L3JkZjpsaT4KICAgICA8cmRmOmxpPmdsb2JhbCBpbXBhY3Q8L3JkZjpsaT4KICAgICA8cmRmOmxpPnVuaXZlcnNpdHk8L3JkZjpsaT4KICAgICA8cmRmOmxpPkFTVTwvcmRmOmxpPgogICAgIDxyZGY6bGk+QXJpem9uYTwvcmRmOmxpPgogICAgIDxyZGY6bGk+QXJpem9uYSBTdGF0ZSBVbml2ZXJzaXR5PC9yZGY6bGk+CiAgICAgPHJkZjpsaT51c25ld3M8L3JkZjpsaT4KICAgICA8cmRmOmxpPlN1c3RhaW5hYmlsaXR5IFRyYWNraW5nPC9yZGY6bGk+CiAgICAgPHJkZjpsaT5Bc3Nlc3NtZW50ICZhbXA7IFJhdGluZyBTeXN0ZW08L3JkZjpsaT4KICAgICA8cmRmOmxpPlRpbWVzIEhpZ2hlciBFZHVjYXRpb248L3JkZjpsaT4KICAgICA8cmRmOmxpPk5vLiAxPC9yZGY6bGk+CiAgICAgPHJk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", Xe = {
  MAPS_AND_LOCATIONS: "https://www.asu.edu/about/locations-maps",
  JOBS: "https://cfo.asu.edu/applicant",
  DIRECTORY: "https://search.asu.edu/?search-tabs=web_dir_faculty_staff",
  CONTACT_ASU: "https://www.asu.edu/about/contact",
  MY_ASU: "https://my.asu.edu/",
  RANKINGS: "https://www.asu.edu/rankings"
}, qe = {
  COPYRIGHT_AND_TRADEMARK: "https://www.asu.edu/about/copyright-trademark",
  ACCESSIBILITY_REPORT: "https://accessibility.asu.edu/report",
  PRIVACY: "https://www.asu.edu/about/privacy",
  TERMS_OF_USE: "https://www.asu.edu/about/terms-of-use",
  EMERGENCY: "https://www.asu.edu/emergency/"
}, ke = {
  type: "internal link",
  section: "secondary footer"
}, zi = () => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: "wrapper",
    id: "wrapper-footer-innovation",
    "data-testid": "innovation",
    children: /* @__PURE__ */ d.jsx("div", { className: "container", id: "footer-innovation", children: /* @__PURE__ */ d.jsx("div", { className: "row", children: /* @__PURE__ */ d.jsx("div", { className: "col", children: /* @__PURE__ */ d.jsxs("div", { className: "d-flex footer-innovation-links", children: [
      /* @__PURE__ */ d.jsxs("nav", { className: "nav", "aria-label": "University Services", children: [
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: Xe.MAPS_AND_LOCATIONS,
            onFocus: () => H({
              ...ke,
              text: "maps and locations"
            }),
            children: "Maps and Locations"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: Xe.JOBS,
            onFocus: () => H({
              ...ke,
              text: "jobs"
            }),
            children: "Jobs"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: Xe.DIRECTORY,
            onFocus: () => H({
              ...ke,
              text: "directory"
            }),
            children: "Directory"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: Xe.CONTACT_ASU,
            onFocus: () => H({
              ...ke,
              text: "contact asu"
            }),
            children: "Contact ASU"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: Xe.MY_ASU,
            onFocus: () => H({
              ...ke,
              text: "my asu"
            }),
            children: "My ASU"
          }
        )
      ] }),
      /* @__PURE__ */ d.jsx(
        "a",
        {
          className: "img-link",
          href: Xe.RANKINGS,
          onFocus: () => H({
            ...ke,
            text: "#1 in the u.s. for innovation"
          }),
          children: /* @__PURE__ */ d.jsx(
            "img",
            {
              src: Ri,
              alt: "Repeatedly ranked #1 in innovation (ASU ahead of MIT and Stanford), sustainability (ASU ahead of Stanford and UC Berkeley), and global impact (ASU ahead of MIT and Penn State)",
              width: "459",
              height: "100",
              loading: "lazy",
              decoding: "async"
            }
          )
        }
      )
    ] }) }) }) })
  }
), Ue = {
  type: "internal link",
  section: "tertiary footer"
}, Xi = () => {
  function e() {
    try {
      return window.location.href;
    } catch (t) {
      return console.error(t), "";
    }
  }
  return /* @__PURE__ */ d.jsx("div", { className: "wrapper", id: "wrapper-footer-colophon", "data-testid": "legal", children: /* @__PURE__ */ d.jsx("div", { className: "container", id: "footer-colophon", children: /* @__PURE__ */ d.jsx("div", { className: "row", children: /* @__PURE__ */ d.jsx("div", { className: "col", children: /* @__PURE__ */ d.jsxs(
    "nav",
    {
      className: "nav colophon",
      "aria-label": "University Legal and Compliance",
      children: [
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: qe.COPYRIGHT_AND_TRADEMARK,
            onFocus: () => H({
              ...Ue,
              text: "copyright and trademark"
            }),
            children: "Copyright and Trademark"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: `${qe.ACCESSIBILITY_REPORT}?a11yref=${e()}`,
            onFocus: () => H({
              ...Ue,
              text: "accessibility"
            }),
            children: "Accessibility"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: qe.PRIVACY,
            onFocus: () => H({
              ...Ue,
              text: "privacy"
            }),
            children: "Privacy"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: qe.TERMS_OF_USE,
            onFocus: () => H({
              ...Ue,
              text: "terms of use"
            }),
            children: "Terms of Use"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "a",
          {
            className: "nav-link",
            href: qe.EMERGENCY,
            onFocus: () => H({
              ...Ue,
              text: "emergency"
            }),
            children: "Emergency"
          }
        )
      ]
    }
  ) }) }) }) });
}, ki = {
  prefix: "fab",
  iconName: "square-instagram",
  icon: [448, 512, ["instagram-square"], "e055", "M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"]
}, ji = ki, Fi = {
  prefix: "fab",
  iconName: "square-youtube",
  icon: [448, 512, [61798, "youtube-square"], "f431", "M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z"]
}, Mi = Fi, Hi = {
  prefix: "fab",
  iconName: "square-facebook",
  icon: [448, 512, ["facebook-square"], "f082", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]
}, Li = Hi, Bi = {
  prefix: "fab",
  iconName: "linkedin",
  icon: [448, 512, [], "f08c", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]
}, Vi = {
  prefix: "fab",
  iconName: "square-x-twitter",
  icon: [448, 512, [], "e61a", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"]
}, Si = "data:image/png;base64,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", je = {
  type: "external link",
  section: "primary footer"
}, Et = ({ social: { logoUrl: e, unitLogo: t, mediaLinks: n } }) => /* @__PURE__ */ d.jsx("div", { className: "wrapper", id: "wrapper-endorsed-footer", "data-testid": "social", children: /* @__PURE__ */ d.jsx("div", { className: "container", id: "endorsed-footer", children: /* @__PURE__ */ d.jsxs("div", { className: "row", children: [
  /* @__PURE__ */ d.jsx("div", { className: "col-md", id: "endorsed-logo", children: /* @__PURE__ */ d.jsx(
    "a",
    {
      href: e,
      onFocus: () => H({
        ...je,
        type: "internal link",
        text: "asu logo"
      }),
      children: /* @__PURE__ */ d.jsx(
        "img",
        {
          src: t,
          alt: "ASU University Technology Office Arizona State University."
        }
      )
    }
  ) }),
  n && /* @__PURE__ */ d.jsx("div", { className: "col-md", id: "social-media", children: /* @__PURE__ */ d.jsxs("nav", { className: "nav", "aria-label": "Social Media", children: [
    n.facebook && /* @__PURE__ */ d.jsx(
      "a",
      {
        className: "nav-link",
        href: n.facebook,
        "data-testid": "facebook",
        onFocus: () => H({
          ...je,
          text: "facebook icon"
        }),
        children: /* @__PURE__ */ d.jsx(
          ce,
          {
            title: "Facebook Social Media Icon",
            icon: Li
          }
        )
      }
    ),
    n.twitter && /* @__PURE__ */ d.jsx(
      "a",
      {
        className: "nav-link",
        href: n.twitter,
        "data-testid": "twitter",
        onFocus: () => H({
          ...je,
          text: "twitter icon"
        }),
        children: /* @__PURE__ */ d.jsx(
          ce,
          {
            title: "Twitter Social Media Icon",
            icon: Vi
          }
        )
      }
    ),
    n.instagram && /* @__PURE__ */ d.jsx(
      "a",
      {
        className: "nav-link",
        href: n.instagram,
        "data-testid": "instagram",
        onFocus: () => H({
          ...je,
          text: "instagram icon"
        }),
        children: /* @__PURE__ */ d.jsx(
          ce,
          {
            title: "Instagram Social Media Icon",
            icon: ji
          }
        )
      }
    ),
    n.youtube && /* @__PURE__ */ d.jsx(
      "a",
      {
        className: "nav-link",
        href: n.youtube,
        "data-testid": "youtube",
        onFocus: () => H({
          ...je,
          text: "youtube icon"
        }),
        children: /* @__PURE__ */ d.jsx(
          ce,
          {
            title: "YouTube Social Media Icon",
            icon: Mi
          }
        )
      }
    ),
    n.linkedIn && /* @__PURE__ */ d.jsx(
      "a",
      {
        className: "nav-link",
        href: n.linkedIn,
        "data-testid": "linkedin",
        onFocus: () => H({
          ...je,
          text: "linkedin icon"
        }),
        children: /* @__PURE__ */ d.jsx(
          ce,
          {
            title: "LinkedIn Social Media Icon",
            icon: Bi
          }
        )
      }
    )
  ] }) })
] }) }) });
Et.propTypes = {
  social: W.shape({
    unitLogo: p.string.isRequired,
    mediaLinks: W.shape({
      facebook: p.string,
      twitter: p.string,
      linkedIn: p.string,
      instagram: p.string,
      youtube: p.string
    })
  })
};
Et.defaultProps = {
  social: {
    unitLogo: Si,
    mediaLinks: {
      facebook: "",
      twitter: "",
      linkedIn: "",
      instagram: "",
      youtube: ""
    }
  }
};
const Zi = () => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
  /* @__PURE__ */ d.jsx(zi, {}),
  /* @__PURE__ */ d.jsx(Xi, {})
] }), wr = ({ social: e, contact: t }) => (qr(() => {
  typeof window < "u" && $r({
    packageName: "component-footer",
    component: "Component Footer",
    type: "NA",
    configuration: {
      social: e,
      contact: t
    }
  });
}, []), /* @__PURE__ */ d.jsxs("footer", { role: "contentinfo", children: [
  e && /* @__PURE__ */ d.jsx(Et, { social: e }),
  t && /* @__PURE__ */ d.jsx(Ot, { contact: t }),
  /* @__PURE__ */ d.jsx(Zi, {})
] }));
wr.propTypes = {
  social: W.shape(Et.propTypes),
  contact: W.shape(Ot.propTypes)
};
const Wi = (e, t, n) => {
  Wa(n).render(yt.createElement(e, t));
}, Ui = ({ targetSelector: e, props: t }) => {
  Wi(wr, t, document.querySelector(e));
};
export {
  wr as ASUFooter,
  Ui as initASUFooter
};
