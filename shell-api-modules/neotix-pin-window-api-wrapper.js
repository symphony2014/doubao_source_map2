// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'pinWindowApi'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-init-desktop.e9cbd988.js
         * chunkId: 41054
         * moduleId: 774214
         */
module.exports = function (module, exports, require) {
  var a;
  var shellApiLoggingUtils = require("shell-api-logging-utils") /*id: 191846*/;
  let r = typeof globalThis != "undefined" && (a = globalThis.neotix) !== null && a !== undefined ? a : {};
  let l = typeof window != "undefined" ? window.neotix?.pinWindow : r == null ? undefined : r.pinWindow;
  let s = {
    sendCommand: shellApiLoggingUtils.wrapWithLogging(async e => await (l == null ? undefined : l.sendCommand(e)), "neotix.pinWindow.sendCommand"),
    setFloating: shellApiLoggingUtils.wrapWithLogging(async e => await (l == null ? undefined : l.setFloating(e)), "neotix.pinWindow.setFloating"),
    getFloating: shellApiLoggingUtils.wrapWithLogging(async () => await (l == null ? undefined : l.getFloating()), "neotix.pinWindow.getFloating")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (l == null ? undefined : l.sendCommand(e)), "neotix.pinWindow.sendCommand");
  shellApiLoggingUtils.wrapApiHandler(async e => await (l == null ? undefined : l.setFloating(e)), "neotix.pinWindow.setFloating");
  shellApiLoggingUtils.wrapApiHandler(async () => await (l == null ? undefined : l.getFloating()), "neotix.pinWindow.getFloating");
  require.d(exports, {
    pinWindowApi: function () {
      return s;
    }
  });
}