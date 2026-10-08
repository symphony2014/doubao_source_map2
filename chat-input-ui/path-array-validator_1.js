// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'validatePathArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 759.d4297f73.js
         * chunkId: 759
         * moduleId: 341924
         */
module.exports = function (module, exports, require) {
  var pathArrayValidation = require("path-array-validation") /*id: 75446*/;
  let n = e => pathArrayValidation.validatePathArray(e, "block_id") && pathArrayValidation.validatePathArray(e, "offset");
  require.d(exports, {
    validatePathArray: function () {
      return n;
    }
  });
}