// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'alwaysFalse'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 770345
         */
module.exports = function (module, exports, require) {
  let i = () => false;
  require.d(exports, {
    alwaysFalse: function () {
      return i;
    }
  });
}