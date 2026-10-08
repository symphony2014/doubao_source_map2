// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'blockManagerToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 443647
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("block-manager");
  require.d(exports, {
    blockManagerToken: function () {
      return o;
    }
  });
}