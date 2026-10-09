// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'o' to 'markdownProviderNameExport'
// - Resolved require(494774) to 'markdown-provider-name-export'
// - Renamed variable 'l' to 'docxEditorRendererConfig'
// - Resolved require(98367) to 'docx-editor-renderer-config'
// - Renamed variable 'a' to 'docxEditorPluginManager'
// - Resolved require(31429) to 'docx-editor-plugin-manager'
// - Renamed variable 's' to 'quoteBlockRevisionProvider'
// - Resolved require(741147) to 'quote-block-revision-provider'
// - Updated imported property 'n' to 'DocxRenderer' (module 98367)
// - Updated imported property 'r' to 'getEditorPlugins' (module 98367)
// - Updated imported property 'z' to 'initDocxEditorPlugins' (module 31429)
// - Updated imported property 'E' to 'QuoteBlockRevisionProvider' (module 741147)
// - Updated imported property 'gs' to 'updateViewExts' (module 135760)
// - Updated imported property 'P' to 'markdownProviderName' (module 494774)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_required_resource.e1f31793.js
         * chunkId: 33591
         * moduleId: 537759
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var markdownProviderNameExport = require("markdown-provider-name-export") /*id: 494774*/;
  var docxEditorRendererConfig = require("docx-editor-renderer-config") /*id: 98367*/;
  var docxEditorPluginManager = require("docx-editor-plugin-manager") /*id: 31429*/;
  var quoteBlockRevisionProvider = require("quote-block-revision-provider") /*id: 741147*/;
  function d() {
    let e = docxEditorRendererConfig.DocxRenderer();
    let n = docxEditorRendererConfig.getEditorPlugins();
    docxEditorPluginManager.initDocxEditorPlugins(quoteBlockRevisionProvider.QuoteBlockRevisionProvider.type, e, n);
    docxEditorCore.updateViewExts(quoteBlockRevisionProvider.QuoteBlockRevisionProvider.type, [markdownProviderNameExport.markdownProviderName]);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return d;
    }
  });
}