// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 160775
         */
module.exports = function (module, exports, require) {
  exports.createWrapper = function (e) {
    return function (t) {
      return e(t);
    };
  };
}