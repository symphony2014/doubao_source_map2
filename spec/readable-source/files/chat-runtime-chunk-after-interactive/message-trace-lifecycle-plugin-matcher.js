// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(661760) to 'message-trace-symbol'
// - Updated imported property 'H' to 'messageTraceSymbol' (module 661760)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 224422
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("message-trace-symbol") /*id: 661760*/.messageTraceSymbol,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    MessageTraceMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}