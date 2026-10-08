// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'stringToArrayPolyfill'
// - Resolved require(826790) to 'string-to-array-polyfill'
// - Renamed variable 'o' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 902400
         */
module.exports = function (module, exports, require) {
  var stringToArrayPolyfill = require("string-to-array-polyfill") /*id: 826790*/;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  module.exports = function (t) {
    return stringToArrayPolyfill(requireNotNullish(t));
  };
}