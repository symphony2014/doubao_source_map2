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
// - Renamed variable 's' to 'heading1BlockType'
// - Resolved require(749441) to 'heading-1-block-type'
// - Renamed variable 'd' to 'docxHeading2BlockClass'
// - Resolved require(96328) to 'docx-heading2-block-class'
// - Renamed variable 'u' to 'heading3BlockTypeClass'
// - Resolved require(163021) to 'heading3-block-type-class'
// - Renamed variable 'c' to 'heading4BlockModel'
// - Resolved require(847242) to 'heading-4-block-model'
// - Renamed variable 'h' to 'heading5BlockClass'
// - Resolved require(533757) to 'heading5-block-class'
// - Renamed variable 'f' to 'heading6DocBlockType'
// - Resolved require(472578) to 'heading6-doc-block-type'
// - Renamed variable 'p' to 'docHeading7Block'
// - Resolved require(711803) to 'doc-heading-7-block'
// - Renamed variable 'v' to 'heading8BlockClass'
// - Resolved require(214408) to 'heading8-block-class'
// - Renamed variable 'g' to 'heading9BlockClass'
// - Resolved require(690868) to 'heading9-block-class'
// - Renamed variable 'y' to 'headingModifyPanelLoader'
// - Resolved require(399517) to 'heading-modify-panel-loader'
// - Updated imported property 'n' to 'DocxRenderer' (module 98367)
// - Updated imported property 'r' to 'getEditorPlugins' (module 98367)
// - Updated imported property 'z' to 'initDocxEditorPlugins' (module 31429)
// - Updated imported property 'p' to 'Heading1BlockType' (module 749441)
// - Updated imported property 'D' to 'DocxHeading2Block' (module 96328)
// - Updated imported property 'n' to 'Heading3BlockType' (module 163021)
// - Updated imported property 's' to 'Heading4BlockModel' (module 847242)
// - Updated imported property 'A' to 'Heading5Block' (module 533757)
// - Updated imported property 'L' to 'Heading6DocBlockType' (module 472578)
// - Updated imported property 'U' to 'Heading7Block' (module 711803)
// - Updated imported property 'R' to 'Heading8Block' (module 214408)
// - Updated imported property 'T' to 'Heading9Block' (module 690868)
// - Updated imported property 'gs' to 'updateViewExts' (module 135760)
// - Updated imported property 'P' to 'markdownProviderName' (module 494774)
// - Updated imported property 'O' to 'loadHeadingModifyPanel' (module 399517)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_required_resource.e1f31793.js
         * chunkId: 33591
         * moduleId: 708068
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var markdownProviderNameExport = require("markdown-provider-name-export") /*id: 494774*/;
  var docxEditorRendererConfig = require("docx-editor-renderer-config") /*id: 98367*/;
  var docxEditorPluginManager = require("docx-editor-plugin-manager") /*id: 31429*/;
  var heading1BlockType = require("heading-1-block-type") /*id: 749441*/;
  var docxHeading2BlockClass = require("docx-heading2-block-class") /*id: 96328*/;
  var heading3BlockTypeClass = require("heading3-block-type-class") /*id: 163021*/;
  var heading4BlockModel = require("heading-4-block-model") /*id: 847242*/;
  var heading5BlockClass = require("heading5-block-class") /*id: 533757*/;
  var heading6DocBlockType = require("heading6-doc-block-type") /*id: 472578*/;
  var docHeading7Block = require("doc-heading-7-block") /*id: 711803*/;
  var heading8BlockClass = require("heading8-block-class") /*id: 214408*/;
  var heading9BlockClass = require("heading9-block-class") /*id: 690868*/;
  var headingModifyPanelLoader = require("heading-modify-panel-loader") /*id: 399517*/;
  function m() {
    let e = docxEditorRendererConfig.DocxRenderer();
    let n = docxEditorRendererConfig.getEditorPlugins();
    docxEditorPluginManager.initDocxEditorPlugins(heading1BlockType.Heading1BlockType.type, e, n);
    docxEditorPluginManager.initDocxEditorPlugins(docxHeading2BlockClass.DocxHeading2Block.type, e, n);
    docxEditorPluginManager.initDocxEditorPlugins(heading3BlockTypeClass.Heading3BlockType.type, e, n);
    docxEditorPluginManager.initDocxEditorPlugins(heading4BlockModel.Heading4BlockModel.type, e, n);
    docxEditorPluginManager.initDocxEditorPlugins(heading5BlockClass.Heading5Block.type, e, n);
    docxEditorPluginManager.initDocxEditorPlugins(heading6DocBlockType.Heading6DocBlockType.type, e, n);
    docxEditorPluginManager.initDocxEditorPlugins(docHeading7Block.Heading7Block.type, e, n);
    docxEditorPluginManager.initDocxEditorPlugins(heading8BlockClass.Heading8Block.type, e, n);
    docxEditorPluginManager.initDocxEditorPlugins(heading9BlockClass.Heading9Block.type, e, n);
    docxEditorCore.updateViewExts(heading1BlockType.Heading1BlockType.type, [markdownProviderNameExport.markdownProviderName]);
    docxEditorCore.updateViewExts(docxHeading2BlockClass.DocxHeading2Block.type, [markdownProviderNameExport.markdownProviderName]);
    docxEditorCore.updateViewExts(heading3BlockTypeClass.Heading3BlockType.type, [markdownProviderNameExport.markdownProviderName]);
    docxEditorCore.updateViewExts(heading4BlockModel.Heading4BlockModel.type, [markdownProviderNameExport.markdownProviderName]);
    docxEditorCore.updateViewExts(heading5BlockClass.Heading5Block.type, [markdownProviderNameExport.markdownProviderName]);
    docxEditorCore.updateViewExts(heading6DocBlockType.Heading6DocBlockType.type, [markdownProviderNameExport.markdownProviderName]);
    docxEditorCore.updateViewExts(docHeading7Block.Heading7Block.type, [markdownProviderNameExport.markdownProviderName]);
    docxEditorCore.updateViewExts(heading8BlockClass.Heading8Block.type, [markdownProviderNameExport.markdownProviderName]);
    docxEditorCore.updateViewExts(heading9BlockClass.Heading9Block.type, [markdownProviderNameExport.markdownProviderName]);
    headingModifyPanelLoader.loadHeadingModifyPanel();
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return m;
    }
  });
}