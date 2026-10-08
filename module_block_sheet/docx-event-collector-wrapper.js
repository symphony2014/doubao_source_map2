// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'wrapEventCollector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 954913
         */
module.exports = function (module, exports, require) {
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  function n(e, r) {
    return docxEventCollector.wrappedCollector(e, r);
  }
  require.d(exports, {
    wrapEventCollector: function () {
      return n;
    }
  });
}