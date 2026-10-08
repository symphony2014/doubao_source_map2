// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'AsyncSkillReceiveMessageAction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 169033
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var deepThinkingContainer = require("deep-thinking-container") /*id: 210562*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var skillMessageProcessor = require("skill-message-processor") /*id: 397273*/;
  var messageErrorHandler = require("message-error-handler") /*id: 36156*/;
  var useElementMountMonitor = require("use-element-mount-monitor") /*id: 316563*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    let {
      message: h,
      searchType: _,
      searchReferenceData: b,
      hidden: y = false,
      isShare: w = false,
      onTrackEvent: k,
      customRenderSearchSideBarBtn: x
    } = e;
    let E = skillMessageProcessor.thinkBrokenFlag(h == null ? undefined : h.ext);
    let S = messageContentTypeAndStatusChecker.f8g(h) && !(h == null ? undefined : h.think_reason_is_hide);
    let C = chatMessageStatusCheck.isMessageFinished(h);
    let T = messageContentTypeAndStatusChecker.vlk(h);
    let I = reactCoreLibraryReexport.useRef(null);
    let R = !!(h == null ? undefined : h.content_obj?.think) && !!(h == null ? undefined : h.content_obj?.text) && !E || C;
    let {
      isLoadingInThinking: j,
      loadingTitle: N
    } = reactCoreLibraryReexport.useMemo(() => {
      var t;
      let i = false;
      let r = "";
      let {
        text: o = ""
      } = (h == null ? undefined : h.loading_state?.current_state) ?? {};
      return {
        isLoadingInThinking: i = h != null && (t = h.loading_state) !== null && t !== undefined && !!t.in_loading && !E && !T,
        loadingTitle: o
      };
    }, [h == null ? undefined : h.loading_state?.current_state, E]);
    useElementMountMonitor.useElementMountMonitor({
      enable: !!S,
      getElement: () => I.current,
      checkMessageShowError: e => aiChatSourceExtractor.validateThinkUI(e),
      onError: e => messageErrorHandler.handleMessageShowError({
        ...e,
        message: h
      })
    });
    if (y) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(deepThinkingContainer.ThinkingContainer, {
        ref: I,
        meta: h == null ? undefined : h.meta_infos,
        searchType: _,
        messageReplyId: h == null ? undefined : h.reply_id,
        conversationId: h == null ? undefined : h.conversation_id,
        forceCloseCanvas: true,
        isThinkingFinished: R,
        isThinkingBroken: E,
        thinkExpandStatus: !w,
        options: {
          isInSearchLoading: j,
          loadingTitle: N
        },
        isShare: w,
        onTrackEvent: k,
        references: b == null ? undefined : b.search_result,
        messageId: h == null ? undefined : h.message_id,
        botId: h == null ? undefined : h.bot_id,
        skillType: h == null ? undefined : h.skill?.skill_type_no_default,
        skillId: h == null ? undefined : h.skill?.skill_id_no_default,
        content: (h == null ? undefined : h.content_obj?.think) || "",
        messageText: (h == null ? undefined : h.content_obj?.text) || "",
        customRenderSearchSideBarBtn: x
      });
    }
  };
  require.d(exports, {
    AsyncSkillReceiveMessageAction: function () {
      return v;
    }
  });
}