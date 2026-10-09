// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// - Resolved require(628518) to 'crypto-js-base64'
// - Resolved require(408704) to 'crypto-js-md5-core'
// - Resolved require(991453) to 'crypto-evp-kdf'
// - Resolved require(142493) to 'crypto-cipher-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 632795
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    (function () {
      var t = e.lib.StreamCipher;
      var r = e.algo;
      var n = [];
      var o = [];
      var i = [];
      var a = r.RabbitLegacy = t.extend({
        _doReset: function () {
          var e = this._key.words;
          var t = this.cfg.iv;
          var r = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16];
          var n = this._C = [e[2] << 16 | e[2] >>> 16, e[0] & -65536 | e[1] & 65535, e[3] << 16 | e[3] >>> 16, e[1] & -65536 | e[2] & 65535, e[0] << 16 | e[0] >>> 16, e[2] & -65536 | e[3] & 65535, e[1] << 16 | e[1] >>> 16, e[3] & -65536 | e[0] & 65535];
          this._b = 0;
          for (var o = 0; o < 4; o++) {
            c.call(this);
          }
          for (var o = 0; o < 8; o++) {
            n[o] ^= r[o + 4 & 7];
          }
          if (t) {
            var i = t.words;
            var a = i[0];
            var f = i[1];
            var s = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & -16711936;
            var u = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & -16711936;
            var h = s >>> 16 | u & -65536;
            var l = u << 16 | s & 65535;
            n[0] ^= s;
            n[1] ^= h;
            n[2] ^= u;
            n[3] ^= l;
            n[4] ^= s;
            n[5] ^= h;
            n[6] ^= u;
            n[7] ^= l;
            for (var o = 0; o < 4; o++) {
              c.call(this);
            }
          }
        },
        _doProcessBlock: function (e, t) {
          var r = this._X;
          c.call(this);
          n[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16;
          n[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16;
          n[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16;
          n[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;
          for (var o = 0; o < 4; o++) {
            n[o] = (n[o] << 8 | n[o] >>> 24) & 16711935 | (n[o] << 24 | n[o] >>> 8) & -16711936;
            e[t + o] ^= n[o];
          }
        },
        blockSize: 4,
        ivSize: 2
      });
      function c() {
        var e = this._X;
        var t = this._C;
        var r = 0;
        for (; r < 8; r++) {
          o[r] = t[r];
        }
        t[0] = t[0] + 1295307597 + this._b | 0;
        t[1] = t[1] + 3545052371 + +(t[0] >>> 0 < o[0] >>> 0) | 0;
        t[2] = t[2] + 886263092 + +(t[1] >>> 0 < o[1] >>> 0) | 0;
        t[3] = t[3] + 1295307597 + +(t[2] >>> 0 < o[2] >>> 0) | 0;
        t[4] = t[4] + 3545052371 + +(t[3] >>> 0 < o[3] >>> 0) | 0;
        t[5] = t[5] + 886263092 + +(t[4] >>> 0 < o[4] >>> 0) | 0;
        t[6] = t[6] + 1295307597 + +(t[5] >>> 0 < o[5] >>> 0) | 0;
        t[7] = t[7] + 3545052371 + +(t[6] >>> 0 < o[6] >>> 0) | 0;
        this._b = +(t[7] >>> 0 < o[7] >>> 0);
        for (var r = 0; r < 8; r++) {
          var n = e[r] + t[r];
          var a = n & 65535;
          var c = n >>> 16;
          var f = ((a * a >>> 17) + a * c >>> 15) + c * c;
          var s = ((n & -65536) * n | 0) + ((n & 65535) * n | 0);
          i[r] = f ^ s;
        }
        e[0] = i[0] + (i[7] << 16 | i[7] >>> 16) + (i[6] << 16 | i[6] >>> 16) | 0;
        e[1] = i[1] + (i[0] << 8 | i[0] >>> 24) + i[7] | 0;
        e[2] = i[2] + (i[1] << 16 | i[1] >>> 16) + (i[0] << 16 | i[0] >>> 16) | 0;
        e[3] = i[3] + (i[2] << 8 | i[2] >>> 24) + i[1] | 0;
        e[4] = i[4] + (i[3] << 16 | i[3] >>> 16) + (i[2] << 16 | i[2] >>> 16) | 0;
        e[5] = i[5] + (i[4] << 8 | i[4] >>> 24) + i[3] | 0;
        e[6] = i[6] + (i[5] << 16 | i[5] >>> 16) + (i[4] << 16 | i[4] >>> 16) | 0;
        e[7] = i[7] + (i[6] << 8 | i[6] >>> 24) + i[5] | 0;
      }
      e.RabbitLegacy = t._createHelper(a);
    })();
    return e.RabbitLegacy;
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/, require("crypto-js-base64") /*id: 628518*/, require("crypto-js-md5-core") /*id: 408704*/, require("crypto-evp-kdf") /*id: 991453*/, require("crypto-cipher-core") /*id: 142493*/);
}