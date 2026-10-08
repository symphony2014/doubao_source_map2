// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'findLastNonMatch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 338923
         */
module.exports = function (module, exports, require) {
  var arrayFindIndexNan = require("array-find-index-nan") /*id: 806028*/;
  exports.findLastNonMatch = function (e, n) {
    for (var r = e.length; r-- && arrayFindIndexNan.findIndexWithNaN(n, e[r], 0) > -1;);
    return r;
  };
}