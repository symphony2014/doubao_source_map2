// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'imagePreviewHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 239861
         */
module.exports = function (module, exports, require) {
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var imagePreviewEventHandlerHook = require("image-preview-event-handler-hook") /*id: 810587*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let m = e => {
    let {
      conversationId: t,
      imageList: n,
      replyId: m,
      messageId: g,
      message: _
    } = e;
    let f = chatConversationSelectors.selectConversation(t);
    let b = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig;
    let {
      content_source: y = chatCoreConstants.MessageActions.Other
    } = conversationMessageUtils_1.findMessageById(chatMessageStoreFactory.createMessageStore.getState(), t, m) || {};
    let {
      imageEventCallbacks: k,
      renderImagePreview: w
    } = imagePreviewEventHandlerHook.useImagePreviewEvents({
      conversationId: t,
      messageId: g,
      chatType: chatSkillPinTypeDeterminer.determineSkillPinType("", t),
      conversationType: chatConversationSelectorUtils.getConversationType(t) || "",
      botId: chatConversationBotId.getConversationBotId(t) || ""
    }, n || [], y, {
      reportImageShow: false
    });
    return {
      imageEventCallbacks: k,
      onImageRender: e => {
        let {
          src: t
        } = e;
        if (t) {
          k.onImageRender(t);
        }
      },
      renderImagePreview: w,
      onImageClickTrackEvent: e => {
        var l;
        teaAnalyticsEventTracker.trackEvent("picture_message_click", {
          pic_id: e == null ? undefined : e.key,
          current_page: "chat",
          conversation_id: t,
          message_id: g,
          chatType: ((b == null ? undefined : b.chatType) === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", t)) || "other_default",
          conversation_type: f == null ? undefined : f.conversation_type
        }, {
          key: `${g}`
        });
        if ((_ == null ? undefined : _.skill?.skill_type) === chatAppEnums.SkillType.DesExtSkillSuperTask) {
          teaAnalyticsEventTracker.trackEvent("super_task_artifact_click", {
            super_task_id: _ == null ? undefined : _.async_task?.id,
            super_task_mode: (_ == null ? undefined : (l = _.verbose) === null || l === undefined ? undefined : l.super_task?.supertask_task_type) === "0" ? "search_task" : "complex_task",
            content_type: "pic"
          });
        }
      }
    };
  };
  require.d(exports, {
    imagePreviewHandler: function () {
      return m;
    }
  });
}