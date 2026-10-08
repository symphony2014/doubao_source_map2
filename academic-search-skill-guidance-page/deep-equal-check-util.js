// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'checkDeepEqual'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 974619
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  function r(e = [], t = []) {
    return deepEqualUtil_1.deepEqual(e, t);
  }
  require.d(exports, {
    checkDeepEqual: function () {
      return r;
    }
  });
}