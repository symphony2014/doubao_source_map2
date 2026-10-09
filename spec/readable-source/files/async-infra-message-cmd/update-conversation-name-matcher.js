// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Resolved require(284998) to 'conversation-update-name-symbol'
// - Updated imported property 't' to 'conversationNameKey' (module 284998)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 485533
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  let r = {
    pluginIdentifier: require("conversation-update-name-symbol") /*id: 284998*/.conversationNameKey,
    matchPlugin: e => e.cmd === chatCommandCodes.ChatCommandCodes.UPDATE_CONVERSATION_NAME_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    conversationUpdateNameMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}