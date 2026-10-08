// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(21227) to 'symbol-well-known-registry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 777729
         */
module.exports = function (module, exports, require) {
  var n = require("symbol-well-known-registry") /*id: 21227*/("match");
  module.exports = function (e) {
    var t = /./;
    try {
      "/./"[e](t);
    } catch (r) {
      try {
        t[n] = false;
        return "/./"[e](t);
      } catch (e) {}
    }
    return false;
  };
}