// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'stringToArrayPolyfill'
// - Resolved require(826790) to 'string-to-array-polyfill'
// - Renamed variable 'a' to 'stringToArrayPolyfillWrapper'
// - Resolved require(902400) to 'string-to-array-polyfill-wrapper'
// - Renamed variable 'd' to 'safeArrayMethodCheck_1'
// - Resolved require(811572) to 'safe-array-method-check_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 466494
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var stringToArrayPolyfill = require("string-to-array-polyfill") /*id: 826790*/;
  var stringToArrayPolyfillWrapper = require("string-to-array-polyfill-wrapper") /*id: 902400*/;
  var safeArrayMethodCheck_1 = require("safe-array-method-check_1") /*id: 811572*/;
  var r = functionBindFallback([].join);
  polyfillPropertyDefiner({
    target: "Array",
    proto: true,
    forced: stringToArrayPolyfill !== Object || !safeArrayMethodCheck_1("join", ",")
  }, {
    join: function (U) {
      return r(stringToArrayPolyfillWrapper(this), U === undefined ? "," : U);
    }
  });
}