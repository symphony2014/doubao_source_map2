// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(120433) to 'get-intrinsic-util'
// - Renamed variable 'o' to 'isRegexpCheck_1'
// - Resolved require(655670) to 'is-regexp-check_1'
// - Renamed variable 'i' to 'booleanCastUtil'
// - Resolved require(263752) to 'boolean-cast-util'
// - Renamed variable 'u' to 'isObjectOrFunction'
// - Resolved require(832730) to 'is-object-or-function'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 371098
         */
module.exports = function (module, exports, require) {
  var n = require("get-intrinsic-util") /*id: 120433*/("%Symbol.match%", true);
  var isRegexpCheck_1 = require("is-regexp-check_1") /*id: 655670*/;
  var booleanCastUtil = require("boolean-cast-util") /*id: 263752*/;
  var isObjectOrFunction = require("is-object-or-function") /*id: 832730*/;
  module.exports = function (t) {
    if (!isObjectOrFunction(t)) {
      return false;
    }
    if (n) {
      var e = t[n];
      if (e !== undefined) {
        return booleanCastUtil(e);
      }
    }
    return isRegexpCheck_1(t);
  };
}