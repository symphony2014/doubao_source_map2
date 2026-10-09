// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'useStableCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 600393
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i(e) {
    let n = reactCoreLibraryReexport.useRef(e);
    n.current = e;
    return reactCoreLibraryReexport.useCallback(function () {
      var e = arguments.length;
      var r = Array(e);
      var o = 0;
      for (; o < e; o++) {
        r[o] = arguments[o];
      }
      return n.current(...r);
    }, []);
  }
  require.d(exports, {
    useStableCallback: function () {
      return i;
    }
  });
}