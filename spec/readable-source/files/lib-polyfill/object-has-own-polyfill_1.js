// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 759692
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var i = functionBindFallback({}.hasOwnProperty);
  module.exports = Object.hasOwn || function (t, r) {
    return i(requireObjectNotNullish(t), r);
  };
}