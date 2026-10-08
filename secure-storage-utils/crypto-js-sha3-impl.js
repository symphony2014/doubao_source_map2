// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// - Resolved require(705049) to 'crypto-js-x64-extension'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 965483
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
    t = Math;
    n = (r = e.lib).WordArray;
    o = r.Hasher;
    i = e.x64.Word;
    a = e.algo;
    c = [];
    f = [];
    s = [];
    (function () {
      var e = 1;
      var t = 0;
      var r = 0;
      for (; r < 24; r++) {
        c[e + t * 5] = (r + 1) * (r + 2) / 2 % 64;
        var n = t % 5;
        var o = (e * 2 + t * 3) % 5;
        e = n;
        t = o;
      }
      for (var e = 0; e < 5; e++) {
        for (var t = 0; t < 5; t++) {
          f[e + t * 5] = t + (e * 2 + t * 3) % 5 * 5;
        }
      }
      var a = 1;
      var u = 0;
      for (; u < 24; u++) {
        var h = 0;
        var l = 0;
        var d = 0;
        for (; d < 7; d++) {
          if (a & 1) {
            var x = (1 << d) - 1;
            if (x < 32) {
              l ^= 1 << x;
            } else {
              h ^= 1 << x - 32;
            }
          }
          if (a & 128) {
            a = a << 1 ^ 113;
          } else {
            a <<= 1;
          }
        }
        s[u] = i.create(h, l);
      }
    })();
    u = [];
    (function () {
      for (var e = 0; e < 25; e++) {
        u[e] = i.create();
      }
    })();
    h = a.SHA3 = o.extend({
      cfg: o.cfg.extend({
        outputLength: 512
      }),
      _doReset: function () {
        var e = this._state = [];
        var t = 0;
        for (; t < 25; t++) {
          e[t] = new i.init();
        }
        this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
      },
      _doProcessBlock: function (e, t) {
        var r = this._state;
        var n = this.blockSize / 2;
        var o = 0;
        for (; o < n; o++) {
          var i = e[t + o * 2];
          var a = e[t + o * 2 + 1];
          i = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & -16711936;
          a = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & -16711936;
          var h = r[o];
          h.high ^= a;
          h.low ^= i;
        }
        for (var l = 0; l < 24; l++) {
          for (var d = 0; d < 5; d++) {
            var x = 0;
            var v = 0;
            var p = 0;
            for (; p < 5; p++) {
              var h = r[d + p * 5];
              x ^= h.high;
              v ^= h.low;
            }
            var y = u[d];
            y.high = x;
            y.low = v;
          }
          for (var d = 0; d < 5; d++) {
            var _ = u[(d + 4) % 5];
            var b = u[(d + 1) % 5];
            var g = b.high;
            var m = b.low;
            var x = _.high ^ (g << 1 | m >>> 31);
            var v = _.low ^ (m << 1 | g >>> 31);
            var p = 0;
            for (; p < 5; p++) {
              var h = r[d + p * 5];
              h.high ^= x;
              h.low ^= v;
            }
          }
          for (var w = 1; w < 25; w++) {
            var h = r[w];
            var B = h.high;
            var S = h.low;
            var k = c[w];
            if (k < 32) {
              var x = B << k | S >>> 32 - k;
              var v = S << k | B >>> 32 - k;
            } else {
              var x = S << k - 32 | B >>> 64 - k;
              var v = B << k - 32 | S >>> 64 - k;
            }
            var E = u[f[w]];
            E.high = x;
            E.low = v;
          }
          var A = u[0];
          var I = r[0];
          A.high = I.high;
          A.low = I.low;
          for (var d = 0; d < 5; d++) {
            for (var p = 0; p < 5; p++) {
              var w = d + p * 5;
              var h = r[w];
              var C = u[w];
              var z = u[(d + 1) % 5 + p * 5];
              var D = u[(d + 2) % 5 + p * 5];
              h.high = C.high ^ ~z.high & D.high;
              h.low = C.low ^ ~z.low & D.low;
            }
          }
          var h = r[0];
          var R = s[l];
          h.high ^= R.high;
          h.low ^= R.low;
        }
      },
      _doFinalize: function () {
        var e = this._data;
        var r = e.words;
        this._nDataBytes;
        var o = e.sigBytes * 8;
        var i = this.blockSize * 32;
        r[o >>> 5] |= 1 << 24 - o % 32;
        r[(t.ceil((o + 1) / i) * i >>> 5) - 1] |= 128;
        e.sigBytes = r.length * 4;
        this._process();
        var a = this._state;
        var c = this.cfg.outputLength / 8;
        var f = c / 8;
        var s = [];
        var u = 0;
        for (; u < f; u++) {
          var h = a[u];
          var l = h.high;
          var d = h.low;
          l = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & -16711936;
          d = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & -16711936;
          s.push(d);
          s.push(l);
        }
        return new n.init(s, c);
      },
      clone: function () {
        var e = o.clone.call(this);
        var t = e._state = this._state.slice(0);
        var r = 0;
        for (; r < 25; r++) {
          t[r] = t[r].clone();
        }
        return e;
      }
    });
    e.SHA3 = o._createHelper(h);
    e.HmacSHA3 = o._createHmacHelper(h);
    return e.SHA3;
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/, require("crypto-js-x64-extension") /*id: 705049*/);
}