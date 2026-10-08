// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(438410) to 'conversation-read-symbol'
// - Updated imported property 'n' to 'ConversationRead' (module 438410)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 501329
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("conversation-read-symbol") /*id: 438410*/.ConversationRead,
    matchPluginWithPayload: e => true,
    matchPlugin: e => true
  };
  require.r(exports);
  require.d(exports, {
    conversationReadMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}