// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'chatLoadingMessageCheck'
// - Resolved require(572705) to 'chat-loading-message-check'
// - Renamed variable 'o' to 'chatReplyMessageCheck'
// - Resolved require(91305) to 'chat-reply-message-check'
// - Resolved require(625880) to 'chat-thinking-message-symbol'
// - Updated imported property 'E' to 'receiveThinkingKey' (module 625880)
// - Updated imported property 'R' to 'isLoadingMessage' (module 572705)
// - Updated imported property 's' to 'isReplyMessage' (module 91305)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 378145
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatLoadingMessageCheck = require("chat-loading-message-check") /*id: 572705*/;
  var chatReplyMessageCheck = require("chat-reply-message-check") /*id: 91305*/;
  let s = {
    pluginIdentifier: require("chat-thinking-message-symbol") /*id: 625880*/.receiveThinkingKey,
    matchPlugin: e => {
      let t = messageContentTypeAndStatusChecker.MFz(e) || messageContentTypeAndStatusChecker.f9R(e) || messageContentTypeAndStatusChecker.TjU(e) || messageContentTypeAndStatusChecker.qZZ(e);
      return chatLoadingMessageCheck.isLoadingMessage(e) && !t || chatReplyMessageCheck.isReplyMessage(e);
    }
  };
  require.r(exports);
  require.d(exports, {
    thinkingReceiveMessageBoxPluginMatcher: function () {
      return s;
    }
  });
}