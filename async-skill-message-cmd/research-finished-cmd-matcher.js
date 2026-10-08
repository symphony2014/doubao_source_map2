// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(581384) to 'research-finished-cmd-symbol'
// - Updated imported property 'O' to 'researchFinishedCmd' (module 581384)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 603456
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("research-finished-cmd-symbol") /*id: 581384*/.researchFinishedCmd,
    matchPlugin: e => e.cmd === messagingConstants.messageType.DeepResearchFinished
  };
  require.r(exports);
  require.d(exports, {
    researchFinishedMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}