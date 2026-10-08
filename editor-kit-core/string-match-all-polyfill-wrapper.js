// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionLengthWrapper'
// - Resolved require(518566) to 'function-length-wrapper'
// - Renamed variable 'o' to 'objectAssignPolyfillUtil'
// - Resolved require(68396) to 'object-assign-polyfill-util'
// - Renamed variable 'i' to 'stringMatchAllShim'
// - Resolved require(494358) to 'string-match-all-shim'
// - Renamed variable 'u' to 'stringMatchAllPolyfill'
// - Resolved require(764054) to 'string-match-all-polyfill'
// - Renamed variable 'a' to 'stringMatchallPolyfillInitializer'
// - Resolved require(329600) to 'string-matchall-polyfill-initializer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 859731
         */
module.exports = function (module, exports, require) {
  var functionLengthWrapper = require("function-length-wrapper") /*id: 518566*/;
  var objectAssignPolyfillUtil = require("object-assign-polyfill-util") /*id: 68396*/;
  var stringMatchAllShim = require("string-match-all-shim") /*id: 494358*/;
  var stringMatchAllPolyfill = require("string-match-all-polyfill") /*id: 764054*/;
  var stringMatchallPolyfillInitializer = require("string-matchall-polyfill-initializer") /*id: 329600*/;
  var s = functionLengthWrapper(stringMatchAllShim);
  objectAssignPolyfillUtil(s, {
    getPolyfill: stringMatchAllPolyfill,
    implementation: stringMatchAllShim,
    shim: stringMatchallPolyfillInitializer
  });
  module.exports = s;
}