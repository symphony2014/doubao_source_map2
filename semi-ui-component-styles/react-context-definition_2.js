// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'Provider'
// - Renamed export 'h' to 'Context'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 364030
         */
module.exports = function (module, exports, require) {
  let n = require("react-core-library-reexport") /*id: 634663*/.createContext(null);
  let r = n.Provider;
  require.d(exports, {
    Provider: function () {
      return r;
    },
    Context: function () {
      return n;
    }
  });
}