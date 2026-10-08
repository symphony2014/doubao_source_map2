// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'loadableBlockToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 289910
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("loadable-block-fetcher");
  require.d(exports, {
    loadableBlockToken: function () {
      return n;
    }
  });
}