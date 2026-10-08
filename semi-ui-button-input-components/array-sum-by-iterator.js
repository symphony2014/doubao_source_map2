// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'sumBy'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14520.ef9f9644.js
         * chunkId: 14520
         * moduleId: 77851
         */
module.exports = function (module, exports, require) {
  exports.sumBy = function (t, e) {
    var n;
    var r = -1;
    var i = t.length;
    while (++r < i) {
      var o = e(t[r]);
      if (o !== undefined) {
        n = n === undefined ? o : n + o;
      }
    }
    return n;
  };
}