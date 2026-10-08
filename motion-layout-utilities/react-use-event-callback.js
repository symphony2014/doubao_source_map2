// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$0' to 'useEventCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 112412
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var r = typeof window != "undefined" ? reactCoreLibraryReexport.useLayoutEffect : reactCoreLibraryReexport.useEffect;
  function s(t) {
    let e = reactCoreLibraryReexport.useRef(() => {
      throw Error("Cannot call an event handler while rendering.");
    });
    r(() => {
      e.current = t;
    }, [t]);
    return reactCoreLibraryReexport.useCallback(function () {
      var t;
      var i = arguments.length;
      var n = Array(i);
      var r = 0;
      for (; r < i; r++) {
        n[r] = arguments[r];
      }
      if ((t = e.current) == null) {
        return undefined;
      } else {
        return t.call(e, ...n);
      }
    }, [e]);
  }
  require.d(exports, {
    useEventCallback: function () {
      return s;
    }
  });
}