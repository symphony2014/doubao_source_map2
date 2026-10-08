// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getIntrinsicUtil'
// - Resolved require(120433) to 'get-intrinsic-util'
// - Renamed variable 'u' to 'checkNullOrPrimitive'
// - Resolved require(294565) to 'check-null-or-primitive'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 13567
         */
module.exports = function (module, exports, require) {
  var getIntrinsicUtil = require("get-intrinsic-util") /*id: 120433*/;
  var o = getIntrinsicUtil("%Object.preventExtensions%", true);
  var i = getIntrinsicUtil("%Object.isExtensible%", true);
  var checkNullOrPrimitive = require("check-null-or-primitive") /*id: 294565*/;
  module.exports = o ? function (t) {
    return !checkNullOrPrimitive(t) && i(t);
  } : function (t) {
    return !checkNullOrPrimitive(t);
  };
}