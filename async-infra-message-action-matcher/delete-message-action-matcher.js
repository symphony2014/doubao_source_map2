// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'checkLocalReplyMessage'
// - Resolved require(819927) to 'check-local-reply-message'
// - Renamed variable 'o' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'a' to 'localResourceCheck'
// - Resolved require(392448) to 'local-resource-check'
// - Resolved require(789134) to 'infra-send-message-delete-symbol'
// - Updated imported property 'x' to 'deleteMessageSymbol' (module 789134)
// - Updated imported property 'S' to 'isLocalReplyMessage' (module 819927)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'K' to 'isLocal' (module 392448)
// - Updated imported property 'qF' to 'isOnboardingMessage' (module 749637)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action-matcher.9ea34ed9.js
         * chunkId: 97792
         * moduleId: 740831
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var checkLocalReplyMessage = require("check-local-reply-message") /*id: 819927*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  let u = {
    area: "fold",
    actionType: "delete",
    pluginIdentifier: require("infra-send-message-delete-symbol") /*id: 789134*/.deleteMessageSymbol,
    matchPlugin: e => !messageContentTypeAndStatusChecker.FFC(e) && !checkLocalReplyMessage.isLocalReplyMessage(e) && chatMessageStatusCheck.isMessageFinished(e) && !localResourceCheck.isLocal(e) && !messageContentTypeAndStatusChecker.isOnboardingMessage(e)
  };
  require.r(exports);
  require.d(exports, {
    defaultDeleteSendMessageActionButtonPluginMatcher: function () {
      return u;
    }
  });
}