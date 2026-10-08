// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'radToDegFactor'
// - Renamed export 'u' to 'degToRadFactor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 343326
         */
module.exports = function (module, exports, require) {
  let i = Math.PI / 180;
  let r = 180 / Math.PI;
  require.d(exports, {
    radToDegFactor: function () {
      return r;
    },
    degToRadFactor: function () {
      return i;
    }
  });
}