// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatErrorCodes'
// - Resolved require(679391) to 'chat-error-codes'
// - Renamed variable 'n' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Resolved require(730317) to 'chat-illegal-message-plugin'
// - Updated imported property 'x' to 'illegalMessagePlugin' (module 730317)
// - Updated imported property 'S' to 'chatErrorCodes' (module 679391)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 502973
         */
module.exports = function (module, exports, require) {
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  let o = {
    pluginIdentifier: require("chat-illegal-message-plugin") /*id: 730317*/.illegalMessagePlugin,
    matchPlugin(e) {
      return e.error_details?.error_code === chatErrorCodes.chatErrorCodes.CLEAR_LAST_PROMPT || (e == null ? undefined : e.status) === chatMessageTypes.PushMessageStatus.NotCompliant;
    }
  };
  require.r(exports);
  require.d(exports, {
    messageIllegalMessageErrorPluginMatcher: function () {
      return o;
    }
  });
}