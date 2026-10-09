// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Oh' to 'resolveBlockView'
// - Renamed export 'jy' to 'getEffectiveView'
// - Renamed export 'z9' to 'getBlockEdge'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 521101
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function i(e, n) {
    if (n) {
      return e[e.length - 1];
    } else {
      return e[0];
    }
  }
  function l(e) {
    if (e.type === docBlockTypeConstants.blockTypeConstants.FILE && e.parentId) {
      let n = e.blockManager.getBlockViewByBlockIdNotCheck(e.parentId);
      if (n && n.type === docBlockTypeConstants.blockTypeConstants.VIEW) {
        return n;
      }
    }
    return e;
  }
  function c(e, n) {
    let u = l(i(e, n));
    if (e.length <= 1) {
      return u;
    }
    let a = l(e[e.length - 1]);
    let s = a.model.parent;
    if ((s == null ? undefined : s.type) !== docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
      return u;
    }
    let d = l(e[0]);
    if (s.id !== d.model.parent?.id) {
      let e = s.parent?.id;
      let n = e && a.blockManager.getBlockViewByBlockIdNotCheck(e);
      if (n) {
        return n;
      }
    }
    return u;
  }
  require.d(exports, {
    resolveBlockView: function () {
      return l;
    },
    getEffectiveView: function () {
      return c;
    },
    getBlockEdge: function () {
      return i;
    }
  });
}