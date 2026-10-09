// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Renamed variable 'r' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(323339) to 'conversation-create-section-key'
// - Updated imported property 'w' to 'SectionMsgCmdPlugin' (module 323339)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 149303
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let o = {
    pluginIdentifier: require("conversation-create-section-key") /*id: 323339*/.SectionMsgCmdPlugin,
    matchPlugin: e => e.cmd === messagingConstants.messageType.ConversationCreateSection || e.cmd === chatCommandCodes.ChatCommandCodes.CLEAR_MSG_CONTEXT_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    conversationCreateSectionMessageCmdPluginMatcher: function () {
      return o;
    }
  });
}