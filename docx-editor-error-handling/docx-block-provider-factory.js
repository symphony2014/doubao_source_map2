// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'RF' to 'getAllBlockProviders'
// - Renamed export 'rH' to 'getAnchorProviders'
// - Renamed export 'zW' to 'getRevisionProviders'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 457432
         */
module.exports = function (module, exports, require) {
  var shortcutBlockErrorProviderName = require("shortcut-block-error-provider-name") /*id: 150652*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var blockAnchorProviderName = require("block-anchor-provider-name") /*id: 704132*/;
  var providerNameConstants = require("provider-name-constants") /*id: 349632*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  function d() {
    if (docxShortcutFeatureDetection.isPDFMode()) {
      return [];
    } else {
      return [blockAnchorProviderName.providerName];
    }
  }
  function u() {
    return docxEditorProviderRegistry.getBlockRevisionProviders();
  }
  function h(e) {
    return [...d(), ...u(), shortcutBlockErrorProviderName.shortcutBlockErrorProviderName, [providerNameConstants.blockLoadingProvider, {
      displayMode: docBlockTypeConstants.blockDisplayConstants.BLOCK,
      autoNotifyRenderFinish: true,
      ...e
    }]];
  }
  require.d(exports, {
    getAllBlockProviders: function () {
      return h;
    },
    getAnchorProviders: function () {
      return d;
    },
    getRevisionProviders: function () {
      return u;
    }
  });
}