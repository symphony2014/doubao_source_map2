// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatErrorCodes'
// - Resolved require(679391) to 'chat-error-codes'
// - Resolved require(566786) to 'chat-message-limit-symbol_2'
// - Updated imported property 'Q' to 'messageLimitSymbol' (module 566786)
// - Updated imported property 'S' to 'chatErrorCodes' (module 679391)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 725278
         */
module.exports = function (module, exports, require) {
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  let n = {
    pluginIdentifier: require("chat-message-limit-symbol_2") /*id: 566786*/.messageLimitSymbol,
    matchPlugin(e) {
      return e.error_details?.error_code === chatErrorCodes.chatErrorCodes.LIMIT_TO_SEND_MESSAGE;
    }
  };
  require.r(exports);
  require.d(exports, {
    MessageLimitSharkVerifyMessageErrorPluginMatcher: function () {
      return n;
    }
  });
}