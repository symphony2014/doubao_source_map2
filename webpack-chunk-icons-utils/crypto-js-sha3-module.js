// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// - Resolved require(715147) to 'crypto-js-x64'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 615537
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
    t = Math;
    n = (r = e.lib).WordArray;
    i = r.Hasher;
    o = e.x64.Word;
    a = e.algo;
    s = [];
    c = [];
    u = [];
    (function () {
      var e = 1;
      var t = 0;
      var r = 0;
      for (; r < 24; r++) {
        s[e + t * 5] = (r + 1) * (r + 2) / 2 % 64;
        var n = t % 5;
        var i = (e * 2 + t * 3) % 5;
        e = n;
        t = i;
      }
      for (var e = 0; e < 5; e++) {
        for (var t = 0; t < 5; t++) {
          c[e + t * 5] = t + (e * 2 + t * 3) % 5 * 5;
        }
      }
      var a = 1;
      var f = 0;
      for (; f < 24; f++) {
        var l = 0;
        var d = 0;
        var h = 0;
        for (; h < 7; h++) {
          if (a & 1) {
            var g = (1 << h) - 1;
            if (g < 32) {
              d ^= 1 << g;
            } else {
              l ^= 1 << g - 32;
            }
          }
          if (a & 128) {
            a = a << 1 ^ 113;
          } else {
            a <<= 1;
          }
        }
        u[f] = o.create(l, d);
      }
    })();
    f = [];
    (function () {
      for (var e = 0; e < 25; e++) {
        f[e] = o.create();
      }
    })();
    l = a.SHA3 = i.extend({
      cfg: i.cfg.extend({
        outputLength: 512
      }),
      _doReset: function () {
        var e = this._state = [];
        var t = 0;
        for (; t < 25; t++) {
          e[t] = new o.init();
        }
        this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
      },
      _doProcessBlock: function (e, t) {
        var r = this._state;
        var n = this.blockSize / 2;
        var i = 0;
        for (; i < n; i++) {
          var o = e[t + i * 2];
          var a = e[t + i * 2 + 1];
          o = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & -16711936;
          a = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & -16711936;
          var l = r[i];
          l.high ^= a;
          l.low ^= o;
        }
        for (var d = 0; d < 24; d++) {
          for (var h = 0; h < 5; h++) {
            var g = 0;
            var x = 0;
            var M = 0;
            for (; M < 5; M++) {
              var l = r[h + M * 5];
              g ^= l.high;
              x ^= l.low;
            }
            var p = f[h];
            p.high = g;
            p.low = x;
          }
          for (var h = 0; h < 5; h++) {
            var y = f[(h + 4) % 5];
            var N = f[(h + 1) % 5];
            var v = N.high;
            var D = N.low;
            var g = y.high ^ (v << 1 | D >>> 31);
            var x = y.low ^ (D << 1 | v >>> 31);
            var M = 0;
            for (; M < 5; M++) {
              var l = r[h + M * 5];
              l.high ^= g;
              l.low ^= x;
            }
          }
          for (var j = 1; j < 25; j++) {
            var g;
            var x;
            var l = r[j];
            var A = l.high;
            var m = l.low;
            var S = s[j];
            if (S < 32) {
              g = A << S | m >>> 32 - S;
              x = m << S | A >>> 32 - S;
            } else {
              g = m << S - 32 | A >>> 64 - S;
              x = A << S - 32 | m >>> 64 - S;
            }
            var I = f[c[j]];
            I.high = g;
            I.low = x;
          }
          var L = f[0];
          var w = r[0];
          L.high = w.high;
          L.low = w.low;
          for (var h = 0; h < 5; h++) {
            for (var M = 0; M < 5; M++) {
              var j = h + M * 5;
              var l = r[j];
              var b = f[j];
              var C = f[(h + 1) % 5 + M * 5];
              var T = f[(h + 2) % 5 + M * 5];
              l.high = b.high ^ ~C.high & T.high;
              l.low = b.low ^ ~C.low & T.low;
            }
          }
          var l = r[0];
          var E = u[d];
          l.high ^= E.high;
          l.low ^= E.low;
        }
      },
      _doFinalize: function () {
        var e = this._data;
        var r = e.words;
        this._nDataBytes;
        var i = e.sigBytes * 8;
        var o = this.blockSize * 32;
        r[i >>> 5] |= 1 << 24 - i % 32;
        r[(t.ceil((i + 1) / o) * o >>> 5) - 1] |= 128;
        e.sigBytes = r.length * 4;
        this._process();
        var a = this._state;
        var s = this.cfg.outputLength / 8;
        var c = s / 8;
        var u = [];
        var f = 0;
        for (; f < c; f++) {
          var l = a[f];
          var d = l.high;
          var h = l.low;
          d = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & -16711936;
          h = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & -16711936;
          u.push(h);
          u.push(d);
        }
        return new n.init(u, s);
      },
      clone: function () {
        var e = i.clone.call(this);
        var t = e._state = this._state.slice(0);
        var r = 0;
        for (; r < 25; r++) {
          t[r] = t[r].clone();
        }
        return e;
      }
    });
    e.SHA3 = i._createHelper(l);
    e.HmacSHA3 = i._createHmacHelper(l);
    return e.SHA3;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/, require("crypto-js-x64") /*id: 715147*/);
}