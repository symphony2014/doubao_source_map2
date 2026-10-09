// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 509978
         */
module.exports = function (module, exports, require) {
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var o = Object;
  module.exports = function (t) {
    return o(requireNotNullish(t));
  };
}