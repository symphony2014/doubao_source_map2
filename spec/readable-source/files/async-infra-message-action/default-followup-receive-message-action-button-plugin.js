// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'messageCopyHandler'
// - Resolved require(541976) to 'message-copy-handler'
// - Renamed variable 'i' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 'o' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'a' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 's' to 'chatRefsContext'
// - Resolved require(184894) to 'chat-refs-context'
// - Renamed variable 'l' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'd' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable 'c' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Renamed variable 'f' to 'eyeIcon'
// - Resolved require(338021) to 'eye-icon'
// - Renamed variable 'p' to 'extractMessageContent'
// - Resolved require(562040) to 'extract-message-content'
// - Renamed variable 'h' to 'chatMessageFollowupSymbol'
// - Resolved require(153851) to 'chat-message-followup-symbol'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Ss' to 'findMessageElement' (module 541976)
// - Updated imported property 'Y' to 'extractMessageContent' (module 562040)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Tu' to 'getSourceValue' (module 583867)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'E' to 'useChatRefs' (module 184894)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'u' to 'eyeIcon' (module 338021)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'C' to 'chatFollowupSymbol' (module 153851)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action.abe50cdd.js
         * chunkId: 72995
         * moduleId: 618441
         */
module.exports = function (module, exports, require) {
  var messageCopyHandler = require("message-copy-handler") /*id: 541976*/;
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var eyeIcon = require("eye-icon") /*id: 338021*/;
  var extractMessageContent = require("extract-message-content") /*id: 562040*/;
  var chatMessageFollowupSymbol = require("chat-message-followup-symbol") /*id: 153851*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function v(e, t, n) {
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
  let g = e => {
    if (!e) {
      return "";
    }
    if (typeof document != "undefined") {
      let t = messageCopyHandler.findMessageElement(e.message_id);
      if (t) {
        let e = t.querySelectorAll("[data-plugin-identifier=\"block_type:10000\"]");
        let n = [];
        e.forEach(e => {
          var t;
          let r = (t = e.innerText) === null || t === undefined ? undefined : t.trim();
          if (r) {
            n.push(r);
          }
        });
        if (n.length > 0) {
          return n.join("\n\n");
        }
      }
    }
    return extractMessageContent.extractMessageContent(e) ?? "";
  };
  let y = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let r = chatFgStoreHooks.getSourceValue("enable_followup", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    });
    let {
      chatInputRef: p
    } = chatRefsContext.useChatRefs();
    if (r !== "1") {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
        "data-testid": "message_action_followup",
        prefix: reactJsxRuntimeCoreReexport.jsx(eyeIcon.eyeIcon, {}),
        onClick: () => {
          let n = g(t);
          teaAnalyticsEventTracker.trackEvent("click_cite_button", {
            click_from: "message_more",
            user_type: "assistant"
          });
          let {
            closeSkillPanel: r
          } = chatStoreManager.getStoreState("chatInputStore");
          r((t == null ? undefined : t.conversation_id) ?? "");
          chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
            if (e != null) {
              e.setRefContents({
                refContents: [{
                  type: "text",
                  text: n,
                  scene: "word_selection",
                  options: {
                    from: "message_more",
                    cite_method: "click_cite_button",
                    cite_message_id: t == null ? undefined : t.message_id
                  }
                }],
                channel: "default",
                reportParams: {}
              }, chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatId ?? "");
            }
          });
          setTimeout(() => {
            var e;
            if (p != null && (e = p.current) !== null && e !== undefined) {
              e.focus();
            }
          }, 0);
        },
        children: n("chat_selectText_ask")
      });
    }
  };
  class x {
    constructor() {
      v(this, "pluginIdentifier", chatMessageFollowupSymbol.chatFollowupSymbol);
      v(this, "DropdownItemContentGroups", [y]);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultFollowupReceiveMessageActionButtonPlugin: function () {
      return x;
    }
  });
}