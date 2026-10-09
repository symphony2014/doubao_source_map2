// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerFoldProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 406359
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var eventEmitterProviderNameExport = require("event-emitter-provider-name-export") /*id: 889973*/;
  var foldProviderAccessor = require("fold-provider-accessor") /*id: 786534*/;
  var foldStateManager = require("fold-state-manager") /*id: 437732*/;
  function a(e = {}) {
    docxEditorCore.registerProviders([{
      provide: foldProviderAccessor.foldProvider,
      deps: [docxEditorCore.EDITOR_API_TOKEN, eventEmitterProviderNameExport.eventEmitterProviderName],
      useFactory: (i, r) => new foldStateManager.FoldStateManager(i, r, e.source, e.vcController)
    }]);
  }
  require.d(exports, {
    registerFoldProvider: function () {
      return a;
    }
  });
}