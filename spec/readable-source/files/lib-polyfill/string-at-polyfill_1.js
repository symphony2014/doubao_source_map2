// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(905844) to 'unicode-string-utils'
// - Renamed variable 'i' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// - Renamed variable 'a' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// - Renamed variable 'u' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 539774
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var o = require("unicode-string-utils") /*id: 905844*/.charAt;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  polyfillPropertyDefiner({
    target: "String",
    proto: true,
    forced: true
  }, {
    at: function (t) {
      var r = symbolToStringConverter_1(requireNotNullish(this));
      var e = r.length;
      var n = mathTruncPolyfill_2(t);
      var c = n >= 0 ? n : e + n;
      if (c < 0 || c >= e) {
        return undefined;
      } else {
        return o(r, c);
      }
    }
  });
}