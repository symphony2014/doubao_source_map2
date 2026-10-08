// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Renamed variable 'r' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(688809) to 'chat-conversation-read-cmd-symbol'
// - Updated imported property 'O' to 'readMessageCmdSymbol' (module 688809)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 780909
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let o = {
    pluginIdentifier: require("chat-conversation-read-cmd-symbol") /*id: 688809*/.readMessageCmdSymbol,
    matchPlugin: e => e.cmd === messagingConstants.messageType.ConversationRead || e.cmd === chatCommandCodes.ChatCommandCodes.MARK_READ_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    conversationReadMessageCmdPluginMatcher: function () {
      return o;
    }
  });
}