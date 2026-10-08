// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Resolved require(612518) to 'conversation-red-dot-symbol'
// - Updated imported property 'E' to 'conversationRedDot' (module 612518)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 327269
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  let r = {
    pluginIdentifier: require("conversation-red-dot-symbol") /*id: 612518*/.conversationRedDot,
    matchPlugin: e => e.cmd === chatCommandCodes.ChatCommandCodes.RED_DOT_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    conversationRedDotUpdateMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}