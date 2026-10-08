// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Resolved require(183017) to 'conversation-add-msg-plugin'
// - Updated imported property 'k' to 'addMessagePluginId' (module 183017)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 606356
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  let r = {
    pluginIdentifier: require("conversation-add-msg-plugin") /*id: 183017*/.addMessagePluginId,
    matchPlugin: e => e.cmd === chatCommandCodes.ChatCommandCodes.UPDATE_CONVERSATION_PARTICIPANT_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    conversationAddMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}