// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 'i' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'o' to 'archiveBuildingIcon'
// - Resolved require(804712) to 'archive-building-icon'
// - Renamed variable 'a' to 'messageDeleteActionHandler'
// - Resolved require(183328) to 'message-delete-action-handler'
// - Renamed variable 's' to 'infraSendMessageDeleteSymbol'
// - Resolved require(789134) to 'infra-send-message-delete-symbol'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'B' to 'createDeleteHandler' (module 183328)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'C' to 'ArchiveIcon' (module 804712)
// - Updated imported property 'x' to 'deleteMessageSymbol' (module 789134)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action.abe50cdd.js
         * chunkId: 72995
         * moduleId: 812055
         */
module.exports = function (module, exports, require) {
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var archiveBuildingIcon = require("archive-building-icon") /*id: 804712*/;
  var messageDeleteActionHandler = require("message-delete-action-handler") /*id: 183328*/;
  var infraSendMessageDeleteSymbol = require("infra-send-message-delete-symbol") /*id: 789134*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function u(e, t, n) {
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
  let d = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      onDeleteClick: s
    } = messageDeleteActionHandler.createDeleteHandler({
      message: t
    });
    return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
      "data-testid": "message_action_delete",
      type: "danger",
      prefix: reactJsxRuntimeCoreReexport.jsx(archiveBuildingIcon.ArchiveIcon, {}),
      onClick: s,
      children: n("long_press_delete_message")
    });
  };
  class c {
    constructor() {
      u(this, "pluginIdentifier", infraSendMessageDeleteSymbol.deleteMessageSymbol);
      u(this, "DropdownItemContentGroups", [d]);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultDeleteSendMessageActionButtonPlugin: function () {
      return c;
    }
  });
}