// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'castPath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 539693
         */
module.exports = function (module, exports, require) {
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isPropertyKeyUtil = require("is-property-key-util") /*id: 435695*/;
  var memoizedPathParser = require("memoized-path-parser") /*id: 214139*/;
  var safeValueToStringUtil = require("safe-value-to-string-util") /*id: 474501*/;
  exports.castPath = function (e, t) {
    if (arrayIsArrayUtil.isArray(e)) {
      return e;
    } else if (isPropertyKeyUtil.isPropertyKey(e, t)) {
      return [e];
    } else {
      return memoizedPathParser.stringToPath(safeValueToStringUtil.safeToString(e));
    }
  };
}