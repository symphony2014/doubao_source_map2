// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'renderChatMessage'
// - Renamed export 'd' to 'renderSharedChatMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 277042
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var deepThinkingContainer = require("deep-thinking-container") /*id: 210562*/;
  var codeRunPreviewConfig = require("code-run-preview-config") /*id: 650100*/;
  var receiveMessageTipsRender = require("receive-message-tips-render") /*id: 436992*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var skillMessageProcessor = require("skill-message-processor") /*id: 397273*/;
  var chatMessageContentRenderer_1 = require("chat-message-content-renderer_1") /*id: 783136*/;
  var asyncSkillContentBlock_5 = require("async-skill-content-block_5") /*id: 837193*/;
  var chatThemeStyleConfig = require("chat-theme-style-config") /*id: 400045*/;
  var chatCodeInterpreterUi = require("chat-code-interpreter-ui") /*id: 741563*/;
  var messageErrorHandler = require("message-error-handler") /*id: 36156*/;
  var useElementMountMonitor = require("use-element-mount-monitor") /*id: 316563*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var codeInterpreterResourceUi = require("code-interpreter-resource-ui") /*id: 36868*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let j = e => {
    var I;
    let {
      ref: W,
      inView: F,
      message: M,
      messageBlockMeta: A,
      messageBlockText: Z,
      messageBlockTextFinish: B,
      messageBlockTextBroken: O,
      imageOptions: D,
      customRenderOptions: L,
      showRiskTips: z = false
    } = e;
    let V = messageContentTypeAndStatusChecker.f8g(M);
    let H = chatMessageStatusCheck.isMessageFinished(M);
    let X = V && !(M == null ? undefined : M.think_reason_is_hide);
    let J = messageContentTypeAndStatusChecker.vlk(M);
    let U = !!Z || (M == null ? undefined : M.content_obj?.text) !== undefined;
    let K = skillMessageProcessor.thinkBrokenFlag(M == null ? undefined : M.ext);
    let q = !!(M == null ? undefined : M.content_obj?.think) && !!(M == null ? undefined : M.content_obj?.text) && !K || H;
    let {
      isLoadingInThinking: Q,
      loadingTitle: G
    } = reactCoreLibraryReexport.useMemo(() => {
      var t;
      let i = false;
      let l = "";
      let {
        text: r = ""
      } = (M == null ? undefined : M.loading_state?.current_state) ?? {};
      return {
        isLoadingInThinking: i = M != null && (t = M.loading_state) !== null && t !== undefined && !!t.in_loading && !K && !J,
        loadingTitle: r
      };
    }, [M == null ? undefined : M.loading_state?.current_state, K]);
    let Y = reactCoreLibraryReexport.useRef(null);
    useElementMountMonitor.useElementMountMonitor({
      getElement: () => Y.current,
      enable: !!X,
      checkMessageShowError: e => aiChatSourceExtractor.validateThinkUI(e),
      onError: e => messageErrorHandler.handleMessageShowError({
        ...e,
        message: M,
        from: "generic_receive_deep_thinking"
      })
    });
    let ee = codeInterpreterResourceUi.useCiResourceUi({
      bizMessage: M
    });
    let et = chatCodeInterpreterUi.useCodeInterpreterUI(Z || (M == null ? undefined : M.content_obj?.text));
    let {
      showRun: en
    } = codeRunPreviewConfig.useRunPreviewConfig();
    let ei = reactCoreLibraryReexport.useMemo(() => {
      let t = deepCloneWrapper_1.deepClone(L) ?? {};
      return throttledDeepCloneUtil.throttledDeepClone({
        getCodebarConfig: et,
        customSlots: ee
      }, t, {
        customSlotsProps: {
          CodeBlock: {
            showRun: en
          }
        }
      });
    }, [L, et, ee]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [X && reactJsxRuntimeCoreReexport.jsx(deepThinkingContainer.ThinkingContainer, {
        ref: Y,
        meta: M == null ? undefined : M.meta_infos,
        isThinkingFinished: q,
        isThinkingBroken: K,
        thinkExpandStatus: true,
        content: (M == null ? undefined : M.content_obj?.think) || "",
        onTrackEvent: (e, t) => {
          if (!(M == null ? undefined : M.conversation_id)) {
            return;
          }
          let r = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), M == null ? undefined : M.conversation_id, {
            isLocalMessage: false,
            messageId: (M == null ? undefined : M.reply_id) ?? ""
          });
          teaAnalyticsEventTracker.trackEvent(e, {
            bot_id: M == null ? undefined : M.bot_id,
            message_id: String(M == null ? undefined : M.message_id),
            chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", M == null ? undefined : M.conversation_id),
            conversation_id: M == null ? undefined : M.conversation_id,
            conversation_type: chatConversationSelectorUtils.getConversationType(M == null ? undefined : M.conversation_id),
            skill_id: r == null ? undefined : r.skill?.skill_id_no_default,
            skill_name: skillTypeMappings.getSkillName(r == null ? undefined : r.skill?.skill_type_no_default),
            ...t
          });
        },
        options: {
          isInSearchLoading: Q,
          loadingTitle: G
        },
        messageId: M == null ? undefined : M.message_id,
        botId: M == null ? undefined : M.bot_id,
        skillType: M == null ? undefined : M.skill?.skill_type_no_default,
        skillId: M == null ? undefined : M.skill?.skill_id_no_default,
        conversationId: M == null ? undefined : M.conversation_id,
        messageText: (M == null ? undefined : M.content_obj?.text) || ""
      }), U && reactJsxRuntimeCoreReexport.jsx(chatMessageContentRenderer_1.ChatMessageContentRenderer, {
        ref: W,
        inView: F,
        messageBlockText: Z,
        messageBlockMeta: A,
        messageBlockTextFinish: B,
        messageBlockTextBroken: O,
        message: M,
        imageOptions: D,
        customRenderOptions: ei
      }), z && (chatMessageStatusCheck.isMessageFinished(M) || messageContentTypeAndStatusChecker.vlk(M)) ? reactJsxRuntimeCoreReexport.jsx(receiveMessageTipsRender.MessageTipsRender, {
        jsonString: (I = M.verbose) === null || I === undefined ? undefined : I.extra?.risk_tips
      }) : null]
    });
  };
  let N = e => {
    var k;
    let {
      ref: y,
      inView: x,
      theme: w = "samantha",
      message: S,
      messageBlockMeta: R,
      messageBlockText: $,
      messageBlockTextFinish: j,
      messageBlockTextBroken: N,
      imageOptions: E,
      customRenderOptions: P,
      showRiskTips: I = false
    } = e;
    let W = messageContentTypeAndStatusChecker.f8g(S);
    let F = chatMessageStatusCheck.isMessageFinished(S);
    let M = W && !(S == null ? undefined : S.think_reason_is_hide);
    let A = !!$ || (S == null ? undefined : S.content_obj?.text) !== undefined;
    let Z = skillMessageProcessor.thinkBrokenFlag(S == null ? undefined : S.ext);
    let B = !!(S == null ? undefined : S.content_obj?.think) && !!(S == null ? undefined : S.content_obj?.text) && !Z || F;
    let O = chatCodeInterpreterUi.useCodeInterpreterUI($ || (S == null ? undefined : S.content_obj?.text));
    let {
      customSlots: D,
      ...L
    } = P || {};
    let z = codeInterpreterResourceUi.useCiResourceUi({
      bizMessage: S
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a(chatThemeStyleConfig.chatThemeConfig[w]?.receiveClassNames),
      style: chatThemeStyleConfig.chatThemeConfig[w].cssVar,
      children: [M && reactJsxRuntimeCoreReexport.jsx(deepThinkingContainer.ThinkingContainer, {
        meta: S == null ? undefined : S.meta_infos,
        isThinkingFinished: B,
        isThinkingBroken: Z,
        thinkExpandStatus: false,
        isShare: true,
        content: (S == null ? undefined : S.content_obj?.think) || "",
        messageId: S == null ? undefined : S.message_id,
        botId: S == null ? undefined : S.bot_id,
        skillType: S == null ? undefined : S.skill?.skill_type_no_default,
        skillId: S == null ? undefined : S.skill?.skill_id_no_default,
        conversationId: S == null ? undefined : S.conversation_id,
        messageText: (S == null ? undefined : S.content_obj?.text) || ""
      }), A && reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_5.AsyncSkillContentBlock, {
        ref: y,
        inView: x,
        messageBlockText: $,
        messageBlockMeta: R,
        messageBlockTextFinish: j,
        messageBlockTextBroken: N,
        imageOptions: E,
        customRenderOptions: {
          getCodebarConfig: O,
          customSlots: {
            ...z,
            ...D
          },
          ...L
        },
        theme: w,
        message: S ?? e.message
      }), I && (chatMessageStatusCheck.isMessageFinished(S) || messageContentTypeAndStatusChecker.vlk(S)) ? reactJsxRuntimeCoreReexport.jsx(receiveMessageTipsRender.MessageTipsRender, {
        jsonString: (k = S.verbose) === null || k === undefined ? undefined : k.extra?.risk_tips
      }) : null]
    });
  };
  require.d(exports, {
    renderChatMessage: function () {
      return j;
    },
    renderSharedChatMessage: function () {
      return N;
    }
  });
}