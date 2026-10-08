// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getLastElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 715951
         */
module.exports = function (module, exports, require) {
  exports.getLastElement = function (e) {
    var t = e == null ? 0 : e.length;
    if (t) {
      return e[t - 1];
    } else {
      return undefined;
    }
  };
}