// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'streamingStatusName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 321310
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("streaming-status");
  require.d(exports, {
    streamingStatusName: function () {
      return r;
    }
  });
}