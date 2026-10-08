// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'createContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 324875
         */
module.exports = function (module, exports, require) {
  let n = require("react-core-library-reexport") /*id: 634663*/.createContext({});
  require.d(exports, {
    createContext: function () {
      return n;
    }
  });
}