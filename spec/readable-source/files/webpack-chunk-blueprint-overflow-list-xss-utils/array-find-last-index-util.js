// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'findLastIndex'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 832584
         */
module.exports = function (module, exports, require) {
  var arrayFindIndexUtil = require("array-find-index-util") /*id: 344433*/;
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var toIntegerUtil_1 = require("to-integer-util_1") /*id: 366478*/;
  var a = Math.max;
  var s = Math.min;
  exports.findLastIndex = function (e, t, n) {
    var u = e == null ? 0 : e.length;
    if (!u) {
      return -1;
    }
    var c = u - 1;
    if (n !== undefined) {
      c = toIntegerUtil_1.toInteger(n);
      c = n < 0 ? a(u + c, 0) : s(c, u - 1);
    }
    return arrayFindIndexUtil.findIndexDirected(e, objectMatcherFactory.createMatcher(t, 3), c, true);
  };
}