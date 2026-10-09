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
         * moduleId: 673786
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var r;
    var n;
    var o;
    var i;
    var a;
    var c;
    var f;
    var s;
    var u;
    var h;
    var l;
    var d;
    var x;
    t = e.lib.BlockCipher;
    r = e.algo;
    n = [];
    o = [];
    i = [];
    a = [];
    c = [];
    f = [];
    s = [];
    u = [];
    h = [];
    l = [];
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
      var d = 0;
      var t = 0;
      for (; t < 256; t++) {
        var x = d ^ d << 1 ^ d << 2 ^ d << 3 ^ d << 4;
        x = x >>> 8 ^ x & 255 ^ 99;
        n[r] = x;
        o[x] = r;
        var v = e[r];
        var p = e[v];
        var y = e[p];
        var _ = e[x] * 257 ^ x * 16843008;
        i[r] = _ << 24 | _ >>> 8;
        a[r] = _ << 16 | _ >>> 16;
        c[r] = _ << 8 | _ >>> 24;
        f[r] = _;
        var _ = y * 16843009 ^ p * 65537 ^ v * 257 ^ r * 16843008;
        s[x] = _ << 24 | _ >>> 8;
        u[x] = _ << 16 | _ >>> 16;
        h[x] = _ << 8 | _ >>> 24;
        l[x] = _;
        if (r) {
          r = v ^ e[e[e[y ^ v]]];
          d ^= e[e[d]];
        } else {
          r = d = 1;
        }
      }
    })();
    d = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    x = r.AES = t.extend({
      _doReset: function () {
        if (!this._nRounds || this._keyPriorReset !== this._key) {
          var e = this._keyPriorReset = this._key;
          var t = e.words;
          var r = e.sigBytes / 4;
          var o = ((this._nRounds = r + 6) + 1) * 4;
          var i = this._keySchedule = [];
          var a = 0;
          for (; a < o; a++) {
            if (a < r) {
              i[a] = t[a];
            } else {
              var c = i[a - 1];
              if (a % r) {
                if (r > 6 && a % r == 4) {
                  c = n[c >>> 24] << 24 | n[c >>> 16 & 255] << 16 | n[c >>> 8 & 255] << 8 | n[c & 255];
                }
              } else {
                c = (n[(c = c << 8 | c >>> 24) >>> 24] << 24 | n[c >>> 16 & 255] << 16 | n[c >>> 8 & 255] << 8 | n[c & 255]) ^ d[a / r | 0] << 24;
              }
              i[a] = i[a - r] ^ c;
            }
          }
          var f = this._invKeySchedule = [];
          var x = 0;
          for (; x < o; x++) {
            var a = o - x;
            if (x % 4) {
              var c = i[a];
            } else {
              var c = i[a - 4];
            }
            if (x < 4 || a <= 4) {
              f[x] = c;
            } else {
              f[x] = s[n[c >>> 24]] ^ u[n[c >>> 16 & 255]] ^ h[n[c >>> 8 & 255]] ^ l[n[c & 255]];
            }
          }
        }
      },
      encryptBlock: function (e, t) {
        this._doCryptBlock(e, t, this._keySchedule, i, a, c, f, n);
      },
      decryptBlock: function (e, t) {
        var r = e[t + 1];
        e[t + 1] = e[t + 3];
        e[t + 3] = r;
        this._doCryptBlock(e, t, this._invKeySchedule, s, u, h, l, o);
        var r = e[t + 1];
        e[t + 1] = e[t + 3];
        e[t + 3] = r;
      },
      _doCryptBlock: function (e, t, r, n, o, i, a, c) {
        var f = this._nRounds;
        var s = e[t] ^ r[0];
        var u = e[t + 1] ^ r[1];
        var h = e[t + 2] ^ r[2];
        var l = e[t + 3] ^ r[3];
        var d = 4;
        var x = 1;
        for (; x < f; x++) {
          var v = n[s >>> 24] ^ o[u >>> 16 & 255] ^ i[h >>> 8 & 255] ^ a[l & 255] ^ r[d++];
          var p = n[u >>> 24] ^ o[h >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[s & 255] ^ r[d++];
          var y = n[h >>> 24] ^ o[l >>> 16 & 255] ^ i[s >>> 8 & 255] ^ a[u & 255] ^ r[d++];
          var _ = n[l >>> 24] ^ o[s >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[h & 255] ^ r[d++];
          s = v;
          u = p;
          h = y;
          l = _;
        }
        var v = (c[s >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[h >>> 8 & 255] << 8 | c[l & 255]) ^ r[d++];
        var p = (c[u >>> 24] << 24 | c[h >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[s & 255]) ^ r[d++];
        var y = (c[h >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[s >>> 8 & 255] << 8 | c[u & 255]) ^ r[d++];
        var _ = (c[l >>> 24] << 24 | c[s >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[h & 255]) ^ r[d++];
        e[t] = v;
        e[t + 1] = p;
        e[t + 2] = y;
        e[t + 3] = _;
      },
      keySize: 8
    });
    e.AES = t._createHelper(x);
    return e.AES;
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/, require("crypto-js-base64") /*id: 628518*/, require("crypto-js-md5-core") /*id: 408704*/, require("crypto-evp-kdf") /*id: 991453*/, require("crypto-cipher-core") /*id: 142493*/);
}