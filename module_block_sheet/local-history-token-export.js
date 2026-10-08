// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'historyManagerToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 237053
         */
module.exports = function (module, exports, require) {
  var localHistoryManagerToken = require("local-history-manager-token") /*id: 446483*/;
  require.d(exports, {
    historyManagerToken: function () {
      return localHistoryManagerToken.historyManagerToken;
    }
  });
}