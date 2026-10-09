// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(120094) to 'async-fetch-msg-cmd-plugin-id'
// - Updated imported property 'V' to 'asyncFetchMsgCmdId' (module 120094)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 768181
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("async-fetch-msg-cmd-plugin-id") /*id: 120094*/.asyncFetchMsgCmdId,
    matchPlugin: e => e.cmd === messagingConstants.messageType.MessageUpdate
  };
  require.r(exports);
  require.d(exports, {
    asyncFetchMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}