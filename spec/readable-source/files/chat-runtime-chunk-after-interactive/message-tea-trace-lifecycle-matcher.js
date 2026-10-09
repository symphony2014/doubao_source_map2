// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(141198) to 'message-tea-trace'
// - Updated imported property 'H' to 'messageTeaTrace' (module 141198)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 225887
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("message-tea-trace") /*id: 141198*/.messageTeaTrace,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    MessageTeaTraceMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}