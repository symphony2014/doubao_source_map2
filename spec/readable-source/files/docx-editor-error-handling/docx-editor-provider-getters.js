// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$G' to 'getZeroSpaceProviders'
// - Renamed export 'Fm' to 'getAuthorZeroSpaceProviders'
// - Renamed export 'Hp' to 'getFullProviderList'
// - Renamed export 'Sy' to 'getBackgroundColorProviders'
// - Renamed export 'XR' to 'getHistoryDiffProviders'
// - Renamed export 'fG' to 'getHistoryDiffZeroSpaceProviders'
// - Renamed export 'nc' to 'getAnchorProviders'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 983353
         */
module.exports = function (module, exports, require) {
  var getBlockBackgroundColorProvider = require("get-block-background-color-provider") /*id: 381597*/;
  require("docx-editor-presentation-mode-init") /*id: 125449*/;
  var historyDiffProviderNames = require("history-diff-provider-names") /*id: 818901*/;
  var blockAuthorProviderName = require("block-author-provider-name") /*id: 488151*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var docxFoldReminderProviders = require("docx-fold-reminder-providers") /*id: 726329*/;
  var docxBlockProviderFactory = require("docx-block-provider-factory") /*id: 457432*/;
  function d(e) {
    return [blockAuthorProviderName.getBlockAuthorProviderName, ...docxFoldReminderProviders.getReminderProviders(), getBlockBackgroundColorProvider.blockBackgroundColorProviderName, ...docxEditorProviderRegistry.getTranslateClassProviders(e)];
  }
  function u() {
    return [blockAuthorProviderName.getBlockAuthorProviderName, ...docxEditorProviderRegistry.getZeroSpaceProviders()];
  }
  function h() {
    return [getBlockBackgroundColorProvider.blockBackgroundColorProviderName];
  }
  function f() {
    return docxEditorProviderRegistry.getZeroSpaceProviders();
  }
  function g() {
    return docxBlockProviderFactory.getAnchorProviders();
  }
  function p() {
    return [getBlockBackgroundColorProvider.blockBackgroundColorProviderName, historyDiffProviderNames.historyDiffBlockHighlightProvider];
  }
  function m() {
    return [historyDiffProviderNames.historyDiffBlockHighlightProvider, ...docxEditorProviderRegistry.getZeroSpaceProviders()];
  }
  require.d(exports, {
    getZeroSpaceProviders: function () {
      return f;
    },
    getAuthorZeroSpaceProviders: function () {
      return u;
    },
    getFullProviderList: function () {
      return d;
    },
    getBackgroundColorProviders: function () {
      return h;
    },
    getHistoryDiffProviders: function () {
      return p;
    },
    getHistoryDiffZeroSpaceProviders: function () {
      return m;
    },
    getAnchorProviders: function () {
      return g;
    }
  });
}