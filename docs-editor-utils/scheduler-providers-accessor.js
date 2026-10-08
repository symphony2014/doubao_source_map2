// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'rN' to 'docxSchedulerProv'
// - Renamed export 'u0' to 'blockSchedulerProv'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 102884
         */
module.exports = function (module, exports, require) {
  var docxResourceSchedulerProvider = require("docx-resource-scheduler-provider") /*id: 54859*/;
  var loadableBlockSchedulerProvider = require("loadable-block-scheduler-provider") /*id: 809759*/;
  require.d(exports, {
    docxSchedulerProv: function () {
      return docxResourceSchedulerProvider.docxSchedulerProv;
    },
    blockSchedulerProv: function () {
      return loadableBlockSchedulerProvider.schedulerProvider;
    }
  });
}