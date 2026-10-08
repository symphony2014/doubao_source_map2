// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'createSafeMergeMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 189311
         */
module.exports = function (module, exports, require) {
  var safeMergeMapOperator = require("safe-merge-map-operator") /*id: 396704*/;
  var identityUtil = require("identity-util") /*id: 885053*/;
  function a(e = Infinity) {
    return safeMergeMapOperator.createSafeMergeMap(identityUtil.identity, e);
  }
  require.d(exports, {
    createSafeMergeMap: function () {
      return a;
    }
  });
}