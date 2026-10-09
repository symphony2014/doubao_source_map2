// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerHookProviders'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 584868
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var hookServiceClassProvider = require("hook-service-class-provider") /*id: 71742*/;
  function l() {
    docxEditorCore.registerProviders([hookServiceClassProvider.HookServiceProvider]);
  }
  require.d(exports, {
    registerHookProviders: function () {
      return l;
    }
  });
}