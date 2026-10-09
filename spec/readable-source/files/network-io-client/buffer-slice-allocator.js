// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 699307
         */
module.exports = function (module, exports, require) {
  function t(e, t, r) {
    var n = r || 8192;
    var i = n >>> 1;
    var s = null;
    var o = n;
    return function (r) {
      if (r < 1 || r > i) {
        return e(r);
      }
      if (o + r > n) {
        s = e(n);
        o = 0;
      }
      var a = t.call(s, o, o += r);
      if (o & 7) {
        o = (o | 7) + 1;
      }
      return a;
    };
  }
  module.exports = t;
}