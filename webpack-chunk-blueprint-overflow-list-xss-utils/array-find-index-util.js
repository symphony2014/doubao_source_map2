// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'findIndexDirected'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 344433
         */
module.exports = function (module, exports, require) {
  exports.findIndexDirected = function (e, t, n, r) {
    var i = e.length;
    var o = n + (r ? 1 : -1);
    while (r ? o-- : ++o < i) {
      if (t(e[o], o, e)) {
        return o;
      }
    }
    return -1;
  };
}