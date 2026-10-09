// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// - Resolved require(142493) to 'crypto-cipher-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 197895
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    e.mode.CTRGladman = function () {
      var t = e.lib.BlockCipherMode.extend();
      function r(e) {
        if ((e >> 24 & 255) == 255) {
          var t = e >> 16 & 255;
          var r = e >> 8 & 255;
          var n = e & 255;
          if (t === 255) {
            t = 0;
            if (r === 255) {
              r = 0;
              if (n === 255) {
                n = 0;
              } else {
                ++n;
              }
            } else {
              ++r;
            }
          } else {
            ++t;
          }
          e = 0 + (t << 16) + (r << 8) + n;
        } else {
          e += 16777216;
        }
        return e;
      }
      var n = t.Encryptor = t.extend({
        processBlock: function (e, t) {
          var n;
          var o = this._cipher;
          var i = o.blockSize;
          var a = this._iv;
          var c = this._counter;
          if (a) {
            c = this._counter = a.slice(0);
            this._iv = undefined;
          }
          if (((n = c)[0] = r(n[0])) === 0) {
            n[1] = r(n[1]);
          }
          var f = c.slice(0);
          o.encryptBlock(f, 0);
          for (var s = 0; s < i; s++) {
            e[t + s] ^= f[s];
          }
        }
      });
      t.Decryptor = n;
      return t;
    }();
    return e.mode.CTRGladman;
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/, require("crypto-cipher-core") /*id: 142493*/);
}