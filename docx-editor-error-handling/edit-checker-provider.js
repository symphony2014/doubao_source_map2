// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'editCheckerProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 884051
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("edit-checker");
  require.d(exports, {
    editCheckerProvider: function () {
      return n;
    }
  });
}