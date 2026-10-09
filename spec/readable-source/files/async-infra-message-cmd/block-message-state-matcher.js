// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(238192) to 'block-message-state-plugin'
// - Updated imported property 'q' to 'blockMessageStateId' (module 238192)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 462462
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("block-message-state-plugin") /*id: 238192*/.blockMessageStateId,
    matchPlugin: e => e.cmd === messagingConstants.messageType.BlockMessageStateChange
  };
  require.r(exports);
  require.d(exports, {
    blockMessageStateChangeMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}