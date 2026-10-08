// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ensureArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 782739
         */
module.exports = function (module, exports, require) {
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  exports.ensureArray = function () {
    if (!arguments.length) {
      return [];
    }
    var e = arguments[0];
    if (arrayIsArrayUtil.isArray(e)) {
      return e;
    } else {
      return [e];
    }
  };
}