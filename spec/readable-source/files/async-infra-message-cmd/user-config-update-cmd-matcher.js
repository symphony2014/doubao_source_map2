// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(624648) to 'user-config-update-symbol'
// - Updated imported property 'r' to 'userConfigUpdateSymbol' (module 624648)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 992799
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("user-config-update-symbol") /*id: 624648*/.userConfigUpdateSymbol,
    matchPlugin: e => e.cmd === messagingConstants.messageType.UserConfigUpdate
  };
  require.r(exports);
  require.d(exports, {
    userConfigUpdateCmdPluginMatcher: function () {
      return r;
    }
  });
}