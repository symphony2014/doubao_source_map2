// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'customIconProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 274402
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("custom-icon");
  require.d(exports, {
    customIconProvider: function () {
      return n;
    }
  });
}