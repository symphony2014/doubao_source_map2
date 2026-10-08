// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'i' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'a' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'u' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Resolved require(235508) to 'chat-download-banner-id'
// - Updated imported property 'z' to 'downloadBannerId' (module 235508)
// - Updated imported property 'Jp' to 'checkMessageIdMatch' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'M7' to 'selectUserInfoSuccess' (module 480327)
// - Updated imported property 'Po' to 'isUserInfoLoading' (module 480327)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom-matcher.8807d104.js
         * chunkId: 46777
         * moduleId: 711925
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  let o = {
    pluginIdentifier: require("chat-download-banner-id") /*id: 235508*/.downloadBannerId,
    matchPlugin(e) {
      let t = conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), e.conversation_id || "", e.message_id || "");
      let n = userInfoStatusSelectors.selectUserInfoSuccess() && !userInfoStatusSelectors.isUserInfoLoading();
      let o = !messageContentTypeAndStatusChecker.ey$(e) && !messageContentTypeAndStatusChecker.Ouv(e);
      return t && !n && o && !messageContentTypeAndStatusChecker.u2S(e) && !messageContentTypeAndStatusChecker.LRw(e) && !messageContentTypeAndStatusChecker.yKE(e);
    }
  };
  require.r(exports);
  require.d(exports, {
    downloadBannerInChatReceiveMessageBottomPluginMatcher: function () {
      return o;
    }
  });
}