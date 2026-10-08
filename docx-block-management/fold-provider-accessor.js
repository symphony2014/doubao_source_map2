// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'foldProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 786534
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("fold");
  require.d(exports, {
    foldProvider: function () {
      return o;
    }
  });
}