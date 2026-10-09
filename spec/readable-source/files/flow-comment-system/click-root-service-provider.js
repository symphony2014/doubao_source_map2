// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'clickRootService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 398284
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("click-root-service");
  require.d(exports, {
    clickRootService: function () {
      return o;
    }
  });
}