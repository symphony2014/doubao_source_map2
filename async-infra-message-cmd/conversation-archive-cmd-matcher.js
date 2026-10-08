// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Renamed variable 'r' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(882166) to 'chat-archive-cmd-symbol'
// - Updated imported property 'Z' to 'archiveCmdSymbol' (module 882166)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 23713
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let o = {
    pluginIdentifier: require("chat-archive-cmd-symbol") /*id: 882166*/.archiveCmdSymbol,
    matchPlugin: e => e.cmd === messagingConstants.messageType.ConversationArchive || e.cmd === chatCommandCodes.ChatCommandCodes.DELETE_USER_CONVERSATION_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    conversationArchiveMessageCmdPluginMatcher: function () {
      return o;
    }
  });
}