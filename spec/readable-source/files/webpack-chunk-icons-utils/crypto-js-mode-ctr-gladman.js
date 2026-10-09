// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// - Resolved require(698370) to 'crypto-js-cipher-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 50433
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
          var i = this._cipher;
          var o = i.blockSize;
          var a = this._iv;
          var s = this._counter;
          if (a) {
            s = this._counter = a.slice(0);
            this._iv = undefined;
          }
          if (((n = s)[0] = r(n[0])) === 0) {
            n[1] = r(n[1]);
          }
          var c = s.slice(0);
          i.encryptBlock(c, 0);
          for (var u = 0; u < o; u++) {
            e[t + u] ^= c[u];
          }
        }
      });
      t.Decryptor = n;
      return t;
    }();
    return e.mode.CTRGladman;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/, require("crypto-js-cipher-core") /*id: 698370*/);
}