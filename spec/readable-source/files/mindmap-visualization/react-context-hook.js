// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useContextValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14702.d6c1bb8c.js
         * chunkId: 14702
         * moduleId: 449294
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let a = reactCoreLibraryReexport.createContext({});
  exports.useContextValue = () => reactCoreLibraryReexport.useContext(a);
}