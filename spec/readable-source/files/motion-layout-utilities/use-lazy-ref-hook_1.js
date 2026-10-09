// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'useLazyRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 906944
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
    useLazyRef: function () {
      return r;
    }
  });
}