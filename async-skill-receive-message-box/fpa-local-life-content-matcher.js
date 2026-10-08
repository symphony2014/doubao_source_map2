// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'markdownMetaRenderUtils'
// - Resolved require(80625) to 'markdown-meta-render-utils'
// - Renamed variable 'a' to 'extractArtifactFromChatMessage'
// - Resolved require(117895) to 'extract-artifact-from-chat-message'
// - Resolved require(66267) to 'chat-receive-content-symbol'
// - Updated imported property 'H' to 'receiveContentSymbol' (module 66267)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// - Updated imported property 'le' to 'extractArtifactFromMessage' (module 117895)
// - Updated imported property '_B' to 'filterMetaObjects' (module 80625)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 642829
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var markdownMetaRenderUtils = require("markdown-meta-render-utils") /*id: 80625*/;
  var extractArtifactFromChatMessage = require("extract-artifact-from-chat-message") /*id: 117895*/;
  let l = {
    pluginIdentifier: require("chat-receive-content-symbol") /*id: 66267*/.receiveContentSymbol,
    matchPlugin: e => {
      if (botConversationTypeCheck.isBotConversation(e)) {
        return false;
      }
      let {
        intention: l
      } = extractArtifactFromChatMessage.extractArtifactFromMessage(e) ?? {};
      let s = markdownMetaRenderUtils.filterMetaObjects((e == null ? undefined : e.meta_infos) ?? []);
      let c = s.filter(e => {
        return e.data?.card_type === "applet";
      });
      let d = s.filter(e => {
        return e.data?.card_type === "image-group";
      });
      return messageContentTypeAndStatusChecker.G7Q(e) && !messageContentTypeAndStatusChecker.H6e(e) && !messageContentTypeAndStatusChecker.ihq(e) && l !== "meeting_minutes" && l !== "write" && (c.length !== 0 || d.length !== 0);
    }
  };
  require.r(exports);
  require.d(exports, {
    receiveFPALocallifeMixContentMatcher: function () {
      return l;
    }
  });
}