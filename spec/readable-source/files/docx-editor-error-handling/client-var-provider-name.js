// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'clientVarProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 399717
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("client-var");
  require.d(exports, {
    clientVarProvider: function () {
      return n;
    }
  });
}