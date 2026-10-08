// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'appendArrayElements'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 332715
         */
module.exports = function (module, exports, require) {
  exports.appendArrayElements = function (e, t) {
    var n = -1;
    var r = t.length;
    var i = e.length;
    while (++n < r) {
      e[i + n] = t[n];
    }
    return e;
  };
}