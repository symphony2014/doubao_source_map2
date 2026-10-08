// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatErrorCodes'
// - Resolved require(679391) to 'chat-error-codes'
// - Resolved require(758295) to 'chat-invalid-msg-error-symbol'
// - Updated imported property 'N' to 'chatInvalidMsgError' (module 758295)
// - Updated imported property 'S' to 'chatErrorCodes' (module 679391)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 271142
         */
module.exports = function (module, exports, require) {
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  let n = {
    pluginIdentifier: require("chat-invalid-msg-error-symbol") /*id: 758295*/.chatInvalidMsgError,
    matchPlugin: e => {
      return e.error_details?.error_code === chatErrorCodes.chatErrorCodes.CONVERSATION_INVALID;
    }
  };
  require.r(exports);
  require.d(exports, {
    conversationInvalidMessageErrorPluginMatcher: function () {
      return n;
    }
  });
}