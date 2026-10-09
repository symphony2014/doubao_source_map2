// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'hideLoadingSubject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 822039
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("hide-loading-subject");
  require.d(exports, {
    hideLoadingSubject: function () {
      return n;
    }
  });
}