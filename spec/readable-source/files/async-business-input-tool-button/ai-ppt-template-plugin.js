// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'asyncSkillChatInputBtn'
// - Resolved require(159621) to 'async-skill-chat-input-btn'
// - Renamed variable 'r' to 'chatLauncherConfigHooks'
// - Resolved require(317711) to 'chat-launcher-config-hooks'
// - Renamed variable 'a' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'o' to 'rtlToolIconComponent'
// - Resolved require(701268) to 'rtl-tool-icon-component'
// - Renamed variable 'l' to 'threadL2Icon'
// - Resolved require(173285) to 'thread-l2-icon'
// - Renamed variable 's' to 'aiPptTemplateStore_1'
// - Resolved require(698449) to 'ai-ppt-template-store_1'
// - Renamed variable 'c' to 'aiPptTemplateSelectorComponent'
// - Resolved require(410801) to 'ai-ppt-template-selector-component'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Vk' to 'useSkillToolLayout' (module 317711)
// - Updated imported property 'zm' to 'aiPptTemplateStore' (module 698449)
// - Updated imported property 'g' to 'SkillChatInputBtn' (module 159621)
// - Updated imported property 'p' to 'ThreadL2Icon' (module 173285)
// - Updated imported property 'Z' to 'RtlToolIcon' (module 701268)
// - Updated imported property 'Z' to 'AiPptTemplateSelectorComponent' (module 410801)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 640206
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var asyncSkillChatInputBtn = require("async-skill-chat-input-btn") /*id: 159621*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var rtlToolIconComponent = require("rtl-tool-icon-component") /*id: 701268*/;
  var threadL2Icon = require("thread-l2-icon") /*id: 173285*/;
  var aiPptTemplateStore_1 = require("ai-ppt-template-store_1") /*id: 698449*/;
  var aiPptTemplateSelectorComponent = require("ai-ppt-template-selector-component") /*id: 410801*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var d = e => {
    let {
      isOverflow: t,
      isToolButtonSmall: n,
      scene: d,
      chatType: p
    } = e;
    let h = i18nTranslationUtils.useTranslationWithFallback();
    let {
      skillToolUIV2: f
    } = chatLauncherConfigHooks.useSkillToolLayout(d);
    let {
      setShowModule: m,
      enableTemplate: g,
      setChatType: v
    } = aiPptTemplateStore_1.aiPptTemplateStore(e => ({
      setShowModule: e.setShowModule,
      enableTemplate: e.enableTemplate,
      setChatType: e.setChatType
    }));
    if (g) {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInputBtn.SkillChatInputBtn, {
          small: n,
          isOverflow: t,
          scene: d,
          onClick: () => {
            v(p);
            m(true);
          },
          leadingIcon: f ? reactJsxRuntimeCoreReexport.jsx(threadL2Icon.ThreadL2Icon, {}) : reactJsxRuntimeCoreReexport.jsx(rtlToolIconComponent.RtlToolIcon, {
            className: "text-16"
          }),
          "data-testid": "slides-template-tool-button",
          children: h("slides_mainPage_inputBox_template", "模板")
        }), reactJsxRuntimeCoreReexport.jsx(aiPptTemplateSelectorComponent.AiPptTemplateSelectorComponent, {})]
      });
    } else {
      return null;
    }
  };
  class p {
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
          value: d,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = d;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    AIPPTTemplatePlugin: function () {
      return p;
    }
  });
}