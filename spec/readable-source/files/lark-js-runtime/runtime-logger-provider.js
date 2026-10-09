// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'runtimeLogger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-js-runtime.7be57fd6.js
         * chunkId: 1795
         * moduleId: 431418
         */
module.exports = function (module, exports, require) {
  let i = require("lark-js-runtime-config") /*id: 961555*/.runtimeConfig.useConsoleLog ? require("console-global-wrapper") /*id: 119183*/.globalConsole : require("js-runtime-logger") /*id: 86486*/.logger;
  require.d(exports, {
    runtimeLogger: function () {
      return i;
    }
  });
}