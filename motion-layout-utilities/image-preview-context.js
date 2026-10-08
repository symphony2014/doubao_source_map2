// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'previewContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 61163
         */
module.exports = function (module, exports, require) {
  let n = require("react-core-library-reexport") /*id: 634663*/.createContext(null);
  require.d(exports, {
    previewContext: function () {
      return n;
    }
  });
}