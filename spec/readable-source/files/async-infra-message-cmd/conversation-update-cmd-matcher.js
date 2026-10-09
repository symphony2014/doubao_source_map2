// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Resolved require(287802) to 'conversation-update-plugin'
// - Updated imported property 'P' to 'convUpdateCmdPlugin' (module 287802)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 66969
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  let r = {
    pluginIdentifier: require("conversation-update-plugin") /*id: 287802*/.convUpdateCmdPlugin,
    matchPlugin: e => e.cmd === chatCommandCodes.ChatCommandCodes.UPDATE_CONVERSATION_INFO_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    conversationUpdateMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}