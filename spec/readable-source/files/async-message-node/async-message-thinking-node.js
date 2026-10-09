// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'ThinkingMessageNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 889095
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var deepThinkingContainer = require("deep-thinking-container") /*id: 210562*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var skillMessageProcessor = require("skill-message-processor") /*id: 397273*/;
  var messageErrorHandler = require("message-error-handler") /*id: 36156*/;
  var useElementMountMonitor = require("use-element-mount-monitor") /*id: 316563*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var searchReferenceDataProcessor = require("search-reference-data-processor") /*id: 175385*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      hidden: g = false,
      isShare: x,
      message: b
    } = e;
    if (!b) {
      return null;
    }
    let {
      message_id: y = "",
      conversation_id: w = "",
      reply_id: k = "",
      bot_id: S = ""
    } = b;
    let j = !g && !(b == null ? undefined : b.think_reason_is_hide) && (messageContentTypeAndStatusChecker.f8g(b) || messageContentTypeAndStatusChecker.Ptc(b));
    let R = messageContentTypeAndStatusChecker.vlk(b);
    let C = chatMessageStatusCheck.isMessageFinished(b);
    let {
      trackEvent: N
    } = searchReferenceDataProcessor.createEventTracker({
      message: b
    });
    let {
      meta_infos: T = []
    } = b || {};
    let {
      searchReferenceData: I
    } = searchReferenceDataProcessor.generateSearchReferenceData({
      message: b
    }) ?? {};
    let {
      searchReferenceData: E
    } = searchReferenceDataProcessor.processSearchReferences(b);
    let A = x ? E == null ? undefined : E.search_result : I == null ? undefined : I.search_result;
    let Z = skillMessageProcessor.thinkBrokenFlag(b == null ? undefined : b.ext);
    let P = b == null ? undefined : b.content_obj?.text;
    let F = b == null ? undefined : b.content_obj?.think;
    let M = isStringTypeCheck.isString(P) ? P : "";
    let O = isStringTypeCheck.isString(F) ? F : "";
    let L = functionInvoker.invoke(() => {
      var t;
      let r = false;
      let i = "";
      let {
        text: l = ""
      } = (b == null ? undefined : b.loading_state?.current_state) ?? {};
      return {
        isInSearchLoading: r = b != null && (t = b.loading_state) !== null && t !== undefined && !!t.in_loading && !Z && !R,
        loadingTitle: l
      };
    });
    let B = reactCoreLibraryReexport.useRef(null);
    useElementMountMonitor.useElementMountMonitor({
      enable: !!j,
      getElement: () => B.current,
      checkMessageShowError: e => aiChatSourceExtractor.validateThinkUI(e),
      onError: e => messageErrorHandler.handleMessageShowError({
        ...e,
        message: b,
        from: "write_receive_deep_thinking"
      })
    });
    if (j) {
      return reactJsxRuntimeCoreReexport.jsx(deepThinkingContainer.ThinkingContainer, {
        ref: B,
        meta: T,
        forceCloseCanvas: true,
        isShare: x,
        searchType: "writing",
        content: O,
        botId: S,
        options: L,
        references: A,
        messageText: M,
        thinkExpandStatus: true,
        onTrackEvent: N,
        conversationId: w,
        messageId: y,
        messageReplyId: k,
        isThinkingBroken: Z,
        isThinkingFinished: !!O && !!M && !Z || C,
        skillId: b == null ? undefined : b.skill?.skill_id_no_default,
        skillType: b == null ? undefined : b.skill?.skill_type_no_default
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    ThinkingMessageNode: function () {
      return _;
    }
  });
}