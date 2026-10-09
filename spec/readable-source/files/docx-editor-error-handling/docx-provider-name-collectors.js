// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'NF' to 'getAnchorProviderNamesWithOrdered'
// - Renamed export 'fk' to 'getBlockHighlightProviderNamesWithOrdered'
// - Renamed export 'iw' to 'getAllProviderNamesWithOrdered'
// - Renamed export 'n6' to 'getFoldReminderHighlightProviderNamesWithOrdered'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 391564
         */
module.exports = function (module, exports, require) {
  var orderedBlockConstants = require("ordered-block-constants") /*id: 976830*/;
  var docxEditorProviderCollections = require("docx-editor-provider-collections") /*id: 494060*/;
  function l(e) {
    return [...docxEditorProviderCollections.getAllProviderNames(e), orderedBlockConstants.orderedProviderName];
  }
  function s() {
    return [...docxEditorProviderCollections.getBlockHighlightProviderNames(), orderedBlockConstants.orderedProviderName];
  }
  function a(e) {
    return [...docxEditorProviderCollections.getAnchorProviderNames(e), orderedBlockConstants.orderedProviderName];
  }
  function c() {
    return [...docxEditorProviderCollections.getFoldReminderHighlightProviderNames(), orderedBlockConstants.orderedProviderName];
  }
  require.d(exports, {
    getAnchorProviderNamesWithOrdered: function () {
      return a;
    },
    getBlockHighlightProviderNamesWithOrdered: function () {
      return s;
    },
    getAllProviderNamesWithOrdered: function () {
      return l;
    },
    getFoldReminderHighlightProviderNamesWithOrdered: function () {
      return c;
    }
  });
}