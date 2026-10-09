// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'waitForTick'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 954555
         */
module.exports = function (module, exports, require) {
  async function n() {
    await new Promise(e => e());
  }
  require.d(exports, {
    waitForTick: function () {
      return n;
    }
  });
}