// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(249422) to 'super-task-action-symbol'
// - Updated imported property '$' to 'superTaskAction' (module 249422)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 708251
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let r = {
    area: "main",
    actionType: "copy",
    pluginIdentifier: require("super-task-action-symbol") /*id: 249422*/.superTaskAction,
    matchPlugin: e => messageContentTypeAndStatusChecker.fjb(e) && messageContentTypeAndStatusChecker.t4S(e) && !messageContentTypeAndStatusChecker.Jgn(e)
  };
  require.r(exports);
  require.d(exports, {
    superTaskCopyReceiveMessageActionButtonPluginMatcher: function () {
      return r;
    }
  });
}