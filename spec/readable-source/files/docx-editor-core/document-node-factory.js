// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'createDocumentNode'
// - Renamed export 'k' to 'createAutoSeqNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 524026
         */
module.exports = function (module, exports, require) {
  var createDocumentNodeHelper = require("create-document-node-helper") /*id: 980168*/;
  function o(e, n) {
    return createDocumentNodeHelper.createEmptyDocumentNode({
      level: 1,
      folded: false,
      ...e
    }, n);
  }
  function l(e, n) {
    return o({
      seq: "auto",
      ...e
    }, n);
  }
  require.d(exports, {
    createDocumentNode: function () {
      return o;
    },
    createAutoSeqNode: function () {
      return l;
    }
  });
}