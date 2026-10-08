// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'brandNameConstants'
// - Resolved require(63170) to 'brand-name-constants'
// - Renamed variable 'a' to 'skillChatInputEngine'
// - Resolved require(109888) to 'skill-chat-input-engine'
// - Renamed variable 'o' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'l' to 'chatRefsContext'
// - Resolved require(184894) to 'chat-refs-context'
// - Renamed variable 's' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'd' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'c' to 'chatCanvasExpandCheck'
// - Resolved require(564599) to 'chat-canvas-expand-check'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'nC' to 'useEditorValue' (module 411117)
// - Updated imported property 'RL' to 'setEditorValue' (module 411117)
// - Updated imported property 'E' to 'useChatRefs' (module 184894)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'd' to 'isCanvasExpanded' (module 564599)
// - Updated imported property 'cb' to 'brandNameKey' (module 63170)
// - Updated imported property 'd' to 'useChatInputEngine' (module 109888)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 910216
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var brandNameConstants = require("brand-name-constants") /*id: 63170*/;
  var skillChatInputEngine = require("skill-chat-input-engine") /*id: 109888*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatCanvasExpandCheck = require("chat-canvas-expand-check") /*id: 564599*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      className: t,
      chatId: r,
      onChange: f,
      onBlur: m,
      controllerRef: h,
      handleKeyDown: g,
      skill: v,
      value: y
    } = e;
    let _ = i18nTranslationUtils.useTranslationWithFallback();
    let b = y ?? chatInputStoreHelpers.useEditorValue();
    let {
      chatInputRef: x
    } = chatRefsContext.useChatRefs();
    let w = reactCoreLibraryReexport.useCallback(e => {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "ai_ppt_prompt_keydown",
        meta: {
          keyCode: e.keyCode,
          key: e.key
        }
      });
      if (g != null) {
        g(e);
      }
    }, [g]);
    let k = chatCanvasExpandCheck.isCanvasExpanded();
    let E = reactCoreLibraryReexport.useMemo(() => k ? _("slides_placeholder_edit", {
      brandName: _(brandNameConstants.brandNameKey)
    }) : _("slides_mainPage_inputBox_placeholder_pc"), [k]);
    let {
      renderEditor: C
    } = skillChatInputEngine.useChatInputEngine({
      editorProps: {
        disabled: false,
        value: b,
        placeholder: E,
        autoComplete: "off",
        onKeyDown: w,
        onFocus: () => {
          var e;
          if (x == null) {
            return undefined;
          } else if ((e = x.current) === null || e === undefined) {
            return undefined;
          } else {
            return e.focus();
          }
        },
        onBlur: e => {
          var t;
          if (x != null && (t = x.current) !== null && t !== undefined) {
            t.blur();
          }
          if (m != null) {
            m(e);
          }
        },
        onChange: e => {
          chatInputStoreHelpers.setEditorValue(e);
          loggerServiceCore.defaultLogger.persist.log({
            eventName: "ai_ppt_prompt_content_change"
          });
        },
        renderSelectOptionItem: e => {
          let {
            item: t,
            defaultWrapper: r
          } = e;
          let {
            label: n,
            icon: i
          } = t || {};
          return r(reactJsxRuntimeCoreReexport.jsxs("div", {
            children: [i, reactJsxRuntimeCoreReexport.jsx("div", {
              children: n
            })]
          }));
        }
      },
      useV3: true,
      chatId: r,
      activeSkill: v ?? {
        skill_type: chatAppEnums.SkillType.AIPPTSlides
      },
      onControllerChange: e => {
        if (h) {
          h.current = {
            focus: t => e == null ? undefined : e.focus(t),
            blur: () => e == null ? undefined : e.blur()
          };
        }
      }
    });
    let S = C({
      className: t,
      onChange: f
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: S
    });
  };
  class m {
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
          value: f,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = f;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    AIPPTGenerationPromptPlugin: function () {
      return m;
    }
  });
}