// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Renamed variable 'r' to 'chatActionSymbols'
// - Resolved require(696389) to 'chat-action-symbols'
// - Updated imported property 'M' to 'fetchAnswerSymbol' (module 696389)
// - Updated imported property 'X' to 'queryBroadcastSym' (module 696389)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 448814
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var chatActionSymbols = require("chat-action-symbols") /*id: 696389*/;
  let o = {
    pluginIdentifier: chatActionSymbols.fetchAnswerSymbol,
    matchPlugin: e => e.cmd === messagingConstants.messageType.FetchAnswer
  };
  let a = {
    pluginIdentifier: chatActionSymbols.queryBroadcastSym,
    matchPlugin: e => e.cmd === messagingConstants.messageType.QueryBroadcast
  };
  require.r(exports);
  require.d(exports, {
    FetchAnswerCmdPluginMatcher: function () {
      return o;
    },
    QueryBroadcastCmdPluginMatcher: function () {
      return a;
    }
  });
}