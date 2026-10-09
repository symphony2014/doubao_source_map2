// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'handleNetworkError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 309691
         */
module.exports = function (module, exports, require) {
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var docxErrorToastHandler = require("docx-error-toast-handler") /*id: 230438*/;
  function a(e) {
    return !networkStateEventCollector.collectNetworkState() && (docxErrorToastHandler.showErrorToast({
      content: e
    }), true);
  }
  require.d(exports, {
    handleNetworkError: function () {
      return a;
    }
  });
}