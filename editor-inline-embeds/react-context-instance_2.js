// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'SharedContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 769735
         */
module.exports = function (module, exports, require) {
  let r = require("react-core-library-reexport") /*id: 634663*/.createContext({});
  require.d(exports, {
    SharedContext: function () {
      return r;
    }
  });
}