// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'runtimeStorageApi'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-init-desktop.e9cbd988.js
         * chunkId: 41054
         * moduleId: 950108
         */
module.exports = function (module, exports, require) {
  var a;
  var shellApiLoggingUtils = require("shell-api-logging-utils") /*id: 191846*/;
  let r = typeof globalThis != "undefined" && (a = globalThis.neotix) !== null && a !== undefined ? a : {};
  let l = typeof window != "undefined" ? window.neotix?.runtimeStorage : r == null ? undefined : r.runtimeStorage;
  let s = {
    set: shellApiLoggingUtils.wrapWithLogging(async e => await (l == null ? undefined : l.set(e)), "neotix.runtimeStorage.set"),
    remove: shellApiLoggingUtils.wrapWithLogging(async e => await (l == null ? undefined : l.remove(e)), "neotix.runtimeStorage.remove"),
    get: shellApiLoggingUtils.wrapWithLogging(async e => await (l == null ? undefined : l.get(e)), "neotix.runtimeStorage.get")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (l == null ? undefined : l.set(e)), "neotix.runtimeStorage.set");
  shellApiLoggingUtils.wrapApiHandler(async e => await (l == null ? undefined : l.remove(e)), "neotix.runtimeStorage.remove");
  shellApiLoggingUtils.wrapApiHandler(async e => await (l == null ? undefined : l.get(e)), "neotix.runtimeStorage.get");
  require.d(exports, {
    runtimeStorageApi: function () {
      return s;
    }
  });
}