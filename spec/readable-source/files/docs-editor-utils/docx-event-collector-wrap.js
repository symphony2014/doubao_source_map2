// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'wrapDocxCollector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 140253
         */
module.exports = function (module, exports, require) {
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  function i(e, n = {}) {
    docxEventCollector.wrappedCollector(`${e}_dev`, n);
  }
  require.d(exports, {
    wrapDocxCollector: function () {
      return i;
    }
  });
}