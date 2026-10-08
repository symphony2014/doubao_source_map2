// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fg' to 'isGridColumn'
// - Renamed export 'H' to 'createGridColumn'
// - Renamed export 'NM' to 'isGrid'
// - Renamed export 'Ux' to 'createGridNode'
// - Renamed export 'wD' to 'traverseSelection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 431709
         */
module.exports = function (module, exports, require) {
  var editorSelectionTraversalUtils = require("editor-selection-traversal-utils") /*id: 71322*/;
  var documentNodeFactory_2 = require("document-node-factory_2") /*id: 557996*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function s(e, i = docBlockTypeConstants.blockTypeConstants.GRID) {
    return documentNodeFactory_2.createDocumentNode(e, i);
  }
  function a(e, i = docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
    return documentNodeFactory_2.createDocumentNode(e, i);
  }
  function c(e) {
    return e.type === docBlockTypeConstants.blockTypeConstants.GRID;
  }
  function d(e) {
    return e.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN;
  }
  function u(e, i) {
    let {
      currentTargetViewFilterEmpty: r,
      blockManager: o,
      preventDefault: l,
      shouldPropagation: s
    } = e;
    let a = r[0];
    if (!a) {
      return;
    }
    let c = a.model;
    let d = c.parent;
    if (!d) {
      return;
    }
    let u = i ? c.nextSibling : c.previousSibling;
    if (u) {
      l();
      let e = o.getBlockViewByBlockIdNotCheck(u.id);
      let {
        children: r
      } = u;
      if (r.length > 0) {
        e = i ? o.getBlockViewByBlockIdNotCheck(r[0].id) : o.getBlockViewByBlockIdNotCheck(r[r.length - 1].id);
      }
      if (e) {
        editorSelectionTraversalUtils.getBoundaryBlock(e, o, false, i);
      }
    } else {
      let e = i ? d.nextSibling : d.previousSibling;
      if (!e) {
        if (!i) {
          s();
        }
        return;
      }
      l();
      let r = o.getBlockViewByBlockIdNotCheck(e.id);
      if (r) {
        editorSelectionTraversalUtils.getBoundaryBlock(r, o, false, i);
      }
      return;
    }
  }
  require.d(exports, {
    isGridColumn: function () {
      return d;
    },
    createGridColumn: function () {
      return a;
    },
    isGrid: function () {
      return c;
    },
    createGridNode: function () {
      return s;
    },
    traverseSelection: function () {
      return u;
    }
  });
}