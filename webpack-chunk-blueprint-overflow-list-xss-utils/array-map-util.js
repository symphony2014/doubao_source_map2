// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'arrayMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 466350
         */
module.exports = function (module, exports, require) {
  exports.arrayMap = function (e, t) {
    var n = -1;
    var r = e == null ? 0 : e.length;
    var i = Array(r);
    while (++n < r) {
      i[n] = t(e[n], n, e);
    }
    return i;
  };
}