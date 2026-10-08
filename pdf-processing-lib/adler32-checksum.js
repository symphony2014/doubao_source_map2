// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 727832
         */
module.exports = function (module, exports, require) {
  function e(t, e, r, i) {
    var n = t & 65535 | 0;
    var o = t >>> 16 & 65535 | 0;
    var s = 0;
    while (r !== 0) {
      s = r > 2000 ? 2000 : r;
      r -= s;
      do {
        o = o + (n = n + e[i++] | 0) | 0;
      } while (--s);
      n %= 65521;
      o %= 65521;
    }
    return n | o << 16 | 0;
  }
  module.exports = e;
}