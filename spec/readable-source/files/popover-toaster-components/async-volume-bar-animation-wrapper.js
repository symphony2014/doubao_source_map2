// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'VolumeBarAnimation'
// - Renamed export 'w' to 'loadVolumeBarAnimation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-tool-button.3b5f4e57.js
         * chunkId: 76842
         * moduleId: 356610
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function s() {
    return require.e("lib-component-asr-animate") /*id: 44232*/.then(require.bind(require, "volume-bar-animation") /*id: 452095*/);
  }
  let a = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: s
  }));
  let l = e => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
    fallback: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
    children: reactJsxRuntimeCoreReexport.jsx(a, {
      ...e
    })
  });
  require.d(exports, {
    VolumeBarAnimation: function () {
      return l;
    },
    loadVolumeBarAnimation: function () {
      return s;
    }
  });
}