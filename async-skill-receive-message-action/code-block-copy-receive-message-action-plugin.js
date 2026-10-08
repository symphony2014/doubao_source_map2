// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatContentBlockFormatter'
// - Resolved require(778320) to 'chat-content-block-formatter'
// - Renamed variable 'r' to 'copyMessageHandler'
// - Resolved require(13316) to 'copy-message-handler'
// - Renamed variable 'o' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 'a' to 'iconButtonWithTooltip'
// - Resolved require(158007) to 'icon-button-with-tooltip'
// - Renamed variable 'l' to 'messageContentUtils'
// - Resolved require(976464) to 'message-content-utils'
// - Renamed variable 's' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'd' to 'useCheckedStateHook'
// - Resolved require(28538) to 'use-checked-state-hook'
// - Renamed variable 'c' to 'checkCircleIcon'
// - Resolved require(724493) to 'check-circle-icon'
// - Renamed variable 'u' to 'ringOutlinedIcon'
// - Resolved require(112124) to 'ring-outlined-icon'
// - Renamed variable 'v' to 'chatCopyCodeBlockAction'
// - Resolved require(326234) to 'chat-copy-code-block-action'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'U' to 'useCheckedState' (module 28538)
// - Updated imported property 'Bz' to 'extractContentBlocks' (module 778320)
// - Updated imported property 'c' to 'handleCopyMessage' (module 13316)
// - Updated imported property 'K' to 'IconButton' (module 158007)
// - Updated imported property 'N' to 'CheckCircleIcon' (module 724493)
// - Updated imported property 'x' to 'RingOutlinedIcon' (module 112124)
// - Updated imported property 'UD' to 'formatMessage' (module 976464)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'O' to 'copyCodeBlockAction' (module 326234)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 924884
         */
module.exports = function (module, exports, require) {
  var chatContentBlockFormatter = require("chat-content-block-formatter") /*id: 778320*/;
  var copyMessageHandler = require("copy-message-handler") /*id: 13316*/;
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useCheckedStateHook = require("use-checked-state-hook") /*id: 28538*/;
  var checkCircleIcon = require("check-circle-icon") /*id: 724493*/;
  var ringOutlinedIcon = require("ring-outlined-icon") /*id: 112124*/;
  var chatCopyCodeBlockAction = require("chat-copy-code-block-action") /*id: 326234*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function f(e, t, n) {
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
  let m = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      setChecked: o,
      checked: l
    } = useCheckedStateHook.useCheckedState();
    let v = chatContentBlockFormatter.extractContentBlocks(t) || t.tts_content || "";
    let f = copyMessageHandler.handleCopyMessage(t, v);
    return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
      tooltipContent: n("message_long_press_copy"),
      "data-testid": "message_action_copy",
      prefix: l ? reactJsxRuntimeCoreReexport.jsx(checkCircleIcon.CheckCircleIcon, {
        "data-testid": "message_action_icon_checked"
      }) : reactJsxRuntimeCoreReexport.jsx(ringOutlinedIcon.RingOutlinedIcon, {}),
      onClick: () => {
        f();
        o();
      }
    });
  };
  let g = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      setChecked: i,
      checked: a
    } = useCheckedStateHook.useCheckedState();
    let v = t.tts_content || t && messageContentUtils.formatMessage(t) || "";
    let f = copyMessageHandler.handleCopyMessage(t, v);
    return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
      "data-testid": "message_action_copy",
      prefix: a ? reactJsxRuntimeCoreReexport.jsx(checkCircleIcon.CheckCircleIcon, {
        "data-testid": "message_action_icon_checked"
      }) : reactJsxRuntimeCoreReexport.jsx(ringOutlinedIcon.RingOutlinedIcon, {}),
      onClick: () => {
        f();
        i();
      },
      children: n("message_long_press_copy")
    });
  };
  class h {
    constructor() {
      f(this, "pluginIdentifier", chatCopyCodeBlockAction.copyCodeBlockAction);
      f(this, "ButtonContentGroups", [m]);
      f(this, "DropdownItemContentGroups", [g]);
    }
  }
  require.r(exports);
  require.d(exports, {
    CodeBlockCopyReceiveMessageActionButtonPlugin: function () {
      return h;
    }
  });
}