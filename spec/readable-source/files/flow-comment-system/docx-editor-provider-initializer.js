// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initializeDocxEditorProviders'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 582748
         */
module.exports = function (module, exports, require) {
  var editorPluginListMerge = require("editor-plugin-list-merge") /*id: 339280*/;
  var docxEditorProviderGetters = require("docx-editor-provider-getters") /*id: 983353*/;
  var docxQuoteBlockCore = require("docx-quote-block-core") /*id: 485216*/;
  function a(e, i) {
    let n = editorPluginListMerge.getEditorPluginList(i.config);
    let a = docxEditorProviderGetters.getFullProviderList(i.config);
    let s = docxEditorProviderGetters.getAuthorZeroSpaceProviders();
    docxQuoteBlockCore.initQuotePdfFooter(n, a);
    docxQuoteBlockCore.registerQuoteBlock(s);
  }
  require.d(exports, {
    initializeDocxEditorProviders: function () {
      return a;
    }
  });
}