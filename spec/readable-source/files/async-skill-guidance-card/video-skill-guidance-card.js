// process step : FolderAndFileRename
// process step : TopologicalSinglePass
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
// - Renamed variable 's' to 'documentPlayRtlIcon'
// - Resolved require(795121) to 'document-play-rtl-icon'
// - Renamed variable 'c' to 'videoSkillEditor'
// - Resolved require(802697) to 'video-skill-editor'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'P' to 'SkillCardConfig' (module 171032)
// - Updated imported property 'w' to 'VideoSkillEditor' (module 802697)
// - Updated imported property 'Z' to 'DocumentPlayRtlIcon' (module 795121)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'u' to 'chatActionTypes' (module 757046)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-card.1870af5c.js
         * chunkId: 48185
         * moduleId: 41838
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var n = classnamesUtils;
  var asyncSkillGuidanceCard_1 = require("async-skill-guidance-card_1") /*id: 171032*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var documentPlayRtlIcon = require("document-play-rtl-icon") /*id: 795121*/;
  var videoSkillEditor = require("video-skill-editor") /*id: 802697*/;
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
      return "skill_video_title";
    }
    getDescKey() {
      return "onboarding_video_description";
    }
    constructor(...e) {
      super(...e);
      f(this, "skillType", chatAppEnums.SkillType.VideoGeneration);
      f(this, "_chatInputService", new videoSkillEditor.VideoSkillEditor());
      f(this, "_route", "/chat/create-video");
      f(this, "renderIcon", e => {
        let {
          className: t
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(documentPlayRtlIcon.DocumentPlayRtlIcon, {
          className: n(t, "text-[#f92d20] !text-16 p-3")
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
    VideoChatGuidanceCardPlugin: function () {
      return p;
    }
  });
}