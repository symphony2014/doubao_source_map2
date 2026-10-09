// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatAiConstants'
// - Resolved require(447912) to 'chat-ai-constants'
// - Renamed variable 'r' to 'reactSvgIconGoogleLogo'
// - Resolved require(203173) to 'react-svg-icon-google-logo'
// - Renamed variable 'o' to 'skillChatInputModeSelectButton'
// - Resolved require(688578) to 'skill-chat-input-mode-select-button'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'd' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 's' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'c' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'u' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable '_' to 'menuTagExposureHandler'
// - Resolved require(218519) to 'menu-tag-exposure-handler'
// - Renamed variable 'p' to 'driveUtilsModule_1'
// - Resolved require(671874) to 'drive-utils-module_1'
// - Updated imported property 'z' to 'renderSkillChatInputModeSelectButton' (module 688578)
// - Updated imported property '$' to 'GoogleLogoIcon' (module 203173)
// - Updated imported property 'ES' to 'deepThinkMode' (module 447912)
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
         * moduleId: 455519
         */
module.exports = function (module, exports, require) {
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var reactSvgIconGoogleLogo = require("react-svg-icon-google-logo") /*id: 203173*/;
  var skillChatInputModeSelectButton = require("skill-chat-input-mode-select-button") /*id: 688578*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      modeItem: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(skillChatInputModeSelectButton.renderSkillChatInputModeSelectButton, {
      icon: reactJsxRuntimeCoreReexport.jsx(reactSvgIconGoogleLogo.GoogleLogoIcon, {}),
      title: (n == null ? undefined : n.name) ?? "",
      value: chatAiConstants.deepThinkMode.DeepThinkAuto
    });
  };
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var menuTagExposureHandler = require("menu-tag-exposure-handler") /*id: 218519*/;
  var driveUtilsModule_1 = require("drive-utils-module_1") /*id: 671874*/;
  let m = e => {
    let {
      skill: t,
      modeItem: n
    } = e;
    let o = chatStoreManager.useStoreSelector("chatInputStore", e => {
      return e.modeSelectValue ?? "0";
    }, deepEqualityUtil.deepEqual);
    return reactJsxRuntimeCoreReexport.jsx(driveUtilsModule_1.DropdownMenuSource, {
      ...e,
      icon: reactJsxRuntimeCoreReexport.jsx(reactSvgIconGoogleLogo.GoogleLogoIcon, {}),
      active: o === String(chatAiConstants.deepThinkMode.DeepThinkAuto),
      onClick: () => {
        var e;
        teaAnalyticsEventTracker.trackEvent("deep_thinking_switch_click", {
          skill_id: (t == null ? undefined : (e = t.skill_type) === null || e === undefined ? undefined : e.toString()) ?? null,
          skill_name: skillTypeMappings.getSkillName(t == null ? undefined : t.skill_type),
          click_status: "auto"
        });
        menuTagExposureHandler.updateMenuTagExpose(n);
        chatStoreManager.getStore("chatInputStore").setState(() => ({
          modeSelectValue: String(chatAiConstants.deepThinkMode.DeepThinkAuto)
        }));
      }
    });
  };
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
  class f {
    constructor() {
      h(this, "Content", m);
      h(this, "SelectedContent", a);
      h(this, "params", {
        value: chatAiConstants.deepThinkMode.DeepThinkAuto
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    AutoModeSelectPlugin: function () {
      return f;
    }
  });
}