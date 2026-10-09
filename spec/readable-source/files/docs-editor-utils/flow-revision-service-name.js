// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'revisionServiceName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 934786
         */
module.exports = function (module, exports, require) {
  let i = require("dependency-injection-container") /*id: 555385*/.providerName("flow-revision-service");
  require.d(exports, {
    revisionServiceName: function () {
      return i;
    }
  });
}