// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(962066) to 'nested-msg-state-change-plugin'
// - Updated imported property 'Z' to 'nestedMsgStateCmd' (module 962066)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 829807
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("nested-msg-state-change-plugin") /*id: 962066*/.nestedMsgStateCmd,
    matchPlugin: e => e.cmd === messagingConstants.messageType.NestedMessageStateChange
  };
  require.r(exports);
  require.d(exports, {
    nestedMessageStateChangeMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}