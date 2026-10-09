// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Resolved require(124626) to 'conversation-plugin-symbol'
// - Updated imported property 'W' to 'ConversationPlugin' (module 124626)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 420556
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  let r = {
    pluginIdentifier: require("conversation-plugin-symbol") /*id: 124626*/.ConversationPlugin,
    matchPlugin: e => e.cmd === chatCommandCodes.ChatCommandCodes.UPDATE_CONVERSATION_LATEST_ARTIFACT_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    conversationUpdateLatestArtifactMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}