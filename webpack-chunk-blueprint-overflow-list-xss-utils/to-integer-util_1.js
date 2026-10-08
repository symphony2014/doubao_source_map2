// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'toInteger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 366478
         */
module.exports = function (module, exports, require) {
  var toSafeNumberUtil = require("to-safe-number-util") /*id: 338794*/;
  exports.toInteger = function (e) {
    var t = toSafeNumberUtil.toSafeNumber(e);
    var n = t % 1;
    if (t == t) {
      if (n) {
        return t - n;
      } else {
        return t;
      }
    } else {
      return 0;
    }
  };
}