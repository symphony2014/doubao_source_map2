// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectTypeDetectorPolyfill'
// - Resolved require(549562) to 'object-type-detector-polyfill'
// - Renamed variable 'o' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'i' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// - Renamed variable 'a' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'u' to 'libPolyfill'
// - Resolved require(173864) to 'lib-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 90754
         */
module.exports = function (module, exports, require) {
  var objectTypeDetectorPolyfill = require("object-type-detector-polyfill") /*id: 549562*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var libPolyfill = require("lib-polyfill") /*id: 173864*/;
  var c = coreJsWksAccess("iterator");
  var f = Object;
  module.exports = function (t) {
    if (isNullishCheck_1(t)) {
      return false;
    }
    var r = f(t);
    return r[c] !== undefined || "@@iterator" in r || objectHasOwnPolyfill_1(libPolyfill, objectTypeDetectorPolyfill(r));
  };
}