// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'diffHighlightName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 929313
         */
module.exports = function (module, exports, require) {
  let o = require("docx-editor-core") /*id: 135760*/.getProviderName("history-diff-text-highlight");
  require.d(exports, {
    diffHighlightName: function () {
      return o;
    }
  });
}