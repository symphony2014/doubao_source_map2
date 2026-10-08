// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'JsRuntimeIpcTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-js-runtime.7be57fd6.js
         * chunkId: 1795
         * moduleId: 320030
         */
module.exports = function (module, exports, require) {
  var i;
  var n;
  (n = i ||= {}).JS_RUNTIME_IPC_MESSAGE = "JS_RUNTIME_IPC_MESSAGE";
  n.JS_RUNTIME_IPC_BROADCAST = "JS_RUNTIME_IPC_BROADCAST";
  n.JS_RUNTIME_IPC_SUBSCRIBE = "JS_RUNTIME_IPC_SUBSCRIBE";
  n.JS_RUNTIME_IPC_ERROR = "JS_RUNTIME_IPC_ERROR";
  require.d(exports, {
    JsRuntimeIpcTypes: function () {
      return i;
    }
  });
}