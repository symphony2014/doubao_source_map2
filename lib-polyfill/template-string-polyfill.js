// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'stringToArrayPolyfillWrapper'
// - Resolved require(902400) to 'string-to-array-polyfill-wrapper'
// - Renamed variable 'i' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'a' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 685654
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var stringToArrayPolyfillWrapper = require("string-to-array-polyfill-wrapper") /*id: 902400*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var u = TypeError;
  var c = functionBindFallback([].push);
  var f = functionBindFallback([].join);
  module.exports = function (t) {
    var r = stringToArrayPolyfillWrapper(t);
    var e = getArrayLengthSafe(r);
    if (!e) {
      return "";
    }
    var n = arguments.length;
    var s = [];
    var l = 0;
    while (true) {
      var v = r[l++];
      if (v === undefined) {
        throw new u("Incorrect template");
      }
      c(s, symbolToStringConverter_1(v));
      if (l === e) {
        return f(s, "");
      }
      if (l < n) {
        c(s, symbolToStringConverter_1(arguments[l]));
      }
    }
  };
}