// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(571650) to 'user-banned-message-symbol'
// - Updated imported property 'X' to 'bannedMessageSymbol' (module 571650)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 841279
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("user-banned-message-symbol") /*id: 571650*/.bannedMessageSymbol,
    matchPlugin: e => e.cmd === messagingConstants.messageType.UserBanned
  };
  require.r(exports);
  require.d(exports, {
    userBannedMessageCmdLPluginMatcher: function () {
      return r;
    }
  });
}