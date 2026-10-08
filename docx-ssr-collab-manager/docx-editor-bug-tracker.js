// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'trackDocxEditorBug'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 140860
         */
module.exports = function (module, exports, require) {
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  function n(e) {
    docxEventCollector.wrappedCollector("doc_bug_track_dev", {
      action: "editor_dev",
      info: JSON.stringify(e)
    });
  }
  require.d(exports, {
    trackDocxEditorBug: function () {
      return n;
    }
  });
}