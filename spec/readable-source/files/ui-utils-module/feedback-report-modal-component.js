// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 'o' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 's' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'a' to 'chatConversationSelectorUtils'
// - Resolved require(166172) to 'chat-conversation-selector-utils'
// - Renamed variable 'l' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'c' to 'chatToastFactoryHook'
// - Resolved require(219785) to 'chat-toast-factory-hook'
// - Renamed variable 'u' to 'chatContextUtil'
// - Resolved require(491849) to 'chat-context-util'
// - Renamed variable 'd' to 'chatAiConstants'
// - Resolved require(447912) to 'chat-ai-constants'
// - Renamed variable 'p' to 'chatFeedbackReportHooks'
// - Resolved require(952134) to 'chat-feedback-report-hooks'
// - Renamed variable 'h' to 'feedbackModalBase'
// - Resolved require(462416) to 'feedback-modal-base'
// - Renamed variable 'f' to 'debugTokenGenerator'
// - Resolved require(419751) to 'debug-token-generator'
// - Renamed variable 'g' to 'aliceChatService'
// - Resolved require(756668) to 'alice-chat-service'
// - Renamed variable 'b' to 'reportEntityHandler'
// - Resolved require(66345) to 'report-entity-handler'
// - Renamed variable 'O' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'EM' to 'AliceChatService' (module 756668)
// - Updated imported property 'n' to 'createReportHandler' (module 66345)
// - Updated imported property 'p' to 'useToastFactory' (module 219785)
// - Updated imported property 'R' to 'useChatContext' (module 491849)
// - Updated imported property 'Cr' to 'useReportOptions' (module 952134)
// - Updated imported property 'q' to 'getConversationThreadId' (module 166172)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'PJ' to 'getMessageById' (module 393180)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'yw' to 'filterType' (module 447912)
// - Updated imported property 'M7' to 'workspaceMode' (module 447912)
// - Updated imported property 't' to 'generateDebugTokens' (module 419751)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83673.aaf50f49.js
         * chunkId: 83673
         * moduleId: 184064
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var chatFeedbackReportHooks = require("chat-feedback-report-hooks") /*id: 952134*/;
  var feedbackModalBase = require("feedback-modal-base") /*id: 462416*/;
  var debugTokenGenerator = require("debug-token-generator") /*id: 419751*/;
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  let m = async e => (await aliceChatService.AliceChatService()).saveThreadShareInfo(e);
  let y = async (e, t) => {
    try {
      let {
        data: n
      } = await (await aliceChatService.AliceChatService()).getThreadShareInfo(t ? {
        thread_id: t,
        conversation_id: e
      } : {
        conversation_id: e
      });
      return n;
    } catch (e) {
      return null;
    }
  };
  var reportEntityHandler = require("report-entity-handler") /*id: 66345*/;
  let v = {};
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var w = e => {
    let t = reportEntityHandler.createReportHandler(e);
    let n = chatToastFactoryHook.useToastFactory();
    let {
      origin: g
    } = chatContextUtil.useChatContext();
    let {
      botPresetOptions: w,
      messagePresetOptions: _,
      reloadPresetOptions: C
    } = chatFeedbackReportHooks.useReportOptions();
    let {
      conversationId: E,
      exts: x,
      messageId: S,
      onHide: T,
      t: P
    } = e;
    let j = chatConversationSelectorUtils.getConversationThreadId(E);
    let [k, R] = reactCoreLibraryReexport.useState();
    let [N, A] = reactCoreLibraryReexport.useState();
    let I = chatMessageStoreFactory.createMessageStore(e => S ? conversationMessageUtils_1.getMessageById(e, E, S) : null);
    let Z = chatFeedStoreFactory.useFeedStore(e => {
      return Number(e.lastMessageIndexMap[E]?.message_index || e.conversationMap[E]?.message_index);
    }, deepEqualityUtil.deepEqual);
    let M = reactCoreLibraryReexport.useCallback(() => {
      let o = Number(I == null ? undefined : I.index) ?? 1;
      m({
        share_token: k,
        thread_id: j || "0",
        conversation_id: E,
        message_index_end: Z,
        message_index_list: [o - 1, o],
        share_type: chatAiConstants.filterType.Conversation,
        share_visibility: chatAiConstants.workspaceMode.Default
      });
      let s = (I == null ? undefined : I.ext?.inner_log_id) || (I == null ? undefined : I.local_info?.log_id) || (I == null ? undefined : I.local_info?.async_task_log_id) || "";
      return `${P("feedback_share_report_copy_messages")}: ${v.shareOrigin ?? (g || location.origin)}/thread/${N}
${P("feedback_share_report_copy_logID")}: ${s}`;
    }, [g, I, N, k, E, Z, j]);
    let D = reactCoreLibraryReexport.useCallback(e => {
      if (I) {
        debugTokenGenerator.generateDebugTokens(I, e);
      }
    }, [I]);
    reactCoreLibraryReexport.useEffect(() => {
      y(E, j).then(e => {
        R(e == null ? undefined : e.share_token);
        A(e == null ? undefined : e.pre_share_id);
      });
    }, [E, j]);
    return reactJsxRuntimeCoreReexport.jsx(feedbackModalBase.FeedbackModalBase, {
      visible: x.visible,
      title: S ? P("feedback_submit_header") : P("bot_response_report"),
      okText: P("dislike_feedback_submit"),
      cancelText: P("create_bot_cancel"),
      hasCancel: true,
      presetOptions: S ? _ : w,
      placeholder: P("report_reason_text_placeholder"),
      maxTextCount: 500,
      okButtonDisable: true,
      onHide: T,
      onSubmit: e => {
        t(e.type, e.content);
        n.success(P("report_success"));
        T();
      },
      onCopyDebugInfo: M,
      onSaveDebugToken: D,
      showConfirm: !!S,
      reloadPresetOptions: C
    });
  };
  require.r(exports);
  require.d(exports, {
    default: function () {
      return w;
    }
  });
}