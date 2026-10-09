// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useMemoizedCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 983998
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var typeCheckUtils = require("type-check-utils") /*id: 916406*/;
  var featureFlagConstant = require("feature-flag-constant") /*id: 523244*/;
  exports.useMemoizedCallback = function (e) {
    if (featureFlagConstant.isFeatureEnabled) {
      typeCheckUtils.isFunction(e);
    }
    var t = reactCoreLibraryReexport.useRef(e);
    t.current = reactCoreLibraryReexport.useMemo(function () {
      return e;
    }, [e]);
    var n = reactCoreLibraryReexport.useRef();
    n.current ||= function () {
      var e = [];
      var n = 0;
      for (; n < arguments.length; n++) {
        e[n] = arguments[n];
      }
      return t.current.apply(this, e);
    };
    return n.current;
  };
}