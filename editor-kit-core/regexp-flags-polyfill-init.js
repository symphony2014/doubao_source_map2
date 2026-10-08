// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectAssignPolyfillUtil'
// - Resolved require(68396) to 'object-assign-polyfill-util'
// - Renamed variable 'o' to 'functionLengthWrapper'
// - Resolved require(518566) to 'function-length-wrapper'
// - Renamed variable 'i' to 'regexpFlagsGetter_1'
// - Resolved require(871167) to 'regexp-flags-getter_1'
// - Renamed variable 'u' to 'regexpFlagsGetterUtil'
// - Resolved require(619362) to 'regexp-flags-getter-util'
// - Renamed variable 'a' to 'regexpFlagsPolyfill_2'
// - Resolved require(58351) to 'regexp-flags-polyfill_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 604452
         */
module.exports = function (module, exports, require) {
  var objectAssignPolyfillUtil = require("object-assign-polyfill-util") /*id: 68396*/;
  var functionLengthWrapper = require("function-length-wrapper") /*id: 518566*/;
  var regexpFlagsGetter_1 = require("regexp-flags-getter_1") /*id: 871167*/;
  var regexpFlagsGetterUtil = require("regexp-flags-getter-util") /*id: 619362*/;
  var regexpFlagsPolyfill_2 = require("regexp-flags-polyfill_2") /*id: 58351*/;
  var s = functionLengthWrapper(regexpFlagsGetterUtil());
  objectAssignPolyfillUtil(s, {
    getPolyfill: regexpFlagsGetterUtil,
    implementation: regexpFlagsGetter_1,
    shim: regexpFlagsPolyfill_2
  });
  module.exports = s;
}