// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'handleCopyMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 13316
         */
module.exports = function (module, exports, require) {
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var l = clipboardCopyHelper;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  var extractCollectionIdUtil = require("extract-collection-id-util") /*id: 740633*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var viewReportContextHook = require("view-report-context-hook") /*id: 515049*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var htmlCopyAndCleanupUtils = require("html-copy-and-cleanup-utils") /*id: 433842*/;
  let k = (e, t, n) => {
    let {
      locationState: i
    } = chatContextUtil.useChatContext();
    let {
      chatInputRef: k
    } = chatRefsContext.useChatRefs();
    let {
      collectionType: y,
      collectionId: x
    } = viewReportContextHook.useViewContext();
    let w = e.conversation_id || "";
    let {
      botInfo: S,
      conversation: R
    } = chatSkillPinTypeDeterminer.getConversationBotInfo(w);
    let $ = (i == null ? undefined : i.enter_from) === "bot_discover";
    return async () => {
      var C;
      let T = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      let j = (T == null ? undefined : T.getCanvasTeaParams()) || {};
      let N = t.match(/<escapeShell type="renderer" id=".*?">\s*```html([\s\S]*?)```\s*<\/escapeShell>/g);
      let E = t.match(/<escapeShell type="interpreter" id=".*?">([\s\S]*?)<\/escapeShell>/g);
      if (N == null ? undefined : N.length) {
        htmlCopyAndCleanupUtils.copyHtmlToClipboard(t);
      } else if (E == null ? undefined : E.length) {
        htmlCopyAndCleanupUtils.cleanAndCopyText(t);
      } else {
        l(t || "");
      }
      if (!userAgentDeviceDetector.isMobileOrIOS() && (C = k.current) !== null && C !== undefined) {
        C.focus();
      }
      let P = chatConversationBotId.getConversationBotId(w);
      let I = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), e.conversation_id || "", {
        isLocalMessage: false,
        messageId: e.reply_id || ""
      });
      let W = await chatIocServiceLoaderHook.loadServiceAsync("chatBotService");
      teaAnalyticsEventTracker.trackEvent("copy", {
        message_id: e == null ? undefined : e.message_id,
        user_type: messageContentTypeAndStatusChecker.Yns(e) ? "user" : "bot",
        bot_id: P,
        user_id: $ ? chatUserInfoActions.getUserIdStr() : undefined,
        click_from: conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), w, e.message_id || "") ? "answer" : "long_press_message",
        req_id: $ && P ? W == null ? undefined : W.getBotIdToRequestIdMap()?.[P] : undefined,
        chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", w, S),
        recommend_from: $ ? "bot_list_discover" : undefined,
        if_regenerated: +!!localRegenCheck.shouldRegenerate(e),
        collection_id: extractCollectionIdUtil.getCollectionId(I).collection_id,
        skill_id: e == null ? undefined : e.skill?.skill_id_no_default,
        copy_type: "all",
        copy_content_type: "message",
        tenant_id: (R == null ? undefined : R.tenant_id) || "0",
        llm_intention: (e == null ? undefined : e.ext?.llm_intention) || "",
        llm_intention_detail: (e == null ? undefined : e.ext?.llm_intention_detail) || "",
        ...(x ? {
          collect_id: x,
          collect_type: y
        } : {}),
        ...j,
        ...n
      });
    };
  };
  require.d(exports, {
    handleCopyMessage: function () {
      return k;
    }
  });
}