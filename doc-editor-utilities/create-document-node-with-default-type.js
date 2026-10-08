// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'createDocumentNodeWithDefaultType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 934095
         */
module.exports = function (module, exports, require) {
  var documentNodeFactory_2 = require("document-node-factory_2") /*id: 557996*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function s(e, n = docBlockTypeConstants.blockTypeConstants.VIEW) {
    return documentNodeFactory_2.createDocumentNode(e, n);
  }
  require.d(exports, {
    createDocumentNodeWithDefaultType: function () {
      return s;
    }
  });
}