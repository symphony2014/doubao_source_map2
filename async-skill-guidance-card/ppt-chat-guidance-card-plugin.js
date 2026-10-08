// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'asyncSkillGuidanceCard_1'
// - Resolved require(171032) to 'async-skill-guidance-card_1'
// - Renamed variable 'a' to 'chatStatusActionTypes'
// - Resolved require(757046) to 'chat-status-action-types'
// - Renamed variable 'l' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'u' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 's' to 'rtlChatSparkleIcon'
// - Resolved require(944755) to 'rtl-chat-sparkle-icon'
// - Renamed variable 'c' to 'pptEditorController'
// - Resolved require(523959) to 'ppt-editor-controller'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'P' to 'SkillCardConfig' (module 171032)
// - Updated imported property 'y' to 'PPTEditorController' (module 523959)
// - Updated imported property 'Z' to 'RtlChatSparkleIcon' (module 944755)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'u' to 'chatActionTypes' (module 757046)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-card.1870af5c.js
         * chunkId: 48185
         * moduleId: 485132
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var n = classnamesUtils;
  var asyncSkillGuidanceCard_1 = require("async-skill-guidance-card_1") /*id: 171032*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var rtlChatSparkleIcon = require("rtl-chat-sparkle-icon") /*id: 944755*/;
  var pptEditorController = require("ppt-editor-controller") /*id: 523959*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function f(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class p extends asyncSkillGuidanceCard_1.SkillCardConfig {
    getTitleKey() {
      return "skill_aippt_title";
    }
    getDescKey() {
      return "onboarding_aippt_description";
    }
    constructor(...e) {
      super(...e);
      f(this, "skillType", chatAppEnums.SkillType.AiPPT);
      f(this, "_chatInputService", new pptEditorController.PPTEditorController());
      f(this, "_route", "/chat/aippt");
      f(this, "renderIcon", e => {
        let {
          className: t
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(rtlChatSparkleIcon.RtlChatSparkleIcon, {
          className: n("icon-_o7odo", t)
        });
      });
      f(this, "renderTitle", e => {
        let {
          renderTitleRaw: t
        } = e;
        return t();
      });
      f(this, "renderDesc", e => {
        let {
          renderDescRaw: t
        } = e;
        return t();
      });
      f(this, "onClick", e => {
        let {
          type: t,
          conversationId: r,
          navigate: i
        } = e;
        if (t === "open_skill" && r) {
          chatStoreManager.getStoreState("chatInputStore").updateActiveSkillTypeMap(r, this.skillType, chatStatusActionTypes.chatActionTypes.ClickSkill);
          this._chatInputService.focusOnEditor();
        } else if (t === "navigate" && i) {
          i(this._route, {
            state: {
              from: "guidance_page"
            }
          });
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    PptChatGuidanceCardPlugin: function () {
      return p;
    }
  });
}