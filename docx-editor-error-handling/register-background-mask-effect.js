// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerBackgroundMaskEffect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 470077
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var getBlockBackgroundColorProvider = require("get-block-background-color-provider") /*id: 381597*/;
  var editorBackgroundMaskManager = require("editor-background-mask-manager") /*id: 967604*/;
  function s() {
    docxEditorCore.registerViewExt(getBlockBackgroundColorProvider.blockBackgroundColorProviderName, editorBackgroundMaskManager.BackgroundMaskEffect);
  }
  require.d(exports, {
    registerBackgroundMaskEffect: function () {
      return s;
    }
  });
}