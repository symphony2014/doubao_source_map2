// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'relationServiceProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 233471
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("relation-service");
  require.d(exports, {
    relationServiceProviderName: function () {
      return n;
    }
  });
}