// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'trackChangeToEdit'
// - Renamed export 'v' to 'trackAlertView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 263624
         */
module.exports = function (module, exports, require) {
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  function o() {
    docxEventCollector.wrappedCollector("ccm_doc_suggestion_mode_alert_view");
  }
  function l() {
    docxEventCollector.wrappedCollector("ccm_doc_suggestion_mode_alert_click", {
      click: "change_to_edit_view",
      target: "none"
    });
  }
  require.d(exports, {
    trackChangeToEdit: function () {
      return l;
    },
    trackAlertView: function () {
      return o;
    }
  });
}