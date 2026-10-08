// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'ReadPdfFooter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 446560
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docxEditorDependenciesFactory = require("docx-editor-dependencies-factory") /*id: 534133*/;
  var docxEditorKitProviders = require("docx-editor-kit-providers") /*id: 519830*/;
  function a(e, i, r, a) {
    docxEditorCore.registerViewModel(e, {
      viewCreator: i,
      extensions: a
    });
    docxEditorCore.onInitHook(() => {
      let i = dependencyInjectionContainer.get(docxEditorKitProviders.textualDepProvider);
      let n = docxEditorDependenciesFactory.createDocxEditorDependencies();
      r = r.map(e => {
        let [i, r] = e;
        return [i, {
          ...(r || {}),
          ...n
        }];
      });
      i.setPlugins(e.type, r);
    });
  }
  require.d(exports, {
    ReadPdfFooter: function () {
      return a;
    }
  });
}