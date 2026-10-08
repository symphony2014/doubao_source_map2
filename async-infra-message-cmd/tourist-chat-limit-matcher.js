// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(949235) to 'tourist-chat-limit-symbol'
// - Updated imported property 'U' to 'touristChatLimitSym' (module 949235)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 31150
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("tourist-chat-limit-symbol") /*id: 949235*/.touristChatLimitSym,
    matchPlugin: e => e.cmd === messagingConstants.messageType.TouristReachChatLimit
  };
  require.r(exports);
  require.d(exports, {
    touristReachChatLimitMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}