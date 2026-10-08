// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(968072) to 'function-name-property-check'
// - Renamed variable 'l' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'i' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'a' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'd' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'r' to 'getRegexpFlags'
// - Resolved require(350472) to 'get-regexp-flags'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 660747
         */
module.exports = function (module, exports, require) {
  var Q = require("function-name-property-check") /*id: 968072*/.PROPER;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var getRegexpFlags = require("get-regexp-flags") /*id: 350472*/;
  var o = "toString";
  var B = RegExp.prototype;
  var R = B[o];
  var c = tryCatchFunctionWrapper(function () {
    return R.call({
      source: "a",
      flags: "b"
    }) !== "/a/b";
  });
  var s = Q && R.name !== o;
  if (c || s) {
    definePropertyHelper_1_1(B, o, function () {
      var U = requireObjectOrThrowTypeError_1(this);
      return "/" + symbolToStringConverter_1(U.source) + "/" + symbolToStringConverter_1(getRegexpFlags(U));
    }, {
      unsafe: true
    });
  }
}