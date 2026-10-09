// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(998015) to 'expert-quota-limit-symbol'
// - Updated imported property 'x' to 'ExpertQuotaLimitPlugin' (module 998015)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 127733
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("expert-quota-limit-symbol") /*id: 998015*/.ExpertQuotaLimitPlugin,
    matchPlugin: e => e.cmd === messagingConstants.messageType.PushToast
  };
  require.r(exports);
  require.d(exports, {
    reachExpertQuotaLimitMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}