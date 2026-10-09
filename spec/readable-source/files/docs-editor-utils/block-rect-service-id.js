// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'blockRectServiceId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 768934
         */
module.exports = function (module, exports, require) {
  var blockRectServiceProvider = require("block-rect-service-provider") /*id: 688428*/;
  require.d(exports, {
    blockRectServiceId: function () {
      return blockRectServiceProvider.blockRectServiceId;
    }
  });
}