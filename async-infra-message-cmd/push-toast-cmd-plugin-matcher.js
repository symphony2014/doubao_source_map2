// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(391652) to 'push-toast-message-cmd-plugin_1'
// - Updated imported property 'Q' to 'pushToastCmdPlugin' (module 391652)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 300688
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("push-toast-message-cmd-plugin_1") /*id: 391652*/.pushToastCmdPlugin,
    matchPlugin: e => e.cmd === messagingConstants.messageType.PushToast
  };
  require.r(exports);
  require.d(exports, {
    pushToastMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}