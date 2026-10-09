// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'stackLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 926461
         */
module.exports = function (module, exports, require) {
  function i(t, n, e, i, r) {
    var o;
    var u = t.children;
    var a = -1;
    var s = u.length;
    var c = t.value && (r - e) / t.value;
    while (++a < s) {
      (o = u[a]).x0 = n;
      o.x1 = i;
      o.y0 = e;
      o.y1 = e += o.value * c;
    }
  }
  require.d(exports, {
    stackLayout: function () {
      return i;
    }
  });
}