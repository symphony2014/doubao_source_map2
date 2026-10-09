// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Resolved require(814395) to 'fix-regenerate-cmd-plugin'
// - Updated imported property 'd' to 'fixRegenCmdPlugin' (module 814395)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 93766
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  let r = {
    pluginIdentifier: require("fix-regenerate-cmd-plugin") /*id: 814395*/.fixRegenCmdPlugin,
    matchPlugin: e => e.cmd === chatCommandCodes.ChatCommandCodes.FIX_REGENERATE_MSG_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    fixRegenerateMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}