// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'FeedbackModalBase'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 244987
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("feedback-modal-component") /*id: 9796*/.then(require.bind(require, "feedback-modal-base") /*id: 462416*/).then(e => ({
      default: e.FeedbackModalBase
    }))
  })), () => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}));
  require.d(exports, {
    FeedbackModalBase: function () {
      return s;
    }
  });
}