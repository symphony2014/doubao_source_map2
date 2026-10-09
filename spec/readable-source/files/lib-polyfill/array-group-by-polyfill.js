// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'safeFunctionBind'
// - Resolved require(990398) to 'safe-function-bind'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'stringToArrayPolyfill'
// - Resolved require(826790) to 'string-to-array-polyfill'
// - Renamed variable 'a' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'u' to 'symbolToStringConverter'
// - Resolved require(980181) to 'symbol-to-string-converter'
// - Renamed variable 'c' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'f' to 'objectCreatePolyfill_1'
// - Resolved require(557677) to 'object-create-polyfill_1'
// - Renamed variable 's' to 'safeArrayCreateUtil'
// - Resolved require(311252) to 'safe-array-create-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 106940
         */
module.exports = function (module, exports, require) {
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var stringToArrayPolyfill = require("string-to-array-polyfill") /*id: 826790*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var symbolToStringConverter = require("symbol-to-string-converter") /*id: 980181*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var objectCreatePolyfill_1 = require("object-create-polyfill_1") /*id: 557677*/;
  var safeArrayCreateUtil = require("safe-array-create-util") /*id: 311252*/;
  var l = Array;
  var v = functionBindFallback([].push);
  module.exports = function (t, r, e, o) {
    var p;
    var h;
    var d;
    var y = requireObjectNotNullish(t);
    var g = stringToArrayPolyfill(y);
    var b = safeFunctionBind(r, e);
    var w = objectCreatePolyfill_1(null);
    var m = getArrayLengthSafe(g);
    var x = 0;
    for (; m > x; x++) {
      if ((h = symbolToStringConverter(b(d = g[x], x, y))) in w) {
        v(w[h], d);
      } else {
        w[h] = [d];
      }
    }
    if (o && (p = o(y)) !== l) {
      for (h in w) {
        w[h] = safeArrayCreateUtil(p, w[h]);
      }
    }
    return w;
  };
}