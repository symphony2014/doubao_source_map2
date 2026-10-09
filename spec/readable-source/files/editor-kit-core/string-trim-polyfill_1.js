// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(642274) to 'define-property-check_1'
// - Renamed variable 'o' to 'definePropertySafeUtil'
// - Resolved require(848618) to 'define-property-safe-util'
// - Renamed variable 'i' to 'stringTrimPolyfill'
// - Resolved require(443205) to 'string-trim-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 888469
         */
module.exports = function (module, exports, require) {
  var n = require("define-property-check_1") /*id: 642274*/();
  var definePropertySafeUtil = require("define-property-safe-util") /*id: 848618*/;
  var stringTrimPolyfill = require("string-trim-polyfill") /*id: 443205*/;
  module.exports = function () {
    var t = stringTrimPolyfill();
    if (String.prototype.trim !== t) {
      if (n) {
        definePropertySafeUtil(String.prototype, "trim", t, true);
      } else {
        definePropertySafeUtil(String.prototype, "trim", t);
      }
    }
    return t;
  };
}