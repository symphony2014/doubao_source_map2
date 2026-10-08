// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Db' to 'getZeroSpaceProviders'
// - Renamed export 'YZ' to 'getAnchorProviders'
// - Renamed export 'pX' to 'getBasicProviders'
// - Renamed export 'qm' to 'getHistoryDiffProviders'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 244292
         */
module.exports = function (module, exports, require) {
  var docxBlockContainerProvider = require("docx-block-container-provider") /*id: 577766*/;
  require("docx-editor-presentation-mode-init") /*id: 125449*/;
  var historyDiffProviderNames = require("history-diff-provider-names") /*id: 818901*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var docxFoldReminderProviders = require("docx-fold-reminder-providers") /*id: 726329*/;
  var docxBlockProviderFactory = require("docx-block-provider-factory") /*id: 457432*/;
  var blockAuthorProviderName = require("block-author-provider-name") /*id: 488151*/;
  var docxSyncCursorSelectProvider = require("docx-sync-cursor-select-provider") /*id: 944587*/;
  function u() {
    return [blockAuthorProviderName.getBlockAuthorProviderName, ...docxEditorProviderRegistry.getZeroSpaceProviders(), ...docxFoldReminderProviders.getReminderProviders(), docxSyncCursorSelectProvider.syncCursorSelectName, docxBlockContainerProvider.blockContainerName];
  }
  function h() {
    return [...docxEditorProviderRegistry.getZeroSpaceProviders(), docxBlockContainerProvider.blockContainerName];
  }
  function p() {
    return [...docxBlockProviderFactory.getAnchorProviders(), docxBlockContainerProvider.blockContainerName];
  }
  function f() {
    return [...docxEditorProviderRegistry.getHistoryDiffProviders(), ...docxEditorProviderRegistry.getZeroSpaceProviders(), ...docxFoldReminderProviders.getReminderProviders(), docxBlockContainerProvider.blockContainerName, historyDiffProviderNames.historyDiffAlignableHighlightProvider];
  }
  require.d(exports, {
    getZeroSpaceProviders: function () {
      return h;
    },
    getAnchorProviders: function () {
      return p;
    },
    getBasicProviders: function () {
      return u;
    },
    getHistoryDiffProviders: function () {
      return f;
    }
  });
}