// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'doubleStruckConstants'
// - Resolved require(716312) to 'double-struck-constants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 267233
         */
module.exports = function (module, exports, require) {
  exports.doubleStruck = undefined;
  var doubleStruckConstants = require("double-struck-constants") /*id: 716312*/;
  Object.defineProperty(exports, "doubleStruck", {
    enumerable: true,
    get: function () {
      return doubleStruckConstants.doubleStruck;
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}