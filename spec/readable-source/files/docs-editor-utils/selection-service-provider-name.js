// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'selectionServiceKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 572319
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("selection-service");
  require.d(exports, {
    selectionServiceKey: function () {
      return o;
    }
  });
}