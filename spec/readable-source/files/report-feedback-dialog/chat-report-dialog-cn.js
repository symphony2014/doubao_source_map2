// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 'n' to 'isWorkspaceMode'
// - Resolved require(799020) to 'is-workspace-mode'
// - Renamed variable 'a' to 'debugTokenGenerator'
// - Resolved require(419751) to 'debug-token-generator'
// - Renamed variable 'l' to 'feedbackModalBase'
// - Resolved require(462416) to 'feedback-modal-base'
// - Renamed variable 'd' to 'reportEntityHandler'
// - Resolved require(66345) to 'report-entity-handler'
// - Renamed variable 's' to 'chatFeedbackReportHooks'
// - Resolved require(952134) to 'chat-feedback-report-hooks'
// - Renamed variable '_' to 'chatMessageShareSelectStore'
// - Resolved require(764401) to 'chat-message-share-select-store'
// - Renamed variable 'c' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'u' to 'chatConversationSelectorUtils'
// - Resolved require(166172) to 'chat-conversation-selector-utils'
// - Renamed variable 'v' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'p' to 'chatContextUtil'
// - Resolved require(491849) to 'chat-context-util'
// - Renamed variable 'f' to 'chatToastFactoryHook'
// - Resolved require(219785) to 'chat-toast-factory-hook'
// - Renamed variable 'b' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'm' to 'chatAiConstants'
// - Resolved require(447912) to 'chat-ai-constants'
// - Renamed variable 'k' to 'saveThreadShareInfo'
// - Resolved require(601320) to 'save-thread-share-info'
// - Renamed variable 'g' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'R' to 'useChatContext' (module 491849)
// - Updated imported property 'Cr' to 'useReportOptions' (module 952134)
// - Updated imported property 'q' to 'getConversationThreadId' (module 166172)
// - Updated imported property 'p' to 'useToastFactory' (module 219785)
// - Updated imported property 'y' to 'isWorkspaceMode' (module 799020)
// - Updated imported property 'M7' to 'workspaceMode' (module 447912)
// - Updated imported property 'p' to 'chatMessageShareSelectStore' (module 764401)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'n' to 'createReportHandler' (module 66345)
// - Updated imported property 'w' to 'saveThreadShareInfo' (module 601320)
// - Updated imported property 't' to 'generateDebugTokens' (module 419751)
// - Updated imported property 'E' to 'DebugActionType' (module 419751)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43303.e49d7dff.js
         * chunkId: 43303
         * moduleId: 83515
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var isWorkspaceMode = require("is-workspace-mode") /*id: 799020*/;
  var debugTokenGenerator = require("debug-token-generator") /*id: 419751*/;
  var feedbackModalBase = require("feedback-modal-base") /*id: 462416*/;
  var reportEntityHandler = require("report-entity-handler") /*id: 66345*/;
  var chatFeedbackReportHooks = require("chat-feedback-report-hooks") /*id: 952134*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var saveThreadShareInfo = require("save-thread-share-info") /*id: 601320*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      conversationId: t,
      visible: o,
      onHide: h
    } = e;
    let C = i18nTranslationUtils.useTranslationWithFallback();
    let {
      origin: y,
      locationState: w
    } = chatContextUtil.useChatContext();
    let {
      messagePresetOptions: S,
      reloadPresetOptions: M
    } = chatFeedbackReportHooks.useReportOptions();
    let x = chatConversationSelectorUtils.getConversationThreadId(t);
    let I = chatToastFactoryHook.useToastFactory();
    let D = isWorkspaceMode.isWorkspaceMode();
    let P = reactCoreLibraryReexport.useMemo(() => D ? chatAiConstants.workspaceMode.Workspace : chatAiConstants.workspaceMode.Default, [D]);
    let {
      shareToken: B,
      preShareId: O,
      shareType: A,
      messageIndexList: F,
      exitSelectMode: T,
      findMessageByIndex: L
    } = chatMessageShareSelectStore.chatMessageShareSelectStore(e => ({
      shareToken: e.shareToken,
      preShareId: e.preShareId,
      messageIndexList: e.messageIndexList,
      shareType: e.shareType,
      shareVisibility: e.preShareVisibility,
      exitSelectMode: e.exitSelectMode,
      findMessageByIndex: e.findMessageByIndex
    }), deepEqualityUtil.deepEqual);
    let N = reactCoreLibraryReexport.useMemo(() => F == null ? undefined : F.map(e => L({
      conversationId: t,
      state: chatMessageStoreFactory.createMessageStore.getState(),
      messageIndex: e
    })).filter(e => !!e), [F]);
    let R = N == null ? undefined : N[N.length - 1];
    let E = chatFeedStoreFactory.useFeedStore(e => {
      return Number(e.lastMessageIndexMap[t]?.message_index);
    }, deepEqualityUtil.deepEqual);
    let q = reportEntityHandler.createReportHandler({
      entityId: (R == null ? undefined : R.message_id) || "",
      messageId: (R == null ? undefined : R.message_id) || "",
      conversationId: t,
      exts: {
        visible: true,
        click_from: undefined
      },
      batchMessageIds: N == null ? undefined : N.map(e => {
        return (e == null ? undefined : e.message_id) ?? "";
      }),
      onHide: () => {
        h();
      },
      locationState: w,
      t: C
    });
    let W = reactCoreLibraryReexport.useCallback(() => {
      h();
      T();
      let r = L({
        conversationId: t,
        state: chatMessageStoreFactory.createMessageStore.getState(),
        messageIndex: F == null ? undefined : F[F.length - 1]
      });
      let n = (r == null ? undefined : r.ext?.inner_log_id) || (r == null ? undefined : r.local_info?.log_id) || (r == null ? undefined : r.local_info?.async_task_log_id) || "";
      saveThreadShareInfo.saveThreadShareInfo({
        share_token: B,
        thread_id: x || "0",
        conversation_id: t,
        message_index_end: E,
        message_index_list: F,
        share_type: A,
        share_visibility: P
      });
      return `${C("feedback_share_report_copy_messages")}: ${y || location.origin}/thread/${O}
${C("feedback_share_report_copy_logID")}: ${n}`;
    }, [y, O, B, A, P, F, E, h, T]);
    let U = reactCoreLibraryReexport.useCallback(() => {
      let e = chatMessageStoreFactory.createMessageStore.getState();
      let o = F.map(o => L({
        conversationId: t,
        state: e,
        messageIndex: o
      })).filter(Boolean);
      debugTokenGenerator.generateDebugTokens(o, debugTokenGenerator.DebugActionType.Share);
    }, [F]);
    return reactJsxRuntimeCoreReexport.jsx(feedbackModalBase.FeedbackModalBase, {
      visible: o,
      title: C("feedback_submit_header"),
      okText: C("dislike_feedback_submit"),
      cancelText: C("create_bot_cancel"),
      hasCancel: true,
      presetOptions: S,
      placeholder: C("report_reason_text_placeholder"),
      maxTextCount: 500,
      okButtonDisable: true,
      onCopyDebugInfo: W,
      onSaveDebugToken: U,
      onHide: h,
      onSubmit: e => {
        q(e.type, e.content);
        I.success(C("report_success"));
        h();
        T();
      },
      showConfirm: true,
      reloadPresetOptions: M
    });
  };
  exports.default = h;
  require.r(exports);
  require.d(exports, {
    ReportDialogCn: function () {
      return h;
    }
  });
}