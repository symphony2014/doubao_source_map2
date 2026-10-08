// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'o' to 'polyfillPropertyDescriptor'
// - Resolved require(790197) to 'polyfill-property-descriptor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 446818
         */
module.exports = function (module, exports, require) {
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var polyfillPropertyDescriptor = require("polyfill-property-descriptor") /*id: 790197*/;
  module.exports = !tryCatchFunctionWrapper(function () {
    var t = Error("a");
    return !("stack" in t) || (Object.defineProperty(t, "stack", polyfillPropertyDescriptor(1, 7)), t.stack !== 7);
  });
}