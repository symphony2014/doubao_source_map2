// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'incrementalCounter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 767112
         */
module.exports = function (module, exports, require) {
  var safeValueToStringUtil = require("safe-value-to-string-util") /*id: 474501*/;
  var o = 0;
  exports.incrementalCounter = function (e) {
    var n = ++o;
    return safeValueToStringUtil.safeToString(e) + n;
  };
}