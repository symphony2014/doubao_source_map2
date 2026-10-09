// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Resolved require(138810) to 'message-status-change-symbol'
// - Updated imported property 'S' to 'messageStatusChange' (module 138810)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 561556
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  let r = {
    pluginIdentifier: require("message-status-change-symbol") /*id: 138810*/.messageStatusChange,
    matchPlugin: e => e.cmd === chatCommandCodes.ChatCommandCodes.UPDATE_MSG_STATUS_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    messageStatusChangedMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}