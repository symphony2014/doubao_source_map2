// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatErrorCodes'
// - Resolved require(679391) to 'chat-error-codes'
// - Resolved require(619238) to 'guest-thread-limit-error-symbol'
// - Updated imported property 'u' to 'guestLimitError' (module 619238)
// - Updated imported property 'S' to 'chatErrorCodes' (module 679391)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 328301
         */
module.exports = function (module, exports, require) {
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  let n = {
    pluginIdentifier: require("guest-thread-limit-error-symbol") /*id: 619238*/.guestLimitError,
    matchPlugin: e => {
      return e.error_details?.error_code === chatErrorCodes.chatErrorCodes.GUEST_CONVERSATION_REACH_LIMIT;
    }
  };
  require.r(exports);
  require.d(exports, {
    guestReachCreateThreadLimitMessageErrorPluginMatcher: function () {
      return n;
    }
  });
}