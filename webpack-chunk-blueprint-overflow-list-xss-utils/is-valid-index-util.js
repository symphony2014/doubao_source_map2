// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isValidIndex'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 965085
         */
module.exports = function (module, exports, require) {
  exports.isValidIndex = function (e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= 9007199254740991;
  };
}