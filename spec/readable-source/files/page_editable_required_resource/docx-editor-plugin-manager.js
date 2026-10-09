// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'initDocxEditorPlugins'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_required_resource.e1f31793.js
         * chunkId: 33591
         * moduleId: 31429
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docxEditorDependenciesFactory = require("docx-editor-dependencies-factory") /*id: 534133*/;
  var docxEditorKitProviders = require("docx-editor-kit-providers") /*id: 519830*/;
  function s(e, n, i) {
    docxEditorCore.onInitHook(() => {
      let s = dependencyInjectionContainer.get(docxEditorKitProviders.textualDepProvider);
      let d = docxEditorDependenciesFactory.createDocxEditorDependencies();
      n = n.map(e => {
        let [n, i] = e;
        return [n, {
          ...(i || {}),
          ...d
        }];
      });
      s.appendPlugins(e, n);
      s.removePlugins(e, i);
      dependencyInjectionContainer.get(docxEditorCore.VIEW_TOKEN).requestBlockViewsRenderByType(e);
    });
  }
  require.d(exports, {
    initDocxEditorPlugins: function () {
      return s;
    }
  });
}