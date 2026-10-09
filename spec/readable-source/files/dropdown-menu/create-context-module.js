// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'createContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 99771.2ba6bc81.js
         * chunkId: 99771
         * moduleId: 2998
         */
module.exports = function (module, exports, require) {
  var r = require("react-core-library-reexport") /*id: 634663*/.createContext(null);
  require.d(exports, {
    createContext: function () {
      return r;
    }
  });
}