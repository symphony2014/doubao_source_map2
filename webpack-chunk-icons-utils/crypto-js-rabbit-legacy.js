// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// - Resolved require(726240) to 'crypto-js-base64-encoding'
// - Resolved require(816984) to 'crypto-js-md5-hash'
// - Resolved require(420793) to 'crypto-js-evp-kdf'
// - Resolved require(698370) to 'crypto-js-cipher-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 847051
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    (function () {
      var t = e.lib.StreamCipher;
      var r = e.algo;
      var n = [];
      var i = [];
      var o = [];
      var a = r.RabbitLegacy = t.extend({
        _doReset: function () {
          var e = this._key.words;
          var t = this.cfg.iv;
          var r = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16];
          var n = this._C = [e[2] << 16 | e[2] >>> 16, e[0] & -65536 | e[1] & 65535, e[3] << 16 | e[3] >>> 16, e[1] & -65536 | e[2] & 65535, e[0] << 16 | e[0] >>> 16, e[2] & -65536 | e[3] & 65535, e[1] << 16 | e[1] >>> 16, e[3] & -65536 | e[0] & 65535];
          this._b = 0;
          for (var i = 0; i < 4; i++) {
            s.call(this);
          }
          for (var i = 0; i < 8; i++) {
            n[i] ^= r[i + 4 & 7];
          }
          if (t) {
            var o = t.words;
            var a = o[0];
            var c = o[1];
            var u = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & -16711936;
            var f = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & -16711936;
            var l = u >>> 16 | f & -65536;
            var d = f << 16 | u & 65535;
            n[0] ^= u;
            n[1] ^= l;
            n[2] ^= f;
            n[3] ^= d;
            n[4] ^= u;
            n[5] ^= l;
            n[6] ^= f;
            n[7] ^= d;
            for (var i = 0; i < 4; i++) {
              s.call(this);
            }
          }
        },
        _doProcessBlock: function (e, t) {
          var r = this._X;
          s.call(this);
          n[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16;
          n[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16;
          n[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16;
          n[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;
          for (var i = 0; i < 4; i++) {
            n[i] = (n[i] << 8 | n[i] >>> 24) & 16711935 | (n[i] << 24 | n[i] >>> 8) & -16711936;
            e[t + i] ^= n[i];
          }
        },
        blockSize: 4,
        ivSize: 2
      });
      function s() {
        var e = this._X;
        var t = this._C;
        var r = 0;
        for (; r < 8; r++) {
          i[r] = t[r];
        }
        t[0] = t[0] + 1295307597 + this._b | 0;
        t[1] = t[1] + 3545052371 + +(t[0] >>> 0 < i[0] >>> 0) | 0;
        t[2] = t[2] + 886263092 + +(t[1] >>> 0 < i[1] >>> 0) | 0;
        t[3] = t[3] + 1295307597 + +(t[2] >>> 0 < i[2] >>> 0) | 0;
        t[4] = t[4] + 3545052371 + +(t[3] >>> 0 < i[3] >>> 0) | 0;
        t[5] = t[5] + 886263092 + +(t[4] >>> 0 < i[4] >>> 0) | 0;
        t[6] = t[6] + 1295307597 + +(t[5] >>> 0 < i[5] >>> 0) | 0;
        t[7] = t[7] + 3545052371 + +(t[6] >>> 0 < i[6] >>> 0) | 0;
        this._b = +(t[7] >>> 0 < i[7] >>> 0);
        for (var r = 0; r < 8; r++) {
          var n = e[r] + t[r];
          var a = n & 65535;
          var s = n >>> 16;
          var c = ((a * a >>> 17) + a * s >>> 15) + s * s;
          var u = ((n & -65536) * n | 0) + ((n & 65535) * n | 0);
          o[r] = c ^ u;
        }
        e[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0;
        e[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0;
        e[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0;
        e[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0;
        e[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0;
        e[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0;
        e[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0;
        e[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
      }
      e.RabbitLegacy = t._createHelper(a);
    })();
    return e.RabbitLegacy;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/, require("crypto-js-base64-encoding") /*id: 726240*/, require("crypto-js-md5-hash") /*id: 816984*/, require("crypto-js-evp-kdf") /*id: 420793*/, require("crypto-js-cipher-core") /*id: 698370*/);
}