// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(326234) to 'chat-copy-code-block-action'
// - Updated imported property 'O' to 'copyCodeBlockAction' (module 326234)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 522581
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let r = {
    area: "main",
    actionType: "copy",
    pluginIdentifier: require("chat-copy-code-block-action") /*id: 326234*/.copyCodeBlockAction,
    matchPlugin: e => messageContentTypeAndStatusChecker.p_0(e)
  };
  require.r(exports);
  require.d(exports, {
    CodeBlockCopyReceiveMessageActionButtonPluginMatcher: function () {
      return r;
    }
  });
}