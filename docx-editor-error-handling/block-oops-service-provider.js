// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'blockOopsServiceId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 574532
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("block-oops-service");
  require.d(exports, {
    blockOopsServiceId: function () {
      return n;
    }
  });
}