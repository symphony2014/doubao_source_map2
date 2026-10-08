// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'createSafeMergeMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_comment_module.03c94317.js
         * chunkId: 58738
         * moduleId: 128087
         */
module.exports = function (module, exports, require) {
  var safeMergeMapOperator = require("safe-merge-map-operator") /*id: 396704*/;
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  function r(e, t) {
    if (isFunctionUtil.isFunction(t)) {
      return safeMergeMapOperator.createSafeMergeMap(e, t, 1);
    } else {
      return safeMergeMapOperator.createSafeMergeMap(e, 1);
    }
  }
  require.d(exports, {
    createSafeMergeMap: function () {
      return r;
    }
  });
}