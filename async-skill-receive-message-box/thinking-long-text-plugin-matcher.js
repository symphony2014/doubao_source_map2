// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatLoadingMessageCheck'
// - Resolved require(572705) to 'chat-loading-message-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(545115) to 'chat-receive-thinking-symbol'
// - Updated imported property 'q' to 'receiveThinkingSym' (module 545115)
// - Updated imported property 'R' to 'isLoadingMessage' (module 572705)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 613837
         */
module.exports = function (module, exports, require) {
  var chatLoadingMessageCheck = require("chat-loading-message-check") /*id: 572705*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let o = {
    pluginIdentifier: require("chat-receive-thinking-symbol") /*id: 545115*/.receiveThinkingSym,
    matchPlugin: e => chatLoadingMessageCheck.isLoadingMessage(e) && messageContentTypeAndStatusChecker.HRz(e)
  };
  require.r(exports);
  require.d(exports, {
    thinkingLongTextReceiveMessageBoxPluginMatcher: function () {
      return o;
    }
  });
}