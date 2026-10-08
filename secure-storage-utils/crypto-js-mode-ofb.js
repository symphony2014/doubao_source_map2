// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// - Resolved require(142493) to 'crypto-cipher-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 910917
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
        var o = this._iv;
        var i = this._keystream;
        if (o) {
          i = this._keystream = o.slice(0);
          this._iv = undefined;
        }
        r.encryptBlock(i, 0);
        for (var a = 0; a < n; a++) {
          e[t + a] ^= i[a];
        }
      }
    }), t.Decryptor = r, t);
    return e.mode.OFB;
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/, require("crypto-cipher-core") /*id: 142493*/);
}