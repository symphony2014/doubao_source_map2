// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'arrayFirstElement'
// - Resolved require(255519) to 'array-first-element'
// - Renamed variable 'r' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'a' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'o' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'l' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 's' to 'messageAttachmentExtractor'
// - Resolved require(495014) to 'message-attachment-extractor'
// - Resolved require(374646) to 'chat-canvas-read-action'
// - Updated imported property 'n' to 'canvasReadAction' (module 374646)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'K9' to 'getMessageFromLink' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'Z' to 'getFirstElement' (module 255519)
// - Updated imported property 'u' to 'getPdfAttachments' (module 495014)
// - Updated imported property 'E' to 'getAttachmentLink' (module 495014)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 459428
         */
module.exports = function (module, exports, require) {
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var messageAttachmentExtractor = require("message-attachment-extractor") /*id: 495014*/;
  let u = {};
  let d = {
    area: "main",
    actionType: "canvas-read",
    pluginIdentifier: require("chat-canvas-read-action") /*id: 374646*/.canvasReadAction,
    matchPlugin: e => {
      let d = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig;
      if (u.disableCanvas || !e || !chatMessageStatusCheck.isMessageFinished(e)) {
        return false;
      }
      let {
        reply_id: c
      } = e ?? {};
      let v = c ? conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), e.conversation_id || "", {
        isLocalMessage: false,
        messageId: c
      }) : null;
      let g = (v && arrayFirstElement.getFirstElement(messageAttachmentExtractor.getPdfAttachments(v))) ?? null;
      let f = (v && messageAttachmentExtractor.getAttachmentLink(v)) ?? null;
      return !(d == null ? undefined : d.isImmersiveMode) && (!!g || !!f);
    }
  };
  require.r(exports);
  require.d(exports, {
    canvasReadReceiveMessageActionButtonPluginMatcher: function () {
      return d;
    }
  });
}