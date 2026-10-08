// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'validatePathBounds'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 759.d4297f73.js
         * chunkId: 759
         * moduleId: 624893
         */
module.exports = function (module, exports, require) {
  var pathArrayValidation = require("path-array-validation") /*id: 75446*/;
  let n = e => pathArrayValidation.validatePathArray(e, "start") && pathArrayValidation.validatePathArray(e, "end");
  require.d(exports, {
    validatePathBounds: function () {
      return n;
    }
  });
}