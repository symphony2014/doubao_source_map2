// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 'i' to 'iconButtonWithTooltip'
// - Resolved require(158007) to 'icon-button-with-tooltip'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'a' to 'sendEditIcon'
// - Resolved require(702123) to 'send-edit-icon'
// - Renamed variable 's' to 'suggestionMessageRemover'
// - Resolved require(624562) to 'suggestion-message-remover'
// - Renamed variable 'l' to 'messageBreakHandler'
// - Resolved require(874388) to 'message-break-handler'
// - Renamed variable 'u' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'd' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'f' to 'chatMessageEditAction'
// - Resolved require(427301) to 'chat-message-edit-action'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'D' to 'handleBrokenMessage' (module 874388)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'S' to 'removeSuggestion' (module 624562)
// - Updated imported property 'K' to 'IconButton' (module 158007)
// - Updated imported property 'F' to 'SendEditIcon' (module 702123)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'F' to 'messageEditAction' (module 427301)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action.abe50cdd.js
         * chunkId: 72995
         * moduleId: 277300
         */
module.exports = function (module, exports, require) {
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var sendEditIcon = require("send-edit-icon") /*id: 702123*/;
  var suggestionMessageRemover = require("suggestion-message-remover") /*id: 624562*/;
  var messageBreakHandler = require("message-break-handler") /*id: 874388*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let c = e => {
    let {
      message: t
    } = e;
    return () => {
      teaAnalyticsEventTracker.trackEvent("click_edit_message", {
        message_id: t.message_id,
        edit_method: "click",
        skill_id: t == null ? undefined : t.skill?.skill_id_no_default
      });
      messageBreakHandler.handleBrokenMessage(chatMessageStoreFactory.createMessageStore, t.conversation_id || "");
      suggestionMessageRemover.removeSuggestion(t.conversation_id || "");
    };
  };
  var chatMessageEditAction = require("chat-message-edit-action") /*id: 427301*/;
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
      message: t,
      onEnterEditMode: n
    } = e;
    let r = c({
      message: t
    });
    return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
      "data-testid": "message_action_edit",
      prefix: reactJsxRuntimeCoreReexport.jsx(sendEditIcon.SendEditIcon, {}),
      onClick: () => {
        r();
        if (n != null) {
          n();
        }
      }
    });
  };
  let v = e => {
    let {
      message: t,
      onEnterEditMode: n
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let s = c({
      message: t
    });
    return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
      "data-testid": "message_action_edit",
      prefix: reactJsxRuntimeCoreReexport.jsx(sendEditIcon.SendEditIcon, {}),
      onClick: () => {
        s();
        if (n != null) {
          n();
        }
      },
      children: i("message_long_press_edit")
    });
  };
  class g {
    constructor() {
      h(this, "pluginIdentifier", chatMessageEditAction.messageEditAction);
      h(this, "ButtonContentGroups", [m]);
      h(this, "DropdownItemContentGroups", [v]);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultEditSendMessageActionButtonPlugin: function () {
      return g;
    }
  });
}