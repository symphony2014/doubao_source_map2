// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'removeToast'
// - Renamed export 'C' to 'showToast'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 669090
         */
module.exports = function (module, exports, require) {
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  function i(e) {
    let n = {
      type: e.pcToastType,
      content: e.message,
      closable: e.closable,
      key: e.key,
      onClose: e.onClose,
      duration: e.duration
    };
    return toastNotificationManager_1.toastManager.show(n);
  }
  function l(e) {
    toastNotificationManager_1.toastManager.remove(e);
  }
  require.d(exports, {
    removeToast: function () {
      return l;
    },
    showToast: function () {
      return i;
    }
  });
}