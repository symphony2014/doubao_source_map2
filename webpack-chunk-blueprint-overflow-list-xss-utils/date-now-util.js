// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getDateNow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 258788
         */
module.exports = function (module, exports, require) {
  var globalObjectDetector_1 = require("global-object-detector_1") /*id: 203498*/;
  exports.getDateNow = function () {
    return globalObjectDetector_1.globalObject.Date.now();
  };
}