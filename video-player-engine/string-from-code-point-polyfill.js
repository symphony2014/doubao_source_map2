// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'mathTruncClamp'
// - Resolved require(673993) to 'math-trunc-clamp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 330406
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var mathTruncClamp = require("math-trunc-clamp") /*id: 673993*/;
  var a = RangeError;
  var d = String.fromCharCode;
  var r = String.fromCodePoint;
  var o = functionBindFallback([].join);
  polyfillPropertyDefiner({
    target: "String",
    stat: true,
    arity: 1,
    forced: !!r && r.length !== 1
  }, {
    fromCodePoint: function (U) {
      var n;
      var F = [];
      var Q = arguments.length;
      var l = 0;
      while (Q > l) {
        n = +arguments[l++];
        if (mathTruncClamp(n, 1114111) !== n) {
          throw new a(n + " is not a valid code point");
        }
        F[l] = n < 65536 ? d(n) : d(((n -= 65536) >> 10) + 55296, n % 1024 + 56320);
      }
      return o(F, "");
    }
  });
}