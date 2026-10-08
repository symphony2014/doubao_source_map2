// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'FeedbackReportModal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 25486
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => Promise.all([require.e("samantha-message-utils") /*id: 79175*/, require.e("ui-utils-module") /*id: 83673*/]).then(require.bind(require, "feedback-report-modal-component") /*id: 184064*/)), () => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}));
  require.d(exports, {
    FeedbackReportModal: function () {
      return a;
    }
  });
}