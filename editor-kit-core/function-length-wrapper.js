// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'setFunctionLengthUtil'
// - Resolved require(550480) to 'set-function-length-util'
// - Renamed variable 'o' to 'definePropertyCheck'
// - Resolved require(594896) to 'define-property-check'
// - Renamed variable 'i' to 'functionApplyPolyfillResolver_1'
// - Resolved require(687265) to 'function-apply-polyfill-resolver_1'
// - Renamed variable 'u' to 'functionApplyResolver'
// - Resolved require(385385) to 'function-apply-resolver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 518566
         */
module.exports = function (module, exports, require) {
  var setFunctionLengthUtil = require("set-function-length-util") /*id: 550480*/;
  var definePropertyCheck = require("define-property-check") /*id: 594896*/;
  var functionApplyPolyfillResolver_1 = require("function-apply-polyfill-resolver_1") /*id: 687265*/;
  var functionApplyResolver = require("function-apply-resolver") /*id: 385385*/;
  module.exports = function (t) {
    var e = functionApplyPolyfillResolver_1(arguments);
    var r = t.length - (arguments.length - 1);
    return setFunctionLengthUtil(e, 1 + (r > 0 ? r : 0), true);
  };
  if (definePropertyCheck) {
    definePropertyCheck(module.exports, "apply", {
      value: functionApplyResolver
    });
  } else {
    module.exports.apply = functionApplyResolver;
  }
}