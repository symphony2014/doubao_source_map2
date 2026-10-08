// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'toSafeNumber'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 338794
         */
module.exports = function (module, exports, require) {
  var toNumberUtil_1 = require("to-number-util_1") /*id: 216346*/;
  var i = Infinity;
  exports.toSafeNumber = function (e) {
    if (e) {
      if ((e = toNumberUtil_1.toNumber(e)) === i || e === -i) {
        return (e < 0 ? -1 : 1) * 1.7976931348623157e+308;
      } else if (e == e) {
        return e;
      } else {
        return 0;
      }
    } else if (e === 0) {
      return e;
    } else {
      return 0;
    }
  };
}