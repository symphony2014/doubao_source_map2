// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'toStringTagPolyfill'
// - Resolved require(500671) to 'to-string-tag-polyfill'
// - Renamed variable 'l' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'i' to 'objectToStringPolyfill'
// - Resolved require(276220) to 'object-to-string-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 992159
         */
module.exports = function (module, exports, require) {
  var toStringTagPolyfill = require("to-string-tag-polyfill") /*id: 500671*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var objectToStringPolyfill = require("object-to-string-polyfill") /*id: 276220*/;
  if (!toStringTagPolyfill) {
    definePropertyHelper_1_1(Object.prototype, "toString", objectToStringPolyfill, {
      unsafe: true
    });
  }
}