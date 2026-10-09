// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'i' to 'objectTypeDetector'
// - Resolved require(942172) to 'object-type-detector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 826790
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var objectTypeDetector = require("object-type-detector") /*id: 942172*/;
  var a = Object;
  var u = functionBindFallback("".split);
  module.exports = tryCatchFunctionWrapper(function () {
    return !a("z").propertyIsEnumerable(0);
  }) ? function (t) {
    if (objectTypeDetector(t) === "String") {
      return u(t, "");
    } else {
      return a(t);
    }
  } : a;
}