// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mermaidBlockViewModel'
// - Resolved require(887826) to 'mermaid-block-view-model'
// - Renamed variable 'o' to 'docxSyncCursorSelectProvider'
// - Resolved require(944587) to 'docx-sync-cursor-select-provider'
// - Renamed variable 'l' to 'blockAuthorProviderName'
// - Resolved require(488151) to 'block-author-provider-name'
// - Renamed variable 's' to 'docxEditorProviderRegistry'
// - Resolved require(513130) to 'docx-editor-provider-registry'
// - Resolved require(987849) to 'js-prototype-polyfills'
// - Updated imported property 'Z' to 'registerMermaidView' (module 887826)
// - Updated imported property 'K' to 'getBlockAuthorProviderName' (module 488151)
// - Updated imported property 'Qm' to 'getZeroSpaceProviders' (module 513130)
// - Updated imported property 'qT' to 'getCommentProviders' (module 513130)
// - Updated imported property 'rD' to 'getBlockRevisionProviders' (module 513130)
// - Updated imported property 'u' to 'syncCursorSelectName' (module 944587)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 370343
         */
module.exports = function (module, exports, require) {
  var mermaidBlockViewModel = require("mermaid-block-view-model") /*id: 887826*/;
  var docxSyncCursorSelectProvider = require("docx-sync-cursor-select-provider") /*id: 944587*/;
  var blockAuthorProviderName = require("block-author-provider-name") /*id: 488151*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  function a() {
    mermaidBlockViewModel.registerMermaidView([blockAuthorProviderName.getBlockAuthorProviderName, ...docxEditorProviderRegistry.getZeroSpaceProviders(), ...docxEditorProviderRegistry.getCommentProviders(), ...docxEditorProviderRegistry.getBlockRevisionProviders(), docxSyncCursorSelectProvider.syncCursorSelectName]);
  }
  require("js-prototype-polyfills") /*id: 987849*/;
  require.r(exports);
  require.d(exports, {
    default: function () {
      return a;
    }
  });
}