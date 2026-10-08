// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'trimString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 102462
         */
module.exports = function (module, exports, require) {
  var stringTrimRightUtils = require("string-trim-right-utils") /*id: 507739*/;
  var i = /^\s+/;
  exports.trimString = function (e) {
    if (e) {
      return e.slice(0, stringTrimRightUtils.trimRightIndex(e) + 1).replace(i, "");
    } else {
      return e;
    }
  };
}