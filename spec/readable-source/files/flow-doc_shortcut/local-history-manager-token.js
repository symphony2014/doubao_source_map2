// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'historyManagerToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 446483
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("LocalHistoryManager");
  require.d(exports, {
    historyManagerToken: function () {
      return o;
    }
  });
}