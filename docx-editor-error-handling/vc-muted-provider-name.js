// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'vcMutedProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 120758
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("vc-muted");
  require.d(exports, {
    vcMutedProviderName: function () {
      return n;
    }
  });
}