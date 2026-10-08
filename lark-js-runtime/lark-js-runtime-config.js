// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'runtimeConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-js-runtime.7be57fd6.js
         * chunkId: 1795
         * moduleId: 961555
         */
module.exports = function (module, exports, require) {
  let i = require("process-browser-shim") /*id: 488992*/.env.LARK_ENV === "web";
  let n = !globalThis.__lark_runtime_disable_shared_worker;
  let s = !i && ShellAPI.app.environment.isMultiTenantsNotifyEnabled;
  let o = i || ShellAPI.app.environment.isUseJsRuntimeEnable;
  let a = {
    isWeb: i,
    isProduction: true,
    useSharedWorker: n,
    useMultiUsers: s,
    useConsoleLog: i || false,
    enableJSSDKSerivce: o
  };
  require.d(exports, {
    runtimeConfig: function () {
      return a;
    }
  });
}