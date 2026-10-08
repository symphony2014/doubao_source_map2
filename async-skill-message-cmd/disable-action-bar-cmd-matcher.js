// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(717199) to 'disable-action-bar-cmd-symbol'
// - Updated imported property 'u' to 'disableActionBarCmd' (module 717199)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 687006
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("disable-action-bar-cmd-symbol") /*id: 717199*/.disableActionBarCmd,
    matchPlugin: e => e.cmd === messagingConstants.messageType.DisableActionBar
  };
  require.r(exports);
  require.d(exports, {
    disableActionBarMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}