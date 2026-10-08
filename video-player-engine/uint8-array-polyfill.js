// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(240974) to 'typed-array-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 948961
         */
module.exports = function (module, exports, require) {
  require("typed-array-polyfill") /*id: 240974*/("Uint8", function (U) {
    return function (n, F, Q) {
      return U(this, n, F, Q);
    };
  });
}