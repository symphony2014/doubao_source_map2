// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(683666) to 'user-ban-release-cmd-plugin'
// - Updated imported property 'M' to 'userBanReleaseCmd' (module 683666)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 614810
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("user-ban-release-cmd-plugin") /*id: 683666*/.userBanReleaseCmd,
    matchPlugin: e => e.cmd === messagingConstants.messageType.UserBanRelease
  };
  require.r(exports);
  require.d(exports, {
    userBanReleaseMessageCmdLPluginMatcher: function () {
      return r;
    }
  });
}