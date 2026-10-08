// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'LazyLottiePlayer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 364746
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.all([require.e("lottie-web-player-core") /*id: 97546*/, require.e("lib-lottie") /*id: 8863*/]).then(require.t.bind(require, 31951, 23))
  }));
  let r = reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {});
  let s = e => {
    let {
      fallback: t,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
      fallback: t ?? r,
      children: reactJsxRuntimeCoreReexport.jsx(l, {
        ...n
      })
    });
  };
  require.d(exports, {
    LazyLottiePlayer: function () {
      return s;
    }
  });
}