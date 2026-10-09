// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useDebounceCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 420834
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var typeCheckUtils = require("type-check-utils") /*id: 916406*/;
  exports.useDebounceCallback = function (e, t) {
    var n = reactFunctionMemoHook.useMemoizedCallback(e);
    var a = reactCoreLibraryReexport.useRef(null);
    var l = reactCoreLibraryReexport.useCallback(function () {
      if (a.current) {
        clearTimeout(a.current);
      }
    }, []);
    reactCoreLibraryReexport.useEffect(function () {
      if (typeCheckUtils.isNumber(t) && !(t < 0)) {
        a.current = setTimeout(n, t);
        return l;
      }
    }, [t]);
    return l;
  };
}