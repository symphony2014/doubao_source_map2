// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 196673
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var iteratorForEachHelper = require("iterator-for-each-helper") /*id: 686807*/;
  var a = RangeError;
  var u = TypeError;
  var c = Infinity;
  var f = NaN;
  var s = Math.abs;
  var l = Math.pow;
  var v = functionBindFallback([].push);
  var p = l(2, 1023);
  var h = l(2, 53) - 1;
  var d = Number.MAX_VALUE;
  var y = l(2, 971);
  var g = {};
  var b = {};
  var w = {};
  var m = {};
  var x = {};
  function A(t, r) {
    var e = t + r;
    return {
      hi: e,
      lo: r - (e - t)
    };
  }
  polyfillPropertyDefiner({
    target: "Math",
    stat: true
  }, {
    sumPrecise: function (t) {
      var r;
      var e;
      var n;
      var o;
      var l;
      var E;
      var S = [];
      var O = 0;
      var R = m;
      iteratorForEachHelper(t, function (t) {
        if (++O >= h) {
          throw new a("Maximum allowed index exceeded");
        }
        if (typeof t != "number") {
          throw new u("Value is not a number");
        }
        if (R !== g) {
          if (t != t) {
            R = g;
          } else if (t === c) {
            R = R === b ? g : w;
          } else if (t === -c) {
            R = R === w ? g : b;
          } else if ((t !== 0 || 1 / t === c) && (R === m || R === x)) {
            R = x;
            v(S, t);
          }
        }
      });
      switch (R) {
        case g:
          return f;
        case b:
          return -c;
        case w:
          return c;
        case m:
          return -0;
      }
      var I = [];
      var T = 0;
      var k = 0;
      for (; k < S.length; k++) {
        r = S[k];
        var M = 0;
        var j = 0;
        for (; j < I.length; j++) {
          e = I[j];
          if (s(r) < s(e)) {
            E = r;
            r = e;
            e = E;
          }
          o = (n = A(r, e)).hi;
          l = n.lo;
          if (s(o) === c) {
            var D = o === c ? 1 : -1;
            T += D;
            if (s(r = r - D * p - D * p) < s(e)) {
              E = r;
              r = e;
              e = E;
            }
            o = (n = A(r, e)).hi;
            l = n.lo;
          }
          if (l !== 0) {
            I[M++] = l;
          }
          r = o;
        }
        I.length = M;
        if (r !== 0) {
          v(I, r);
        }
      }
      var P = I.length - 1;
      o = 0;
      l = 0;
      if (T !== 0) {
        var _ = P >= 0 ? I[P] : 0;
        P--;
        if (s(T) > 1 || T > 0 && _ > 0 || T < 0 && _ < 0) {
          if (T > 0) {
            return c;
          } else {
            return -c;
          }
        }
        o = (n = A(T * p, _ / 2)).hi;
        l = n.lo * 2;
        if (s(o * 2) === c) {
          if (o > 0) {
            if (o === p && l === -(y / 2) && P >= 0 && I[P] < 0) {
              return d;
            } else {
              return c;
            }
          } else if (o === -p && l === y / 2 && P >= 0 && I[P] > 0) {
            return -d;
          } else {
            return -c;
          }
        }
        if (l !== 0) {
          I[++P] = l;
          l = 0;
        }
        o *= 2;
      }
      while (P >= 0 && (o = (n = A(o, I[P--])).hi, (l = n.lo) === 0));
      if (P >= 0 && (l < 0 && I[P] < 0 || l > 0 && I[P] > 0)) {
        r = o + (e = l * 2);
        if (e === r - o) {
          o = r;
        }
      }
      return o;
    }
  });
}