// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 699002
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var l = /[^\0-\u007E]/;
  var i = /[.\u3002\uFF0E\uFF61]/g;
  var a = "Overflow: input needs wider integers to process";
  var d = RangeError;
  var r = functionBindFallback(i.exec);
  var o = Math.floor;
  var B = String.fromCharCode;
  var R = functionBindFallback("".charCodeAt);
  var c = functionBindFallback([].join);
  var s = functionBindFallback([].push);
  var V = functionBindFallback("".replace);
  var Z = functionBindFallback("".split);
  var h = functionBindFallback("".toLowerCase);
  function u(U) {
    var n = [];
    var F = 0;
    var Q = U.length;
    while (F < Q) {
      var l = R(U, F++);
      if (l >= 55296 && l <= 56319 && F < Q) {
        var i = R(U, F++);
        if ((i & 64512) == 56320) {
          s(n, ((l & 1023) << 10) + (i & 1023) + 65536);
        } else {
          s(n, l);
          F--;
        }
      } else {
        s(n, l);
      }
    }
    return n;
  }
  function S(U) {
    return U + 22 + (U < 26) * 75;
  }
  function J(U, n, F) {
    var Q = 0;
    U = F ? o(U / 700) : U >> 1;
    U += o(U / n);
    while (U > 455) {
      U = o(U / 35);
      Q += 36;
    }
    return o(Q + U * 36 / (U + 38));
  }
  function m(U) {
    var n;
    var F;
    var Q = [];
    var l = (U = u(U)).length;
    var i = 128;
    var r = 0;
    var R = 72;
    for (n = 0; n < U.length; n++) {
      if ((F = U[n]) < 128) {
        s(Q, B(F));
      }
    }
    var V = Q.length;
    var Z = V;
    for (V && s(Q, "-"); Z < l;) {
      var h = 2147483647;
      for (n = 0; n < U.length; n++) {
        if ((F = U[n]) >= i && F < h) {
          h = F;
        }
      }
      var m = Z + 1;
      if (h - i > o((2147483647 - r) / m)) {
        throw new d(a);
      }
      r += (h - i) * m;
      i = h;
      n = 0;
      for (; n < U.length; n++) {
        if ((F = U[n]) < i && ++r > 2147483647) {
          throw new d(a);
        }
        if (F === i) {
          var p = r;
          var W = 36;
          while (true) {
            var E = W <= R ? 1 : W >= R + 26 ? 26 : W - R;
            if (p < E) {
              break;
            }
            var k = p - E;
            var N = 36 - E;
            s(Q, B(S(E + k % N)));
            p = o(k / N);
            W += 36;
          }
          s(Q, B(S(p)));
          R = J(r, m, Z === V);
          r = 0;
          Z++;
        }
      }
      r++;
      i++;
    }
    return c(Q, "");
  }
  module.exports = function (U) {
    var n;
    var F;
    var Q = [];
    var a = Z(V(h(U), i, "."), ".");
    for (n = 0; n < a.length; n++) {
      s(Q, r(l, F = a[n]) ? "xn--" + m(F) : F);
    }
    return c(Q, ".");
  };
}