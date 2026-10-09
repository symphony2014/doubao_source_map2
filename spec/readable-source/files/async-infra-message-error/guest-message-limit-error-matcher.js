// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatErrorCodes'
// - Resolved require(679391) to 'chat-error-codes'
// - Resolved require(741170) to 'guest-msg-limit-error-plugin-symbol'
// - Updated imported property 'a' to 'guestMsgLimitSymbol' (module 741170)
// - Updated imported property 'S' to 'chatErrorCodes' (module 679391)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 410057
         */
module.exports = function (module, exports, require) {
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  let n = {
    pluginIdentifier: require("guest-msg-limit-error-plugin-symbol") /*id: 741170*/.guestMsgLimitSymbol,
    matchPlugin(e) {
      return e.error_details?.error_code === chatErrorCodes.chatErrorCodes.GUEST_REACH_LIMIT;
    }
  };
  require.r(exports);
  require.d(exports, {
    guestMessageLimitMessageErrorPluginMatcher: function () {
      return n;
    }
  });
}