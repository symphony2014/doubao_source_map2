// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerDocxProviders'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 119828
         */
module.exports = function (module, exports, require) {
  var docxAutoSelectProvider = require("docx-auto-select-provider") /*id: 799573*/;
  var docxCommentProviderNames = require("docx-comment-provider-names") /*id: 180127*/;
  var blockAuthorProviderName = require("block-author-provider-name") /*id: 488151*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var docxDividerBlockViewModel = require("docx-divider-block-view-model") /*id: 261652*/;
  function c() {
    docxDividerBlockViewModel.registerDividerViewModel([blockAuthorProviderName.getBlockAuthorProviderName, ...docxEditorProviderRegistry.getZeroSpaceProviders(), docxCommentProviderNames.blockComment, ...docxEditorProviderRegistry.getBlockRevisionProviders(), docxAutoSelectProvider.autoSelectProvider]);
  }
  require.d(exports, {
    registerDocxProviders: function () {
      return c;
    }
  });
}