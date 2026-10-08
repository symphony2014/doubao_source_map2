// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 711194
         */
module.exports = function (module, exports, require) {
  module.exports = (e, t, r, n) => {
    let i = e & 65535 | 0;
    let o = e >>> 16 & 65535 | 0;
    let a = 0;
    while (r !== 0) {
      a = r > 2000 ? 2000 : r;
      r -= a;
      do {
        o = o + (i = i + t[n++] | 0) | 0;
      } while (--a);
      i %= 65521;
      o %= 65521;
    }
    return i | o << 16 | 0;
  };
}