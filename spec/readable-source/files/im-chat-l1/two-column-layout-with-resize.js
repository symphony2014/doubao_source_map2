// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'TwoColumnLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 180797
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var a = "inner-x_512Y";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      leftClassName: r,
      style: i,
      left: c,
      right: d,
      content: u,
      syncSideWidths: f = true,
      ...p
    } = e;
    let {
      ref: v,
      width: _
    } = resizeObserverHooks.useResizeObserverEx();
    let {
      ref: h,
      width: m
    } = resizeObserverHooks.useResizeObserverEx();
    let g = _ && m && Math.max(_, m);
    let x = f ? g : _;
    let b = f ? g : m;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: t,
      className: l("container-Qw3qhD", n),
      style: i,
      ...p,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: l("left-PsR8v7", r),
        style: {
          width: x
        },
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          ref: v,
          className: l(a, r),
          children: c
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "content-QJgGst",
        children: u
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "right-u0Rtcn",
        style: {
          width: b
        },
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          ref: h,
          className: a,
          children: d
        })
      })]
    });
  });
  require.d(exports, {
    TwoColumnLayout: function () {
      return c;
    }
  });
}