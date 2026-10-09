// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'isStringTypeCheck'
// - Resolved require(253558) to 'is-string-type-check'
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
// - Renamed variable 'c' to 'rtlChatCheckIconComponent'
// - Resolved require(690527) to 'rtl-chat-check-icon-component'
// - Renamed variable 'u' to 'noteOutlinedIcon'
// - Resolved require(356739) to 'note-outlined-icon'
// - Renamed variable 'v' to 'svgCheckIcon'
// - Resolved require(362340) to 'svg-check-icon'
// - Renamed variable 'p' to 'ringOutlinedIcon'
// - Resolved require(112124) to 'ring-outlined-icon'
// - Renamed variable 'f' to 'superTaskActionSymbol'
// - Resolved require(249422) to 'super-task-action-symbol'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'U' to 'useCheckedState' (module 28538)
// - Updated imported property 'UD' to 'formatMessage' (module 976464)
// - Updated imported property 'Z' to 'isString' (module 253558)
// - Updated imported property 'c' to 'handleCopyMessage' (module 13316)
// - Updated imported property 'K' to 'IconButton' (module 158007)
// - Updated imported property 's' to 'CheckIcon' (module 362340)
// - Updated imported property 'x' to 'RingOutlinedIcon' (module 112124)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'Z' to 'RtlChatCheckIcon' (module 690527)
// - Updated imported property 'Z' to 'NoteOutlinedIcon' (module 356739)
// - Updated imported property '$' to 'superTaskAction' (module 249422)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 866298
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var copyMessageHandler = require("copy-message-handler") /*id: 13316*/;
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useCheckedStateHook = require("use-checked-state-hook") /*id: 28538*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var noteOutlinedIcon = require("note-outlined-icon") /*id: 356739*/;
  var svgCheckIcon = require("svg-check-icon") /*id: 362340*/;
  var ringOutlinedIcon = require("ring-outlined-icon") /*id: 112124*/;
  var superTaskActionSymbol = require("super-task-action-symbol") /*id: 249422*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function g(e, t, n) {
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
  let h = e => {
    var o;
    let {
      message: c
    } = e;
    let u = i18nTranslationUtils.useTranslationWithFallback();
    let {
      setChecked: f,
      checked: g
    } = useCheckedStateHook.useCheckedState();
    let h = c && messageContentUtils.formatMessage(c) || "";
    let _ = (c == null ? undefined : c.tts_content) || (isStringTypeCheck.isString(h) ? h : "") || "";
    let b = copyMessageHandler.handleCopyMessage(c, _, {
      super_task_id: (c == null ? undefined : c.async_task?.id) || "",
      skill_name: "super_task",
      super_task_mode: (c == null ? undefined : (o = c.verbose) === null || o === undefined ? undefined : o.super_task?.supertask_task_type) === "0" ? "search_task" : "complex_task"
    });
    return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
      tooltipContent: u("message_long_press_copy"),
      "data-testid": "message_action_copy",
      prefix: g ? reactJsxRuntimeCoreReexport.jsx(svgCheckIcon.CheckIcon, {
        "data-testid": "message_action_icon_checked"
      }) : reactJsxRuntimeCoreReexport.jsx(ringOutlinedIcon.RingOutlinedIcon, {}),
      onClick: () => {
        b();
        f();
      }
    });
  };
  let _ = e => {
    var a;
    let {
      message: v
    } = e;
    let p = i18nTranslationUtils.useTranslationWithFallback();
    let {
      setChecked: f,
      checked: g
    } = useCheckedStateHook.useCheckedState();
    let h = v && messageContentUtils.formatMessage(v) || "";
    let _ = (v == null ? undefined : v.tts_content) || (isStringTypeCheck.isString(h) ? h : "") || "";
    let b = copyMessageHandler.handleCopyMessage(v, _, {
      super_task_id: (v == null ? undefined : v.async_task?.id) || "",
      super_task_mode: (v == null ? undefined : (a = v.verbose) === null || a === undefined ? undefined : a.super_task?.supertask_task_type) === "0" ? "search_task" : "complex_task"
    });
    return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
      "data-testid": "message_action_copy",
      prefix: g ? reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {
        "data-testid": "message_action_icon_checked",
        className: "p-2 text-16"
      }) : reactJsxRuntimeCoreReexport.jsx(noteOutlinedIcon.NoteOutlinedIcon, {
        className: "p-2 text-16"
      }),
      onClick: () => {
        b();
        f();
      },
      children: p("message_long_press_copy")
    });
  };
  class b {
    constructor() {
      g(this, "pluginIdentifier", superTaskActionSymbol.superTaskAction);
      g(this, "ButtonContentGroups", [h]);
      g(this, "DropdownItemContentGroups", [_]);
    }
  }
  require.r(exports);
  require.d(exports, {
    SuperTaskCopyReceiveMessageActionButtonPlugin: function () {
      return b;
    }
  });
}