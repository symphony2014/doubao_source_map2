// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'handleDocxNetworkError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_vmok_bottom_template.9ea94739.js
         * chunkId: 73514
         * moduleId: 722404
         */
module.exports = function (module, exports, require) {
  var docxErrorToastHandler = require("docx-error-toast-handler") /*id: 230438*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var docxErrorDebugUtils = require("docx-error-debug-utils") /*id: 899478*/;
  let i = e => {
    var r;
    let {
      error: n,
      fallbackError: i,
      errorInfo: s
    } = e;
    if (offlineStatusSelectorsUtils.isWindowOffline() && offlineStatusSelectorsUtils.isDocxOfflineDisabled() && (n == null ? undefined : (r = n.message) === null || r === undefined ? undefined : r.includes("Network Error"))) {
      return;
    }
    let c = docxErrorDebugUtils.createErrorObject(n, i);
    docxErrorToastHandler.showErrorWithDebug({
      type: "error",
      closable: true,
      content: s || t("etherpad.network_abnormal"),
      errorContext: c
    });
  };
  require.d(exports, {
    handleDocxNetworkError: function () {
      return i;
    }
  });
}