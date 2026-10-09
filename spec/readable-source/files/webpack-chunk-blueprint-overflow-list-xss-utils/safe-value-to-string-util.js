// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'safeToString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 474501
         */
module.exports = function (module, exports, require) {
  var valueToStringUtil = require("value-to-string-util") /*id: 44037*/;
  exports.safeToString = function (e) {
    if (e == null) {
      return "";
    } else {
      return valueToStringUtil.toStringUtil(e);
    }
  };
}