// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'fallbackServiceName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 947937
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("fallback");
  require.d(exports, {
    fallbackServiceName: function () {
      return n;
    }
  });
}