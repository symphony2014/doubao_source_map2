// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'copyMessageHandler'
// - Resolved require(13316) to 'copy-message-handler'
// - Renamed variable 'i' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 'o' to 'iconButtonWithTooltip'
// - Resolved require(158007) to 'icon-button-with-tooltip'
// - Renamed variable 'a' to 'messageContentUtils'
// - Resolved require(976464) to 'message-content-utils'
// - Renamed variable 's' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'useCheckedStateHook'
// - Resolved require(28538) to 'use-checked-state-hook'
// - Renamed variable 'u' to 'svgCheckIcon'
// - Resolved require(362340) to 'svg-check-icon'
// - Renamed variable 'd' to 'ringOutlinedIcon'
// - Resolved require(112124) to 'ring-outlined-icon'
// - Renamed variable 'c' to 'extractMessageContent'
// - Resolved require(562040) to 'extract-message-content'
// - Renamed variable 'f' to 'messageCopyAction'
// - Resolved require(738187) to 'message-copy-action'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'U' to 'useCheckedState' (module 28538)
// - Updated imported property 'Y' to 'extractMessageContent' (module 562040)
// - Updated imported property 'c' to 'handleCopyMessage' (module 13316)
// - Updated imported property 'K' to 'IconButton' (module 158007)
// - Updated imported property 's' to 'CheckIcon' (module 362340)
// - Updated imported property 'x' to 'RingOutlinedIcon' (module 112124)
// - Updated imported property 'UD' to 'formatMessage' (module 976464)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'O' to 'messageCopyAction' (module 738187)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action.abe50cdd.js
         * chunkId: 72995
         * moduleId: 993155
         */
module.exports = function (module, exports, require) {
  var copyMessageHandler = require("copy-message-handler") /*id: 13316*/;
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useCheckedStateHook = require("use-checked-state-hook") /*id: 28538*/;
  var svgCheckIcon = require("svg-check-icon") /*id: 362340*/;
  var ringOutlinedIcon = require("ring-outlined-icon") /*id: 112124*/;
  var extractMessageContent = require("extract-message-content") /*id: 562040*/;
  var messageCopyAction = require("message-copy-action") /*id: 738187*/;
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
      message: n,
      reportParams: i
    } = e;
    let a = i18nTranslationUtils.useTranslationWithFallback();
    let {
      setChecked: f,
      checked: h
    } = useCheckedStateHook.useCheckedState();
    let m = extractMessageContent.extractMessageContent(n) ?? "";
    let v = copyMessageHandler.handleCopyMessage(n, m, i);
    return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
      tooltipContent: a("message_long_press_copy"),
      "data-testid": "message_action_copy",
      prefix: h ? reactJsxRuntimeCoreReexport.jsx(svgCheckIcon.CheckIcon, {
        "data-testid": "message_action_icon_checked"
      }) : reactJsxRuntimeCoreReexport.jsx(ringOutlinedIcon.RingOutlinedIcon, {}),
      onClick: () => {
        v();
        f();
      }
    });
  };
  let v = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      setChecked: o,
      checked: c
    } = useCheckedStateHook.useCheckedState();
    let f = t.tts_content || t && messageContentUtils.formatMessage(t) || "";
    let h = copyMessageHandler.handleCopyMessage(t, f);
    return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
      "data-testid": "message_action_copy",
      prefix: c ? reactJsxRuntimeCoreReexport.jsx(svgCheckIcon.CheckIcon, {
        "data-testid": "message_action_icon_checked"
      }) : reactJsxRuntimeCoreReexport.jsx(ringOutlinedIcon.RingOutlinedIcon, {}),
      onClick: () => {
        h();
        o();
      },
      children: n("message_long_press_copy")
    });
  };
  class g {
    constructor() {
      h(this, "pluginIdentifier", messageCopyAction.messageCopyAction);
      h(this, "ButtonContentGroups", [m]);
      h(this, "DropdownItemContentGroups", [v]);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultCopySendMessageActionButtonPlugin: function () {
      return g;
    }
  });
}