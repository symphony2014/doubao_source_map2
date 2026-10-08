// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'commonErrorPageBoundaryComponent'
// - Resolved require(318434) to 'common-error-page-boundary-component'
// - Updated imported property 'K' to 'CommonErrorPageBoundary' (module 318434)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: common-error-fallback.bf867901.js
         * chunkId: 57220
         * moduleId: 1286
         */
module.exports = function (module, exports, require) {
  var commonErrorPageBoundaryComponent = require("common-error-page-boundary-component") /*id: 318434*/;
  require.r(exports);
  require.d(exports, {
    CommonErrorPage: function () {
      return commonErrorPageBoundaryComponent.CommonErrorPageBoundary;
    }
  });
}