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
// - Renamed variable 's' to 'bulletBlockTypeClass'
// - Resolved require(611428) to 'bullet-block-type-class'
// - Renamed variable 'd' to 'docOrderedListBlock'
// - Resolved require(34235) to 'doc-ordered-list-block'
// - Renamed variable 'u' to 'listModifyPanelLoader'
// - Resolved require(52633) to 'list-modify-panel-loader'
// - Updated imported property 'n' to 'DocxRenderer' (module 98367)
// - Updated imported property 'r' to 'getEditorPlugins' (module 98367)
// - Updated imported property 'z' to 'initDocxEditorPlugins' (module 31429)
// - Updated imported property 'E' to 'OrderedListBlock' (module 34235)
// - Updated imported property 'e' to 'BulletBlockTypeClass' (module 611428)
// - Updated imported property 'gs' to 'updateViewExts' (module 135760)
// - Updated imported property 'P' to 'markdownProviderName' (module 494774)
// - Updated imported property 'X' to 'loadListModifyPanel' (module 52633)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_required_resource.e1f31793.js
         * chunkId: 33591
         * moduleId: 476530
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var markdownProviderNameExport = require("markdown-provider-name-export") /*id: 494774*/;
  var docxEditorRendererConfig = require("docx-editor-renderer-config") /*id: 98367*/;
  var docxEditorPluginManager = require("docx-editor-plugin-manager") /*id: 31429*/;
  var bulletBlockTypeClass = require("bullet-block-type-class") /*id: 611428*/;
  var docOrderedListBlock = require("doc-ordered-list-block") /*id: 34235*/;
  var listModifyPanelLoader = require("list-modify-panel-loader") /*id: 52633*/;
  function c() {
    let e = docxEditorRendererConfig.DocxRenderer();
    let n = docxEditorRendererConfig.getEditorPlugins();
    docxEditorPluginManager.initDocxEditorPlugins(docOrderedListBlock.OrderedListBlock.type, e, n);
    docxEditorPluginManager.initDocxEditorPlugins(bulletBlockTypeClass.BulletBlockTypeClass.type, e, n);
    docxEditorCore.updateViewExts(docOrderedListBlock.OrderedListBlock.type, [markdownProviderNameExport.markdownProviderName]);
    docxEditorCore.updateViewExts(bulletBlockTypeClass.BulletBlockTypeClass.type, [markdownProviderNameExport.markdownProviderName]);
    listModifyPanelLoader.loadListModifyPanel();
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return c;
    }
  });
}