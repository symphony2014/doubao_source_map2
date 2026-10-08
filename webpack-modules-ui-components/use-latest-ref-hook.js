// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useLatestRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 129756
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i(e) {
    let n = reactCoreLibraryReexport.useRef(e);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      n.current = e;
    }, [e]);
    return n;
  }
  require.d(exports, {
    useLatestRef: function () {
      return i;
    }
  });
}