// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(431189) to 'chat-message-limit-symbol'
// - Updated imported property 't' to 'messageLimitSymbol' (module 431189)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 678793
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("chat-message-limit-symbol") /*id: 431189*/.messageLimitSymbol,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    messageLimitMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}