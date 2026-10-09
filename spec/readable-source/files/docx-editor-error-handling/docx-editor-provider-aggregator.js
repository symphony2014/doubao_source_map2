// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F3' to 'getAllProvidersWithHeading'
// - Renamed export 'On' to 'getBlockHighlightProvidersWithHeading'
// - Renamed export 'Sv' to 'getAnchorProvidersWithHeading'
// - Renamed export 'td' to 'getSpecializedProviders'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 754913
         */
module.exports = function (module, exports, require) {
  var getBlockBackgroundColorProvider = require("get-block-background-color-provider") /*id: 381597*/;
  var historyDiffProviderNames = require("history-diff-provider-names") /*id: 818901*/;
  var docxFoldReminderProviders = require("docx-fold-reminder-providers") /*id: 726329*/;
  var docxFoldProviderName = require("docx-fold-provider-name") /*id: 207215*/;
  var docEditorConstants_1 = require("doc-editor-constants_1") /*id: 2607*/;
  var docxEditorProviderCollections = require("docx-editor-provider-collections") /*id: 494060*/;
  function d(e) {
    return [...docxEditorProviderCollections.getAllProviderNames(e), docEditorConstants_1.headingProvider];
  }
  function u() {
    return [...docxEditorProviderCollections.getBlockHighlightProviderNames(), docEditorConstants_1.headingProvider];
  }
  function h(e) {
    return [...docxEditorProviderCollections.getAnchorProviderNames(e), docEditorConstants_1.headingProvider];
  }
  function f() {
    return [[docxFoldProviderName.foldProviderName, {
      alwaysShowTooltip: false,
      disableTooltip: true
    }], getBlockBackgroundColorProvider.blockBackgroundColorProviderName, ...docxFoldReminderProviders.getReminderProviders(), historyDiffProviderNames.historyDiffAlignableHighlightProvider, historyDiffProviderNames.historyDiffBlockHighlightProvider, docEditorConstants_1.headingProvider];
  }
  require.d(exports, {
    getAllProvidersWithHeading: function () {
      return u;
    },
    getBlockHighlightProvidersWithHeading: function () {
      return d;
    },
    getAnchorProvidersWithHeading: function () {
      return f;
    },
    getSpecializedProviders: function () {
      return h;
    }
  });
}