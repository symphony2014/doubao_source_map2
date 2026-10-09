// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'blockManagerToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 109058
         */
module.exports = function (module, exports, require) {
  var blockManagerProviderName = require("block-manager-provider-name") /*id: 443647*/;
  require.d(exports, {
    blockManagerToken: function () {
      return blockManagerProviderName.blockManagerToken;
    }
  });
}