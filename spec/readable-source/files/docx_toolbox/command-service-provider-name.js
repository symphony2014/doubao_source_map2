// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'commandServiceName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 745403
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("command-service");
  require.d(exports, {
    commandServiceName: function () {
      return o;
    }
  });
}