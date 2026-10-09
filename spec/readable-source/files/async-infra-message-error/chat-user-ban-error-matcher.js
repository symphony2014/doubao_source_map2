// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatErrorCodes'
// - Resolved require(679391) to 'chat-error-codes'
// - Resolved require(161173) to 'chat-user-ban-error-symbol'
// - Updated imported property 'Q' to 'UserBanErrorSymbol' (module 161173)
// - Updated imported property 'S' to 'chatErrorCodes' (module 679391)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 360220
         */
module.exports = function (module, exports, require) {
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  let n = {
    pluginIdentifier: require("chat-user-ban-error-symbol") /*id: 161173*/.UserBanErrorSymbol,
    matchPlugin(e) {
      return e.error_details?.error_code === chatErrorCodes.chatErrorCodes.USER_BANNED;
    }
  };
  require.r(exports);
  require.d(exports, {
    userBanMessageErrorPluginMatcher: function () {
      return n;
    }
  });
}