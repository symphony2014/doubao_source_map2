// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createLerp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 471062
         */
module.exports = function (module, exports, require) {
  function i(t, n) {
    t *= 1;
    n *= 1;
    return function (e) {
      return Math.round(t * (1 - e) + n * e);
    };
  }
  require.d(exports, {
    createLerp: function () {
      return i;
    }
  });
}