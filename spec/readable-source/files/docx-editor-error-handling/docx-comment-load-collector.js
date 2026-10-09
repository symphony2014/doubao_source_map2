// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'collectDocxCommentLoad'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 720188
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  function l(e, i = {}, r = false) {
    docxEventCollector.wrappedCollector("ccm_docx_load_comment_dev", {
      state: e,
      is_pc: !browserEnvironmentDetectionUtils.browserDetector.isMobile,
      time: Date.now() - window.performance.timing.navigationStart,
      ...i
    }, r);
  }
  require.d(exports, {
    collectDocxCommentLoad: function () {
      return l;
    }
  });
}