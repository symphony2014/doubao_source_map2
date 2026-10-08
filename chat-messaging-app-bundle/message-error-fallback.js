// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'MessageErrorView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 428170
         */
module.exports = function (module, exports, require) {
  var refreshIconRtlComponent = require("refresh-icon-rtl-component") /*id: 460264*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let i = e => {
    let {
      resetErrorBoundary: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "message-error-fallback-Ys_0Nu",
      onClick: () => {
        t();
      },
      "data-testid": "message-error-fallback",
      children: reactJsxRuntimeCoreReexport.jsx(refreshIconRtlComponent.RefreshIconRtl, {
        className: "message-error-refresh-ol3P8W"
      })
    });
  };
  require.d(exports, {
    MessageErrorView: function () {
      return i;
    }
  });
}