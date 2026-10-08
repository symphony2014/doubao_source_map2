// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Resolved require(881397) to 'mobile-msg-sync-plugin-symbol'
// - Updated imported property 'A' to 'MessageSyncPlugin' (module 881397)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 213697
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  let r = {
    pluginIdentifier: require("mobile-msg-sync-plugin-symbol") /*id: 881397*/.MessageSyncPlugin,
    matchPlugin: e => e.cmd === chatCommandCodes.ChatCommandCodes.PULL_MSG_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    mobileMessageSyncMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}