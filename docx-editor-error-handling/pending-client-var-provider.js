// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'pendingClientVarId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 835547
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("pending-client-var");
  require.d(exports, {
    pendingClientVarId: function () {
      return n;
    }
  });
}