// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useIntervalCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-lazy.b5ecf0c8.js
         * chunkId: 21658
         * moduleId: 601556
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var typeCheckUtils = require("type-check-utils") /*id: 916406*/;
  exports.useIntervalCallback = function (n, t, r = {}) {
    var o = reactFunctionMemoHook.useMemoizedCallback(n);
    var f = reactCoreLibraryReexport.useRef(null);
    var a = reactCoreLibraryReexport.useCallback(function () {
      if (f.current) {
        clearInterval(f.current);
      }
    }, []);
    reactCoreLibraryReexport.useEffect(function () {
      if (typeCheckUtils.isNumber(t) && !(t < 0)) {
        if (r.immediate) {
          o();
        }
        f.current = setInterval(o, t);
        return a;
      }
    }, [t, r.immediate]);
    return a;
  };
}