// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'arrayFilter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 68536
         */
module.exports = function (module, exports, require) {
  exports.arrayFilter = function (e, t) {
    var n = -1;
    var r = e == null ? 0 : e.length;
    var i = 0;
    var o = [];
    while (++n < r) {
      var a = e[n];
      if (t(a, n, e)) {
        o[i++] = a;
      }
    }
    return o;
  };
}