// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'collabProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 70666.7b9c3546.js
         * chunkId: 70666
         * moduleId: 930308
         */
module.exports = function (module, exports, require) {
  let i = require("dependency-injection-container") /*id: 555385*/.providerName("collab");
  require.d(exports, {
    collabProvider: function () {
      return i;
    }
  });
}