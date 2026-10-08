// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ju' to 'closeFindReplaceBox'
// - Renamed export 'yO' to 'openFindReplaceBox'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 877832
         */
module.exports = function (module, exports, require) {
  var actionTypeConstants = require("action-type-constants") /*id: 199942*/;
  let o = e => ({
    type: actionTypeConstants.ActionTypes.findReplace.OPEN_FIND_REPLACE_BOX,
    payload: e
  });
  let a = () => ({
    type: actionTypeConstants.ActionTypes.findReplace.CLOSE_FIND_REPLACE_BOX
  });
  require.d(exports, {
    closeFindReplaceBox: function () {
      return a;
    },
    openFindReplaceBox: function () {
      return o;
    }
  });
}