// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'uiContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68975.2fb3af7c.js
         * chunkId: 68975
         * moduleId: 10109
         */
module.exports = function (module, exports, require) {
  let n = require("react-core-library-reexport") /*id: 634663*/.createContext({});
  require.d(exports, {
    uiContext: function () {
      return n;
    }
  });
}