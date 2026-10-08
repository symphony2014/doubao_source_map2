// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'SearchSpinAnimationComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 955234
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("search-spin") /*id: 52093*/.then(require.bind(require, "search-spin-animation") /*id: 508160*/)
  }));
  let a = e => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
    fallback: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
    children: reactJsxRuntimeCoreReexport.jsx(o, {
      ...e
    })
  });
  require.d(exports, {
    SearchSpinAnimationComponent: function () {
      return a;
    }
  });
}