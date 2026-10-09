// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getIntrinsicUtil'
// - Resolved require(120433) to 'get-intrinsic-util'
// - Renamed variable 'o' to 'functionLengthWrapper'
// - Resolved require(518566) to 'function-length-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 798131
         */
module.exports = function (module, exports, require) {
  var getIntrinsicUtil = require("get-intrinsic-util") /*id: 120433*/;
  var functionLengthWrapper = require("function-length-wrapper") /*id: 518566*/;
  var i = functionLengthWrapper(getIntrinsicUtil("String.prototype.indexOf"));
  module.exports = function (t, e) {
    var r = getIntrinsicUtil(t, !!e);
    if (typeof r == "function" && i(t, ".prototype.") > -1) {
      return functionLengthWrapper(r);
    } else {
      return r;
    }
  };
}