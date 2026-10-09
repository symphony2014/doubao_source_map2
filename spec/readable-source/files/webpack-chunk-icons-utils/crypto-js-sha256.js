// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 338262
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
    t = Math;
    n = (r = e.lib).WordArray;
    i = r.Hasher;
    o = e.algo;
    a = [];
    s = [];
    (function () {
      function e(e) {
        return (e - (e | 0)) * 4294967296 | 0;
      }
      var r = 2;
      var n = 0;
      while (n < 64) {
        if (function (e) {
          var r = t.sqrt(e);
          var n = 2;
          for (; n <= r; n++) {
            if (!(e % n)) {
              return false;
            }
          }
          return true;
        }(r)) {
          if (n < 8) {
            a[n] = e(t.pow(r, 0.5));
          }
          s[n] = e(t.pow(r, 1 / 3));
          n++;
        }
        r++;
      }
    })();
    c = [];
    u = o.SHA256 = i.extend({
      _doReset: function () {
        this._hash = new n.init(a.slice(0));
      },
      _doProcessBlock: function (e, t) {
        var r = this._hash.words;
        var n = r[0];
        var i = r[1];
        var o = r[2];
        var a = r[3];
        var u = r[4];
        var f = r[5];
        var l = r[6];
        var d = r[7];
        var h = 0;
        for (; h < 64; h++) {
          if (h < 16) {
            c[h] = e[t + h] | 0;
          } else {
            var g = c[h - 15];
            var x = (g << 25 | g >>> 7) ^ (g << 14 | g >>> 18) ^ g >>> 3;
            var M = c[h - 2];
            var p = (M << 15 | M >>> 17) ^ (M << 13 | M >>> 19) ^ M >>> 10;
            c[h] = x + c[h - 7] + p + c[h - 16];
          }
          var y = u & f ^ ~u & l;
          var N = n & i ^ n & o ^ i & o;
          var v = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22);
          var D = d + ((u << 26 | u >>> 6) ^ (u << 21 | u >>> 11) ^ (u << 7 | u >>> 25)) + y + s[h] + c[h];
          var j = v + N;
          d = l;
          l = f;
          f = u;
          u = a + D | 0;
          a = o;
          o = i;
          i = n;
          n = D + j | 0;
        }
        r[0] = r[0] + n | 0;
        r[1] = r[1] + i | 0;
        r[2] = r[2] + o | 0;
        r[3] = r[3] + a | 0;
        r[4] = r[4] + u | 0;
        r[5] = r[5] + f | 0;
        r[6] = r[6] + l | 0;
        r[7] = r[7] + d | 0;
      },
      _doFinalize: function () {
        var e = this._data;
        var r = e.words;
        var n = this._nDataBytes * 8;
        var i = e.sigBytes * 8;
        r[i >>> 5] |= 128 << 24 - i % 32;
        r[(i + 64 >>> 9 << 4) + 14] = t.floor(n / 4294967296);
        r[(i + 64 >>> 9 << 4) + 15] = n;
        e.sigBytes = r.length * 4;
        this._process();
        return this._hash;
      },
      clone: function () {
        var e = i.clone.call(this);
        e._hash = this._hash.clone();
        return e;
      }
    });
    e.SHA256 = i._createHelper(u);
    e.HmacSHA256 = i._createHmacHelper(u);
    return e.SHA256;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/);
}