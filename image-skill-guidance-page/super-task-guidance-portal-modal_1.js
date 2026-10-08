// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'SuperTaskGuidance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 743071
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let n = require("react-suspense-wrapper") /*id: 944055*/.withSuspense(reactCoreLibraryReexport.lazy(() => require.e("super-task-modal") /*id: 49348*/.then(require.bind(require, "super-task-guidance-portal-modal") /*id: 314912*/).then(e => ({
    default: e.SuperTaskFeatureGuidancePortalModal
  }))));
  require.d(exports, {
    SuperTaskGuidance: function () {
      return n;
    }
  });
}