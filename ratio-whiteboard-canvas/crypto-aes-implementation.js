// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(805012) to 'crypto-core-utils'
// - Resolved require(701050) to 'crypto-base64-encoder'
// - Resolved require(252278) to 'crypto-md5-core'
// - Resolved require(321536) to 'crypto-evpkdf-implementation'
// - Resolved require(57315) to 'crypto-cipher-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 739433
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
          var e;
          var t = this._keyPriorReset = this._key;
          var r = t.words;
          var o = t.sigBytes / 4;
          var i = ((this._nRounds = o + 6) + 1) * 4;
          var a = this._keySchedule = [];
          var c = 0;
          for (; c < i; c++) {
            if (c < o) {
              a[c] = r[c];
            } else {
              e = a[c - 1];
              if (c % o) {
                if (o > 6 && c % o == 4) {
                  e = n[e >>> 24] << 24 | n[e >>> 16 & 255] << 16 | n[e >>> 8 & 255] << 8 | n[e & 255];
                }
              } else {
                e = (n[(e = e << 8 | e >>> 24) >>> 24] << 24 | n[e >>> 16 & 255] << 16 | n[e >>> 8 & 255] << 8 | n[e & 255]) ^ d[c / o | 0] << 24;
              }
              a[c] = a[c - o] ^ e;
            }
          }
          var f = this._invKeySchedule = [];
          var x = 0;
          for (; x < i; x++) {
            var c = i - x;
            if (x % 4) {
              var e = a[c];
            } else {
              var e = a[c - 4];
            }
            if (x < 4 || c <= 4) {
              f[x] = e;
            } else {
              f[x] = s[n[e >>> 24]] ^ u[n[e >>> 16 & 255]] ^ h[n[e >>> 8 & 255]] ^ l[n[e & 255]];
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
  module.exports = n(require("crypto-core-utils") /*id: 805012*/, require("crypto-base64-encoder") /*id: 701050*/, require("crypto-md5-core") /*id: 252278*/, require("crypto-evpkdf-implementation") /*id: 321536*/, require("crypto-cipher-core-lib") /*id: 57315*/);
}