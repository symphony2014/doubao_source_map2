// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'fC' to 'Progress'
// - Renamed export 'z$' to 'ProgressIndicator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 183101
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextUtils = require("react-context-utils") /*id: 187414*/;
  var reactPrimitiveComponents = require("react-primitive-components") /*id: 301296*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var a = "Progress";
  var [s, c] = reactContextUtils.createContextScope(a);
  var [d, u] = s(a);
  var p = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeProgress: n,
      value: i = null,
      max: l,
      getValueLabel: a = f,
      ...s
    } = e;
    if (l || l === 0) {
      _(l);
    }
    let c = _(l) ? l : 100;
    if (i !== null) {
      b(i, c);
    }
    let u = b(i, c) ? i : null;
    let p = g(u) ? a(u, c) : undefined;
    return reactJsxRuntimeCoreReexport.jsx(d, {
      scope: n,
      value: u,
      max: c,
      children: reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
        "aria-valuemax": c,
        "aria-valuemin": 0,
        "aria-valuenow": g(u) ? u : undefined,
        "aria-valuetext": p,
        role: "progressbar",
        "data-state": h(u, c),
        "data-value": u ?? undefined,
        "data-max": c,
        ...s,
        ref: t
      })
    });
  });
  p.displayName = a;
  var m = "ProgressIndicator";
  var v = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeProgress: i,
      ...l
    } = e;
    let a = u(m, i);
    return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
      "data-state": h(a.value, a.max),
      "data-value": a.value ?? undefined,
      "data-max": a.max,
      ...l,
      ref: t
    });
  });
  function f(e, t) {
    return `${Math.round(e / t * 100)}%`;
  }
  function h(e, t) {
    if (e == null) {
      return "indeterminate";
    } else if (e === t) {
      return "complete";
    } else {
      return "loading";
    }
  }
  function g(e) {
    return typeof e == "number";
  }
  function _(e) {
    return g(e) && !isNaN(e) && e > 0;
  }
  function b(e, t) {
    return g(e) && !isNaN(e) && e <= t && e >= 0;
  }
  v.displayName = m;
  var k = p;
  var y = v;
  require.d(exports, {
    Progress: function () {
      return k;
    },
    ProgressIndicator: function () {
      return y;
    }
  });
}