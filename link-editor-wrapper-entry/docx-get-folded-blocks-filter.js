// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getFoldedBlocksFilter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 199369
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var foldStateManager = require("fold-state-manager") /*id: 437732*/;
  function a(e, n) {
    if (e.length !== 1) {
      return [];
    }
    let {
      id: r,
      type: a
    } = e[0];
    let c = n.getBlockViewByBlockIdNotCheck(r);
    if (!(c == null ? undefined : c.type.includes("heading")) || a !== docxBlockSelectionHandler_1.blockTypes.BLOCK) {
      return [];
    }
    let u = foldStateManager.FoldStateManager.calculateFoldedBlocksByBlockId(n, r);
    let s = new Set();
    let d = new Set();
    let h = [...docBlockTypeConstants.selectionViewTypes, ...docBlockTypeConstants.objectiveKeyResultTypes];
    u.forEach(e => {
      let o = n.getBlockModelByBlockIdNotCheck(e);
      if ((o == null ? undefined : o.children?.length) && !s.has(e) && !h.includes((o == null ? undefined : o.type) || "")) {
        d.add(e);
        n.traverse(e, n => {
          if (e !== n) {
            s.add(n);
          }
          return true;
        });
      }
    });
    return u.filter(e => {
      let r = n.getBlockModelByBlockIdNotCheck(e);
      return !h.includes((r == null ? undefined : r.type) || "") && (!!d.has(e) || !s.has(e));
    });
  }
  require.d(exports, {
    getFoldedBlocksFilter: function () {
      return a;
    }
  });
}