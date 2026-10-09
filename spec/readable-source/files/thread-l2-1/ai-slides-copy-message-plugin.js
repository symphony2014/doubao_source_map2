// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'isStringTypeCheck'
// - Resolved require(253558) to 'is-string-type-check'
// - Renamed variable 'l' to 'asyncSkillMessageUtils'
// - Resolved require(200238) to 'async-skill-message-utils'
// - Renamed variable 'r' to 'copyMessageHandler'
// - Resolved require(13316) to 'copy-message-handler'
// - Renamed variable 'o' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 'a' to 'iconButtonWithTooltip'
// - Resolved require(158007) to 'icon-button-with-tooltip'
// - Renamed variable 's' to 'messageContentUtils'
// - Resolved require(976464) to 'message-content-utils'
// - Renamed variable 'c' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'd' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'useCheckedStateHook'
// - Resolved require(28538) to 'use-checked-state-hook'
// - Renamed variable 'p' to 'svgCheckIcon'
// - Resolved require(362340) to 'svg-check-icon'
// - Renamed variable 'm' to 'ringOutlinedIcon'
// - Resolved require(112124) to 'ring-outlined-icon'
// - Renamed variable 'v' to 'aiSlidesAction'
// - Resolved require(576249) to 'ai-slides-action'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'U' to 'useCheckedState' (module 28538)
// - Updated imported property 'UD' to 'formatMessage' (module 976464)
// - Updated imported property 'Z' to 'isString' (module 253558)
// - Updated imported property 'hy' to 'buildSkillTrackParams' (module 200238)
// - Updated imported property 'c' to 'handleCopyMessage' (module 13316)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'K' to 'IconButton' (module 158007)
// - Updated imported property 's' to 'CheckIcon' (module 362340)
// - Updated imported property 'x' to 'RingOutlinedIcon' (module 112124)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'i' to 'aiSlidesAction' (module 576249)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 412358
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var asyncSkillMessageUtils = require("async-skill-message-utils") /*id: 200238*/;
  var copyMessageHandler = require("copy-message-handler") /*id: 13316*/;
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useCheckedStateHook = require("use-checked-state-hook") /*id: 28538*/;
  var svgCheckIcon = require("svg-check-icon") /*id: 362340*/;
  var ringOutlinedIcon = require("ring-outlined-icon") /*id: 112124*/;
  var aiSlidesAction = require("ai-slides-action") /*id: 576249*/;
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
  let g = e => {
    let {
      message: o
    } = e;
    let v = i18nTranslationUtils.useTranslationWithFallback();
    let {
      setChecked: h,
      checked: g
    } = useCheckedStateHook.useCheckedState();
    let _ = o && messageContentUtils.formatMessage(o) || "";
    let b = (o == null ? undefined : o.tts_content) || (isStringTypeCheck.isString(_) ? _ : "") || "";
    let k = asyncSkillMessageUtils.buildSkillTrackParams(o);
    let y = copyMessageHandler.handleCopyMessage(o, b, {
      skill_name: skillTypeMappings.getSkillName(o == null ? undefined : o.skill?.skill_type),
      skill_id: o == null ? undefined : o.skill?.skill_id_no_default,
      ...k
    });
    return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
      tooltipContent: v("message_long_press_copy"),
      "data-testid": "message_action_copy",
      prefix: g ? reactJsxRuntimeCoreReexport.jsx(svgCheckIcon.CheckIcon, {
        "data-testid": "message_action_icon_checked"
      }) : reactJsxRuntimeCoreReexport.jsx(ringOutlinedIcon.RingOutlinedIcon, {}),
      onClick: () => {
        y();
        h();
      }
    });
  };
  let _ = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      setChecked: a,
      checked: c
    } = useCheckedStateHook.useCheckedState();
    let v = t && messageContentUtils.formatMessage(t) || "";
    let h = (t == null ? undefined : t.tts_content) || (isStringTypeCheck.isString(v) ? v : "") || "";
    let g = asyncSkillMessageUtils.buildSkillTrackParams(t);
    let _ = copyMessageHandler.handleCopyMessage(t, h, {
      skill_id: "5000",
      skill_name: "ai_slides",
      ...g
    });
    return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
      "data-testid": "message_action_copy",
      prefix: c ? reactJsxRuntimeCoreReexport.jsx(svgCheckIcon.CheckIcon, {
        "data-testid": "message_action_icon_checked"
      }) : reactJsxRuntimeCoreReexport.jsx(ringOutlinedIcon.RingOutlinedIcon, {}),
      onClick: () => {
        _();
        a();
      },
      children: n("message_long_press_copy")
    });
  };
  class b {
    constructor() {
      h(this, "pluginIdentifier", aiSlidesAction.aiSlidesAction);
      h(this, "ButtonContentGroups", [g]);
      h(this, "DropdownItemContentGroups", [_]);
    }
  }
  require.r(exports);
  require.d(exports, {
    AiSlidesCopyReceiveMessageActionButtonPlugin: function () {
      return b;
    }
  });
}