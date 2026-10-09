// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'skillChatInputEngine'
// - Resolved require(109888) to 'skill-chat-input-engine'
// - Renamed variable 'i' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'a' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'o' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'l' to 'chatCanvasExpandChecker'
// - Resolved require(823556) to 'chat-canvas-expand-checker'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'nC' to 'useEditorValue' (module 411117)
// - Updated imported property 'RL' to 'setEditorValue' (module 411117)
// - Updated imported property 'M' to 'shouldExpandChatCanvas' (module 823556)
// - Updated imported property 'd' to 'useChatInputEngine' (module 109888)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 504827
         */
module.exports = function (module, exports, require) {
  var skillChatInputEngine = require("skill-chat-input-engine") /*id: 109888*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatCanvasExpandChecker = require("chat-canvas-expand-checker") /*id: 823556*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      className: t,
      chatId: r,
      onChange: u,
      onBlur: d,
      skill: c,
      controllerRef: p,
      handleKeyDown: f
    } = e;
    let m = i18nTranslationUtils.useTranslationWithFallback();
    let h = chatInputStoreHelpers.useEditorValue();
    let g = chatCanvasExpandChecker.shouldExpandChatCanvas();
    let {
      renderEditor: v
    } = skillChatInputEngine.useChatInputEngine({
      editorProps: {
        disabled: false,
        value: h,
        placeholder: m(g ? "skill_copliotreading_askDoubao" : "doc_mainPage_inputBox_placeholder"),
        autoComplete: "off",
        onKeyDown: e => {
          if (f != null) {
            f(e);
          }
        },
        onBlur: d,
        onChange: e => {
          chatInputStoreHelpers.setEditorValue(e);
        }
      },
      useV3: true,
      chatId: r,
      activeSkill: c ?? {
        skill_type: chatAppEnums.SkillType.WriteAssistant
      },
      onControllerChange: e => {
        if (p) {
          p.current = {
            focus: t => e == null ? undefined : e.focus(t),
            blur: () => e == null ? undefined : e.blur()
          };
        }
      }
    });
    let y = v({
      className: t,
      onChange: u
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: y
    });
  };
  class d {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, t || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: u,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = u;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    WriteGenerationPromptPlugin: function () {
      return d;
    }
  });
}