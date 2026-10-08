// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'arrayReduce'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 309228
         */
module.exports = function (module, exports, require) {
  exports.arrayReduce = function (t, e, r, n) {
    var o = -1;
    var a = t == null ? 0 : t.length;
    for (n && a && (r = t[++o]); ++o < a;) {
      r = e(r, t[o], o, t);
    }
    return r;
  };
}