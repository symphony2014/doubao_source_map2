// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'asyncSkillGuidanceCard_1'
// - Resolved require(171032) to 'async-skill-guidance-card_1'
// - Renamed variable 'a' to 'chatStatusActionTypes'
// - Resolved require(757046) to 'chat-status-action-types'
// - Renamed variable 'l' to 'chatViewConstants'
// - Resolved require(528191) to 'chat-view-constants'
// - Renamed variable 'u' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 's' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'c' to 'chatRtlIconComponent_1'
// - Resolved require(524284) to 'chat-rtl-icon-component_1'
// - Renamed variable 'd' to 'codingSkillEditorController'
// - Resolved require(154313) to 'coding-skill-editor-controller'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'P' to 'SkillCardConfig' (module 171032)
// - Updated imported property 'e' to 'CodingSkillEditor' (module 154313)
// - Updated imported property 'Z' to 'ChatRtlIcon' (module 524284)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'u' to 'chatActionTypes' (module 757046)
// - Updated imported property 'M' to 'chatViewConstants' (module 528191)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-card.1870af5c.js
         * chunkId: 48185
         * moduleId: 630297
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var n = classnamesUtils;
  var asyncSkillGuidanceCard_1 = require("async-skill-guidance-card_1") /*id: 171032*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatViewConstants = require("chat-view-constants") /*id: 528191*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatRtlIconComponent_1 = require("chat-rtl-icon-component_1") /*id: 524284*/;
  var codingSkillEditorController = require("coding-skill-editor-controller") /*id: 154313*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function p(e, t, r) {
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
  class _ extends asyncSkillGuidanceCard_1.SkillCardConfig {
    getTitleKey() {
      return "cici_web_ai_coding_skill_title";
    }
    getDescKey() {
      return "cici_web_ai_coding_landing_text";
    }
    constructor(...e) {
      super(...e);
      p(this, "skillType", chatAppEnums.SkillType.CodeAssistant);
      p(this, "_chatInputService", new codingSkillEditorController.CodingSkillEditor());
      p(this, "_route", "/chat/coding");
      p(this, "renderIcon", e => {
        let {
          className: t
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(chatRtlIconComponent_1.ChatRtlIcon, {
          className: n("text-[#9952E1]", t)
        });
      });
      p(this, "onClick", e => {
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
              from: chatViewConstants.chatViewConstants.GUIDANCE_PAGE
            }
          });
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    CodingAssistantChatGuidanceCardPlugin: function () {
      return _;
    }
  });
}