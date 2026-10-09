// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatContentBlockFormatter'
// - Resolved require(778320) to 'chat-content-block-formatter'
// - Renamed variable 'i' to 'copyMessageHandler'
// - Resolved require(13316) to 'copy-message-handler'
// - Renamed variable 'o' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 'a' to 'iconButtonWithTooltip'
// - Resolved require(158007) to 'icon-button-with-tooltip'
// - Renamed variable 's' to 'messageContentUtils'
// - Resolved require(976464) to 'message-content-utils'
// - Renamed variable 'l' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'useCheckedStateHook'
// - Resolved require(28538) to 'use-checked-state-hook'
// - Renamed variable 'd' to 'svgCheckIcon'
// - Resolved require(362340) to 'svg-check-icon'
// - Renamed variable 'c' to 'ringOutlinedIcon'
// - Resolved require(112124) to 'ring-outlined-icon'
// - Renamed variable 'f' to 'extractMessageContent'
// - Resolved require(562040) to 'extract-message-content'
// - Renamed variable 'p' to 'receiveMessageActionCopy'
// - Resolved require(531079) to 'receive-message-action-copy'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'U' to 'useCheckedState' (module 28538)
// - Updated imported property 'ER' to 'cleanCodeTypeAttr' (module 778320)
// - Updated imported property 'Y' to 'extractMessageContent' (module 562040)
// - Updated imported property 'c' to 'handleCopyMessage' (module 13316)
// - Updated imported property 'K' to 'IconButton' (module 158007)
// - Updated imported property 's' to 'CheckIcon' (module 362340)
// - Updated imported property 'x' to 'RingOutlinedIcon' (module 112124)
// - Updated imported property 'UD' to 'formatMessage' (module 976464)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'h' to 'messageActionCopy' (module 531079)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action.abe50cdd.js
         * chunkId: 72995
         * moduleId: 997628
         */
module.exports = function (module, exports, require) {
  var chatContentBlockFormatter = require("chat-content-block-formatter") /*id: 778320*/;
  var copyMessageHandler = require("copy-message-handler") /*id: 13316*/;
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useCheckedStateHook = require("use-checked-state-hook") /*id: 28538*/;
  var svgCheckIcon = require("svg-check-icon") /*id: 362340*/;
  var ringOutlinedIcon = require("ring-outlined-icon") /*id: 112124*/;
  var extractMessageContent = require("extract-message-content") /*id: 562040*/;
  var receiveMessageActionCopy = require("receive-message-action-copy") /*id: 531079*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function m(e, t, n) {
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
  let v = e => {
    let {
      message: n,
      reportParams: o
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    let {
      setChecked: p,
      checked: m
    } = useCheckedStateHook.useCheckedState();
    let v = chatContentBlockFormatter.cleanCodeTypeAttr(extractMessageContent.extractMessageContent(n) ?? "");
    let g = copyMessageHandler.handleCopyMessage(n, v, o);
    return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
      tooltipContent: s("message_long_press_copy"),
      "data-testid": "message_action_copy",
      prefix: m ? reactJsxRuntimeCoreReexport.jsx(svgCheckIcon.CheckIcon, {
        "data-testid": "message_action_icon_checked"
      }) : reactJsxRuntimeCoreReexport.jsx(ringOutlinedIcon.RingOutlinedIcon, {}),
      onClick: () => {
        g();
        p();
      }
    });
  };
  let g = e => {
    let {
      message: t,
      reportParams: n
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let {
      setChecked: a,
      checked: f
    } = useCheckedStateHook.useCheckedState();
    let p = t.tts_content || t && messageContentUtils.formatMessage(t) || "";
    let m = copyMessageHandler.handleCopyMessage(t, p, n);
    return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
      "data-testid": "message_action_copy",
      prefix: f ? reactJsxRuntimeCoreReexport.jsx(svgCheckIcon.CheckIcon, {
        "data-testid": "message_action_icon_checked"
      }) : reactJsxRuntimeCoreReexport.jsx(ringOutlinedIcon.RingOutlinedIcon, {}),
      onClick: () => {
        m();
        a();
      },
      children: r("message_long_press_copy")
    });
  };
  class y {
    constructor() {
      m(this, "pluginIdentifier", receiveMessageActionCopy.messageActionCopy);
      m(this, "ButtonContentGroups", [v]);
      m(this, "DropdownItemContentGroups", [g]);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultCopyReceiveMessageActionButtonPlugin: function () {
      return y;
    }
  });
}