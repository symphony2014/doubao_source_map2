// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionLengthWrapper'
// - Resolved require(518566) to 'function-length-wrapper'
// - Renamed variable 'o' to 'objectAssignPolyfillUtil'
// - Resolved require(68396) to 'object-assign-polyfill-util'
// - Renamed variable 'i' to 'requireDefinedUtil_1'
// - Resolved require(536844) to 'require-defined-util_1'
// - Renamed variable 'u' to 'stringPrototypeTrim'
// - Resolved require(299107) to 'string-prototype-trim'
// - Renamed variable 'a' to 'stringTrimPolyfill'
// - Resolved require(443205) to 'string-trim-polyfill'
// - Renamed variable 's' to 'stringTrimPolyfill_1'
// - Resolved require(888469) to 'string-trim-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 151599
         */
module.exports = function (module, exports, require) {
  var functionLengthWrapper = require("function-length-wrapper") /*id: 518566*/;
  var objectAssignPolyfillUtil = require("object-assign-polyfill-util") /*id: 68396*/;
  var requireDefinedUtil_1 = require("require-defined-util_1") /*id: 536844*/;
  var stringPrototypeTrim = require("string-prototype-trim") /*id: 299107*/;
  var stringTrimPolyfill = require("string-trim-polyfill") /*id: 443205*/;
  var stringTrimPolyfill_1 = require("string-trim-polyfill_1") /*id: 888469*/;
  var c = functionLengthWrapper(stringTrimPolyfill());
  function f(t) {
    requireDefinedUtil_1(t);
    return c(t);
  }
  objectAssignPolyfillUtil(f, {
    getPolyfill: stringTrimPolyfill,
    implementation: stringPrototypeTrim,
    shim: stringTrimPolyfill_1
  });
  module.exports = f;
}