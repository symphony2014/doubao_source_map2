// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'deepThinkingContainer'
// - Resolved require(210562) to 'deep-thinking-container'
// - Renamed variable 'o' to 'codeRunPreviewConfig'
// - Resolved require(650100) to 'code-run-preview-config'
// - Renamed variable 'a' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'l' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 's' to 'skillMessageProcessor'
// - Resolved require(397273) to 'skill-message-processor'
// - Renamed variable 'c' to 'chatMessageContentRenderer_1'
// - Resolved require(783136) to 'chat-message-content-renderer_1'
// - Renamed variable 'd' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'u' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable '_' to 'chatSkillPinTypeDeterminer'
// - Resolved require(926482) to 'chat-skill-pin-type-determiner'
// - Renamed variable 'm' to 'chatConversationSelectorUtils'
// - Resolved require(166172) to 'chat-conversation-selector-utils'
// - Renamed variable 'v' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'f' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'p' to 'codeArtifactMessageRenderer'
// - Resolved require(570) to 'code-artifact-message-renderer'
// - Renamed variable 'h' to 'groupArtifactsByKey'
// - Resolved require(158258) to 'group-artifacts-by-key'
// - Renamed variable 'g' to 'artifactMetaUtils'
// - Resolved require(398594) to 'artifact-meta-utils'
// - Renamed variable 'b' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'k' to 'chatArtifactSymbol'
// - Resolved require(476196) to 'chat-artifact-symbol'
// - Updated imported property 'B' to 'useRunPreviewConfig' (module 650100)
// - Updated imported property 'qR' to 'parseArtifactList' (module 398594)
// - Updated imported property '$' to 'groupByArtifactKey' (module 158258)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'wA' to 'thinkBrokenFlag' (module 397273)
// - Updated imported property 'c' to 'ThinkingContainer' (module 210562)
// - Updated imported property 'K9' to 'getMessageFromLink' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'yT' to 'determineSkillPinType' (module 926482)
// - Updated imported property 'n' to 'getConversationType' (module 166172)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'rd' to 'ChatMessageContentRenderer' (module 783136)
// - Updated imported property 'J' to 'useMessageArtifactRenderers' (module 570)
// - Updated imported property 'J' to 'chatArtifactSymbol' (module 476196)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 627490
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepThinkingContainer = require("deep-thinking-container") /*id: 210562*/;
  var codeRunPreviewConfig = require("code-run-preview-config") /*id: 650100*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var skillMessageProcessor = require("skill-message-processor") /*id: 397273*/;
  var chatMessageContentRenderer_1 = require("chat-message-content-renderer_1") /*id: 783136*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var codeArtifactMessageRenderer = require("code-artifact-message-renderer") /*id: 570*/;
  var groupArtifactsByKey = require("group-artifacts-by-key") /*id: 158258*/;
  var artifactMetaUtils = require("artifact-meta-utils") /*id: 398594*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let {
      inView: E,
      message: R,
      onClick: T,
      enableOpenCanvas: j,
      enableCodePathElements: N = true,
      customRenderOptions: P,
      loadingIconClassName: I
    } = e;
    let $ = reactCoreLibraryReexport.useRef(null);
    let {
      showRun: M
    } = codeRunPreviewConfig.useRunPreviewConfig();
    let A = artifactMetaUtils.parseArtifactList(R);
    let F = reactCoreLibraryReexport.useMemo(() => (A == null ? undefined : A.length) && R ? groupArtifactsByKey.groupByArtifactKey(A) : [], [A == null ? undefined : A.length, R]);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      var t;
      if ((t = $.current) !== null && t !== undefined && (e = t.flushSmoothCursor) !== null && e !== undefined) {
        e.call(t);
      }
    }, [F == null ? undefined : F.length]);
    let O = messageContentTypeAndStatusChecker.f8g(R) && !(R == null ? undefined : R.think_reason_is_hide);
    let W = messageContentTypeAndStatusChecker.vlk(R);
    let Z = chatMessageStatusCheck.isMessageFinished(R);
    let D = skillMessageProcessor.thinkBrokenFlag(R == null ? undefined : R.ext);
    let L = !!(R == null ? undefined : R.content_obj?.think) && !!(R == null ? undefined : R.content_obj?.text) && !D || Z;
    let {
      isLoadingInThinking: B,
      loadingTitle: H
    } = reactCoreLibraryReexport.useMemo(() => {
      var t;
      let i = false;
      let r = "";
      let {
        text: o = ""
      } = (R == null ? undefined : R.loading_state?.current_state) ?? {};
      return {
        isLoadingInThinking: i = R != null && (t = R.loading_state) !== null && t !== undefined && !!t.in_loading && !D && !W,
        loadingTitle: o
      };
    }, [R == null ? undefined : R.loading_state?.current_state, D]);
    let V = !!(R == null ? undefined : R.content_obj?.text) || !!(A == null ? undefined : A.length);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [O && reactJsxRuntimeCoreReexport.jsx(deepThinkingContainer.ThinkingContainer, {
        meta: R == null ? undefined : R.meta_infos,
        isThinkingFinished: L,
        isThinkingBroken: D,
        thinkExpandStatus: true,
        content: (R == null ? undefined : R.content_obj?.think) || "",
        onTrackEvent: (e, t) => {
          if (!(R == null ? undefined : R.conversation_id)) {
            return;
          }
          let o = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), R == null ? undefined : R.conversation_id, {
            isLocalMessage: false,
            messageId: (R == null ? undefined : R.reply_id) ?? ""
          });
          teaAnalyticsEventTracker.trackEvent(e, {
            bot_id: R == null ? undefined : R.bot_id,
            message_id: String(R == null ? undefined : R.message_id),
            chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", R == null ? undefined : R.conversation_id),
            conversation_id: R == null ? undefined : R.conversation_id,
            conversation_type: chatConversationSelectorUtils.getConversationType(R == null ? undefined : R.conversation_id),
            skill_id: o == null ? undefined : o.skill?.skill_id_no_default,
            skill_name: skillTypeMappings.getSkillName(o == null ? undefined : o.skill?.skill_type_no_default),
            ...t
          });
        },
        options: {
          isInSearchLoading: B,
          loadingTitle: H
        },
        messageId: R == null ? undefined : R.message_id,
        botId: R == null ? undefined : R.bot_id,
        skillType: R == null ? undefined : R.skill?.skill_type_no_default,
        skillId: R == null ? undefined : R.skill?.skill_id_no_default,
        conversationId: R == null ? undefined : R.conversation_id,
        messageText: (R == null ? undefined : R.content_obj?.text) || ""
      }), V && reactJsxRuntimeCoreReexport.jsx(chatMessageContentRenderer_1.ChatMessageContentRenderer, {
        ref: $,
        inView: E,
        message: R,
        messageBlockText: undefined,
        messageBlockTextFinish: undefined,
        messageBlockTextBroken: undefined,
        customRenderOptions: {
          customSlotsProps: {
            CodeBlock: {
              showRun: M
            }
          },
          useCustomReplacementElements: e => codeArtifactMessageRenderer.useMessageArtifactRenderers({
            message: R,
            onClick: T,
            enableOpenCanvas: j,
            loadingIconClassName: I,
            metaInfos: e == null ? undefined : e.metaInfos,
            enableCodePathElements: N
          }),
          ...P
        }
      })]
    });
  };
  let w = e => reactJsxRuntimeCoreReexport.jsx(y, {
    ...e
  });
  var chatArtifactSymbol = require("chat-artifact-symbol") /*id: 476196*/;
  function x(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let S = e => {
    let {
      inView: t,
      message: n,
      mouseOver: i
    } = e;
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(w, {
        inView: t,
        message: n,
        mouseOver: i
      });
    } else {
      return null;
    }
  };
  class C {
    constructor() {
      x(this, "pluginIdentifier", chatArtifactSymbol.chatArtifactSymbol);
      x(this, "Content", S);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveCodeArtifactContentPlugin: function () {
      return C;
    }
  });
}