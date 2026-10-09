// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatAttachmentExtractor'
// - Resolved require(85490) to 'chat-attachment-extractor'
// - Renamed variable 'r' to 'chatStatusActionTypes'
// - Resolved require(757046) to 'chat-status-action-types'
// - Renamed variable 'o' to 'chatCoreConstants'
// - Resolved require(746101) to 'chat-core-constants'
// - Renamed variable 'a' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 's' to 'iconButtonWithTooltip'
// - Resolved require(158007) to 'icon-button-with-tooltip'
// - Renamed variable 'l' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'u' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'c' to 'chatRefsContext'
// - Resolved require(184894) to 'chat-refs-context'
// - Renamed variable 'd' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'p' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'h' to 'imChatIcon'
// - Resolved require(794033) to 'im-chat-icon'
// - Renamed variable 'f' to 'chatSendMessageActionRef'
// - Resolved require(130848) to 'chat-send-message-action-ref'
// - Renamed variable 'g' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'E' to 'useChatRefs' (module 184894)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'g' to 'extractChatAttachments' (module 85490)
// - Updated imported property 'u' to 'chatActionTypes' (module 757046)
// - Updated imported property 'Ub' to 'ContentTypes' (module 746101)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'K' to 'IconButton' (module 158007)
// - Updated imported property 'G' to 'ChatIcon' (module 794033)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'T' to 'sendMessageActionRef' (module 130848)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-action.e6a2cf79.js
         * chunkId: 29547
         * moduleId: 456426
         */
module.exports = function (module, exports, require) {
  var chatAttachmentExtractor = require("chat-attachment-extractor") /*id: 85490*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var imChatIcon = require("im-chat-icon") /*id: 794033*/;
  var chatSendMessageActionRef = require("chat-send-message-action-ref") /*id: 130848*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function m(e, t, n) {
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
  let v = e => {
    let {
      message: t
    } = e;
    let {
      chatInputRef: n
    } = chatRefsContext.useChatRefs();
    return () => {
      var e;
      var a;
      if (!t) {
        return;
      }
      let s = chatStoreManager.getStoreState("chatInputStore").checkSupportSkill(chatAppEnums.SkillType.CodeAssistant);
      let c = chatAttachmentExtractor.extractChatAttachments(t);
      let d = t.conversation_id || "";
      let h = chatStoreManager.getStore("chatInputStore").getState().activeSkillTypeMap[d];
      if (s && h !== chatAppEnums.SkillType.CodeAssistant) {
        let e = chatAppEnums.SkillType.CodeAssistant;
        chatStoreManager.getStore("chatInputStore").getState().updateActiveSkillTypeMap(d, e, chatStatusActionTypes.chatActionTypes.Quote);
      }
      if ((h = chatStoreManager.getStore("chatInputStore").getState().activeSkillTypeMap[d]) === chatAppEnums.SkillType.CodeAssistant) {
        c = ((a = t.attachments) === null || a === undefined ? undefined : a.every(e => e.type === chatCoreConstants.ContentTypes.Image || e.type === chatCoreConstants.ContentTypes.VlmImage)) ? c.map(e => e.type === "attachment" ? {
          ...e,
          type: "image"
        } : e) : c.map(e => e.type === "link" ? {
          ...e,
          fileName: e == null ? undefined : e.fileKey.replace("https://github.com/", "")
        } : e);
      }
      chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
        if (e != null) {
          e.setRefContents({
            refContents: c,
            channel: h ? `skill_${h}` : "default"
          }, d);
        }
      });
      if ((e = n.current) !== null && e !== undefined) {
        e.focus();
      }
    };
  };
  let y = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let i = v({
      message: t
    });
    return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
      "data-testid": "message_action_ref",
      prefix: reactJsxRuntimeCoreReexport.jsx(imChatIcon.ChatIcon, {}),
      onClick: i,
      tooltipContent: n("skill_read_quote")
    });
  };
  let C = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let i = v({
      message: t
    });
    return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
      "data-testid": "message_action_ref",
      prefix: reactJsxRuntimeCoreReexport.jsx(imChatIcon.ChatIcon, {}),
      onClick: i,
      children: n("skill_read_quote")
    });
  };
  class _ {
    constructor() {
      m(this, "pluginIdentifier", chatSendMessageActionRef.sendMessageActionRef);
      m(this, "ButtonContentGroups", [y]);
      m(this, "DropdownItemContentGroups", [C]);
    }
  }
  require.r(exports);
  require.d(exports, {
    CodeRefSendMessageActionButtonPlugin: function () {
      return _;
    }
  });
}