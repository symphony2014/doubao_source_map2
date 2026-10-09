// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'jsRuntimeIpc'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-js-runtime.7be57fd6.js
         * chunkId: 1795
         * moduleId: 513225
         */
module.exports = function (module, exports, require) {
  let i = "@@JSRUNTIMECLIENT//message_channel";
  globalThis[i] ||= new MessageChannel();
  let n = globalThis[i];
  let s = n.port1;
  n.port2;
  let o = new (require("js-runtime-webview-ipc") /*id: 125322*/.JsRuntimeWebviewIpc)(s);
  require.d(exports, {
    jsRuntimeIpc: function () {
      return o;
    }
  });
}