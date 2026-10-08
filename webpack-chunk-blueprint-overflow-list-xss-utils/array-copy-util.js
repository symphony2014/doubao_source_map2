// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'copyArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 996367
         */
module.exports = function (module, exports, require) {
  exports.copyArray = function (e, t) {
    var n = -1;
    var r = e.length;
    for (t ||= Array(r); ++n < r;) {
      t[n] = e[n];
    }
    return t;
  };
}