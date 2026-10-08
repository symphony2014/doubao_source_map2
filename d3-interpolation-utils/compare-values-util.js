// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'compareValues'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 378281
         */
module.exports = function (module, exports, require) {
  function i(t, n) {
    if (t == null || n == null) {
      return NaN;
    } else if (t < n) {
      return -1;
    } else if (t > n) {
      return 1;
    } else if (t >= n) {
      return 0;
    } else {
      return NaN;
    }
  }
  require.d(exports, {
    compareValues: function () {
      return i;
    }
  });
}