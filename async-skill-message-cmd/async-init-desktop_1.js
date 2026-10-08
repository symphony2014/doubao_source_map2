// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'isInitEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-init-desktop.e9cbd988.js
         * chunkId: 41054
         * moduleId: 536792
         */
module.exports = function (module, exports, require) {
  let i = e => false;
  require.d(exports, {
    isInitEnabled: function () {
      return i;
    }
  });
}