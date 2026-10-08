// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'getHighlightNames'
// - Renamed export 'o' to 'getEditorProviders'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 993415
         */
module.exports = function (module, exports, require) {
  let o = require("docx-editor-core") /*id: 135760*/.getProviderName("doc-mini-app-detached-view");
  var historyDiffHighlightProvider = require("history-diff-highlight-provider") /*id: 929313*/;
  var docxEditableProviderName = require("docx-editable-provider-name") /*id: 5481*/;
  function a() {
    return [o, docxEditableProviderName.getEditableProvider];
  }
  function s() {
    return [historyDiffHighlightProvider.diffHighlightName];
  }
  require.d(exports, {
    getHighlightNames: function () {
      return s;
    },
    getEditorProviders: function () {
      return a;
    }
  });
}