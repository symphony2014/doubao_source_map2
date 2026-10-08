// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'mapToEntries'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 414664
         */
module.exports = function (module, exports, require) {
  exports.mapToEntries = function (e) {
    var t = -1;
    var n = Array(e.size);
    e.forEach(function (e, r) {
      n[++t] = [r, e];
    });
    return n;
  };
}