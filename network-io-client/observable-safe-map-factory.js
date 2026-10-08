// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'createSafeMapOp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 574000
         */
module.exports = function (module, exports, require) {
  var observableSafeMapOperator = require("observable-safe-map-operator") /*id: 297880*/;
  function i(e) {
    return observableSafeMapOperator.createSafeMapOperator(function () {
      return e;
    });
  }
  require.d(exports, {
    createSafeMapOp: function () {
      return i;
    }
  });
}