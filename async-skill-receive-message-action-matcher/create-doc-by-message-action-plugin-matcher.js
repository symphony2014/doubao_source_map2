// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'r' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'a' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'chatLoadingMessageCheck'
// - Resolved require(572705) to 'chat-loading-message-check'
// - Renamed variable 'l' to 'meetingMinutesMessageMatcher'
// - Resolved require(103882) to 'meeting-minutes-message-matcher'
// - Renamed variable 'u' to 'chatMessageCreateDocSymbol'
// - Resolved require(233701) to 'chat-message-create-doc-symbol'
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// - Updated imported property 'J' to 'isMeetingMinutes' (module 103882)
// - Updated imported property 'R' to 'isLoadingMessage' (module 572705)
// - Updated imported property '_' to 'createDocByMessage' (module 233701)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 569604
         */
module.exports = function (module, exports, require) {
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatLoadingMessageCheck = require("chat-loading-message-check") /*id: 572705*/;
  var meetingMinutesMessageMatcher = require("meeting-minutes-message-matcher") /*id: 103882*/;
  let s = {};
  var chatMessageCreateDocSymbol = require("chat-message-create-doc-symbol") /*id: 233701*/;
  let d = e => {
    let t = [true, chatMessageStatusCheck.isMessageFinished(e), isCocoConversationChecker.isCocoConversation(e), messageContentTypeAndStatusChecker.G7Q(e) && !messageContentTypeAndStatusChecker.Jgn(e)];
    let n = [messageContentTypeAndStatusChecker.qqf(e) && messageContentTypeAndStatusChecker.D8H(e) && !meetingMinutesMessageMatcher.isMeetingMinutes(e), messageContentTypeAndStatusChecker.UD5(e), chatLoadingMessageCheck.isLoadingMessage(e), messageContentTypeAndStatusChecker.DhQ(e), messageContentTypeAndStatusChecker.DCy(e), messageContentTypeAndStatusChecker.vU5(e), messageContentTypeAndStatusChecker.C_i(e), messageContentTypeAndStatusChecker.RkI(e), messageContentTypeAndStatusChecker.qP0(e), messageContentTypeAndStatusChecker.dqg(e), messageContentTypeAndStatusChecker.nmA(e), messageContentTypeAndStatusChecker.Lyd(e), messageContentTypeAndStatusChecker.fjb(e), messageContentTypeAndStatusChecker.DPh(e), messageContentTypeAndStatusChecker.fdv(e), s.isHideAction];
    return t.every(Boolean) && !n.some(Boolean);
  };
  let c = {
    area: "fold",
    actionType: "create-doc-by-message",
    pluginIdentifier: chatMessageCreateDocSymbol.createDocByMessage,
    matchPlugin: e => d(e)
  };
  require.r(exports);
  require.d(exports, {
    createDocByMessageReceiveMessageActionButtonPluginMatcher: function () {
      return c;
    }
  });
}