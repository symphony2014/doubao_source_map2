// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'layoutNodeChanges'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 666088
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("layout-node-changes-context");
  require.d(exports, {
    layoutNodeChanges: function () {
      return n;
    }
  });
}