// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docxEditorPluginManager'
// - Resolved require(31429) to 'docx-editor-plugin-manager'
// - Renamed variable 'o' to 'editorDeleteAttributeRenderer'
// - Resolved require(541916) to 'editor-delete-attribute-renderer'
// - Renamed variable 'l' to 'autoSpaceEditorRendererPlugin'
// - Resolved require(359610) to 'auto-space-editor-renderer-plugin'
// - Renamed variable 'a' to 'docxAutoSpaceCheck'
// - Resolved require(47206) to 'docx-auto-space-check'
// - Renamed variable 's' to 'docxPasteResourcePlugin'
// - Resolved require(505247) to 'docx-paste-resource-plugin'
// - Renamed variable 'd' to 'pageResourceRenderer'
// - Resolved require(528361) to 'page-resource-renderer'
// - Renamed variable 'u' to 'triggerRendererClass'
// - Resolved require(16171) to 'trigger-renderer-class'
// - Renamed variable 'c' to 'autoCapitalizationPlugin'
// - Resolved require(782204) to 'auto-capitalization-plugin'
// - Renamed variable 'h' to 'docxInlineBlockRenderers'
// - Resolved require(381474) to 'docx-inline-block-renderers'
// - Renamed variable 'f' to 'pageBlockClass'
// - Resolved require(452801) to 'page-block-class'
// - Updated imported property 'n' to 'PageResourceRenderer' (module 528361)
// - Updated imported property 'L' to 'TriggerRenderer' (module 16171)
// - Updated imported property 'N' to 'DeleteAttrRenderer' (module 541916)
// - Updated imported property 'bz' to 'autoCapPlugin' (module 782204)
// - Updated imported property 'W' to 'PasteResourcePlugin' (module 505247)
// - Updated imported property 'Y' to 'checkDocxAutoSpace' (module 47206)
// - Updated imported property 'G' to 'AutoSpaceRenderer' (module 359610)
// - Updated imported property 'O5' to 'MentionDocRenderer' (module 381474)
// - Updated imported property 'z' to 'initDocxEditorPlugins' (module 31429)
// - Updated imported property 'X' to 'PageBlock' (module 452801)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_required_resource.e1f31793.js
         * chunkId: 33591
         * moduleId: 861994
         */
module.exports = function (module, exports, require) {
  var docxEditorPluginManager = require("docx-editor-plugin-manager") /*id: 31429*/;
  var editorDeleteAttributeRenderer = require("editor-delete-attribute-renderer") /*id: 541916*/;
  var autoSpaceEditorRendererPlugin = require("auto-space-editor-renderer-plugin") /*id: 359610*/;
  var docxAutoSpaceCheck = require("docx-auto-space-check") /*id: 47206*/;
  var docxPasteResourcePlugin = require("docx-paste-resource-plugin") /*id: 505247*/;
  var pageResourceRenderer = require("page-resource-renderer") /*id: 528361*/;
  var triggerRendererClass = require("trigger-renderer-class") /*id: 16171*/;
  var autoCapitalizationPlugin = require("auto-capitalization-plugin") /*id: 782204*/;
  var docxInlineBlockRenderers = require("docx-inline-block-renderers") /*id: 381474*/;
  var pageBlockClass = require("page-block-class") /*id: 452801*/;
  function p() {
    let e = function () {
      let e = [[pageResourceRenderer.PageResourceRenderer], [triggerRendererClass.TriggerRenderer], [editorDeleteAttributeRenderer.DeleteAttrRenderer, {
        attributesInheritFromDelete: ["bold"]
      }], ...autoCapitalizationPlugin.autoCapPlugin(), [docxPasteResourcePlugin.PasteResourcePlugin]];
      if (docxAutoSpaceCheck.checkDocxAutoSpace()) {
        e.push([autoSpaceEditorRendererPlugin.AutoSpaceRenderer]);
      }
      return e;
    }();
    let n = [docxInlineBlockRenderers.MentionDocRenderer];
    docxEditorPluginManager.initDocxEditorPlugins(pageBlockClass.PageBlock.type, e, n);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return p;
    }
  });
}