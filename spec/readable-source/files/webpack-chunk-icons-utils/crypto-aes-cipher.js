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
         * moduleId: 842465
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var r;
    var n;
    var i;
    var o;
    var a;
    var s;
    var c;
    var u;
    var f;
    var l;
    var d;
    var h;
    var g;
    t = e.lib.BlockCipher;
    r = e.algo;
    n = [];
    i = [];
    o = [];
    a = [];
    s = [];
    c = [];
    u = [];
    f = [];
    l = [];
    d = [];
    (function () {
      var e = [];
      var t = 0;
      for (; t < 256; t++) {
        if (t < 128) {
          e[t] = t << 1;
        } else {
          e[t] = t << 1 ^ 283;
        }
      }
      var r = 0;
      var h = 0;
      var t = 0;
      for (; t < 256; t++) {
        var g = h ^ h << 1 ^ h << 2 ^ h << 3 ^ h << 4;
        g = g >>> 8 ^ g & 255 ^ 99;
        n[r] = g;
        i[g] = r;
        var x = e[r];
        var M = e[x];
        var p = e[M];
        var y = e[g] * 257 ^ g * 16843008;
        o[r] = y << 24 | y >>> 8;
        a[r] = y << 16 | y >>> 16;
        s[r] = y << 8 | y >>> 24;
        c[r] = y;
        var y = p * 16843009 ^ M * 65537 ^ x * 257 ^ r * 16843008;
        u[g] = y << 24 | y >>> 8;
        f[g] = y << 16 | y >>> 16;
        l[g] = y << 8 | y >>> 24;
        d[g] = y;
        if (r) {
          r = x ^ e[e[e[p ^ x]]];
          h ^= e[e[h]];
        } else {
          r = h = 1;
        }
      }
    })();
    h = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    g = r.AES = t.extend({
      _doReset: function () {
        if (!this._nRounds || this._keyPriorReset !== this._key) {
          var e;
          var t = this._keyPriorReset = this._key;
          var r = t.words;
          var i = t.sigBytes / 4;
          var o = ((this._nRounds = i + 6) + 1) * 4;
          var a = this._keySchedule = [];
          var s = 0;
          for (; s < o; s++) {
            if (s < i) {
              a[s] = r[s];
            } else {
              e = a[s - 1];
              if (s % i) {
                if (i > 6 && s % i == 4) {
                  e = n[e >>> 24] << 24 | n[e >>> 16 & 255] << 16 | n[e >>> 8 & 255] << 8 | n[e & 255];
                }
              } else {
                e = (n[(e = e << 8 | e >>> 24) >>> 24] << 24 | n[e >>> 16 & 255] << 16 | n[e >>> 8 & 255] << 8 | n[e & 255]) ^ h[s / i | 0] << 24;
              }
              a[s] = a[s - i] ^ e;
            }
          }
          var c = this._invKeySchedule = [];
          var g = 0;
          for (; g < o; g++) {
            var s = o - g;
            if (g % 4) {
              var e = a[s];
            } else {
              var e = a[s - 4];
            }
            if (g < 4 || s <= 4) {
              c[g] = e;
            } else {
              c[g] = u[n[e >>> 24]] ^ f[n[e >>> 16 & 255]] ^ l[n[e >>> 8 & 255]] ^ d[n[e & 255]];
            }
          }
        }
      },
      encryptBlock: function (e, t) {
        this._doCryptBlock(e, t, this._keySchedule, o, a, s, c, n);
      },
      decryptBlock: function (e, t) {
        var r = e[t + 1];
        e[t + 1] = e[t + 3];
        e[t + 3] = r;
        this._doCryptBlock(e, t, this._invKeySchedule, u, f, l, d, i);
        var r = e[t + 1];
        e[t + 1] = e[t + 3];
        e[t + 3] = r;
      },
      _doCryptBlock: function (e, t, r, n, i, o, a, s) {
        var c = this._nRounds;
        var u = e[t] ^ r[0];
        var f = e[t + 1] ^ r[1];
        var l = e[t + 2] ^ r[2];
        var d = e[t + 3] ^ r[3];
        var h = 4;
        var g = 1;
        for (; g < c; g++) {
          var x = n[u >>> 24] ^ i[f >>> 16 & 255] ^ o[l >>> 8 & 255] ^ a[d & 255] ^ r[h++];
          var M = n[f >>> 24] ^ i[l >>> 16 & 255] ^ o[d >>> 8 & 255] ^ a[u & 255] ^ r[h++];
          var p = n[l >>> 24] ^ i[d >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[f & 255] ^ r[h++];
          var y = n[d >>> 24] ^ i[u >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[l & 255] ^ r[h++];
          u = x;
          f = M;
          l = p;
          d = y;
        }
        var x = (s[u >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[d & 255]) ^ r[h++];
        var M = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[u & 255]) ^ r[h++];
        var p = (s[l >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[f & 255]) ^ r[h++];
        var y = (s[d >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[l & 255]) ^ r[h++];
        e[t] = x;
        e[t + 1] = M;
        e[t + 2] = p;
        e[t + 3] = y;
      },
      keySize: 8
    });
    e.AES = t._createHelper(g);
    return e.AES;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/, require("crypto-js-base64-encoding") /*id: 726240*/, require("crypto-js-md5-hash") /*id: 816984*/, require("crypto-js-evp-kdf") /*id: 420793*/, require("crypto-js-cipher-core") /*id: 698370*/);
}