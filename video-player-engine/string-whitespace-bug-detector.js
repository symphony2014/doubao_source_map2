// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(968072) to 'function-name-property-check'
// - Renamed variable 'l' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'i' to 'unicodeWhitespaceChars'
// - Resolved require(683193) to 'unicode-whitespace-chars'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 253083
         */
module.exports = function (module, exports, require) {
  var Q = require("function-name-property-check") /*id: 968072*/.PROPER;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var unicodeWhitespaceChars = require("unicode-whitespace-chars") /*id: 683193*/;
  var a = "​᠎";
  module.exports = function (U) {
    return tryCatchFunctionWrapper(function () {
      return !!unicodeWhitespaceChars[U]() || a[U]() !== a || Q && unicodeWhitespaceChars[U].name !== U;
    });
  };
}