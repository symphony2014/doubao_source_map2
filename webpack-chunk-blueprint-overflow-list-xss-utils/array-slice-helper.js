// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'arraySlice'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 728245
         */
module.exports = function (module, exports, require) {
  exports.arraySlice = function (e, t, n) {
    var r = -1;
    var i = e.length;
    if (t < 0) {
      t = -t > i ? 0 : i + t;
    }
    if ((n = n > i ? i : n) < 0) {
      n += i;
    }
    i = t > n ? 0 : n - t >>> 0;
    t >>>= 0;
    var o = Array(i);
    for (; ++r < i;) {
      o[r] = e[r + t];
    }
    return o;
  };
}