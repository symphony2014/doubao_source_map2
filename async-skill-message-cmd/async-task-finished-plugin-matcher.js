// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(580425) to 'async-task-finished-symbol'
// - Updated imported property '$' to 'getAsyncTaskSymbol' (module 580425)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 571620
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("async-task-finished-symbol") /*id: 580425*/.getAsyncTaskSymbol,
    matchPlugin: e => e.cmd === messagingConstants.messageType.CodeAssistantAsyncTaskFinished
  };
  require.r(exports);
  require.d(exports, {
    asyncTaskFinishedMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}