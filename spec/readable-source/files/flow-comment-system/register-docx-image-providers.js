// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerImageProviders'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 906179
         */
module.exports = function (module, exports, require) {
  var docxAutoSelectProvider = require("docx-auto-select-provider") /*id: 799573*/;
  var docxBlockOfflineProvider = require("docx-block-offline-provider") /*id: 819294*/;
  var docxOfflineImageFlags = require("docx-offline-image-flags") /*id: 332375*/;
  var blockAuthorProviderName = require("block-author-provider-name") /*id: 488151*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var docxImageEditorPlugin = require("docx-image-editor-plugin") /*id: 165800*/;
  function d() {
    docxImageEditorPlugin.initImageEditor([blockAuthorProviderName.getBlockAuthorProviderName, ...docxEditorProviderRegistry.getZeroSpaceProviders(), ...(docxOfflineImageFlags.isImageShowEnabled ? [] : [docxBlockOfflineProvider.blockOfflineName]), [docxAutoSelectProvider.autoSelectProvider, {
      isEffectiveInPart: true
    }], ...docxEditorProviderRegistry.getSyncCursorSelectProviders()]);
  }
  require.d(exports, {
    registerImageProviders: function () {
      return d;
    }
  });
}