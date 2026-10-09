// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'throttledArrayDiff'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 979369
         */
module.exports = function (module, exports, require) {
  var arrayDifferenceUtil = require("array-difference-util") /*id: 943312*/;
  var arrayFlattenUtil_2 = require("array-flatten-util_2") /*id: 547804*/;
  var throttledArgStringUtil = require("throttled-arg-string-util") /*id: 293873*/;
  var arrayLikeObjectCheck = require("array-like-object-check") /*id: 443422*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var s = throttledArgStringUtil.throttledStringify(function (e, t) {
    var r = lastElementHelper.getLastElement(t);
    if (arrayLikeObjectCheck.isArrayLikeObject(r)) {
      r = undefined;
    }
    if (arrayLikeObjectCheck.isArrayLikeObject(e)) {
      return arrayDifferenceUtil.baseDifference(e, arrayFlattenUtil_2.flattenArray(t, 1, arrayLikeObjectCheck.isArrayLikeObject, true), undefined, r);
    } else {
      return [];
    }
  });
  exports.throttledArrayDiff = s;
}