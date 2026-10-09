// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 153289
         */
module.exports = function (module, exports, require) {
  var e = function () {
    var t;
    var e = [];
    var r = 0;
    for (; r < 256; r++) {
      t = r;
      for (var i = 0; i < 8; i++) {
        t = t & 1 ? t >>> 1 ^ -306674912 : t >>> 1;
      }
      e[r] = t;
    }
    return e;
  }();
  function r(t, r, i, n) {
    var o = e;
    var s = n + i;
    t ^= -1;
    for (var a = n; a < s; a++) {
      t = t >>> 8 ^ o[(t ^ r[a]) & 255];
    }
    return t ^ -1;
  }
  module.exports = r;
}