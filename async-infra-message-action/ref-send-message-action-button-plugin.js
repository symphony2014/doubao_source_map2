// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 'i' to 'iconButtonWithTooltip'
// - Resolved require(158007) to 'icon-button-with-tooltip'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'a' to 'imChatIcon'
// - Resolved require(794033) to 'im-chat-icon'
// - Renamed variable 's' to 'chatAttachmentExtractor'
// - Resolved require(85490) to 'chat-attachment-extractor'
// - Renamed variable 'l' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'u' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'd' to 'chatRefsContext'
// - Resolved require(184894) to 'chat-refs-context'
// - Renamed variable 'f' to 'sendMessageActionRefSymbol'
// - Resolved require(249609) to 'send-message-action-ref-symbol'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'E' to 'useChatRefs' (module 184894)
// - Updated imported property 'g' to 'extractChatAttachments' (module 85490)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'K' to 'IconButton' (module 158007)
// - Updated imported property 'G' to 'ChatIcon' (module 794033)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'l' to 'SendMessageActionRef' (module 249609)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action.abe50cdd.js
         * chunkId: 72995
         * moduleId: 733726
         */
module.exports = function (module, exports, require) {
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var imChatIcon = require("im-chat-icon") /*id: 794033*/;
  var chatAttachmentExtractor = require("chat-attachment-extractor") /*id: 85490*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  let c = e => {
    let {
      message: t
    } = e;
    let {
      chatInputRef: n
    } = chatRefsContext.useChatRefs();
    return () => {
      var e;
      if (!t) {
        return;
      }
      let r = chatAttachmentExtractor.extractChatAttachments(t);
      let i = t.conversation_id || "";
      let o = chatStoreManager.getStore("chatInputStore").getState().activeSkillTypeMap[i];
      chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
        if (e != null) {
          e.setRefContents({
            refContents: r,
            channel: o ? `skill_${o}` : "default"
          }, i);
        }
      });
      if ((e = n.current) !== null && e !== undefined) {
        e.focus();
      }
    };
  };
  var sendMessageActionRefSymbol = require("send-message-action-ref-symbol") /*id: 249609*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function h(e, t, n) {
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
  let m = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let r = c({
      message: t
    });
    return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
      "data-testid": "message_action_ref",
      prefix: reactJsxRuntimeCoreReexport.jsx(imChatIcon.ChatIcon, {}),
      onClick: r,
      tooltipContent: n("skill_read_quote")
    });
  };
  let v = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let i = c({
      message: t
    });
    return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
      "data-testid": "message_action_ref",
      prefix: reactJsxRuntimeCoreReexport.jsx(imChatIcon.ChatIcon, {}),
      onClick: i,
      children: n("skill_read_quote")
    });
  };
  class g {
    constructor() {
      h(this, "pluginIdentifier", sendMessageActionRefSymbol.SendMessageActionRef);
      h(this, "ButtonContentGroups", [m]);
      h(this, "DropdownItemContentGroups", [v]);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultRefSendMessageActionButtonPlugin: function () {
      return g;
    }
  });
}