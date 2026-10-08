// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'useContextHook'
// - Renamed export 'T' to 'ContextInstance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58948.b1d5109e.js
         * chunkId: 58948
         * moduleId: 229399
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = reactCoreLibraryReexport.createContext(false);
  let o = () => reactCoreLibraryReexport.useContext(r);
  require.d(exports, {
    useContextHook: function () {
      return o;
    },
    ContextInstance: function () {
      return r;
    }
  });
}