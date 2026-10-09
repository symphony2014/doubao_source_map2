// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'parseHexColors'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 606612
         */
module.exports = function (module, exports, require) {
  function i(t) {
    var n = t.length / 6 | 0;
    var e = Array(n);
    var i = 0;
    while (i < n) {
      e[i] = "#" + t.slice(i * 6, ++i * 6);
    }
    return e;
  }
  require.d(exports, {
    parseHexColors: function () {
      return i;
    }
  });
}