// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getIntrinsicUtil'
// - Resolved require(120433) to 'get-intrinsic-util'
// - Renamed variable 'o' to 'functionApplyPolyfillResolver_1'
// - Resolved require(687265) to 'function-apply-polyfill-resolver_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 187792
         */
module.exports = function (module, exports, require) {
  var getIntrinsicUtil = require("get-intrinsic-util") /*id: 120433*/;
  var functionApplyPolyfillResolver_1 = require("function-apply-polyfill-resolver_1") /*id: 687265*/;
  var i = functionApplyPolyfillResolver_1([getIntrinsicUtil("%String.prototype.indexOf%")]);
  module.exports = function (t, e) {
    var r = getIntrinsicUtil(t, !!e);
    if (typeof r == "function" && i(t, ".prototype.") > -1) {
      return functionApplyPolyfillResolver_1([r]);
    } else {
      return r;
    }
  };
}