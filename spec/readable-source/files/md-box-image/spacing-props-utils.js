// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'NA' to 'getNegativeSpacing'
// - Renamed export 'hB' to 'getSpacingResolver'
// - Renamed export 'e6' to 'handleMarginProps'
// - Renamed export 'o3' to 'handlePaddingProps'
// - Renamed export 'eI' to 'resolveThemeSpacing'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 482854
         */
module.exports = function (module, exports, require) {
  var breakpointUtils = require("breakpoint-utils") /*id: 314944*/;
  var themeStylePropResolver = require("theme-style-prop-resolver") /*id: 284434*/;
  var propsMergeUtil = require("props-merge-util") /*id: 649340*/;
  let a = {
    m: "margin",
    p: "padding"
  };
  let s = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"]
  };
  let l = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  };
  let u = function (e) {
    let t = {};
    return n => {
      if (t[n] === undefined) {
        t[n] = e(n);
      }
      return t[n];
    };
  }(e => {
    if (e.length > 2) {
      if (!l[e]) {
        return [e];
      }
      e = l[e];
    }
    let [t, n] = e.split("");
    let r = a[t];
    let i = s[n] || "";
    if (Array.isArray(i)) {
      return i.map(e => r + e);
    } else {
      return [r + i];
    }
  });
  let c = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
  let d = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
  let p = [...c, ...d];
  function h(e, t, n, r) {
    let a = themeStylePropResolver.resolveThemePath(e, t, false) ?? n;
    if (typeof a == "number") {
      return e => typeof e == "string" ? e : a * e;
    } else if (Array.isArray(a)) {
      return e => typeof e == "string" ? e : a[e];
    } else if (typeof a == "function") {
      return a;
    } else {
      return () => undefined;
    }
  }
  function f(e) {
    return h(e, "spacing", 8, "spacing");
  }
  function m(e, t) {
    if (typeof t == "string" || t == null) {
      return t;
    }
    let n = e(Math.abs(t));
    if (t >= 0) {
      return n;
    } else if (typeof n == "number") {
      return -n;
    } else {
      return `-${n}`;
    }
  }
  function g(e, t) {
    let n = f(e.theme);
    return Object.keys(e).map(i => function (e, t, n, i) {
      var o;
      if (t.indexOf(n) === -1) {
        return null;
      }
      o = u(n);
      let a = e => o.reduce((t, n) => {
        t[n] = m(i, e);
        return t;
      }, {});
      let s = e[n];
      return breakpointUtils.handleBreakpoints(e, s, a);
    }(e, t, i, n)).reduce(propsMergeUtil.mergeProps, {});
  }
  function y(e) {
    return g(e, c);
  }
  function b(e) {
    return g(e, d);
  }
  function v(e) {
    return g(e, p);
  }
  y.propTypes = {};
  y.filterProps = c;
  b.propTypes = {};
  b.filterProps = d;
  v.propTypes = {};
  v.filterProps = p;
  require.d(exports, {
    getNegativeSpacing: function () {
      return m;
    },
    getSpacingResolver: function () {
      return f;
    },
    handleMarginProps: function () {
      return y;
    },
    handlePaddingProps: function () {
      return b;
    },
    resolveThemeSpacing: function () {
      return h;
    }
  });
}