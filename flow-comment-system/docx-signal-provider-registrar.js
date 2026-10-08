// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerSignalProviders'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 380668
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var bearWebSignalService = require("bear-web-signal-service") /*id: 32433*/;
  var docxSignalSubjectRegistry = require("docx-signal-subject-registry") /*id: 272418*/;
  function a(e) {
    docxEditorCore.registerProviders([{
      provide: bearWebSignalService.bearSignalService,
      useClass: bearWebSignalService.BearSignalProvider
    }, {
      provide: docxSignalSubjectRegistry.docxSignalService,
      useValue: e.docxSignal
    }]);
  }
  require.d(exports, {
    registerSignalProviders: function () {
      return a;
    }
  });
}