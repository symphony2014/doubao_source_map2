// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Lw' to 'hasCellInPath'
// - Renamed export 'Nn' to 'areAllCellsById'
// - Renamed export 'xy' to 'areAllCellModels'
// - Renamed export 'zU' to 'hasFirstCellInPath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 48515
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let i = e => (e == null ? undefined : e.type) === docBlockTypeConstants.blockTypeConstants.CELL;
  function l(e, n) {
    let r = n.filter(n => e.hasBlockModelByBlockId(n));
    return !!r.length && r.every(n => i(e.getBlockModelByBlockIdNotCheck(n)));
  }
  function c(e, n) {
    let r = n.filter(n => e.hasBlockModelByBlockId(n.id));
    return !!r.length && r.every(n => i(e.getBlockModelByBlockIdNotCheck(n.id)));
  }
  function u(e, n) {
    return !!e.hasBlockModelByBlockId(n) && [...e.getBlockPath(n), n].reverse().some(n => i(e.getBlockModelByBlockIdNotCheck(n)));
  }
  function a(e, n) {
    return !!n[0] && u(e, n[0].id);
  }
  require.d(exports, {
    hasCellInPath: function () {
      return u;
    },
    areAllCellsById: function () {
      return l;
    },
    areAllCellModels: function () {
      return c;
    },
    hasFirstCellInPath: function () {
      return a;
    }
  });
}