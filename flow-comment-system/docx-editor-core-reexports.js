// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'XO' to 'registerProviders'
// - Renamed export 'cv' to 'getProviderName'
// - Renamed export 'gs' to 'updateViewExts'
// - Renamed export 'iC' to 'updateGlobalExts'
// - Renamed export 'ix' to 'registerViewExt'
// - Renamed export 'nc' to 'onInitHook'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 719301
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  require.d(exports, {
    registerProviders: function () {
      return docxEditorCore.registerProviders;
    },
    getProviderName: function () {
      return docxEditorCore.getProviderName;
    },
    updateViewExts: function () {
      return docxEditorCore.updateViewExts;
    },
    updateGlobalExts: function () {
      return docxEditorCore.updateGlobalExts;
    },
    registerViewExt: function () {
      return docxEditorCore.registerViewExt;
    },
    onInitHook: function () {
      return docxEditorCore.onInitHook;
    }
  });
}