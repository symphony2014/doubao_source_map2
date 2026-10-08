// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'processData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 395538
         */
module.exports = function (module, exports, require) {
  var arrayUniqByUtil = require("array-uniq-by-util") /*id: 235198*/;
  exports.processData = function (e) {
    if (e && e.length) {
      return arrayUniqByUtil.uniqBy(e);
    } else {
      return [];
    }
  };
}