// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(377362) to 'ppt-template-confirm-plugin-id'
// - Updated imported property 'F' to 'getCmdPluginSymbol' (module 377362)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 398124
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("ppt-template-confirm-plugin-id") /*id: 377362*/.getCmdPluginSymbol,
    matchPlugin: e => e.cmd === messagingConstants.messageType.SuperTaskSelectPPTTemplate
  };
  require.r(exports);
  require.d(exports, {
    pptTemplateNotificationCmdPluginMatcher: function () {
      return r;
    }
  });
}