// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(525809) to 'ppt-confirm-notification-cmd'
// - Updated imported property 'V' to 'PptConfirmCmdPlugin' (module 525809)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 99192
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("ppt-confirm-notification-cmd") /*id: 525809*/.PptConfirmCmdPlugin,
    matchPlugin: e => e.cmd === messagingConstants.messageType.SuperTaskModifyPPTOutline
  };
  require.r(exports);
  require.d(exports, {
    pptContentConfirmNotificationCmdPluginMatcher: function () {
      return r;
    }
  });
}