// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(178423) to 'chat-tourist-limit-symbol'
// - Updated imported property 'u' to 'touristLimitSymbol' (module 178423)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 101777
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("chat-tourist-limit-symbol") /*id: 178423*/.touristLimitSymbol,
    matchPlugin: e => e.cmd === messagingConstants.messageType.TouristReachThreadLimit
  };
  require.r(exports);
  require.d(exports, {
    touristReachThreadLimitMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}