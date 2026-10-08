// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'asyncSkillGuidanceCard_1'
// - Resolved require(171032) to 'async-skill-guidance-card_1'
// - Renamed variable 'a' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'l' to 'chatRtlIcon'
// - Resolved require(472105) to 'chat-rtl-icon'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'voiceCallFlowStateManager'
// - Resolved require(408567) to 'voice-call-flow-state-manager'
// - Renamed variable 'c' to 'asyncSkillBarItemStyles'
// - Resolved require(37328) to 'async-skill-bar-item-styles'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable '_' to 'asyncSkillBarItem'
// - Resolved require(336984) to 'async-skill-bar-item'
// - Updated imported property 'Z' to 'styles' (module 37328)
// - Updated imported property '_6' to 'getVoiceCallState' (module 408567)
// - Updated imported property 'lN' to 'useSyncVoiceCallState' (module 408567)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'P' to 'SkillCardConfig' (module 171032)
// - Updated imported property 'Z' to 'ChatRtlIcon' (module 472105)
// - Updated imported property 'oX' to 'AsyncSkillBarItem' (module 336984)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-card.1870af5c.js
         * chunkId: 48185
         * moduleId: 931606
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var n = classnamesUtils;
  var asyncSkillGuidanceCard_1 = require("async-skill-guidance-card_1") /*id: 171032*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatRtlIcon = require("chat-rtl-icon") /*id: 472105*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var voiceCallFlowStateManager = require("voice-call-flow-state-manager") /*id: 408567*/;
  var asyncSkillBarItemStyles = require("async-skill-bar-item-styles") /*id: 37328*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      children: t,
      excludeMargin: r = false
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: n(asyncSkillBarItemStyles.styles["custom-tag"], r && "!m-0"),
      children: t
    });
  };
  let p = e => {
    let {
      sourceFrom: t,
      excludeMargin: r
    } = e;
    let i = voiceCallFlowStateManager.getVoiceCallState(t);
    let n = i18nTranslationUtils.useTranslationWithFallback();
    voiceCallFlowStateManager.useSyncVoiceCallState(t);
    if (i) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(f, {
        excludeMargin: r,
        children: n("web_voice_call_entry_new")
      });
    }
  };
  var asyncSkillBarItem = require("async-skill-bar-item") /*id: 336984*/;
  function h(e, t, r) {
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
  class v extends asyncSkillGuidanceCard_1.SkillCardConfig {
    getTitleKey() {
      return "cici_desktop_call_audio_call";
    }
    getDescKey() {
      return "web_voice_call_intro_description_short";
    }
    constructor(...e) {
      super(...e);
      h(this, "skillType", chatAppEnums.SkillType.VoiceCall);
      h(this, "renderIcon", e => {
        let {
          className: t
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(chatRtlIcon.ChatRtlIcon, {
          className: n(t)
        });
      });
      h(this, "renderTitle", e => {
        let {
          renderTitleRaw: t
        } = e;
        return t({
          renderChildren: () => reactJsxRuntimeCoreReexport.jsx(p, {
            sourceFrom: "guidance"
          })
        });
      });
      h(this, "render", e => {
        let {
          renderRaw: t
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(asyncSkillBarItem.AsyncSkillBarItem, {
          type: "withModal",
          from: "guidance",
          position: "right",
          children: t({
            className: "text-[#27CE6E]"
          })
        }, chatAppEnums.SkillType.VoiceCall);
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    VoiceCallChatGuidanceCardPlugin: function () {
      return v;
    }
  });
}