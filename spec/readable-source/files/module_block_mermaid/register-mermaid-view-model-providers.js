// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mermaidBlockViewModel'
// - Resolved require(887826) to 'mermaid-block-view-model'
// - Renamed variable 'a' to 'blockAuthorProviderName'
// - Resolved require(488151) to 'block-author-provider-name'
// - Renamed variable 'o' to 'docxEditorProviderRegistry'
// - Resolved require(513130) to 'docx-editor-provider-registry'
// - Renamed variable 'l' to 'docxAutoSelectProvider'
// - Resolved require(799573) to 'docx-auto-select-provider'
// - Updated imported property 'Z' to 'registerMermaidView' (module 887826)
// - Updated imported property 'K' to 'getBlockAuthorProviderName' (module 488151)
// - Updated imported property 're' to 'getHistoryDiffProviders' (module 513130)
// - Updated imported property 'Qm' to 'getZeroSpaceProviders' (module 513130)
// - Updated imported property 'qT' to 'getCommentProviders' (module 513130)
// - Updated imported property 'U' to 'autoSelectProvider' (module 799573)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_mermaid.35ab0536.js
         * chunkId: 71036
         * moduleId: 606117
         */
module.exports = function (module, exports, require) {
  var mermaidBlockViewModel = require("mermaid-block-view-model") /*id: 887826*/;
  var blockAuthorProviderName = require("block-author-provider-name") /*id: 488151*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var docxAutoSelectProvider = require("docx-auto-select-provider") /*id: 799573*/;
  function s() {
    mermaidBlockViewModel.registerMermaidView([blockAuthorProviderName.getBlockAuthorProviderName, ...docxEditorProviderRegistry.getHistoryDiffProviders(), ...docxEditorProviderRegistry.getZeroSpaceProviders(), ...docxEditorProviderRegistry.getCommentProviders(), docxAutoSelectProvider.autoSelectProvider]);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return s;
    }
  });
}