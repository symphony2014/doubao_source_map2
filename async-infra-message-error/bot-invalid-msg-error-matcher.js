// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatErrorCodes'
// - Resolved require(679391) to 'chat-error-codes'
// - Resolved require(76373) to 'bot-invalid-msg-error'
// - Updated imported property 'Z' to 'botInvalidMsgError' (module 76373)
// - Updated imported property 'S' to 'chatErrorCodes' (module 679391)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 9245
         */
module.exports = function (module, exports, require) {
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  let n = {
    pluginIdentifier: require("bot-invalid-msg-error") /*id: 76373*/.botInvalidMsgError,
    matchPlugin: e => {
      return [chatErrorCodes.chatErrorCodes.BOT_INVALID, chatErrorCodes.chatErrorCodes.BOT_BANNED, chatErrorCodes.chatErrorCodes.BOT_REVIEWING].includes(Number(e.error_details?.error_code));
    }
  };
  require.r(exports);
  require.d(exports, {
    botInvalidMessageErrorPluginMatcher: function () {
      return n;
    }
  });
}