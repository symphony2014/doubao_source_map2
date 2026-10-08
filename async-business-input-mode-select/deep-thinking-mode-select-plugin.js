// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatAiConstants'
// - Resolved require(447912) to 'chat-ai-constants'
// - Renamed variable 'r' to 'aiCreationGuidanceIcon'
// - Resolved require(99723) to 'ai-creation-guidance-icon'
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
// - Renamed variable 'p' to 'menuTagExposureHandler'
// - Resolved require(218519) to 'menu-tag-exposure-handler'
// - Renamed variable 'm' to 'aiChatSourceExtractor'
// - Resolved require(268836) to 'ai-chat-source-extractor'
// - Renamed variable 'h' to 'driveUtilsModule_1'
// - Resolved require(671874) to 'drive-utils-module_1'
// - Updated imported property 'z' to 'renderSkillChatInputModeSelectButton' (module 688578)
// - Updated imported property 'u' to 'AiCreationIcon' (module 99723)
// - Updated imported property 'ES' to 'deepThinkMode' (module 447912)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'hH' to 'getCurrentDate' (module 268836)
// - Updated imported property 'd' to 'DropdownMenuSource' (module 671874)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'P' to 'updateMenuTagExpose' (module 218519)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-mode-select.5c979402.js
         * chunkId: 32786
         * moduleId: 656717
         */
module.exports = function (module, exports, require) {
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var aiCreationGuidanceIcon = require("ai-creation-guidance-icon") /*id: 99723*/;
  var skillChatInputModeSelectButton = require("skill-chat-input-mode-select-button") /*id: 688578*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      modeItem: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(skillChatInputModeSelectButton.renderSkillChatInputModeSelectButton, {
      icon: reactJsxRuntimeCoreReexport.jsx(aiCreationGuidanceIcon.AiCreationIcon, {}),
      title: (n == null ? undefined : n.name) ?? "",
      value: chatAiConstants.deepThinkMode.DeepThinkOff
    });
  };
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var menuTagExposureHandler = require("menu-tag-exposure-handler") /*id: 218519*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var driveUtilsModule_1 = require("drive-utils-module_1") /*id: 671874*/;
  let f = e => {
    let {
      skill: t,
      modeItem: n
    } = e;
    let o = chatStoreManager.useStoreSelector("chatInputStore", e => {
      return e.modeSelectValue ?? "0";
    }, deepEqualityUtil.deepEqual);
    reactCoreLibraryReexport.useEffect(() => {
      let t = chatStoreManager.getStore("deepThinkingControlStore");
      let n = t.getState().deepThinkingConfigs?.currentDay;
      if (n && n !== aiChatSourceExtractor.getCurrentDate()) {
        t.setState({
          deepThinkingConfigs: {}
        });
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(driveUtilsModule_1.DropdownMenuSource, {
      ...e,
      icon: reactJsxRuntimeCoreReexport.jsx(aiCreationGuidanceIcon.AiCreationIcon, {}),
      active: o === String(chatAiConstants.deepThinkMode.DeepThinkOff),
      onClick: () => {
        var e;
        teaAnalyticsEventTracker.trackEvent("deep_thinking_switch_click", {
          skill_id: (t == null ? undefined : (e = t.skill_type) === null || e === undefined ? undefined : e.toString()) ?? null,
          skill_name: skillTypeMappings.getSkillName(t == null ? undefined : t.skill_type),
          click_status: "close"
        });
        menuTagExposureHandler.updateMenuTagExpose(n);
        chatStoreManager.getStore("chatInputStore").setState(() => ({
          modeSelectValue: String(chatAiConstants.deepThinkMode.DeepThinkOff)
        }));
      }
    });
  };
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
  class v {
    constructor() {
      g(this, "Content", f);
      g(this, "SelectedContent", a);
      g(this, "params", {
        value: chatAiConstants.deepThinkMode.DeepThinkOff
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    SpeedModeSelectPlugin: function () {
      return v;
    }
  });
}