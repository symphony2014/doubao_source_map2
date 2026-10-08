// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(603539) to 'push-toast-message-cmd-plugin-symbol'
// - Updated imported property 'Q' to 'pushToastMessageCmdPluginSymbol' (module 603539)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 817957
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("push-toast-message-cmd-plugin-symbol") /*id: 603539*/.pushToastMessageCmdPluginSymbol,
    matchPlugin: e => e.cmd === messagingConstants.messageType.PushToast
  };
  require.r(exports);
  require.d(exports, {
    pushToastMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}