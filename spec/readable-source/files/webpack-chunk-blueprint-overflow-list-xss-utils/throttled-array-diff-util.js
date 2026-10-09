// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'throttledArrayDiff'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 222302
         */
module.exports = function (module, exports, require) {
  var arrayDifferenceUtil = require("array-difference-util") /*id: 943312*/;
  var arrayFlattenUtil_2 = require("array-flatten-util_2") /*id: 547804*/;
  var throttledArgStringUtil = require("throttled-arg-string-util") /*id: 293873*/;
  var arrayLikeObjectCheck = require("array-like-object-check") /*id: 443422*/;
  var s = throttledArgStringUtil.throttledStringify(function (e, t) {
    if (arrayLikeObjectCheck.isArrayLikeObject(e)) {
      return arrayDifferenceUtil.baseDifference(e, arrayFlattenUtil_2.flattenArray(t, 1, arrayLikeObjectCheck.isArrayLikeObject, true));
    } else {
      return [];
    }
  });
  exports.throttledArrayDiff = s;
}