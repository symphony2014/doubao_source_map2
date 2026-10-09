// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'arrayIsarrayPolyfill'
// - Resolved require(332607) to 'array-isarray-polyfill'
// - Renamed variable 'i' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'a' to 'objectTypeDetector'
// - Resolved require(942172) to 'object-type-detector'
// - Renamed variable 'u' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 180627
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var arrayIsarrayPolyfill = require("array-isarray-polyfill") /*id: 332607*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var objectTypeDetector = require("object-type-detector") /*id: 942172*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var c = functionBindFallback([].push);
  module.exports = function (t) {
    if (isFunctionPolyfill(t)) {
      return t;
    }
    if (arrayIsarrayPolyfill(t)) {
      var r = t.length;
      var e = [];
      var n = 0;
      for (; n < r; n++) {
        var f = t[n];
        if (typeof f == "string") {
          c(e, f);
        } else if (typeof f == "number" || objectTypeDetector(f) === "Number" || objectTypeDetector(f) === "String") {
          c(e, symbolToStringConverter_1(f));
        }
      }
      var s = e.length;
      var l = true;
      return function (t, r) {
        if (l) {
          l = false;
          return r;
        }
        if (arrayIsarrayPolyfill(this)) {
          return r;
        }
        for (var n = 0; n < s; n++) {
          if (e[n] === t) {
            return r;
          }
        }
      };
    }
  };
}