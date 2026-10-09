// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useOnUnmount'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 297204
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var typeCheckUtils = require("type-check-utils") /*id: 916406*/;
  var featureFlagConstant = require("feature-flag-constant") /*id: 523244*/;
  exports.useOnUnmount = function (e) {
    if (featureFlagConstant.isFeatureEnabled) {
      typeCheckUtils.isFunction(e);
    }
    var t = useLatestRef_1.useLatestRef(e);
    reactCoreLibraryReexport.useEffect(function () {
      return function () {
        t.current();
      };
    }, []);
  };
}