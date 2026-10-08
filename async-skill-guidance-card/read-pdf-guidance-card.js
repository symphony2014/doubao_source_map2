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
// - Renamed variable 's' to 'rtlChatSparkleIcon_1'
// - Resolved require(749684) to 'rtl-chat-sparkle-icon_1'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'p' to 'skillEditorManager'
// - Resolved require(653890) to 'skill-editor-manager'
// - Updated imported property 'P' to 'SkillCardConfig' (module 171032)
// - Updated imported property 'D' to 'SkillEditorManager' (module 653890)
// - Updated imported property 'Z' to 'RtlChatSparkleIcon' (module 749684)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'u' to 'chatActionTypes' (module 757046)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-card.1870af5c.js
         * chunkId: 48185
         * moduleId: 904719
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var n = classnamesUtils;
  var asyncSkillGuidanceCard_1 = require("async-skill-guidance-card_1") /*id: 171032*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var rtlChatSparkleIcon_1 = require("rtl-chat-sparkle-icon_1") /*id: 749684*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      renderTitleRaw: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: t({
        renderChildren: () => undefined
      })
    });
  };
  let f = e => {
    let {
      renderDescRaw: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: t({
        desc: undefined
      })
    });
  };
  var skillEditorManager = require("skill-editor-manager") /*id: 653890*/;
  function _(e, t, r) {
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
  class h extends asyncSkillGuidanceCard_1.SkillCardConfig {
    getTitleKey() {
      return "skill_readPdf_btn_immersive";
    }
    getDescKey() {
      return "onboarding_reading_description";
    }
    constructor(...e) {
      super(...e);
      _(this, "skillType", chatAppEnums.SkillType.ReadPDF);
      _(this, "_chatInputService", new skillEditorManager.SkillEditorManager());
      _(this, "_route", "/chat/chat-with-doc");
      _(this, "renderIcon", e => {
        let {
          className: t
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(rtlChatSparkleIcon_1.RtlChatSparkleIcon, {
          className: n("text-[#f92d20]", t)
        });
      });
      _(this, "renderTitle", e => reactJsxRuntimeCoreReexport.jsx(d, {
        ...e
      }));
      _(this, "renderDesc", e => reactJsxRuntimeCoreReexport.jsx(f, {
        ...e
      }));
      _(this, "onClick", e => {
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
    ReadPdfChatGuidanceCardPlugin: function () {
      return h;
    }
  });
}