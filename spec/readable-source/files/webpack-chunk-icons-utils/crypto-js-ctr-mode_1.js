// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// - Resolved require(698370) to 'crypto-js-cipher-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 88722
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var r;
    e.mode.CTR = (r = (t = e.lib.BlockCipherMode.extend()).Encryptor = t.extend({
      processBlock: function (e, t) {
        var r = this._cipher;
        var n = r.blockSize;
        var i = this._iv;
        var o = this._counter;
        if (i) {
          o = this._counter = i.slice(0);
          this._iv = undefined;
        }
        var a = o.slice(0);
        r.encryptBlock(a, 0);
        o[n - 1] = o[n - 1] + 1 | 0;
        for (var s = 0; s < n; s++) {
          e[t + s] ^= a[s];
        }
      }
    }), t.Decryptor = r, t);
    return e.mode.CTR;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/, require("crypto-js-cipher-core") /*id: 698370*/);
}