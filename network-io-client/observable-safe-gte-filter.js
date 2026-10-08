// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'createSafeGteFilter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 470010
         */
module.exports = function (module, exports, require) {
  var observableSafeFilter = require("observable-safe-filter") /*id: 669476*/;
  function i(e) {
    return observableSafeFilter.createSafeFilter(function (t, r) {
      return e <= r;
    });
  }
  require.d(exports, {
    createSafeGteFilter: function () {
      return i;
    }
  });
}