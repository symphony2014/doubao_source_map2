// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageDeleteActionHandler'
// - Resolved require(183328) to 'message-delete-action-handler'
// - Renamed variable 'r' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 'o' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'a' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'l' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'archiveBuildingIcon'
// - Resolved require(804712) to 'archive-building-icon'
// - Renamed variable 'd' to 'messageActionSearchDelete'
// - Resolved require(233022) to 'message-action-search-delete'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Rm' to 'filterReplyLinks' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'B' to 'createDeleteHandler' (module 183328)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'C' to 'ArchiveIcon' (module 804712)
// - Updated imported property 'X' to 'messageSearchDelete' (module 233022)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 333214
         */
module.exports = function (module, exports, require) {
  var messageDeleteActionHandler = require("message-delete-action-handler") /*id: 183328*/;
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var archiveBuildingIcon = require("archive-building-icon") /*id: 804712*/;
  var messageActionSearchDelete = require("message-action-search-delete") /*id: 233022*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function u(e, t, n) {
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
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let d = conversationMessageUtils_1.filterReplyLinks(chatMessageStoreFactory.createMessageStore.getState(), t);
    let {
      onDeleteClick: u
    } = messageDeleteActionHandler.createDeleteHandler({
      message: t,
      deleteMessages: (d == null ? undefined : d.length) ? d : undefined
    });
    return reactJsxRuntimeCoreReexport.jsxs(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
      "data-testid": "message_action_delete",
      type: "danger",
      prefix: reactJsxRuntimeCoreReexport.jsx(archiveBuildingIcon.ArchiveIcon, {}),
      onClick: u,
      children: [n("long_press_delete_message"), " "]
    });
  };
  class p {
    constructor() {
      u(this, "pluginIdentifier", messageActionSearchDelete.messageSearchDelete);
      u(this, "DropdownItemContentGroups", [v]);
    }
  }
  require.r(exports);
  require.d(exports, {
    SearchDeleteReceiveMessageActionButtonPlugin: function () {
      return p;
    }
  });
}