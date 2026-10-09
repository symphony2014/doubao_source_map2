// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Resolved require(231825) to 'message-feedback-cmd-plugin_1'
// - Updated imported property 'l' to 'messageFeedbackCmd' (module 231825)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 852059
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  let r = {
    pluginIdentifier: require("message-feedback-cmd-plugin_1") /*id: 231825*/.messageFeedbackCmd,
    matchPlugin: e => e.cmd === chatCommandCodes.ChatCommandCodes.FEEDBACK_MSG_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    messageFeedbackMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}