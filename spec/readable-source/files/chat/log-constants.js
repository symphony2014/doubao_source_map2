// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'getLogTargets'
// - Renamed export 'i' to 'getLogLevels'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 966837
         */
module.exports = function (module, exports, require) {
  var i = {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    FATAL: "fatal"
  };
  var r = {
    CONSOLE: "console",
    PERSIST: "persist"
  };
  require.d(exports, {
    getLogTargets: function () {
      return r;
    },
    getLogLevels: function () {
      return i;
    }
  });
}