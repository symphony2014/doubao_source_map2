// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'docxSignalService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 812434
         */
module.exports = function (module, exports, require) {
  let i = require("dependency-injection-container") /*id: 555385*/.providerName("docx-signal-service");
  require.d(exports, {
    docxSignalService: function () {
      return i;
    }
  });
}