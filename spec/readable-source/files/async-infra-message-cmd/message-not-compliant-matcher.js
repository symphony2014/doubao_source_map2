// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(334377) to 'message-not-compliant-plugin'
// - Updated imported property 'J' to 'messageNotCompliant' (module 334377)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 365374
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("message-not-compliant-plugin") /*id: 334377*/.messageNotCompliant,
    matchPlugin: e => e.cmd === messagingConstants.messageType.MessageNotCompliant
  };
  require.r(exports);
  require.d(exports, {
    messageNotCompliantMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}