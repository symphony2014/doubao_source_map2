// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useFeatureFlagEffect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 806314
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var typeCheckUtils = require("type-check-utils") /*id: 916406*/;
  var featureFlagConstant = require("feature-flag-constant") /*id: 523244*/;
  exports.useFeatureFlagEffect = function (e) {
    if (featureFlagConstant.isFeatureEnabled) {
      typeCheckUtils.isFunction(e);
    }
    reactCoreLibraryReexport.useEffect(function () {
      if (e != null) {
        e();
      }
    }, []);
  };
}