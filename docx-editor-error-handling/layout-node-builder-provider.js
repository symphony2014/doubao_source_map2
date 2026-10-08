// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'layoutNodeBuilder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 163942
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("layout-node-builder");
  require.d(exports, {
    layoutNodeBuilder: function () {
      return n;
    }
  });
}