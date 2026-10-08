// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'gm' to 'useTextDirection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18380.923ae249.js
         * chunkId: 18380
         * moduleId: 833962
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var u = reactCoreLibraryReexport.createContext(undefined);
  function o(e) {
    let t = reactCoreLibraryReexport.useContext(u);
    return e || t || "ltr";
  }
  require.d(exports, {
    useTextDirection: function () {
      return o;
    }
  });
}