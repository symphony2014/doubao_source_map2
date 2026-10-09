// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'asyncChatGithubRepoBtn'
// - Resolved require(562891) to 'async-chat-github-repo-btn'
// - Renamed variable 'a' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'o' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'l' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 's' to 'reactFunctionMemoHook'
// - Resolved require(983998) to 'react-function-memo-hook'
// - Renamed variable 'c' to 'codingSkillStoreModule'
// - Resolved require(528099) to 'coding-skill-store-module'
// - Renamed variable 'u' to 'codingSkillChatInput_3'
// - Resolved require(117608) to 'coding-skill-chat-input_3'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'n' to 'useCodingChatInput' (module 117608)
// - Updated imported property 'mr' to 'codingSkillStore' (module 528099)
// - Updated imported property 'Z' to 'useMemoizedCallback' (module 983998)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'c' to 'ChatGithubRepoBtn' (module 562891)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 822964
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncChatGithubRepoBtn = require("async-chat-github-repo-btn") /*id: 562891*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  var codingSkillChatInput_3 = require("coding-skill-chat-input_3") /*id: 117608*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    var t;
    let {
      isOverflow: n,
      isToolButtonSmall: p,
      scene: h,
      trackParams: f,
      skill: m
    } = e;
    let {
      isDevMode: g
    } = codingSkillChatInput_3.useCodingChatInput();
    let v = (m == null ? undefined : (t = m.skill_type) === null || t === undefined ? undefined : t.toString()) || "";
    let _ = (m == null ? undefined : m.skill_type) || chatAppEnums.SkillType.CodeAssistant;
    let [b] = codingSkillStoreModule.codingSkillStore(e => [e.toggleGithubModalVisible]);
    let y = reactFunctionMemoHook.useMemoizedCallback(e => {
      var t;
      var n;
      teaAnalyticsEventTracker.trackEvent("pin_button_click", {
        button_name: e,
        skill_id: v || chatAppEnums.SkillType.CodeAssistant,
        skill_name: skillTypeMappings.getSkillName(_ || chatAppEnums.SkillType.CodeAssistant) || "",
        click_from: "chat_enter_bar",
        code_scene: g ? "build" : "chat",
        current_page: ((n = location) === null || n === undefined ? undefined : (t = n.href) === null || t === undefined ? undefined : t.includes("coding")) ? "code_assistant_detail_page" : "chat"
      });
    });
    let w = reactCoreLibraryReexport.useCallback((e, t) => {
      b(e, t);
    }, [b]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsx(asyncChatGithubRepoBtn.ChatGithubRepoBtn, {
        isOverflow: n,
        isToolButtonSmall: p,
        scene: h,
        trackParams: f,
        uploadTeaReport: y,
        toggleGithubModalVisible: w
      })
    });
  };
  class h {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: p,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = p;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    CodingAddGithubPlugin: function () {
      return h;
    }
  });
}