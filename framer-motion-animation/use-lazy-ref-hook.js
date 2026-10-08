// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'useLazyRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 693163
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