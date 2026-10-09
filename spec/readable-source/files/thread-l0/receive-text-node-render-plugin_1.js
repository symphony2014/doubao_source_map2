// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageStatusChecker'
// - Resolved require(378407) to 'message-status-checker'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'skillMessageCopyHandler'
// - Resolved require(545747) to 'skill-message-copy-handler'
// - Renamed variable 'l' to 'markdownChatContentRenderer'
// - Resolved require(637813) to 'markdown-chat-content-renderer'
// - Renamed variable 'a' to 'configSyncLoader'
// - Resolved require(985012) to 'config-sync-loader'
// - Renamed variable 's' to 'messageContextDefinition'
// - Resolved require(786528) to 'message-context-definition'
// - Renamed variable 'u' to 'imChatRenderConfig'
// - Resolved require(29632) to 'im-chat-render-config'
// - Renamed variable 'c' to 'chatLinkEventHandler'
// - Resolved require(756733) to 'chat-link-event-handler'
// - Renamed variable 'd' to 'chatCoreConstants'
// - Resolved require(746101) to 'chat-core-constants'
// - Renamed variable 'h' to 'imagePreviewEventHandlerHook'
// - Resolved require(810587) to 'image-preview-event-handler-hook'
// - Renamed variable 'f' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'm' to 'chatMessageHandler'
// - Resolved require(908536) to 'chat-message-handler'
// - Renamed variable 'g' to 'darkModeDebugConfig'
// - Resolved require(365555) to 'dark-mode-debug-config'
// - Renamed variable 'b' to 'chatMessageHopTracker'
// - Resolved require(764292) to 'chat-message-hop-tracker'
// - Renamed variable '_' to 'chatBlockContentParser'
// - Resolved require(656817) to 'chat-block-content-parser'
// - Renamed variable 'y' to 'chatCodeInterpreterUi'
// - Resolved require(741563) to 'chat-code-interpreter-ui'
// - Renamed variable 'k' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'w' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'T' to 'chatReadVisibility'
// - Resolved require(488266) to 'chat-read-visibility'
// - Updated imported property 'L5' to 'useImagePreviewEvents' (module 810587)
// - Updated imported property 'iz' to 'MessageActions' (module 746101)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Y' to 'useCodeInterpreterUI' (module 741563)
// - Updated imported property 'UD' to 'useMessage' (module 786528)
// - Updated imported property 'r' to 'parseChatBlockContent' (module 656817)
// - Updated imported property 'M' to 'useMessageCopy' (module 545747)
// - Updated imported property 'b' to 'createMessageHopTracker' (module 764292)
// - Updated imported property '$' to 'useMessageHandler' (module 908536)
// - Updated imported property 'F' to 'useLinkHandlers' (module 756733)
// - Updated imported property 'Y' to 'getDarkModeConfig' (module 365555)
// - Updated imported property 'B' to 'getChatRenderConfig' (module 29632)
// - Updated imported property '$' to 'getConfig' (module 985012)
// - Updated imported property 'J' to 'MarkdownChatRenderer' (module 637813)
// - Updated imported property 'Z' to 'checkMessageStatus' (module 378407)
// - Updated imported property 'T' to 'getReadClassName' (module 488266)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l0.92c0a8ab.js
         * chunkId: 99008
         * moduleId: 519834
         */
module.exports = function (module, exports, require) {
  var messageStatusChecker = require("message-status-checker") /*id: 378407*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var skillMessageCopyHandler = require("skill-message-copy-handler") /*id: 545747*/;
  var markdownChatContentRenderer = require("markdown-chat-content-renderer") /*id: 637813*/;
  var configSyncLoader = require("config-sync-loader") /*id: 985012*/;
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  var imChatRenderConfig = require("im-chat-render-config") /*id: 29632*/;
  var chatLinkEventHandler = require("chat-link-event-handler") /*id: 756733*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var imagePreviewEventHandlerHook = require("image-preview-event-handler-hook") /*id: 810587*/;
  let p = () => {
    let {
      imageEventCallbacks: e,
      renderImagePreview: t
    } = imagePreviewEventHandlerHook.useImagePreviewEvents({}, [], chatCoreConstants.MessageActions.Original);
    return {
      handleImageClick: (t, n) => {
        let {
          src: i
        } = n;
        if (i) {
          e.onImageClick(t, i);
        }
      },
      handleImageRender: t => {
        let {
          src: n
        } = t;
        if (n) {
          e.onImageRender(n);
        }
      },
      renderImagePreview: t
    };
  };
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  let v = e => {
    let n = emptyExportFunction.emptyFunction;
    let {
      markdown: i,
      message: o,
      block: l,
      metaInfos: a,
      isFinished: s,
      onLinkClick: u,
      onSendMessage: c
    } = e;
    let d = (o == null ? undefined : o.ext?.ref_info_data) ? JSON.parse(o.ext.ref_info_data) : [];
    return reactCoreLibraryReexport.useMemo(() => ({
      message: o,
      block: l,
      metaInfos: a ?? [],
      messageText: i,
      options: {
        isFinishedMessage: s,
        enableHightLight: true
      },
      onLinkClick: u,
      onSendMessage: c,
      onTrackEvent: n,
      refInfoData: d
    }), [a, i, s, d]);
  };
  var chatMessageHandler = require("chat-message-handler") /*id: 908536*/;
  var darkModeDebugConfig = require("dark-mode-debug-config") /*id: 365555*/;
  var chatMessageHopTracker = require("chat-message-hop-tracker") /*id: 764292*/;
  var chatBlockContentParser = require("chat-block-content-parser") /*id: 656817*/;
  var chatCodeInterpreterUi = require("chat-code-interpreter-ui") /*id: 741563*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  let x = e => {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    let n = chatCodeInterpreterUi.useCodeInterpreterUI(e);
    return n ?? ((e, n) => {
      let {
        codeBlocks: r
      } = e;
      let {
        isFinished: o,
        isFailed: l,
        isBroken: a
      } = n;
      let s = r.at(0)?.language;
      if ("compute".startsWith(s ?? "")) {
        return {
          finished: o || l || a,
          defaultExpand: false,
          showCodeBar: true,
          expandedFinishedText: t("deepResearch_tool_genCode_done"),
          unExpandFinishedText: t("deepResearch_tool_genCode_done"),
          codeBarLoadingText: t("deepResearch_tool_genCode"),
          compact: true
        };
      } else {
        return {
          finished: o || l || a,
          showCodeBar: false
        };
      }
    });
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let S = reactCoreLibraryReexport.memo(e => {
    let {
      node: t,
      inView: n,
      isFinished: i,
      isBroken: d,
      isFailed: h,
      theme: f
    } = e;
    let y = messageContextDefinition.useMessage();
    let {
      markdown: k,
      metaInfos: S
    } = chatBlockContentParser.parseChatBlockContent(t);
    skillMessageCopyHandler.useMessageCopy({
      messageId: y == null ? undefined : y.message_id
    });
    let {
      eventTrigger: T
    } = chatMessageHopTracker.createMessageHopTracker(k, y);
    let C = x(k);
    let R = reactCoreLibraryReexport.useMemo(() => C ? e => C == null ? undefined : C(e, {
      isFinished: i,
      isBroken: d,
      isFailed: h
    }) : undefined, [C, i, d, h]);
    let {
      handleSendMessage: $
    } = chatMessageHandler.useMessageHandler(k);
    let {
      handleLinkClick: E
    } = chatLinkEventHandler.useLinkHandlers(y);
    let N = v({
      markdown: k,
      message: y,
      block: t.block,
      metaInfos: S,
      isFinished: i,
      onLinkClick: E,
      onSendMessage: $
    });
    let {
      handleImageClick: I,
      handleImageRender: P,
      renderImagePreview: M
    } = p();
    let {
      mode: j
    } = darkModeDebugConfig.getDarkModeConfig();
    let Z = imChatRenderConfig.getChatRenderConfig(y, T);
    let W = configSyncLoader.getConfig("markdownMetaRenderConfig");
    reactCoreLibraryReexport.useEffect(() => {}, []);
    if (h && !k) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(markdownChatContentRenderer.MarkdownChatRenderer, {
          inView: n,
          markDown: k,
          mode: j,
          showEllipsis: d || h,
          showIndicator: !i && !h,
          autoFixSyntax: {
            autoFixEnding: !i || d,
            imageEmphasisTitle: true
          },
          eventCallbacks: {
            onImageRender: P,
            onImageClick: I,
            onLinkClick: E,
            onSendMessage: $,
            onCopyCodeBlock: T.clickCodeBarCopyEvent,
            onCodeBarExpandChange: T.clickCodeDetailButtonEvent,
            onCodeBlockShowEvent: T.codeBlockShowEvent,
            onCodeBarMounted: T.codeBarShowEvent,
            onDownloadEvent: T.onClickDownloadAttachmentEvent,
            onClickAttachment: T.onClickAttachmentEvent
          },
          slotsPluginConfig: Z,
          metaInfos: S,
          metaContext: N,
          metaPluginConfig: W,
          codeBarConfig: R,
          theme: f && f !== "samantha" ? "default" : "samantha"
        }), M()]
      });
    }
  });
  var chatReadVisibility = require("chat-read-visibility") /*id: 488266*/;
  function C(e, t, n) {
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
  class R {
    constructor() {
      C(this, "nodeTypes", ["block_type:10000"]);
      C(this, "Content", S);
      C(this, "usePropsSelector", messageStatusChecker.checkMessageStatus);
      C(this, "useNodeWrapperClassName", chatReadVisibility.getReadClassName);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveTextNodeRenderPlugin: function () {
      return R;
    }
  });
}