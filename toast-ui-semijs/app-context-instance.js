// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'appContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68975.2fb3af7c.js
         * chunkId: 68975
         * moduleId: 63821
         */
module.exports = function (module, exports, require) {
  let n = require("react-core-library-reexport") /*id: 634663*/.createContext(null);
  require.d(exports, {
    appContext: function () {
      return n;
    }
  });
}