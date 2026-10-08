// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'getCellId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 812767
         */
module.exports = function (module, exports, require) {
  function o(e) {
    let n = e.parent;
    let r = n.snapshot.columns_id.length;
    let o = Math.floor(e.position / r);
    let i = e.position % r;
    let l = n.snapshot.columns_id[i];
    let c = n.snapshot.rows_id[o];
    return `${c}${l}`;
  }
  require.d(exports, {
    getCellId: function () {
      return o;
    }
  });
}