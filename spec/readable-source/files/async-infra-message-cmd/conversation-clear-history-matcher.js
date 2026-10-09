// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Renamed variable 'r' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(343458) to 'chat-clear-history-symbol'
// - Updated imported property 'M' to 'clearHistorySymbol' (module 343458)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 232939
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let o = {
    pluginIdentifier: require("chat-clear-history-symbol") /*id: 343458*/.clearHistorySymbol,
    matchPlugin: e => e.cmd === messagingConstants.messageType.ConversationClearHistory || e.cmd === chatCommandCodes.ChatCommandCodes.CLEAR_MSG_HISTORY_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    conversationClearHistoryMessageCmdPluginMatcher: function () {
      return o;
    }
  });
}