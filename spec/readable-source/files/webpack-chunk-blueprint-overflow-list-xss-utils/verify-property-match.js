// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'checkPropertyValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 874949
         */
module.exports = function (module, exports, require) {
  var isEqualUtil = require("is-equal-util") /*id: 18380*/;
  var isArrayLikeUtil = require("is-array-like-util") /*id: 391276*/;
  var isValidLengthUtil = require("is-valid-length-util") /*id: 557018*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  exports.checkPropertyValue = function (e, t, n) {
    if (!isObjectOrFunction_1_1.isObjectOrFunction(n)) {
      return false;
    }
    var s = typeof t;
    return (s == "number" ? !!isArrayLikeUtil.isArrayLike(n) && !!isValidLengthUtil.isValidLength(t, n.length) : s == "string" && t in n) && isEqualUtil.isEqual(n[t], e);
  };
}