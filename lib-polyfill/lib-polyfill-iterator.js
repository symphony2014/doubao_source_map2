// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectTypeDetectorPolyfill'
// - Resolved require(549562) to 'object-type-detector-polyfill'
// - Renamed variable 'o' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Renamed variable 'i' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// - Renamed variable 'a' to 'libPolyfill'
// - Resolved require(173864) to 'lib-polyfill'
// - Resolved require(349338) to 'core-js-wks-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 150387
         */
module.exports = function (module, exports, require) {
  var objectTypeDetectorPolyfill = require("object-type-detector-polyfill") /*id: 549562*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var libPolyfill = require("lib-polyfill") /*id: 173864*/;
  var u = require("core-js-wks-access") /*id: 349338*/("iterator");
  module.exports = function (t) {
    if (!isNullishCheck_1(t)) {
      return safePropertyValidator(t, u) || safePropertyValidator(t, "@@iterator") || libPolyfill[objectTypeDetectorPolyfill(t)];
    }
  };
}