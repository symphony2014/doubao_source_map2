// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createPropGetter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 10374
         */
module.exports = function (module, exports, require) {
  exports.createPropGetter = function (e) {
    return function (t) {
      if (e == null) {
        return undefined;
      } else {
        return e[t];
      }
    };
  };
}