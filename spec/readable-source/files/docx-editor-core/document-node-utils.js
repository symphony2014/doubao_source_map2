// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'createDocumentNode'
// - Renamed export 'y' to 'isTodoBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 627986
         */
module.exports = function (module, exports, require) {
  var documentNodeFactory = require("document-node-factory") /*id: 524026*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function l(e, n) {
    return documentNodeFactory.createDocumentNode({
      done: false,
      ...e
    }, n);
  }
  function a(e, n) {
    let i = n.getBlockModelByBlockIdNotCheck(e);
    return i != null && i.type === docBlockTypeConstants.blockTypeConstants.TODO;
  }
  require.d(exports, {
    createDocumentNode: function () {
      return l;
    },
    isTodoBlock: function () {
      return a;
    }
  });
}