// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Nx' to 'hideHistory'
// - Renamed export 'ZX' to 'updateWatchdogState'
// - Renamed export 'p8' to 'showHistory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: history.95e09a2f.js
         * chunkId: 17374
         * moduleId: 616272
         */
module.exports = function (module, exports, require) {
  var storeActionConstants = require("store-action-constants") /*id: 119654*/;
  function s(e = false) {
    return {
      type: storeActionConstants.actionTypes.showHistory,
      payload: {
        isLocal: e
      }
    };
  }
  function o() {
    return {
      type: storeActionConstants.actionTypes.hideHistory
    };
  }
  function T(e) {
    return {
      type: storeActionConstants.actionTypes.UPDATE_HAS_WATCHDOG_STATE,
      payload: {
        hasWatchdog: e
      }
    };
  }
  require.d(exports, {
    hideHistory: function () {
      return o;
    },
    updateWatchdogState: function () {
      return T;
    },
    showHistory: function () {
      return s;
    }
  });
}