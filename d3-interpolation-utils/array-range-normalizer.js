// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'normalizeArrayRange'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 29708
         */
module.exports = function (module, exports, require) {
  function i(t, n) {
    t = t.slice();
    var e;
    var i = 0;
    var r = t.length - 1;
    var o = t[i];
    var u = t[r];
    if (u < o) {
      e = i;
      i = r;
      r = e;
      e = o;
      o = u;
      u = e;
    }
    t[i] = n.floor(o);
    t[r] = n.ceil(u);
    return t;
  }
  require.d(exports, {
    normalizeArrayRange: function () {
      return i;
    }
  });
}