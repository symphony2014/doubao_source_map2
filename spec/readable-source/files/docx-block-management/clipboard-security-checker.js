// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'isSecuritySupported'
// - Renamed export 't' to 'getClipboardEnable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 991067
         */
module.exports = function (module, exports, require) {
  var clipboardSecurityHandler = require("clipboard-security-handler") /*id: 558244*/;
  var docComponentStubConfig = require("doc-component-stub-config") /*id: 436674*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function a() {
    return true;
  }
  function d(e) {
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile && !browserEnvironmentDetectionUtils.browserDetector.isH5) {
      return docComponentStubConfig.clipboardUtils.getCcmClipboardSecurityEnable(e);
    } else {
      return clipboardSecurityHandler.clipboardSecurityManager.getCcmClipboardSecurityEnable(e);
    }
  }
  require.d(exports, {
    isSecuritySupported: function () {
      return a;
    },
    getClipboardEnable: function () {
      return d;
    }
  });
}