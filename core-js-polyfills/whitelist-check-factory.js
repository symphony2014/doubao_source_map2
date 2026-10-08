// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'o' to 'arrayIsArrayPolyfill_1'
// - Resolved require(959884) to 'array-is-array-polyfill_1'
// - Renamed variable 'i' to 'isFunctionCheck'
// - Resolved require(705647) to 'is-function-check'
// - Renamed variable 'u' to 'getObjectTypeString'
// - Resolved require(32151) to 'get-object-type-string'
// - Renamed variable 'c' to 'symbolSafeStringConverter'
// - Resolved require(227969) to 'symbol-safe-string-converter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 591356
         */
module.exports = function (module, exports, require) {
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var arrayIsArrayPolyfill_1 = require("array-is-array-polyfill_1") /*id: 959884*/;
  var isFunctionCheck = require("is-function-check") /*id: 705647*/;
  var getObjectTypeString = require("get-object-type-string") /*id: 32151*/;
  var symbolSafeStringConverter = require("symbol-safe-string-converter") /*id: 227969*/;
  var s = functionBindPrototypeCheckWrapper([].push);
  module.exports = function (t) {
    if (isFunctionCheck(t)) {
      return t;
    }
    if (arrayIsArrayPolyfill_1(t)) {
      var r = t.length;
      var n = [];
      var e = 0;
      for (; e < r; e++) {
        var f = t[e];
        if (typeof f == "string") {
          s(n, f);
        } else if (typeof f == "number" || getObjectTypeString(f) === "Number" || getObjectTypeString(f) === "String") {
          s(n, symbolSafeStringConverter(f));
        }
      }
      var a = n.length;
      var p = true;
      return function (t, r) {
        if (p) {
          p = false;
          return r;
        }
        if (arrayIsArrayPolyfill_1(this)) {
          return r;
        }
        for (var e = 0; e < a; e++) {
          if (n[e] === t) {
            return r;
          }
        }
      };
    }
  };
}