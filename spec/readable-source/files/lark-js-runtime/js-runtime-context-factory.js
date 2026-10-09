// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'runtimeContextFactory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-js-runtime.7be57fd6.js
         * chunkId: 1795
         * moduleId: 679446
         */
module.exports = function (module, exports, require) {
  var i;
  var n;
  (n = i ||= {})[n.Webview = 1] = "Webview";
  n[n.JSWorklet = 2] = "JSWorklet";
  n[n.JSWorkerContext = 3] = "JSWorkerContext";
  let s = {
    webview: e => ({
      id: e,
      type: i.Webview
    }),
    jsWorklet: e => ({
      id: e,
      type: i.JSWorklet
    }),
    jsWorkerContext: e => ({
      id: e,
      type: i.JSWorkerContext
    }),
    mainJSWorklet() {
      return this.jsWorklet("@@JSRUNTIMECLIENT//main_context");
    },
    isWebview: e => e.type === i.Webview,
    isJSWorklet: e => e.type === i.JSWorklet,
    isJSWorkerContext: e => e.type === i.JSWorkerContext,
    equals: (e, t) => e.id === t.id && e.type === t.type
  };
  require.d(exports, {
    runtimeContextFactory: function () {
      return s;
    }
  });
}