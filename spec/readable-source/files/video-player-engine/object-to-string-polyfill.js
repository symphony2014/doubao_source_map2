// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'toStringTagPolyfill'
// - Resolved require(500671) to 'to-string-tag-polyfill'
// - Renamed variable 'l' to 'objectTypeDetectorPolyfill'
// - Resolved require(549562) to 'object-type-detector-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 276220
         */
module.exports = function (module, exports, require) {
  var toStringTagPolyfill = require("to-string-tag-polyfill") /*id: 500671*/;
  var objectTypeDetectorPolyfill = require("object-type-detector-polyfill") /*id: 549562*/;
  module.exports = toStringTagPolyfill ? {}.toString : function () {
    return "[object " + objectTypeDetectorPolyfill(this) + "]";
  };
}