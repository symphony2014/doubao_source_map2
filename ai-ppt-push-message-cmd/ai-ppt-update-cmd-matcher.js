// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Resolved require(1197) to 'ai-ppt-update-cmd-plugin'
// - Updated imported property 'g' to 'aiPptUpdatePlugin' (module 1197)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-ppt-push-message-cmd.37bcab89.js
         * chunkId: 36551
         * moduleId: 617040
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  let u = {
    pluginIdentifier: require("ai-ppt-update-cmd-plugin") /*id: 1197*/.aiPptUpdatePlugin,
    matchPlugin: t => t.cmd === chatCommandCodes.ChatCommandCodes.PULL_MSG_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    productUpdateMessageCmdPluginMatcher: function () {
      return u;
    }
  });
}