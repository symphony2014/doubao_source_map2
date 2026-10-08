// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'concatAndFlatten'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 876471
         */
module.exports = function (module, exports, require) {
  var arrayAppendUtil = require("array-append-util") /*id: 332715*/;
  var arrayFlattenUtil_2 = require("array-flatten-util_2") /*id: 547804*/;
  var arrayCopyUtil = require("array-copy-util") /*id: 996367*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  exports.concatAndFlatten = function () {
    var e = arguments.length;
    if (!e) {
      return [];
    }
    var t = Array(e - 1);
    var r = arguments[0];
    var a = e;
    while (a--) {
      t[a - 1] = arguments[a];
    }
    return arrayAppendUtil.appendArrayElements(arrayIsArrayUtil.isArray(r) ? arrayCopyUtil.copyArray(r) : [r], arrayFlattenUtil_2.flattenArray(t, 1));
  };
}