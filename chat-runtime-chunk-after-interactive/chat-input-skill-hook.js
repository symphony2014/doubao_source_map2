// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'useChatInputSkill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-guidance-page.b074653e.js
         * chunkId: 25336
         * moduleId: 913093
         */
module.exports = function (module, exports, require) {
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var chatAsrServiceManager = require("chat-asr-service-manager") /*id: 773565*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var messageBreakHandler = require("message-break-handler") /*id: 874388*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var aiSpaceQuoteUtils = require("ai-space-quote-utils") /*id: 577173*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var textLinkParser = require("text-link-parser") /*id: 266843*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatInputSkillSelectors = require("chat-input-skill-selectors") /*id: 627774*/;
  var chatGuestAccessControlHooks = require("chat-guest-access-control-hooks") /*id: 874237*/;
  var chatInputEventHandler = require("chat-input-event-handler") /*id: 144822*/;
  let E = () => Promise.resolve(true);
  let x = e => {
    let {
      chatId: t,
      chatType: n,
      disabled: x,
      trackParams: C,
      skill: I,
      reportParams: T,
      onBeforeSubmit: N = E
    } = e;
    let R = useLatestCallbackHook_1.useLatestCallback(N);
    let j = I.skill_type;
    let A = {
      skill_type: j,
      skill_type_str: skillTypeMappings.formatSkillId(j),
      skill_id: j ? j.toString() : null,
      ...T
    };
    let $ = i18nTranslationUtils.useTranslationWithFallback();
    let O = chatInputSkillSelectors.useActiveSkillType(t);
    let M = chatGuidanceSelectors.hasActiveSkill();
    let P = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let {
      onBeforeSendMessage: L
    } = chatGuestAccessControlHooks.useGuestMessageSendControl({
      source: j ? `send_message_${j}` : "send_message",
      eventName: "chat_input_guest_login",
      meta: {
        ...A
      },
      chatId: t,
      chatType: n,
      checkNewGuidanceAb: true,
      activeSkillType: O
    });
    let Z = async e => {
      await chatInputEventHandler.onKeyDown(e);
    };
    let D = async e => {
      let {
        files: t
      } = e.clipboardData;
      let n = e.clipboardData.getData("text");
      let i = n.trim();
      let r = textLinkParser.parseTextLinks(i);
      let a = r.length === 1 && r[0].type === textLinkParser.tokenTypes.link;
      await chatInputEventHandler.onPaste({
        event: e,
        trimText: i,
        text: n,
        files: t,
        isValidLink: a
      });
    };
    let F = useLatestCallbackHook_1.useLatestCallback(() => {
      chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
        if (e != null) {
          e.clearRefContents(t, {
            retainDisableRef: true
          });
        }
      });
    });
    let U = useLatestCallbackHook_1.useLatestCallback(async function () {
      var e;
      let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!(await (R == null ? undefined : R({
        reportParams: A
      }))) || !(await L({
        checkNewGuidanceAb: n.checkNewGuidanceAb
      }))) {
        return false;
      }
      let i = await chatInputEventHandler.onBeforeSendMessage();
      return (typeof i != "boolean" || !!i) && (((e = n.clearRefContent) === null || e === undefined || e) && F(), messageBreakHandler.handleBrokenMessage(chatMessageStoreFactory.createMessageStore, t || ""), true);
    });
    let W = useLatestCallbackHook_1.useLatestCallback(async e => {
      let {
        exitSkill: n = false
      } = e || {};
      await chatInputEventHandler.onMessageSendingEnd();
      chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => {
        if (O && !M && P) {
          if (e != null) {
            e.pinSkill(O);
          }
        }
        if (n) {
          chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(t);
        } else if (O) {
          chatStoreManager.getStoreState("chatInputStore").updateActiveSkillTypeMap(t, O, chatStatusActionTypes.chatActionTypes.AfterSkill);
        }
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "skill_input_send_keep_input",
          meta: {
            ...A,
            keep_input: n ? "0" : "1"
          }
        });
        if (e != null) {
          e.updateSelectedRecommendSkill();
        }
        if (e != null) {
          e.updateSendMessageStatus(t, chatStatusActionTypes.chatStatusTypes.Sending);
        }
      });
      chatAsrServiceManager.asrServiceManager.getAsrService().then(e => {
        if (e != null) {
          e.stopAsr();
        }
      });
    });
    let B = useLatestCallbackHook_1.useLatestCallback(debounceUtil_1_1.debounce(e => {
      teaAnalyticsEventTracker.trackEvent("input_bar_enter", {
        click_scene: "skills_search_bar",
        ...C,
        ...aiSpaceQuoteUtils.formatQuoteInfo(e)
      });
    }, 1000));
    let H = useLatestCallbackHook_1.useLatestCallback(e => teaAnalyticsEventTracker.trackEvent("input_bar_edit", {
      action: "cancel_quote",
      ...C,
      ...aiSpaceQuoteUtils.formatQuoteInfo(e)
    }));
    return reactUseChangedRef.useChangedRef({
      ...e,
      chatId: t,
      chatType: n,
      disabled: x,
      sendMessageHoverText: $("send_button_hover_text"),
      trackParams: C,
      onKeyDown: Z,
      onPaste: D,
      onBeforeSendMessage: U,
      onAfterSendMessage: W,
      debouncedReportFocus: B,
      removeRefContentEvent: H,
      reportParams: A
    }, deepEqualUtil_1.deepEqual);
  };
  require.d(exports, {
    useChatInputSkill: function () {
      return x;
    }
  });
}