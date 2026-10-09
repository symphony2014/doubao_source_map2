// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'createEmptyDocumentNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 980168
         */
module.exports = function (module, exports, require) {
  var documentNodeFactory_2 = require("document-node-factory_2") /*id: 557996*/;
  var editorDataManagerClass = require("editor-data-manager-class") /*id: 699568*/;
  function l(e, n) {
    return documentNodeFactory_2.createDocumentNode({
      text: editorDataManagerClass.EditorDataManager.createEmptyClientVars(),
      ...(e || {})
    }, n);
  }
  require.d(exports, {
    createEmptyDocumentNode: function () {
      return l;
    }
  });
}