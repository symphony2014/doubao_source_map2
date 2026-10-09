// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'WritingMoveLottieComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 38746.3a784493.js
         * chunkId: 38746
         * moduleId: 608838
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  let a = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => require.e("writing-move-animate-lottie") /*id: 58299*/.then(require.bind(require, "writing-move-lottie-component") /*id: 965043*/)
  })));
  require.d(exports, {
    WritingMoveLottieComponent: function () {
      return a;
    }
  });
}