// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectTypeDetector'
// - Resolved require(942172) to 'object-type-detector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 332607
         */
module.exports = function (module, exports, require) {
  var objectTypeDetector = require("object-type-detector") /*id: 942172*/;
  module.exports = Array.isArray || function (t) {
    return objectTypeDetector(t) === "Array";
  };
}