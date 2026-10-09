// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'dateInterpolator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 173391
         */
module.exports = function (module, exports, require) {
  function i(t, n) {
    var e = new Date();
    t *= 1;
    n *= 1;
    return function (i) {
      e.setTime(t * (1 - i) + n * i);
      return e;
    };
  }
  require.d(exports, {
    dateInterpolator: function () {
      return i;
    }
  });
}