// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectTypeDetectorPolyfill'
// - Resolved require(549562) to 'object-type-detector-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 821863
         */
module.exports = function (module, exports, require) {
  var objectTypeDetectorPolyfill = require("object-type-detector-polyfill") /*id: 549562*/;
  module.exports = function (t) {
    var r = objectTypeDetectorPolyfill(t);
    return r === "BigInt64Array" || r === "BigUint64Array";
  };
}