// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'trackDocxAnalyticsEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 739703
         */
module.exports = function (module, exports, require) {
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  function i(e, n = {}) {
    docxEventCollector.wrappedCollector("ccm_docx_code_split_dev", {
      action: e,
      info: JSON.stringify(n)
    });
  }
  require.d(exports, {
    trackDocxAnalyticsEvent: function () {
      return i;
    }
  });
}