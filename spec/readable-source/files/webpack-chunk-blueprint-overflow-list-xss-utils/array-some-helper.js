// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'arraySome'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 328501
         */
module.exports = function (module, exports, require) {
  exports.arraySome = function (e, t, n) {
    var r = -1;
    var i = e == null ? 0 : e.length;
    while (++r < i) {
      if (n(t, e[r])) {
        return true;
      }
    }
    return false;
  };
}