// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 618551
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  module.exports = function (t, r, e) {
    try {
      return functionBindFallback(functionValidator(Object.getOwnPropertyDescriptor(t, r)[e]));
    } catch (t) {}
  };
}