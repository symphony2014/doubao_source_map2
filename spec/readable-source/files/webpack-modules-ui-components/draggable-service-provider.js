// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'draggableServiceId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 66209
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("draggable-service");
  require.d(exports, {
    draggableServiceId: function () {
      return o;
    }
  });
}