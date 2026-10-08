// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 'r' to 'iconButtonWithTooltip'
// - Resolved require(158007) to 'icon-button-with-tooltip'
// - Renamed variable 's' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'a' to 'conversationMessageUtils_2'
// - Resolved require(149246) to 'conversation-message-utils_2'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'svgArrowIconComponent'
// - Resolved require(336478) to 'svg-arrow-icon-component'
// - Renamed variable 'u' to 'asyncSkillShareThreadAction'
// - Resolved require(310761) to 'async-skill-share-thread-action'
// - Renamed variable 'c' to 'chatThreadShareSymbol'
// - Resolved require(454117) to 'chat-thread-share-symbol'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'gr' to 'useIsLastMessageIncompleteFn' (module 149246)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'G' to 'createShareThreadAction' (module 310761)
// - Updated imported property 'K' to 'IconButton' (module 158007)
// - Updated imported property 'i' to 'getArrowIcon' (module 336478)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'P' to 'receiveThreadShare' (module 454117)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-share-receive-message-action.d1f05425.js
         * chunkId: 34732
         * moduleId: 259811
         */
module.exports = function (module, exports, require) {
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_2 = require("conversation-message-utils_2") /*id: 149246*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var svgArrowIconComponent = require("svg-arrow-icon-component") /*id: 336478*/;
  var asyncSkillShareThreadAction = require("async-skill-share-thread-action") /*id: 310761*/;
  var chatThreadShareSymbol = require("chat-thread-share-symbol") /*id: 454117*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function h(e, t, n) {
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
  let f = e => {
    let t = e.conversation_id || "";
    let {
      isLastMessageFinished: n
    } = chatMessageStoreFactory.createMessageStore(e => ({
      isLastMessageFinished: !conversationMessageUtils_2.useIsLastMessageIncompleteFn(e, t)
    }));
    return n;
  };
  let p = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let i = asyncSkillShareThreadAction.createShareThreadAction(t);
    if (f(t)) {
      return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
        "data-testid": "message_action_share",
        tooltipContent: n("sidebar_thread_share"),
        prefix: reactJsxRuntimeCoreReexport.jsx(svgArrowIconComponent.getArrowIcon, {
          "data-testid": "message_action_icon_share"
        }),
        onClick: i
      });
    } else {
      return null;
    }
  };
  let m = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let r = asyncSkillShareThreadAction.createShareThreadAction(t);
    if (f(t)) {
      return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
        "data-testid": "message_action_share",
        prefix: reactJsxRuntimeCoreReexport.jsx(svgArrowIconComponent.getArrowIcon, {
          "data-testid": "message_action_icon_share"
        }),
        onClick: r,
        children: n("sidebar_thread_share")
      });
    } else {
      return null;
    }
  };
  class g {
    constructor() {
      h(this, "pluginIdentifier", chatThreadShareSymbol.receiveThreadShare);
      h(this, "ButtonContentGroups", [p]);
      h(this, "DropdownItemContentGroups", [m]);
    }
  }
  require.r(exports);
  require.d(exports, {
    ThreadShareReceiveMessageActionButtonPlugin: function () {
      return g;
    }
  });
}