// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initFallbackBlocks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 240507
         */
module.exports = function (module, exports, require) {
  var docxBlockOfflineProvider = require("docx-block-offline-provider") /*id: 819294*/;
  var blockAuthorProviderName = require("block-author-provider-name") /*id: 488151*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var docxFallbackBlockViewModelRegistration = require("docx-fallback-block-view-model-registration") /*id: 547277*/;
  function a() {
    docxFallbackBlockViewModelRegistration.registerFallbackBlockViewModel([blockAuthorProviderName.getBlockAuthorProviderName, ...docxEditorProviderRegistry.getZeroSpaceProviders(), docxBlockOfflineProvider.blockOfflineName]);
  }
  require.d(exports, {
    initFallbackBlocks: function () {
      return a;
    }
  });
}