// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'mentionProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 868039
         */
module.exports = function (module, exports, require) {
  let n = require("docx-editor-core") /*id: 135760*/.getProviderName("mention-share-panel");
  require.d(exports, {
    mentionProviderName: function () {
      return n;
    }
  });
}