// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'useConstant'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68975.2fb3af7c.js
         * chunkId: 68975
         * moduleId: 712385
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function r(t) {
    let e = reactCoreLibraryReexport.useRef(null);
    if (e.current === null) {
      e.current = t();
    }
    return e.current;
  }
  require.d(exports, {
    useConstant: function () {
      return r;
    }
  });
}