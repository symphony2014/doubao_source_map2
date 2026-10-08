// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'pageOopsProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 695060
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("page-oops-service");
  require.d(exports, {
    pageOopsProvider: function () {
      return n;
    }
  });
}