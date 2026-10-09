// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'mapArrayLength'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 404345
         */
module.exports = function (module, exports, require) {
  exports.mapArrayLength = function (e, t) {
    var n = -1;
    var r = Array(e);
    while (++n < e) {
      r[n] = t(n);
    }
    return r;
  };
}