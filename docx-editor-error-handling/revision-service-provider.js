// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'revisionServiceId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 493533
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("revision-service");
  require.d(exports, {
    revisionServiceId: function () {
      return n;
    }
  });
}