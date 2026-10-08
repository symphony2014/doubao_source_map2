// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'showToast'
// - Renamed export 'P' to 'hideToast'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 420505
         */
module.exports = function (module, exports, require) {
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  var docComponentStubConfig = require("doc-component-stub-config") /*id: 436674*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  let c = () => browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isLark;
  let u = function (e, n = {}) {
    let {
      key: r,
      type: l = "info",
      durations: u = [undefined, 3]
    } = n;
    let [a, s] = u;
    if (c()) {
      var d;
      let n = {
        info: docComponentStubConfig.toastStub === null || docComponentStubConfig.toastStub === undefined ? undefined : docComponentStubConfig.toastStub.DoubaoToastType.Warn,
        success: docComponentStubConfig.toastStub === null || docComponentStubConfig.toastStub === undefined ? undefined : docComponentStubConfig.toastStub.DoubaoToastType.Success,
        warning: docComponentStubConfig.toastStub === null || docComponentStubConfig.toastStub === undefined ? undefined : docComponentStubConfig.toastStub.DoubaoToastType.Warn,
        error: docComponentStubConfig.toastStub === null || docComponentStubConfig.toastStub === undefined ? undefined : docComponentStubConfig.toastStub.DoubaoToastType.Error,
        loading: docComponentStubConfig.toastStub === null || docComponentStubConfig.toastStub === undefined ? undefined : docComponentStubConfig.toastStub.DoubaoToastType.Loading
      };
      if (docComponentStubConfig.toastStub !== null && docComponentStubConfig.toastStub !== undefined && (d = docComponentStubConfig.toastStub.showToast) !== null && d !== undefined) {
        d.call(docComponentStubConfig.toastStub, {
          type: n[l],
          message: e,
          duration: s
        });
      }
    } else {
      toastNotificationManager_1.toastManager.show({
        type: l,
        content: e,
        key: r,
        duration: a
      });
    }
  };
  let a = e => {
    if (c()) {
      var n;
      if (docComponentStubConfig.toastStub !== null && docComponentStubConfig.toastStub !== undefined && (n = docComponentStubConfig.toastStub.hideToast) !== null && n !== undefined) {
        n.call(docComponentStubConfig.toastStub);
      }
    } else {
      toastNotificationManager_1.toastManager.remove(e);
    }
  };
  require.d(exports, {
    showToast: function () {
      return u;
    },
    hideToast: function () {
      return a;
    }
  });
}