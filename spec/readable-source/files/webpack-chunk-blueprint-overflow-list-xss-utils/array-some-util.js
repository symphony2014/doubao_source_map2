// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'arraySome'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 312664
         */
module.exports = function (module, exports, require) {
  exports.arraySome = function (e, t) {
    var n = -1;
    var r = e == null ? 0 : e.length;
    while (++n < r) {
      if (t(e[n], n, e)) {
        return true;
      }
    }
    return false;
  };
}