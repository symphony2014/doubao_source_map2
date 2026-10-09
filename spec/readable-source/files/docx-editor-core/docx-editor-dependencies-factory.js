// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'createDocxEditorDependencies'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 534133
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  function c() {
    let e = dependencyInjectionContainer.get(blockManagerToken.blockManagerToken);
    let n = dependencyInjectionContainer.get(compatBrowserSelectionService_1.selectionServiceKey);
    let i = dependencyInjectionContainer.get(docxEditorCore.CONFIG_TOKEN).get("boundary");
    let {
      commentModule: c
    } = dependencyInjectionContainer.get(compatibleEditorContext_1.compatibleContext);
    return {
      blockManager: e,
      selectionAPI: n,
      scroller: i,
      commentModule: c
    };
  }
  require.d(exports, {
    createDocxEditorDependencies: function () {
      return c;
    }
  });
}