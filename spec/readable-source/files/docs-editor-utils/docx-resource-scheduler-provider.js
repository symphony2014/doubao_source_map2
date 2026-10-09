// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'docxSchedulerProv'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 54859
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("docx-resource-scheduler-service");
  require.d(exports, {
    docxSchedulerProv: function () {
      return o;
    }
  });
}