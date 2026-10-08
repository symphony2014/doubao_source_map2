// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 750330
         */
module.exports = function (module, exports, require) {
  let t = new Uint32Array((() => {
    let e;
    let t = [];
    for (var r = 0; r < 256; r++) {
      e = r;
      for (var n = 0; n < 8; n++) {
        e = e & 1 ? e >>> 1 ^ -306674912 : e >>> 1;
      }
      t[r] = e;
    }
    return t;
  })());
  module.exports = (e, r, n, i) => {
    let o = i + n;
    e ^= -1;
    for (let n = i; n < o; n++) {
      e = e >>> 8 ^ t[(e ^ r[n]) & 255];
    }
    return e ^ -1;
  };
}