// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docxEditorProviderConfigs'
// - Resolved require(244292) to 'docx-editor-provider-configs'
// - Renamed variable 'n' to 'editorLineSelectHandler'
// - Resolved require(229365) to 'editor-line-select-handler'
// - Renamed variable 'l' to 'docxInlineBlockRenderers'
// - Resolved require(381474) to 'docx-inline-block-renderers'
// - Renamed variable 's' to 'docxCodeBlockInlineRendererRegistry'
// - Resolved require(497319) to 'docx-code-block-inline-renderer-registry'
// - Renamed variable 'a' to 'docxCodeBlockManagerComponent'
// - Resolved require(799159) to 'docx-code-block-manager-component'
// - Updated imported property 'o' to 'getInlineRendererPlugins' (module 497319)
// - Updated imported property 'Qj' to 'TextRevisionRenderer' (module 381474)
// - Updated imported property 'c' to 'LineSelectHandler' (module 229365)
// - Updated imported property 'Db' to 'getZeroSpaceProviders' (module 244292)
// - Updated imported property 'G' to 'registerCodeBlockComponent' (module 799159)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_code.b72f4cb7.js
         * chunkId: 39855
         * moduleId: 532800
         */
module.exports = function (module, exports, require) {
  var docxEditorProviderConfigs = require("docx-editor-provider-configs") /*id: 244292*/;
  var editorLineSelectHandler = require("editor-line-select-handler") /*id: 229365*/;
  var docxInlineBlockRenderers = require("docx-inline-block-renderers") /*id: 381474*/;
  var docxCodeBlockInlineRendererRegistry = require("docx-code-block-inline-renderer-registry") /*id: 497319*/;
  var docxCodeBlockManagerComponent = require("docx-code-block-manager-component") /*id: 799159*/;
  function d() {
    let e = [...docxCodeBlockInlineRendererRegistry.getInlineRendererPlugins().filter(e => {
      let [i] = e;
      return i !== docxInlineBlockRenderers.TextRevisionRenderer;
    }), [editorLineSelectHandler.LineSelectHandler]];
    let i = docxEditorProviderConfigs.getZeroSpaceProviders();
    docxCodeBlockManagerComponent.registerCodeBlockComponent(e, i);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return d;
    }
  });
}