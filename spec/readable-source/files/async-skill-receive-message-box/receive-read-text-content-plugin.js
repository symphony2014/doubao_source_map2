// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'receiveReadTextContentSymbol'
// - Resolved require(851852) to 'receive-read-text-content-symbol'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'deepThinkingContainer'
// - Resolved require(210562) to 'deep-thinking-container'
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
// - Renamed variable 'p' to 'documentRefAnchorPointRenderer'
// - Resolved require(698453) to 'document-ref-anchor-point-renderer'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'wA' to 'thinkBrokenFlag' (module 397273)
// - Updated imported property 'c' to 'ThinkingContainer' (module 210562)
// - Updated imported property 'K9' to 'getMessageFromLink' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'yT' to 'determineSkillPinType' (module 926482)
// - Updated imported property 'n' to 'getConversationType' (module 166172)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'rd' to 'ChatMessageContentRenderer' (module 783136)
// - Updated imported property 'T' to 'renderDocumentRefAnchors' (module 698453)
// - Updated imported property 'E' to 'receiveTextContent' (module 851852)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 577867
         */
module.exports = function (module, exports, require) {
  var receiveReadTextContentSymbol = require("receive-read-text-content-symbol") /*id: 851852*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepThinkingContainer = require("deep-thinking-container") /*id: 210562*/;
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
  var documentRefAnchorPointRenderer = require("document-ref-anchor-point-renderer") /*id: 698453*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = e => {
    let {
      inView: x,
      message: S
    } = e;
    let C = messageContentTypeAndStatusChecker.f8g(S);
    let E = messageContentTypeAndStatusChecker.vlk(S);
    let R = !!(S == null ? undefined : S.content_obj?.text);
    let T = chatMessageStatusCheck.isMessageFinished(S);
    let j = skillMessageProcessor.thinkBrokenFlag(S == null ? undefined : S.ext);
    let N = !!(S == null ? undefined : S.content_obj?.think) && !!(S == null ? undefined : S.content_obj?.text) && !j || T;
    let {
      isLoadingInThinking: P,
      loadingTitle: I
    } = reactCoreLibraryReexport.useMemo(() => {
      var t;
      let i = false;
      let r = "";
      let {
        text: o = ""
      } = (S == null ? undefined : S.loading_state?.current_state) ?? {};
      return {
        isLoadingInThinking: i = S != null && (t = S.loading_state) !== null && t !== undefined && !!t.in_loading && !j && !E,
        loadingTitle: o
      };
    }, [S == null ? undefined : S.loading_state?.current_state, j]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [C && reactJsxRuntimeCoreReexport.jsx(deepThinkingContainer.ThinkingContainer, {
        meta: S == null ? undefined : S.meta_infos,
        isThinkingFinished: N,
        isThinkingBroken: j,
        thinkExpandStatus: true,
        content: (S == null ? undefined : S.content_obj?.think) || "",
        onTrackEvent: (e, t) => {
          if (!(S == null ? undefined : S.conversation_id)) {
            return;
          }
          let o = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), S == null ? undefined : S.conversation_id, {
            isLocalMessage: false,
            messageId: (S == null ? undefined : S.reply_id) ?? ""
          });
          teaAnalyticsEventTracker.trackEvent(e, {
            bot_id: S == null ? undefined : S.bot_id,
            message_id: String(S == null ? undefined : S.message_id),
            chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", S == null ? undefined : S.conversation_id),
            conversation_id: S == null ? undefined : S.conversation_id,
            conversation_type: chatConversationSelectorUtils.getConversationType(S == null ? undefined : S.conversation_id),
            skill_id: o == null ? undefined : o.skill?.skill_id_no_default,
            skill_name: skillTypeMappings.getSkillName(o == null ? undefined : o.skill?.skill_type_no_default),
            ...t
          });
        },
        options: {
          isInSearchLoading: P,
          loadingTitle: I
        },
        messageId: S == null ? undefined : S.message_id,
        botId: S == null ? undefined : S.bot_id,
        skillType: S == null ? undefined : S.skill?.skill_type_no_default,
        skillId: S == null ? undefined : S.skill?.skill_id_no_default,
        conversationId: S == null ? undefined : S.conversation_id,
        messageText: (S == null ? undefined : S.content_obj?.text) || ""
      }), R && reactJsxRuntimeCoreReexport.jsx(chatMessageContentRenderer_1.ChatMessageContentRenderer, {
        inView: x,
        message: S,
        messageBlockText: undefined,
        messageBlockTextBroken: undefined,
        messageBlockTextFinish: undefined,
        customRenderOptions: {
          useCustomReplacementElements: documentRefAnchorPointRenderer.renderDocumentRefAnchors
        }
      })]
    });
  };
  function b(e, t, n) {
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
  class y {
    constructor() {
      b(this, "pluginIdentifier", receiveReadTextContentSymbol.receiveTextContent);
      b(this, "Content", g);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveReadTextContentPlugin: function () {
      return y;
    }
  });
}