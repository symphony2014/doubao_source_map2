// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'linearInterpolate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 659052
         */
module.exports = function (module, exports, require) {
  exports.linearInterpolate = function (t, e, n) {
    if (isNaN(t)) {
      return e;
    } else {
      return t + (e - t) * n;
    }
  };
}