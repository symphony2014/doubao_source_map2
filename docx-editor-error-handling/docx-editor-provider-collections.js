// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'NG' to 'getBlockHighlightProviderNames'
// - Renamed export 'Vy' to 'getAllProviderNames'
// - Renamed export 'cL' to 'getAnchorProviderNames'
// - Renamed export 'vO' to 'getFoldReminderHighlightProviderNames'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 494060
         */
module.exports = function (module, exports, require) {
  var getBlockBackgroundColorProvider = require("get-block-background-color-provider") /*id: 381597*/;
  require("docx-editor-presentation-mode-init") /*id: 125449*/;
  var historyDiffProviderNames = require("history-diff-provider-names") /*id: 818901*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var docxFoldReminderProviders = require("docx-fold-reminder-providers") /*id: 726329*/;
  var docxBlockProviderFactory = require("docx-block-provider-factory") /*id: 457432*/;
  var blockAuthorProviderName = require("block-author-provider-name") /*id: 488151*/;
  var docxFoldProviderName = require("docx-fold-provider-name") /*id: 207215*/;
  function u(e) {
    return [blockAuthorProviderName.getBlockAuthorProviderName, ...docxFoldReminderProviders.getFoldProviders(e), ...docxFoldReminderProviders.getReminderProviders(), getBlockBackgroundColorProvider.blockBackgroundColorProviderName, ...docxEditorProviderRegistry.getTranslateClassProviders(e), ...docxEditorProviderRegistry.getTranslationButtonProviders(e)];
  }
  function h() {
    return [docxFoldProviderName.foldProviderName, getBlockBackgroundColorProvider.blockBackgroundColorProviderName];
  }
  function f(e) {
    let i = [...docxBlockProviderFactory.getAnchorProviders()];
    i.push(getBlockBackgroundColorProvider.blockBackgroundColorProviderName);
    return i;
  }
  function g() {
    return [docxFoldProviderName.foldProviderName, getBlockBackgroundColorProvider.blockBackgroundColorProviderName, ...docxFoldReminderProviders.getReminderProviders(), historyDiffProviderNames.historyDiffAlignableHighlightProvider, historyDiffProviderNames.historyDiffBlockHighlightProvider];
  }
  require.d(exports, {
    getBlockHighlightProviderNames: function () {
      return h;
    },
    getAllProviderNames: function () {
      return u;
    },
    getAnchorProviderNames: function () {
      return f;
    },
    getFoldReminderHighlightProviderNames: function () {
      return g;
    }
  });
}