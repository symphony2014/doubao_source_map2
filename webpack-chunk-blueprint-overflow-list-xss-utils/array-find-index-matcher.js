// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'findMatchingIndex'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 489247
         */
module.exports = function (module, exports, require) {
  var arrayFindIndexUtil = require("array-find-index-util") /*id: 344433*/;
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var toIntegerUtil_1 = require("to-integer-util_1") /*id: 366478*/;
  var a = Math.max;
  exports.findMatchingIndex = function (e, t, n) {
    var s = e == null ? 0 : e.length;
    if (!s) {
      return -1;
    }
    var u = n == null ? 0 : toIntegerUtil_1.toInteger(n);
    if (u < 0) {
      u = a(s + u, 0);
    }
    return arrayFindIndexUtil.findIndexDirected(e, objectMatcherFactory.createMatcher(t, 3), u);
  };
}