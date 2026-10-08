// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectTypeDetectorPolyfill'
// - Resolved require(549562) to 'object-type-detector-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 557816
         */
module.exports = function (module, exports, require) {
  var objectTypeDetectorPolyfill = require("object-type-detector-polyfill") /*id: 549562*/;
  var o = String;
  module.exports = function (t) {
    if (objectTypeDetectorPolyfill(t) === "Symbol") {
      throw TypeError("Cannot convert a Symbol value to a string");
    }
    return o(t);
  };
}