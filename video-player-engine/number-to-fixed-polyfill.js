// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// - Renamed variable 'a' to 'numberValueofBindUtil'
// - Resolved require(980065) to 'number-valueof-bind-util'
// - Renamed variable 'd' to 'stringRepeatPolyfill'
// - Resolved require(226207) to 'string-repeat-polyfill'
// - Renamed variable 'r' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 931368
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var numberValueofBindUtil = require("number-valueof-bind-util") /*id: 980065*/;
  var stringRepeatPolyfill = require("string-repeat-polyfill") /*id: 226207*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var o = RangeError;
  var B = String;
  var R = Math.floor;
  var c = functionBindFallback(stringRepeatPolyfill);
  var s = functionBindFallback("".slice);
  var V = functionBindFallback(1 .toFixed);
  function Z(U, n, F) {
    if (n === 0) {
      return F;
    } else if (n % 2 == 1) {
      return Z(U, n - 1, F * U);
    } else {
      return Z(U * U, n / 2, F);
    }
  }
  function h(U) {
    var n = 0;
    var F = U;
    while (F >= 4096) {
      n += 12;
      F /= 4096;
    }
    while (F >= 2) {
      n += 1;
      F /= 2;
    }
    return n;
  }
  function u(U, n, F) {
    var Q = -1;
    var l = F;
    while (++Q < 6) {
      l += n * U[Q];
      U[Q] = l % 10000000;
      l = R(l / 10000000);
    }
  }
  function S(U, n) {
    var F = 6;
    var Q = 0;
    while (--F >= 0) {
      Q += U[F];
      U[F] = R(Q / n);
      Q = Q % n * 10000000;
    }
  }
  function J(U) {
    var n = 6;
    var F = "";
    while (--n >= 0) {
      if (F !== "" || n === 0 || U[n] !== 0) {
        var Q = B(U[n]);
        F = F === "" ? Q : F + c("0", 7 - Q.length) + Q;
      }
    }
    return F;
  }
  polyfillPropertyDefiner({
    target: "Number",
    proto: true,
    forced: tryCatchFunctionWrapper(function () {
      return V(0.00008, 3) !== "0.000" || V(0.9, 0) !== "1" || V(1.255, 2) !== "1.25" || V(1000000000000000100, 0) !== "1000000000000000128";
    }) || !tryCatchFunctionWrapper(function () {
      V({});
    })
  }, {
    toFixed: function (U) {
      var n;
      var F;
      var Q;
      var l;
      var d = numberValueofBindUtil(this);
      var r = mathTruncPolyfill_2(U);
      var R = [0, 0, 0, 0, 0, 0];
      var V = "";
      var m = "0";
      if (r < 0 || r > 20) {
        throw new o("Incorrect fraction digits");
      }
      if (d != d) {
        return "NaN";
      }
      if (d <= -1e+21 || d >= 1e+21) {
        return B(d);
      }
      if (d < 0) {
        V = "-";
        d = -d;
      }
      if (d > 1e-21) {
        F = ((n = h(d * Z(2, 69, 1)) - 69) < 0 ? d * Z(2, -n, 1) : d / Z(2, n, 1)) * 4503599627370496;
        if ((n = 52 - n) > 0) {
          u(R, 0, F);
          Q = r;
          while (Q >= 7) {
            u(R, 10000000, 0);
            Q -= 7;
          }
          u(R, Z(10, Q, 1), 0);
          Q = n - 1;
          while (Q >= 23) {
            S(R, 8388608);
            Q -= 23;
          }
          S(R, 1 << Q);
          u(R, 1, 1);
          S(R, 2);
          m = J(R);
        } else {
          u(R, 0, F);
          u(R, 1 << -n, 0);
          m = J(R) + c("0", r);
        }
      }
      if (r > 0) {
        return V + ((l = m.length) <= r ? "0." + c("0", r - l) + m : s(m, 0, l - r) + "." + s(m, l - r));
      } else {
        return V + m;
      }
    }
  });
}