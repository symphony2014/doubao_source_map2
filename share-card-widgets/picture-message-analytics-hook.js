// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'usePictureMessageAnalytics'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 283637
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let m = e => {
    let {
      inView: t,
      message: r
    } = e;
    let m = chatConversationSelectors.selectConversation(r.conversation_id || "");
    let g = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig;
    let v = messageContentTypeAndStatusChecker.qP0(r) ? r.content_obj : {
      data: []
    };
    let _ = (v == null ? undefined : v.data) || objectPathGetDefault.getObjectPathDefault(v, "image_list") || [];
    let y = (m == null ? undefined : m.name) || "";
    let {
      content_source: b = chatCoreConstants.MessageActions.Other
    } = r && conversationMessageUtils_1.findMessageById(chatMessageStoreFactory.createMessageStore.getState(), r.conversation_id || "", r.reply_id || "") || {};
    let {
      template_data: w
    } = (r == null ? undefined : r.ext) || {};
    let x = !!w;
    reactCoreLibraryReexport.useEffect(() => {
      if (t && !x) {
        teaAnalyticsEventTracker.trackEvent("picture_message_show", {
          bot_id: chatConversationBotId.getConversationBotId(r.conversation_id || ""),
          pic_id: _.map(e => e.key).filter(e => e).join(","),
          conversation_id: r.conversation_id || "",
          message_id: String(r == null ? undefined : r.message_id),
          request_id: _.map(e => e.request_id).join(","),
          original_content_source: b,
          is_onboarding: +!!x,
          chatType: ((g == null ? undefined : g.chatType) === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", r.conversation_id || "")) || "other_default",
          conversation_type: m == null ? undefined : m.conversation_type
        }, {
          key: `${r == null ? undefined : r.message_id}`
        });
      }
    }, [t, x]);
    return {
      imageList: _,
      message: r,
      imageFileName: y
    };
  };
  require.d(exports, {
    usePictureMessageAnalytics: function () {
      return m;
    }
  });
}