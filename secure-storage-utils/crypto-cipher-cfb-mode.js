// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// - Resolved require(142493) to 'crypto-cipher-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 544814
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    e.mode.CFB = function () {
      var t = e.lib.BlockCipherMode.extend();
      function r(e, t, r, n) {
        var o = this._iv;
        if (o) {
          var i = o.slice(0);
          this._iv = undefined;
        } else {
          var i = this._prevBlock;
        }
        n.encryptBlock(i, 0);
        for (var a = 0; a < r; a++) {
          e[t + a] ^= i[a];
        }
      }
      t.Encryptor = t.extend({
        processBlock: function (e, t) {
          var n = this._cipher;
          var o = n.blockSize;
          r.call(this, e, t, o, n);
          this._prevBlock = e.slice(t, t + o);
        }
      });
      t.Decryptor = t.extend({
        processBlock: function (e, t) {
          var n = this._cipher;
          var o = n.blockSize;
          var i = e.slice(t, t + o);
          r.call(this, e, t, o, n);
          this._prevBlock = i;
        }
      });
      return t;
    }();
    return e.mode.CFB;
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/, require("crypto-cipher-core") /*id: 142493*/);
}