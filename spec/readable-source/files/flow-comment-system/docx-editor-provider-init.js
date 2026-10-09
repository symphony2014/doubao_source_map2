// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initDocxProviders'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 631174
         */
module.exports = function (module, exports, require) {
  var docxEditorProviderCollections = require("docx-editor-provider-collections") /*id: 494060*/;
  var docxInlineBlockRenderers = require("docx-inline-block-renderers") /*id: 381474*/;
  var editorPluginListMerge = require("editor-plugin-list-merge") /*id: 339280*/;
  var docxImageRenderer = require("docx-image-renderer") /*id: 172826*/;
  function s(e, i) {
    var n;
    n = i.config;
    let s = [...editorPluginListMerge.getEditorPluginList(n), [docxInlineBlockRenderers.TodoLineThroughRenderer]];
    let c = docxEditorProviderCollections.getAllProviderNames(i.config);
    docxImageRenderer.DocxImageRenderer(s, c);
  }
  require.d(exports, {
    initDocxProviders: function () {
      return s;
    }
  });
}