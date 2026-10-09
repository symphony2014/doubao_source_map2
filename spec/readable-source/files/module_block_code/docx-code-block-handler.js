// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docxEditorProviderConfigs'
// - Resolved require(244292) to 'docx-editor-provider-configs'
// - Renamed variable 'n' to 'docxCodeBlockManagerComponent'
// - Resolved require(799159) to 'docx-code-block-manager-component'
// - Renamed variable 'l' to 'historyDiffHighlightRenderer'
// - Resolved require(349705) to 'history-diff-highlight-renderer'
// - Renamed variable 's' to 'docxCodeBlockPlugins'
// - Resolved require(731627) to 'docx-code-block-plugins'
// - Updated imported property 'Q' to 'getCodeBlockPlugins' (module 731627)
// - Updated imported property 'f' to 'HistoryDiffHighlight' (module 349705)
// - Updated imported property 'qm' to 'getHistoryDiffProviders' (module 244292)
// - Updated imported property 'G' to 'registerCodeBlockComponent' (module 799159)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_code.b72f4cb7.js
         * chunkId: 39855
         * moduleId: 316850
         */
module.exports = function (module, exports, require) {
  var docxEditorProviderConfigs = require("docx-editor-provider-configs") /*id: 244292*/;
  var docxCodeBlockManagerComponent = require("docx-code-block-manager-component") /*id: 799159*/;
  var historyDiffHighlightRenderer = require("history-diff-highlight-renderer") /*id: 349705*/;
  var docxCodeBlockPlugins = require("docx-code-block-plugins") /*id: 731627*/;
  function a() {
    let e = [...docxCodeBlockPlugins.getCodeBlockPlugins(), [historyDiffHighlightRenderer.HistoryDiffHighlight]];
    let i = docxEditorProviderConfigs.getHistoryDiffProviders();
    docxCodeBlockManagerComponent.registerCodeBlockComponent(e, i);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return a;
    }
  });
}