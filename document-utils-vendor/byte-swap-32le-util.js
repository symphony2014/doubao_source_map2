// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 353410
         */
module.exports = function (module, exports, require) {
  let t = new Uint8Array(new Uint32Array([305419896]).buffer)[0] === 18;
  let r = (e, t, r) => {
    let n = e[t];
    e[t] = e[r];
    e[r] = n;
  };
  let n = e => {
    let t = e.length;
    for (let n = 0; n < t; n += 4) {
      r(e, n, n + 3);
      r(e, n + 1, n + 2);
    }
  };
  module.exports = {
    swap32LE: e => {
      if (t) {
        n(e);
      }
    }
  };
}