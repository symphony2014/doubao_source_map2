// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerDocxEditorProviders'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 191302
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docLinkOpenerService = require("doc-link-opener-service") /*id: 972913*/;
  function l() {
    docxEditorCore.registerProviders([docLinkOpenerService.DocLinkOpener]);
  }
  require.d(exports, {
    registerDocxEditorProviders: function () {
      return l;
    }
  });
}