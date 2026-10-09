// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'hideDeployToast'
// - Renamed export 'q' to 'showDeployToast'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 862984
         */
module.exports = function (module, exports, require) {
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  var docComponentStubConfig = require("doc-component-stub-config") /*id: 436674*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  let c = "HybridDeployToast";
  let u = false;
  let a = () => {
    if (!u) {
      u = true;
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        docComponentStubConfig.loadingUtils.hideLoading();
      }
      toastNotificationManager_1.toastManager.show({
        type: "loading",
        content: t("CreationDoc_Operation_ReloadfromThirdParty"),
        duration: 60000,
        closable: false,
        key: c
      });
    }
  };
  let s = () => {
    if (u) {
      u = false;
      toastNotificationManager_1.toastManager.remove(c);
    }
  };
  require.d(exports, {
    hideDeployToast: function () {
      return s;
    },
    showDeployToast: function () {
      return a;
    }
  });
}