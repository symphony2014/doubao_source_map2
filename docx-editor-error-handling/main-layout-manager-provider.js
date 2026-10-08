// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'mainLayoutManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 351995
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("mainLayoutManager");
  require.d(exports, {
    mainLayoutManager: function () {
      return n;
    }
  });
}