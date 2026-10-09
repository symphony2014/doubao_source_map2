// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'generateRange'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 510583
         */
module.exports = function (module, exports, require) {
  function i(t, n, e) {
    t *= 1;
    n *= 1;
    e = (r = arguments.length) < 2 ? (n = t, t = 0, 1) : r < 3 ? 1 : +e;
    var i = -1;
    var r = Math.max(0, Math.ceil((n - t) / e)) | 0;
    var o = Array(r);
    while (++i < r) {
      o[i] = t + i * e;
    }
    return o;
  }
  require.d(exports, {
    generateRange: function () {
      return i;
    }
  });
}