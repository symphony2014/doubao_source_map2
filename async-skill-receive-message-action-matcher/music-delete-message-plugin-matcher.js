// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'checkLocalReplyMessage'
// - Resolved require(819927) to 'check-local-reply-message'
// - Renamed variable 'a' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'o' to 'localResourceCheck'
// - Resolved require(392448) to 'local-resource-check'
// - Resolved require(236778) to 'music-delete-action-symbol'
// - Updated imported property 'P' to 'musicDeleteAction' (module 236778)
// - Updated imported property 'S' to 'isLocalReplyMessage' (module 819927)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'K' to 'isLocal' (module 392448)
// - Updated imported property 'qF' to 'isOnboardingMessage' (module 749637)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 698935
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var checkLocalReplyMessage = require("check-local-reply-message") /*id: 819927*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  let l = {
    area: "fold",
    actionType: "delete",
    pluginIdentifier: require("music-delete-action-symbol") /*id: 236778*/.musicDeleteAction,
    matchPlugin: e => messageContentTypeAndStatusChecker.vU5(e) && !messageContentTypeAndStatusChecker.FFC(e) && !checkLocalReplyMessage.isLocalReplyMessage(e) && chatMessageStatusCheck.isMessageFinished(e) && !localResourceCheck.isLocal(e) && !messageContentTypeAndStatusChecker.isOnboardingMessage(e)
  };
  require.r(exports);
  require.d(exports, {
    musicDeleteReceiveMessageActionButtonPluginMatcher: function () {
      return l;
    }
  });
}