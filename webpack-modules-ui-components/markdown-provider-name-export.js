// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'markdownProviderName'
// - Renamed export 'h' to 'markdownEditableKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 494774
         */
module.exports = function (module, exports, require) {
  let o = require("docx-editor-core") /*id: 135760*/.getProviderName("markdown");
  let i = "markdownEditable";
  require.d(exports, {
    markdownProviderName: function () {
      return o;
    },
    markdownEditableKey: function () {
      return i;
    }
  });
}