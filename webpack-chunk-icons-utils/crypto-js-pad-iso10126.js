// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// - Resolved require(698370) to 'crypto-js-cipher-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 619322
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    e.pad.Iso10126 = {
      pad: function (t, r) {
        var n = r * 4;
        var i = n - t.sigBytes % n;
        t.concat(e.lib.WordArray.random(i - 1)).concat(e.lib.WordArray.create([i << 24], 1));
      },
      unpad: function (e) {
        var t = e.words[e.sigBytes - 1 >>> 2] & 255;
        e.sigBytes -= t;
      }
    };
    return e.pad.Iso10126;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/, require("crypto-js-cipher-core") /*id: 698370*/);
}