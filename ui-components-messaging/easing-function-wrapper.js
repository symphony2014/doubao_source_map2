// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'createEaseInOut'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 401.be1fef9b.js
         * chunkId: 401
         * moduleId: 565409
         */
module.exports = function (module, exports, require) {
  let i = e => t => t <= 0.5 ? e(t * 2) / 2 : (2 - e((1 - t) * 2)) / 2;
  require.d(exports, {
    createEaseInOut: function () {
      return i;
    }
  });
}