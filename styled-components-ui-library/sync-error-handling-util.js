// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'reportSyncError'
// - Renamed export 'x' to 'runSynchronous'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 360406
         */
module.exports = function (module, exports, require) {
  var globalConfigSettings = require("global-config-settings") /*id: 273922*/;
  var r = null;
  function o(e) {
    if (globalConfigSettings.globalConfig.useDeprecatedSynchronousErrorHandling) {
      var t = !r;
      if (t) {
        r = {
          errorThrown: false,
          error: null
        };
      }
      e();
      if (t) {
        var n = r;
        var o = n.errorThrown;
        var a = n.error;
        r = null;
        if (o) {
          throw a;
        }
      }
    } else {
      e();
    }
  }
  function a(e) {
    if (globalConfigSettings.globalConfig.useDeprecatedSynchronousErrorHandling && r) {
      r.errorThrown = true;
      r.error = e;
    }
  }
  require.d(exports, {
    reportSyncError: function () {
      return a;
    },
    runSynchronous: function () {
      return o;
    }
  });
}