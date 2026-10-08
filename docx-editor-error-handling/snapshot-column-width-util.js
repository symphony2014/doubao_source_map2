// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'getColumnWidth'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 729416
         */
module.exports = function (module, exports, require) {
  function n(e, i) {
    let n = e.snapshot;
    let o = n.columns_id.length;
    let l = n.columns_id[i % o];
    return n.column_set[l]?.column_width || 0;
  }
  require.d(exports, {
    getColumnWidth: function () {
      return n;
    }
  });
}