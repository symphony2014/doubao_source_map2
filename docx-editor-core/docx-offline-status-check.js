// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'isDocxOfflineEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 691844
         */
module.exports = function (module, exports, require) {
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  function o() {
    return !offlineStatusSelectorsUtils.isDocxOfflineDisabled();
  }
  require("bool-default-getter-util") /*id: 855627*/;
  require.d(exports, {
    isDocxOfflineEnabled: function () {
      return o;
    }
  });
}