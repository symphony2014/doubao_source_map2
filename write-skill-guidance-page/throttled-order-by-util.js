// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'throttledOrderBy'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 363890
         */
module.exports = function (module, exports, require) {
  var arrayFlattenUtil_2 = require("array-flatten-util_2") /*id: 547804*/;
  var collectionOrderByUtil = require("collection-order-by-util") /*id: 86613*/;
  var throttledArgStringUtil = require("throttled-arg-string-util") /*id: 293873*/;
  var verifyPropertyMatch = require("verify-property-match") /*id: 874949*/;
  var s = throttledArgStringUtil.throttledStringify(function (e, t) {
    if (e == null) {
      return [];
    }
    var n = t.length;
    if (n > 1 && verifyPropertyMatch.checkPropertyValue(e, t[0], t[1])) {
      t = [];
    } else if (n > 2 && verifyPropertyMatch.checkPropertyValue(t[0], t[1], t[2])) {
      t = [t[0]];
    }
    return collectionOrderByUtil.orderBy(e, arrayFlattenUtil_2.flattenArray(t, 1), []);
  });
  exports.throttledOrderBy = s;
}