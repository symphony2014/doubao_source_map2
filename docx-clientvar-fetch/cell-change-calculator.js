// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'calculateCellChanges'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72566.6916328b.js
         * chunkId: 72566
         * moduleId: 199925
         */
module.exports = function (module, exports, require) {
  function r(t) {
    let e = {
      isAddCell: false,
      isDelCell: false,
      isMerge: false,
      changedCellBlockIds: [],
      changedCellIds: []
    };
    let i = (t == null ? undefined : t.from) || {};
    let r = (t == null ? undefined : t.to) || {};
    let n = Object.keys(i);
    let o = Object.keys(r);
    let s = n.every(t => !i[t]);
    let a = n.every(t => !r[t]);
    let l = n.concat(o).some(t => t.includes("cell_set"));
    e.isAddCell = l && s && !a;
    e.isDelCell = l && !s && a;
    e.isMerge = n.some(t => /cell_set\..+\.merge_info/.test(t));
    n.filter(t => t.indexOf("cell_set") === 0).forEach(t => {
      let n = t.split(".")[1];
      e.changedCellIds.push(n);
      let o = (i[t] || r[t]).block_id;
      if (o) {
        e.changedCellBlockIds.push(o);
      }
    });
    return e;
  }
  require.d(exports, {
    calculateCellChanges: function () {
      return r;
    }
  });
}