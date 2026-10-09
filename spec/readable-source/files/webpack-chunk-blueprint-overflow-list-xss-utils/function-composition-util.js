// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'compose'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 396862
         */
module.exports = function (module, exports, require) {
  exports.compose = function (e, t) {
    return function (n) {
      return e(t(n));
    };
  };
}