// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'unsubscribeAll'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 355225
         */
module.exports = function (module, exports, require) {
  function o(e) {
    e.forEach(e => e == null ? undefined : e.unsubscribe());
  }
  require.d(exports, {
    unsubscribeAll: function () {
      return o;
    }
  });
}