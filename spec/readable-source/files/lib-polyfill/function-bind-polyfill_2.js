// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectTypeDetector'
// - Resolved require(942172) to 'object-type-detector'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 146857
         */
module.exports = function (module, exports, require) {
  var objectTypeDetector = require("object-type-detector") /*id: 942172*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  module.exports = function (t) {
    if (objectTypeDetector(t) === "Function") {
      return functionBindFallback(t);
    }
  };
}