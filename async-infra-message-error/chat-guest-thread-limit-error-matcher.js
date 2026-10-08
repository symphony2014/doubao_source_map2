// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatErrorCodes'
// - Resolved require(679391) to 'chat-error-codes'
// - Resolved require(203066) to 'chat-guest-limit-symbol'
// - Updated imported property 'X' to 'guestThreadLimitSym' (module 203066)
// - Updated imported property 'S' to 'chatErrorCodes' (module 679391)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 188758
         */
module.exports = function (module, exports, require) {
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  let n = {
    pluginIdentifier: require("chat-guest-limit-symbol") /*id: 203066*/.guestThreadLimitSym,
    matchPlugin(e) {
      return e.error_details?.error_code === chatErrorCodes.chatErrorCodes.GUEST_CONVERSATION_REACH_LIMIT;
    }
  };
  require.r(exports);
  require.d(exports, {
    guestReachThreadLimitMessageErrorPluginMatcher: function () {
      return n;
    }
  });
}