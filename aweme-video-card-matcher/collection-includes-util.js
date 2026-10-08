// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'includes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 517430
         */
module.exports = function (module, exports, require) {
  var arrayFindIndexNan = require("array-find-index-nan") /*id: 806028*/;
  var isArrayLikeUtil = require("is-array-like-util") /*id: 391276*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var toIntegerUtil_1 = require("to-integer-util_1") /*id: 366478*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var l = Math.max;
  exports.includes = function (e, t, n, u) {
    e = isArrayLikeUtil.isArrayLike(e) ? e : objectValuesHelper.getObjectValues(e);
    n = n && !u ? toIntegerUtil_1.toInteger(n) : 0;
    var c = e.length;
    if (n < 0) {
      n = l(c + n, 0);
    }
    if (isStringTypeCheck.isString(e)) {
      return n <= c && e.indexOf(t, n) > -1;
    } else {
      return !!c && arrayFindIndexNan.findIndexWithNaN(e, t, n) > -1;
    }
  };
}