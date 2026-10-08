// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(805012) to 'crypto-core-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 80077
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
    var s;
    var u;
    var c;
    t = Math;
    n = (r = e.lib).WordArray;
    o = r.Hasher;
    i = e.algo;
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
    u = [];
    c = i.SHA256 = o.extend({
      _doReset: function () {
        this._hash = new n.init(a.slice(0));
      },
      _doProcessBlock: function (e, t) {
        var r = this._hash.words;
        var n = r[0];
        var o = r[1];
        var i = r[2];
        var a = r[3];
        var c = r[4];
        var f = r[5];
        var d = r[6];
        var l = r[7];
        var p = 0;
        for (; p < 64; p++) {
          if (p < 16) {
            u[p] = e[t + p] | 0;
          } else {
            var v = u[p - 15];
            var h = (v << 25 | v >>> 7) ^ (v << 14 | v >>> 18) ^ v >>> 3;
            var m = u[p - 2];
            var _ = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
            u[p] = h + u[p - 7] + _ + u[p - 16];
          }
          var y = c & f ^ ~c & d;
          var g = n & o ^ n & i ^ o & i;
          var b = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22);
          var w = l + ((c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25)) + y + s[p] + u[p];
          var E = b + g;
          l = d;
          d = f;
          f = c;
          c = a + w | 0;
          a = i;
          i = o;
          o = n;
          n = w + E | 0;
        }
        r[0] = r[0] + n | 0;
        r[1] = r[1] + o | 0;
        r[2] = r[2] + i | 0;
        r[3] = r[3] + a | 0;
        r[4] = r[4] + c | 0;
        r[5] = r[5] + f | 0;
        r[6] = r[6] + d | 0;
        r[7] = r[7] + l | 0;
      },
      _doFinalize: function () {
        var e = this._data;
        var r = e.words;
        var n = this._nDataBytes * 8;
        var o = e.sigBytes * 8;
        r[o >>> 5] |= 128 << 24 - o % 32;
        r[(o + 64 >>> 9 << 4) + 14] = t.floor(n / 4294967296);
        r[(o + 64 >>> 9 << 4) + 15] = n;
        e.sigBytes = r.length * 4;
        this._process();
        return this._hash;
      },
      clone: function () {
        var e = o.clone.call(this);
        e._hash = this._hash.clone();
        return e;
      }
    });
    e.SHA256 = o._createHelper(c);
    e.HmacSHA256 = o._createHmacHelper(c);
    return e.SHA256;
  };
  module.exports = n(require("crypto-core-utils") /*id: 805012*/);
}