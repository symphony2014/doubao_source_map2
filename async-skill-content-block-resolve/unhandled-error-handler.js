// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'handleUncaughtError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 227041
         */
module.exports = function (module, exports, require) {
  var globalConfigSettings = require("global-config-settings") /*id: 273922*/;
  var timerDelegate = require("timer-delegate") /*id: 521641*/;
  function o(e) {
    timerDelegate.timerDelegate.setTimeout(function () {
      var t = globalConfigSettings.globalConfig.onUnhandledError;
      if (t) {
        t(e);
      } else {
        throw e;
      }
    });
  }
  require.d(exports, {
    handleUncaughtError: function () {
      return o;
    }
  });
}