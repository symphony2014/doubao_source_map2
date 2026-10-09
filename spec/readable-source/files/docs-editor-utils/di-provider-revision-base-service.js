// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'revisionBaseService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 951946
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("revision-base-service");
  require.d(exports, {
    revisionBaseService: function () {
      return o;
    }
  });
}