// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Renamed variable 'r' to 'taskStatusConstants_1'
// - Resolved require(324746) to 'task-status-constants_1'
// - Resolved require(768228) to 'super-task-plugin-symbol'
// - Updated imported property 'R' to 'superTaskPluginKey' (module 768228)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// - Updated imported property 'Ng' to 'errorCode' (module 324746)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 670509
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var taskStatusConstants_1 = require("task-status-constants_1") /*id: 324746*/;
  let o = {
    pluginIdentifier: require("super-task-plugin-symbol") /*id: 768228*/.superTaskPluginKey,
    matchPlugin: e => e.cmd === messagingConstants.messageType.SuperTaskFinished || e.cmd === messagingConstants.messageType.SuperTaskNeedAskHuman || e.cmd === messagingConstants.messageType.SuperTaskApplyTrialSuccess || e.cmd === taskStatusConstants_1.errorCode
  };
  require.r(exports);
  require.d(exports, {
    superTaskNotificationMessageCmdPluginMatcher: function () {
      return o;
    }
  });
}