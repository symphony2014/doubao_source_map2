// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'createDocumentNodeWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 6829
         */
module.exports = function (module, exports, require) {
  var documentNodeFactory_2 = require("document-node-factory_2") /*id: 557996*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function l(e, n = docBlockTypeConstants.blockTypeConstants.FILE) {
    return documentNodeFactory_2.createDocumentNode(e, n);
  }
  require.d(exports, {
    createDocumentNodeWrapper: function () {
      return l;
    }
  });
}