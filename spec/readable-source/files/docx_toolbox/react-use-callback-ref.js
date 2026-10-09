// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useCallbackRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 354316
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i() {
    let e = reactCoreLibraryReexport.useRef(() => {});
    let n = reactCoreLibraryReexport.useCallback(() => {
      e.current();
    }, []);
    return [e, n];
  }
  require.d(exports, {
    useCallbackRef: function () {
      return i;
    }
  });
}