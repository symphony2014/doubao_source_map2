// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatAiConstants'
// - Resolved require(447912) to 'chat-ai-constants'
// - Renamed variable 'r' to 'locationPinSvgIcon'
// - Resolved require(575962) to 'location-pin-svg-icon'
// - Renamed variable 'o' to 'skillChatInputModeSelectButton'
// - Resolved require(688578) to 'skill-chat-input-mode-select-button'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'd' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 's' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 'c' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'u' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable '_' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'p' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'm' to 'menuTagExposureHandler'
// - Resolved require(218519) to 'menu-tag-exposure-handler'
// - Renamed variable 'h' to 'businessInputLimitHook'
// - Resolved require(429337) to 'business-input-limit-hook'
// - Renamed variable 'f' to 'driveUtilsModule_1'
// - Resolved require(671874) to 'drive-utils-module_1'
// - Updated imported property 'z' to 'renderSkillChatInputModeSelectButton' (module 688578)
// - Updated imported property 'I' to 'LocationPinIcon' (module 575962)
// - Updated imported property 'ES' to 'deepThinkMode' (module 447912)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'X' to 'useBusinessLimit' (module 429337)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'd' to 'DropdownMenuSource' (module 671874)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'P' to 'updateMenuTagExpose' (module 218519)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-mode-select.5c979402.js
         * chunkId: 32786
         * moduleId: 219134
         */
module.exports = function (module, exports, require) {
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var locationPinSvgIcon = require("location-pin-svg-icon") /*id: 575962*/;
  var skillChatInputModeSelectButton = require("skill-chat-input-mode-select-button") /*id: 688578*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      modeItem: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(skillChatInputModeSelectButton.renderSkillChatInputModeSelectButton, {
      icon: reactJsxRuntimeCoreReexport.jsx(locationPinSvgIcon.LocationPinIcon, {}),
      title: (n == null ? undefined : n.name) ?? "",
      value: chatAiConstants.deepThinkMode.DeepThinkOn,
      highLight: true
    });
  };
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var menuTagExposureHandler = require("menu-tag-exposure-handler") /*id: 218519*/;
  var businessInputLimitHook = require("business-input-limit-hook") /*id: 429337*/;
  var driveUtilsModule_1 = require("drive-utils-module_1") /*id: 671874*/;
  let g = e => {
    let {
      skill: t,
      modeItem: n
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let {
      getMenuListSubTitle: a,
      isMenuTypeLimited: g,
      handleLimited: v,
      handleUpdateExceedConfig: x
    } = businessInputLimitHook.useBusinessLimit();
    let b = g(chatAiConstants.deepThinkMode.DeepThinkOn);
    let S = b ? a(chatAiConstants.deepThinkMode.DeepThinkOn) : "";
    let w = chatStoreManager.useStoreSelector("chatInputStore", e => {
      return e.modeSelectValue ?? "0";
    }, deepEqualityUtil.deepEqual);
    let k = reactCoreLibraryReexport.useMemo(() => b ? o("expert_model_desc_limit_reached") : "", []);
    reactCoreLibraryReexport.useEffect(() => {
      x();
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(driveUtilsModule_1.DropdownMenuSource, {
      ...e,
      limitSubTitle: S,
      toolTips: k,
      disabled: b,
      icon: reactJsxRuntimeCoreReexport.jsx(locationPinSvgIcon.LocationPinIcon, {}),
      active: w === String(chatAiConstants.deepThinkMode.DeepThinkOn),
      onClick: () => {
        var e;
        let o = {
          skill_id: (t == null ? undefined : (e = t.skill_type) === null || e === undefined ? undefined : e.toString()) ?? null,
          skill_name: skillTypeMappings.getSkillName(t == null ? undefined : t.skill_type)
        };
        menuTagExposureHandler.updateMenuTagExpose(n);
        v(chatAiConstants.deepThinkMode.DeepThinkOn);
        if (!b) {
          teaAnalyticsEventTracker.trackEvent("deep_thinking_switch_click", {
            ...o,
            click_status: "open"
          });
          chatStoreManager.getStore("chatInputStore").setState(() => ({
            modeSelectValue: String(chatAiConstants.deepThinkMode.DeepThinkOn)
          }));
        }
      }
    });
  };
  function v(e, t, n) {
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
  class x {
    constructor() {
      v(this, "Content", g);
      v(this, "SelectedContent", a);
      v(this, "params", {
        value: chatAiConstants.deepThinkMode.DeepThinkOn
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    ThinkModeSelectPlugin: function () {
      return x;
    }
  });
}