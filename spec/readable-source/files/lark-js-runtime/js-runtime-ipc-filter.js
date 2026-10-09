// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'isJsRuntimeMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-js-runtime.7be57fd6.js
         * chunkId: 1795
         * moduleId: 356499
         */
module.exports = function (module, exports, require) {
  var jsRuntimeIpcTypes = require("js-runtime-ipc-types") /*id: 320030*/;
  var jsRuntimeContextFactory = require("js-runtime-context-factory") /*id: 679446*/;
  function s(e, t) {
    if (e === jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_MESSAGE) {
      return jsRuntimeContextFactory.runtimeContextFactory.isJSWorklet(t.receiver);
    } else {
      return e !== jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_BROADCAST;
    }
  }
  require.d(exports, {
    isJsRuntimeMessage: function () {
      return s;
    }
  });
}