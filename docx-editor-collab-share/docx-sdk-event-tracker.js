// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'trackDocxEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx-export-popover.ab82113b.js
         * chunkId: 65132
         * moduleId: 508502
         */
module.exports = function (module, exports, require) {
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  function r(e, n) {
    teaAnalyticsEventTracker.trackEvent(e, {
      ...n,
      docx_sdk_version: "docx_fusion"
    });
  }
  require.d(exports, {
    trackDocxEvent: function () {
      return r;
    }
  });
}