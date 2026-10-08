// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Resolved require(269597) to 'conversation-cmd-symbol'
// - Updated imported property 'a' to 'conversationCmd' (module 269597)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 215894
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  let r = {
    pluginIdentifier: require("conversation-cmd-symbol") /*id: 269597*/.conversationCmd,
    matchPlugin: e => e.cmd === chatCommandCodes.ChatCommandCodes.OPERATE_CONVERSATION_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    conversationOperateMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}