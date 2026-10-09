// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Resolved require(262749) to 'break-stream-cmd-plugin-symbol'
// - Updated imported property 'Q' to 'breakStreamPlugin' (module 262749)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 946572
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  let r = {
    pluginIdentifier: require("break-stream-cmd-plugin-symbol") /*id: 262749*/.breakStreamPlugin,
    matchPlugin: e => e.cmd === chatCommandCodes.ChatCommandCodes.BREAK_STREAM_MSG_NOTIFY
  };
  require.r(exports);
  require.d(exports, {
    breakStreamMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}