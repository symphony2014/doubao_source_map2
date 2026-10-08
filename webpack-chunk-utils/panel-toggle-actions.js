// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V6' to 'toggleCommentPanel'
// - Renamed export 'WJ' to 'toggleHelpPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 310864
         */
module.exports = function (module, exports, require) {
  var storeActionConstants = require("store-action-constants") /*id: 119654*/;
  function o(e) {
    return {
      type: storeActionConstants.actionTypes.ToggleCommentPanelShown,
      payload: e
    };
  }
  function a(e) {
    return {
      type: storeActionConstants.actionTypes.ToggleHelpPanelShown,
      payload: e
    };
  }
  require.d(exports, {
    toggleCommentPanel: function () {
      return o;
    },
    toggleHelpPanel: function () {
      return a;
    }
  });
}