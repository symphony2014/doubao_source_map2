// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'createDocumentNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 877890
         */
module.exports = function (module, exports, require) {
  var documentNodeFactory_2 = require("document-node-factory_2") /*id: 557996*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function l(e = {}, i = docBlockTypeConstants.blockTypeConstants.DIVIDER) {
    return documentNodeFactory_2.createDocumentNode(e, i);
  }
  require.d(exports, {
    createDocumentNode: function () {
      return l;
    }
  });
}