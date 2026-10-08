// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'valueToPathArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 599844
         */
module.exports = function (module, exports, require) {
  var arrayMapUtil = require("array-map-util") /*id: 466350*/;
  var arrayCopyUtil = require("array-copy-util") /*id: 996367*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isSymbolUtil = require("is-symbol-util") /*id: 994674*/;
  var memoizedPathParser = require("memoized-path-parser") /*id: 214139*/;
  var valueToStringUtil_1 = require("value-to-string-util_1") /*id: 59353*/;
  var safeValueToStringUtil = require("safe-value-to-string-util") /*id: 474501*/;
  exports.valueToPathArray = function (e) {
    if (arrayIsArrayUtil.isArray(e)) {
      return arrayMapUtil.arrayMap(e, valueToStringUtil_1.valueToString);
    } else if (isSymbolUtil.isSymbol(e)) {
      return [e];
    } else {
      return arrayCopyUtil.copyArray(memoizedPathParser.stringToPath(safeValueToStringUtil.safeToString(e)));
    }
  };
}