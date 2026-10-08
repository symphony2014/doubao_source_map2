// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'partitionLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 297825
         */
module.exports = function (module, exports, require) {
  function i(t, n, e, i, r) {
    var o;
    var u = t.children;
    var a = -1;
    var s = u.length;
    var c = t.value && (i - n) / t.value;
    while (++a < s) {
      (o = u[a]).y0 = e;
      o.y1 = r;
      o.x0 = n;
      o.x1 = n += o.value * c;
    }
  }
  require.d(exports, {
    partitionLayout: function () {
      return i;
    }
  });
}