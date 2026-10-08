// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'adjustBlockSsrName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 523731
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("adjust-block-ssr-layout");
  require.d(exports, {
    adjustBlockSsrName: function () {
      return n;
    }
  });
}