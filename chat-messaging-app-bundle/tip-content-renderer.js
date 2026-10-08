// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'TipContentRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 579314
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var runtimeLinkRenderer = require("runtime-link-renderer") /*id: 870490*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var s = {
    TEXT: 1,
    URL: 2
  };
  let c = e => {
    let {
      jsonString: t,
      tips: i,
      isBlock: n
    } = e;
    let c = i ?? [];
    if (!(i == null ? undefined : i.length) && !!t) {
      c = safeJsonUtils.safeParse(t, []);
    }
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: c.map(e => {
        let {
          type: t,
          text: i,
          url: a
        } = e;
        if (t === s.URL) {
          return reactJsxRuntimeCoreReexport.jsx(runtimeLinkRenderer.RuntimeLink, {
            to: a ?? "",
            target: "_blank",
            rel: "noopener noreferrer",
            className: r("block text-sm/[24px] text-s-color-brand-primary-default", {
              "mt-12": !n
            }),
            children: i
          });
        } else if (t === s.TEXT) {
          return reactJsxRuntimeCoreReexport.jsx("div", {
            className: r("text-sm/[24px] text-s-color-text-quaternary", {
              "mt-12": !n
            }),
            children: i
          });
        } else {
          return null;
        }
      })
    });
  };
  require.d(exports, {
    TipContentRenderer: function () {
      return c;
    }
  });
}