// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'createEmptyCellDocumentNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29302.5675d381.js
         * chunkId: 29302
         * moduleId: 44326
         */
module.exports = function (module, exports, require) {
  var documentNodeFactory_2 = require("document-node-factory_2") /*id: 557996*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function c(e = {}) {
    return documentNodeFactory_2.createDocumentNode({
      ...e,
      comments: [],
      children: []
    }, docBlockTypeConstants.blockTypeConstants.CELL);
  }
  require.d(exports, {
    createEmptyCellDocumentNode: function () {
      return c;
    }
  });
}