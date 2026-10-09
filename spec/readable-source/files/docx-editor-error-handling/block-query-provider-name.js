// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'blockQueryProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 856405
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("block-query");
  require.d(exports, {
    blockQueryProvider: function () {
      return n;
    }
  });
}