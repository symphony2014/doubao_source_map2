// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'turnIntoProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 887790
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("turn-into");
  require.d(exports, {
    turnIntoProvider: function () {
      return o;
    }
  });
}