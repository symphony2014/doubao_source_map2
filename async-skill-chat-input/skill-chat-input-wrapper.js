// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'ChatInputWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 137475
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var conversationRateLimit = require("conversation-rate-limit") /*id: 688086*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var messageBreakHandler = require("message-break-handler") /*id: 874388*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatCanvasParamsHook = require("chat-canvas-params-hook") /*id: 818792*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatInputStatusHooks = require("chat-input-status-hooks") /*id: 740377*/;
  var chatInputActionButtons = require("chat-input-action-buttons") /*id: 124989*/;
  var skillChatInputBar = require("skill-chat-input-bar") /*id: 543454*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function S(e) {
    let {
      disableToSend: t,
      onClickSendButton: n,
      onClickDisabledSendButton: S,
      disableDebounce: E = false,
      useV3: x = false,
      ...k
    } = e;
    let T = i18nTranslationUtils.useTranslationWithFallback();
    let P = chatViewCoreSelectors.useChatId();
    let C = chatStoreManager.useStoreSelector("chatInputStore", e => P ? e.activeSkillTypeMap[P] : undefined);
    let {
      isDisabled: O
    } = conversationRateLimit.useConvDisabled();
    let N = chatInputStatusHooks.useChatInputStatus();
    let I = chatInputStatusHooks.useChatInputIsBusy();
    let A = t || N === chatStatusActionTypes.chatStatusTypes.Sending || N === chatStatusActionTypes.chatStatusTypes.Receiving;
    let R = chatCanvasParamsHook.useCanvasParams();
    let {
      run: j
    } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "send_button_click"
      });
      if (n != null) {
        n();
      }
    }, {
      wait: !E * 300,
      leading: true,
      trailing: false
    });
    let {
      run: M
    } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
      let e = {};
      try {
        let {
          pageFinish: t,
          pageInteractive: n,
          pageVisible: i,
          businessInit: r
        } = chatStoreManager.getStoreState("flowWebLayoutStore");
        e.page_visible = i ? "1" : "0";
        e.page_interactive = n ? "1" : "0";
        e.page_finish = t ? "1" : "0";
        e.business_init = r ? "1" : "0";
        e.is_disabled = O ? "1" : "0";
      } catch {}
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "send_button_disabled_click",
        meta: e
      });
      if (S != null) {
        S();
      }
    }, {
      wait: !E * 300,
      leading: true,
      trailing: false
    });
    let {
      run: L
    } = useDebouncedCallbackHook_1.useDebouncedCallback(async () => {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "local_break_button_click"
      });
      let e = await chatIocServiceLoaderHook.loadServiceAsync("chatInputService");
      if ((await (e == null ? undefined : e.emitBeforeBreakMessage())) === false) {
        loggerServiceCore.defaultLogger.persist.warning({
          eventName: "local_break_button_interrupt"
        });
        return;
      }
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "local_break_button_break_message"
      });
      let t = conversationMessageUtils_1.getAvailableMessage(chatMessageStoreFactory.createMessageStore.getState(), P || "");
      let n = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      teaAnalyticsEventTracker.trackEvent("break_message", {
        ...(n == null ? undefined : n.getCanvasTeaParams()),
        message_id: (t == null ? undefined : t.message_id) || "",
        reply_id: (t == null ? undefined : t.reply_id) || "",
        conversation_id: P || "",
        section_id: (t == null ? undefined : t.section_id) || "",
        bot_id: chatConversationBotId.getConversationBotId(P),
        skill_id: (C == null ? undefined : C.toString()) || null,
        skill_name: skillTypeMappings.getSkillName(C) || null,
        click_from: "click_break_message",
        scene: "chat_enter_bar",
        ...R
      });
      messageBreakHandler.handleBrokenMessage(chatMessageStoreFactory.createMessageStore, P || "");
      if (P) {
        chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => e == null ? undefined : e.updateSendMessageStatus(P, chatStatusActionTypes.chatStatusTypes.Default));
      }
    }, {
      wait: !E * 300,
      leading: true,
      trailing: false
    });
    let D = x ? chatInputActionButtons.ChatInputActions : skillChatInputBar.SkillChatInputBar;
    return reactJsxRuntimeCoreReexport.jsx(D, {
      breakBtnVisible: I,
      disableToSend: A,
      onClickBreakButton: L,
      breakBtnHoverText: T("input_box_stop_generating_tooltip"),
      onClickDisabledSendButton: M,
      onClickSendButton: j,
      onWrapperClick: () => {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "send_and_break_button_click",
          meta: {
            break_btn_visible: I,
            send_message_status: N,
            disable_to_send: A,
            disable_to_send_from_props: t,
            hide_send_and_break_btn: k.hideSendAndBreakBtn,
            small: k.small,
            chat_id: P,
            skill_type: C || "generic"
          }
        });
      },
      ...k
    });
  }
  require.d(exports, {
    ChatInputWrapper: function () {
      return S;
    }
  });
}