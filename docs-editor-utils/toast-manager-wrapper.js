// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'showToast'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 55407
         */
module.exports = function (module, exports, require) {
  var uiToastManager = require("ui-toast-manager") /*id: 117371*/;
  let i = function (e) {
    let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    let {
      dom: r = null,
      type: i
    } = e;
    if (n) {
      uiToastManager.toastManager.destroy();
    }
    uiToastManager.toastManager.config({
      getContainer: () => r && r.closest(".card") || document.body
    });
    return uiToastManager.toastManager[i](e);
  };
  i.destroy = uiToastManager.toastManager.destroy;
  i.config = uiToastManager.toastManager.config;
  require.d(exports, {
    showToast: function () {
      return i;
    }
  });
}