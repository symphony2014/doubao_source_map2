// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'localRegenCheck'
// - Resolved require(965069) to 'local-regen-check'
// - Renamed variable 'i' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 'o' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'a' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 's' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'archiveBuildingIcon'
// - Resolved require(804712) to 'archive-building-icon'
// - Renamed variable 'u' to 'messageDeleteActionHandler'
// - Resolved require(183328) to 'message-delete-action-handler'
// - Renamed variable 'd' to 'chatDeleteActionSymbol'
// - Resolved require(103053) to 'chat-delete-action-symbol'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'b' to 'shouldRegenerate' (module 965069)
// - Updated imported property 'ap' to 'filterReplyMessages' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'B' to 'createDeleteHandler' (module 183328)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'C' to 'ArchiveIcon' (module 804712)
// - Updated imported property 'x' to 'chatDeleteAction' (module 103053)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action.abe50cdd.js
         * chunkId: 72995
         * moduleId: 37720
         */
module.exports = function (module, exports, require) {
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var archiveBuildingIcon = require("archive-building-icon") /*id: 804712*/;
  var messageDeleteActionHandler = require("message-delete-action-handler") /*id: 183328*/;
  var chatDeleteActionSymbol = require("chat-delete-action-symbol") /*id: 103053*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function f(e, t, n) {
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
  let p = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let d = localRegenCheck.shouldRegenerate(t) ? conversationMessageUtils_1.filterReplyMessages(chatMessageStoreFactory.createMessageStore.getState(), t) : undefined;
    let {
      onDeleteClick: f
    } = messageDeleteActionHandler.createDeleteHandler({
      message: t,
      deleteRegenMessages: d
    });
    return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
      "data-testid": "message_action_delete",
      type: "danger",
      prefix: reactJsxRuntimeCoreReexport.jsx(archiveBuildingIcon.ArchiveIcon, {}),
      onClick: f,
      children: n("long_press_delete_message")
    });
  };
  class h {
    constructor() {
      f(this, "pluginIdentifier", chatDeleteActionSymbol.chatDeleteAction);
      f(this, "DropdownItemContentGroups", [p]);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultDeleteReceiveMessageActionButtonPlugin: function () {
      return h;
    }
  });
}