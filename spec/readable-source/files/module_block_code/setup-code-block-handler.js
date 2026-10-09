// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docxEditorProviderConfigs'
// - Resolved require(244292) to 'docx-editor-provider-configs'
// - Renamed variable 'n' to 'docxCodeBlockPlugins'
// - Resolved require(731627) to 'docx-code-block-plugins'
// - Renamed variable 'l' to 'docxCodeBlockManagerComponent'
// - Resolved require(799159) to 'docx-code-block-manager-component'
// - Updated imported property 'Q' to 'getCodeBlockPlugins' (module 731627)
// - Updated imported property 'pX' to 'getBasicProviders' (module 244292)
// - Updated imported property 'G' to 'registerCodeBlockComponent' (module 799159)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_code.b72f4cb7.js
         * chunkId: 39855
         * moduleId: 385684
         */
module.exports = function (module, exports, require) {
  var docxEditorProviderConfigs = require("docx-editor-provider-configs") /*id: 244292*/;
  var docxCodeBlockPlugins = require("docx-code-block-plugins") /*id: 731627*/;
  var docxCodeBlockManagerComponent = require("docx-code-block-manager-component") /*id: 799159*/;
  function s() {
    let e = docxCodeBlockPlugins.getCodeBlockPlugins();
    let i = docxEditorProviderConfigs.getBasicProviders();
    docxCodeBlockManagerComponent.registerCodeBlockComponent(e, i);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return s;
    }
  });
}