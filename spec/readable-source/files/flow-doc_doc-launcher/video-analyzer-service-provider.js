// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'videoAnalyzerName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 935951
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("video-analyzer-service");
  require.d(exports, {
    videoAnalyzerName: function () {
      return r;
    }
  });
}