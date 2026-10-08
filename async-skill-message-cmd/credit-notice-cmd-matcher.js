// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Resolved require(61604) to 'chat-credit-notice-plugin-id'
// - Updated imported property 'E' to 'creditNoticePluginId' (module 61604)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 380953
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  let r = {
    pluginIdentifier: require("chat-credit-notice-plugin-id") /*id: 61604*/.creditNoticePluginId,
    matchPlugin: e => e.cmd === chatCommandCodes.ChatCommandCodes.IN_APP_BANNER_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    creditNoticeCmdPluginMatcher: function () {
      return r;
    }
  });
}