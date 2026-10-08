// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatErrorCodes'
// - Resolved require(679391) to 'chat-error-codes'
// - Resolved require(224827) to 'chat-message-limit-symbol_1'
// - Updated imported property 'e' to 'messageLimitSymbol' (module 224827)
// - Updated imported property 'S' to 'chatErrorCodes' (module 679391)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 602342
         */
module.exports = function (module, exports, require) {
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  let n = {
    pluginIdentifier: require("chat-message-limit-symbol_1") /*id: 224827*/.messageLimitSymbol,
    matchPlugin(e) {
      return e.error_details?.error_code === chatErrorCodes.chatErrorCodes.LIMIT_TO_SEND_MESSAGE;
    }
  };
  require.r(exports);
  require.d(exports, {
    messageLimitMessageErrorPluginMatcher: function () {
      return n;
    }
  });
}