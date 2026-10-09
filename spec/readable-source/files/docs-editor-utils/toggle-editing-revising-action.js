// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'toggleEditingAndRevising'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 678237
         */
module.exports = function (module, exports, require) {
  var storeActionConstants = require("store-action-constants") /*id: 119654*/;
  function i(e) {
    return {
      type: storeActionConstants.actionTypes.ToggleEditingAndRevising,
      payload: e
    };
  }
  require.d(exports, {
    toggleEditingAndRevising: function () {
      return i;
    }
  });
}