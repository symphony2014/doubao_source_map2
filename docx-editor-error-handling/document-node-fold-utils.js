// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'unfoldBlocks'
// - Renamed export 'c' to 'createEmptyNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 454245
         */
module.exports = function (module, exports, require) {
  var createDocumentNodeHelper = require("create-document-node-helper") /*id: 980168*/;
  function o(e, i) {
    return createDocumentNodeHelper.createEmptyDocumentNode({
      folded: false,
      ...e
    }, i);
  }
  function l(e, i, r, n, o) {
    let l = e && n.getFoldStateById(e);
    if (l && (l.folded === true || l.foldedBy)) {
      r.push(l.foldedBy || l.id);
    }
    if (r.length) {
      i.applyTransaction(o, e => {
        r.forEach(r => {
          let o = i.getRecordByBlockId(r)?.id;
          if (o) {
            e.replace(o, ["folded"], false);
          }
        });
      });
      return n.waitUntilBlocksUnfold(r);
    }
  }
  require.d(exports, {
    unfoldBlocks: function () {
      return l;
    },
    createEmptyNode: function () {
      return o;
    }
  });
}