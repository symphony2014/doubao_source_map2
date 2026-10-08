// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'i' to 'messageContextHook'
// - Resolved require(30115) to 'message-context-hook'
// - Renamed variable 'a' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'l' to 'chatAttachmentExtractor'
// - Resolved require(85490) to 'chat-attachment-extractor'
// - Renamed variable 's' to 'suggestMessageList'
// - Resolved require(447868) to 'suggest-message-list'
// - Renamed variable 'u' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'c' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'd' to 'chatMessageSender_2'
// - Resolved require(656716) to 'chat-message-sender_2'
// - Renamed variable 'p' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'm' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'f' to 'superTaskPayloadPlugin'
// - Resolved require(651299) to 'super-task-payload-plugin'
// - Renamed variable '_' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'v' to 'buttonComponentExport'
// - Resolved require(576887) to 'button-component-export'
// - Renamed variable 'h' to 'storageCutdownTimerHook'
// - Resolved require(993094) to 'storage-cutdown-timer-hook'
// - Renamed variable 'w' to 'chatMessageSymbols'
// - Resolved require(524195) to 'chat-message-symbols'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property '_' to 'SuggestMessageList' (module 447868)
// - Updated imported property 'K9' to 'getMessageFromLink' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'g' to 'extractChatAttachments' (module 85490)
// - Updated imported property 'V' to 'processTaskPayload' (module 651299)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'O' to 'sendMessage' (module 656716)
// - Updated imported property 'Y' to 'useStorageCutdown' (module 993094)
// - Updated imported property 'Z' to 'Button' (module 576887)
// - Updated imported property 'I' to 'useMessage' (module 30115)
// - Updated imported property 'S' to 'superTaskMsgBottom' (module 524195)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom.d95bd1e8.js
         * chunkId: 32003
         * moduleId: 114106
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var messageContextHook = require("message-context-hook") /*id: 30115*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatAttachmentExtractor = require("chat-attachment-extractor") /*id: 85490*/;
  var suggestMessageList = require("suggest-message-list") /*id: 447868*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatMessageSender_2 = require("chat-message-sender_2") /*id: 656716*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var superTaskPayloadPlugin = require("super-task-payload-plugin") /*id: 651299*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function g(e) {
    let {
      message: t,
      suggestList: n,
      actionBarComponentNode: r
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let [g, v] = reactCoreLibraryReexport.useState(true);
    if (n == null ? undefined : n.suggestsLength) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: n.suggestListComponentNode
      });
    } else if (g) {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [r, reactJsxRuntimeCoreReexport.jsx(suggestMessageList.SuggestMessageList, {
          message: t,
          loading: false,
          suggests: [{
            value: {
              content: i("superAgent_chat_btn_startTask")
            },
            label: i("superAgent_chat_btn_startTask")
          }],
          onClick: e => {
            v(false);
            let n = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), (t == null ? undefined : t.conversation_id) || "", {
              messageId: (t == null ? undefined : t.reply_id) || "",
              isLocalMessage: false
            });
            let r = n && chatAttachmentExtractor.extractChatAttachments(n);
            superTaskPayloadPlugin.processTaskPayload({
              text: e.content,
              reportParams: {
                scene: "super_task_sug"
              },
              extraExt: {
                ...(r && !isEmptyUtil.isEmpty(r) ? {
                  reference_content: safeJsonUtils.safeStringify(r)
                } : {})
              }
            }).then(e => {
              chatMessageSender_2.sendMessage([e]);
            });
          }
        })]
      });
    } else {
      return null;
    }
  }
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var storageCutdownTimerHook = require("storage-cutdown-timer-hook") /*id: 993094*/;
  function S(e) {
    let {
      message: t,
      actionBarComponentNode: n
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let [i, s] = reactCoreLibraryReexport.useState(true);
    let g = (e, n) => {
      s(false);
      let r = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), (t == null ? undefined : t.conversation_id) || "", {
        messageId: (t == null ? undefined : t.reply_id) || "",
        isLocalMessage: false
      });
      let i = r && chatAttachmentExtractor.extractChatAttachments(r);
      let a = {
        ...(i && !isEmptyUtil.isEmpty(i) ? {
          reference_content: safeJsonUtils.safeStringify(i)
        } : {})
      };
      Object.assign(a, {
        message_send_type: +!!n
      });
      Object.assign(a, {
        preceding_msg_id: t.message_id || ""
      });
      superTaskPayloadPlugin.processTaskPayload({
        text: e,
        reportParams: {
          scene: "super_task_sug"
        },
        extraExt: a
      }).then(e => {
        chatMessageSender_2.sendMessage([e]);
      });
    };
    let S = function () {
      let [e, t] = reactCoreLibraryReexport.useState(null);
      let [n, r] = reactCoreLibraryReexport.useState(false);
      reactCoreLibraryReexport.useEffect(() => {
        if (!e) {
          return;
        }
        let t = () => {
          r(true);
        };
        e.addEventListener("mousedown", t);
        e.addEventListener("scroll", t);
        return () => {
          e.removeEventListener("scroll", t);
          e.removeEventListener("mousedown", t);
        };
      }, [e]);
      reactCoreLibraryReexport.useEffect(() => {
        let e = setInterval(() => {
          t(document.querySelector("[data-testid=\"flow_doc_editor\"] [data-testid=\"scroll_view\"] [class*=scrollable-]"));
        }, 1000);
        return () => {
          clearInterval(e);
        };
      }, []);
      return n;
    }();
    let w = r("agent_PPT_btn_confirmContinue");
    let y = storageCutdownTimerHook.useStorageCutdown(t.message_id || "", S, () => g(w, true));
    let b = r("agent_PPT_btn_confirmContinue_countdown", {
      s_second: y
    });
    let k = reactCoreLibraryReexport.useRef(null);
    let [x, T] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useEffect(() => {
      if (k.current) {
        T(Math.ceil(k.current.getBoundingClientRect().width));
      }
    }, [k.current]);
    if (i) {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          variant: "rectangle",
          color: "brand-filled",
          size: "md",
          onClick: () => g(w),
          className: "mt-16 w-fit",
          ref: k,
          style: {
            width: x && !S ? `${x}px` : undefined
          },
          children: `${y && !S ? b : w}`
        }), n]
      });
    } else {
      return null;
    }
  }
  var chatMessageSymbols = require("chat-message-symbols") /*id: 524195*/;
  function y(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
  let b = e => {
    let {
      contextSceneType: t = ""
    } = messageContextHook.useMessage();
    if (["collection", "share-conversation", "share-all"].includes(t)) {
      return null;
    } else if (messageContentTypeAndStatusChecker.u2S(e.message)) {
      return reactJsxRuntimeCoreReexport.jsx(g, {
        ...e
      });
    } else if (messageContentTypeAndStatusChecker.LRw(e.message)) {
      return reactJsxRuntimeCoreReexport.jsx(S, {
        ...e
      });
    } else {
      return null;
    }
  };
  class k {
    constructor() {
      y(this, "pluginIdentifier", chatMessageSymbols.superTaskMsgBottom);
      y(this, "Content", b);
    }
  }
  require.r(exports);
  require.d(exports, {
    SuperTaskReceiveMessageBottomPlugin: function () {
      return k;
    }
  });
}