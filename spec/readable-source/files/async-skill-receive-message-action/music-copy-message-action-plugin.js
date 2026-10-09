// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'copyMessageHandler'
// - Resolved require(13316) to 'copy-message-handler'
// - Renamed variable 'r' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 'o' to 'iconButtonWithTooltip'
// - Resolved require(158007) to 'icon-button-with-tooltip'
// - Renamed variable 'a' to 'messageContentUtils'
// - Resolved require(976464) to 'message-content-utils'
// - Renamed variable 'l' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'useCheckedStateHook'
// - Resolved require(28538) to 'use-checked-state-hook'
// - Renamed variable 'd' to 'checkCircleIcon'
// - Resolved require(724493) to 'check-circle-icon'
// - Renamed variable 'c' to 'ringOutlinedIcon'
// - Resolved require(112124) to 'ring-outlined-icon'
// - Renamed variable 'u' to 'musicMessageActionSymbol'
// - Resolved require(328267) to 'music-message-action-symbol'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'U' to 'useCheckedState' (module 28538)
// - Updated imported property 'Sh' to 'getLyricsText' (module 976464)
// - Updated imported property 'c' to 'handleCopyMessage' (module 13316)
// - Updated imported property 'K' to 'IconButton' (module 158007)
// - Updated imported property 'N' to 'CheckCircleIcon' (module 724493)
// - Updated imported property 'x' to 'RingOutlinedIcon' (module 112124)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'X' to 'MusicMessageAction' (module 328267)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 408599
         */
module.exports = function (module, exports, require) {
  var copyMessageHandler = require("copy-message-handler") /*id: 13316*/;
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useCheckedStateHook = require("use-checked-state-hook") /*id: 28538*/;
  var checkCircleIcon = require("check-circle-icon") /*id: 724493*/;
  var ringOutlinedIcon = require("ring-outlined-icon") /*id: 112124*/;
  var musicMessageActionSymbol = require("music-message-action-symbol") /*id: 328267*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function p(e, t, n) {
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
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      setChecked: r,
      checked: u
    } = useCheckedStateHook.useCheckedState();
    let p = messageContentUtils.getLyricsText(t) || "";
    let f = copyMessageHandler.handleCopyMessage(t, p);
    return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
      tooltipContent: n("message_long_press_copy"),
      "data-testid": "message_action_copy",
      prefix: u ? reactJsxRuntimeCoreReexport.jsx(checkCircleIcon.CheckCircleIcon, {
        "data-testid": "message_action_icon_checked"
      }) : reactJsxRuntimeCoreReexport.jsx(ringOutlinedIcon.RingOutlinedIcon, {}),
      onClick: () => {
        f();
        r();
      }
    });
  };
  let m = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      setChecked: o,
      checked: u
    } = useCheckedStateHook.useCheckedState();
    let p = messageContentUtils.getLyricsText(t) || "";
    let f = copyMessageHandler.handleCopyMessage(t, p);
    return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
      "data-testid": "message_action_copy",
      prefix: u ? reactJsxRuntimeCoreReexport.jsx(checkCircleIcon.CheckCircleIcon, {
        "data-testid": "message_action_icon_checked"
      }) : reactJsxRuntimeCoreReexport.jsx(ringOutlinedIcon.RingOutlinedIcon, {}),
      onClick: () => {
        f();
        o();
      },
      children: n("message_long_press_copy")
    });
  };
  class g {
    constructor() {
      p(this, "pluginIdentifier", musicMessageActionSymbol.MusicMessageAction);
      p(this, "ButtonContentGroups", [f]);
      p(this, "DropdownItemContentGroups", [m]);
    }
  }
  require.r(exports);
  require.d(exports, {
    MusicCopyReceiveMessageActionButtonPlugin: function () {
      return g;
    }
  });
}