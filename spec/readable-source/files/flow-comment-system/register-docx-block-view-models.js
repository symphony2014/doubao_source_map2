// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerCalloutBlockViewModels'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 750036
         */
module.exports = function (module, exports, require) {
  var docxBlockContainerProvider = require("docx-block-container-provider") /*id: 577766*/;
  var blockAuthorProviderName = require("block-author-provider-name") /*id: 488151*/;
  var docxSyncCursorSelectProvider = require("docx-sync-cursor-select-provider") /*id: 944587*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var docxCalloutBlockRegister = require("docx-callout-block-register") /*id: 992089*/;
  function c() {
    docxCalloutBlockRegister.registerCalloutView([blockAuthorProviderName.getBlockAuthorProviderName, ...docxEditorProviderRegistry.getZeroSpaceProviders(), docxSyncCursorSelectProvider.syncCursorSelectName, ...docxEditorProviderRegistry.getCommentProviders(), ...docxEditorProviderRegistry.getBlockRevisionProviders(), docxBlockContainerProvider.blockContainerName]);
  }
  require.d(exports, {
    registerCalloutBlockViewModels: function () {
      return c;
    }
  });
}