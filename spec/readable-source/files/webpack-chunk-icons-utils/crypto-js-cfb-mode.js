// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// - Resolved require(698370) to 'crypto-js-cipher-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 767379
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    e.mode.CFB = function () {
      var t = e.lib.BlockCipherMode.extend();
      function r(e, t, r, n) {
        var i;
        var o = this._iv;
        if (o) {
          i = o.slice(0);
          this._iv = undefined;
        } else {
          i = this._prevBlock;
        }
        n.encryptBlock(i, 0);
        for (var a = 0; a < r; a++) {
          e[t + a] ^= i[a];
        }
      }
      t.Encryptor = t.extend({
        processBlock: function (e, t) {
          var n = this._cipher;
          var i = n.blockSize;
          r.call(this, e, t, i, n);
          this._prevBlock = e.slice(t, t + i);
        }
      });
      t.Decryptor = t.extend({
        processBlock: function (e, t) {
          var n = this._cipher;
          var i = n.blockSize;
          var o = e.slice(t, t + i);
          r.call(this, e, t, i, n);
          this._prevBlock = o;
        }
      });
      return t;
    }();
    return e.mode.CFB;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/, require("crypto-js-cipher-core") /*id: 698370*/);
}