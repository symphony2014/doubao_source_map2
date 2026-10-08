// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'MicPermissionBtn'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-tool-button.3b5f4e57.js
         * chunkId: 76842
         * moduleId: 140956
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        MicPermissionCard: e
      } = await require.e("mic-permission-card") /*id: 80234*/.then(require.bind(require, "mic-permission-card") /*id: 747020*/);
      return {
        default: e
      };
    }
  }));
  let a = e => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
    fallback: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
    children: reactJsxRuntimeCoreReexport.jsx(s, {
      ...e
    })
  });
  require.d(exports, {
    MicPermissionBtn: function () {
      return a;
    }
  });
}