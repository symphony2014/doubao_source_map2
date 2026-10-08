// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// - Resolved require(698370) to 'crypto-js-cipher-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 86358
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var r;
    e.mode.OFB = (r = (t = e.lib.BlockCipherMode.extend()).Encryptor = t.extend({
      processBlock: function (e, t) {
        var r = this._cipher;
        var n = r.blockSize;
        var i = this._iv;
        var o = this._keystream;
        if (i) {
          o = this._keystream = i.slice(0);
          this._iv = undefined;
        }
        r.encryptBlock(o, 0);
        for (var a = 0; a < n; a++) {
          e[t + a] ^= o[a];
        }
      }
    }), t.Decryptor = r, t);
    return e.mode.OFB;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/, require("crypto-js-cipher-core") /*id: 698370*/);
}