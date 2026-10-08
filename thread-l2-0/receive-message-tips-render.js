// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'MessageTipsRender'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-receive-message-render.0bf9bb67.js
         * chunkId: 15692
         * moduleId: 436992
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var runtimeLinkRenderer = require("runtime-link-renderer") /*id: 870490*/;
  var u = {
    TEXT: 1,
    URL: 2
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = t => {
    let {
      jsonString: e,
      tips: r,
      isBlock: n
    } = t;
    let c = r ?? [];
    if (!(r == null ? undefined : r.length) && !!e) {
      c = safeJsonUtils.safeParse(e, []);
    }
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: c.map((t, e) => {
        let {
          type: r,
          text: l,
          url: c
        } = t;
        let a = `${r}-${e}`;
        if (r === u.URL) {
          return reactJsxRuntimeCoreReexport.jsx(runtimeLinkRenderer.RuntimeLink, {
            to: c ?? "",
            target: "_blank",
            rel: "noopener noreferrer",
            className: i("block text-sm/[24px] text-s-color-brand-primary-default", {
              "mt-12": !n
            }),
            children: l
          }, a);
        } else if (r === u.TEXT) {
          return reactJsxRuntimeCoreReexport.jsx("div", {
            className: i("text-sm/[24px] text-s-color-text-quaternary", {
              "mt-12": !n
            }),
            children: l
          }, a);
        } else {
          return null;
        }
      })
    });
  };
  require.d(exports, {
    MessageTipsRender: function () {
      return c;
    }
  });
}