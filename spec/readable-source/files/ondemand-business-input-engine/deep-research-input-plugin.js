// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'skillChatInputEngine'
// - Resolved require(109888) to 'skill-chat-input-engine'
// - Renamed variable 'i' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'a' to 'chatRefsContext'
// - Resolved require(184894) to 'chat-refs-context'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'getLastAvailableMessageInfo'
// - Resolved require(368778) to 'get-last-available-message-info'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 't' to 'getLastAvailableMessageInfo' (module 368778)
// - Updated imported property 'nC' to 'useEditorValue' (module 411117)
// - Updated imported property 'RL' to 'setEditorValue' (module 411117)
// - Updated imported property 'E' to 'useChatRefs' (module 184894)
// - Updated imported property 'd' to 'useChatInputEngine' (module 109888)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 121727
         */
module.exports = function (module, exports, require) {
  var skillChatInputEngine = require("skill-chat-input-engine") /*id: 109888*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var getLastAvailableMessageInfo = require("get-last-available-message-info") /*id: 368778*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      disabled: t,
      chatId: r,
      skill: u,
      handleKeyDown: d,
      className: c,
      onChange: p,
      onBlur: f
    } = e;
    let m = i18nTranslationUtils.useTranslationWithFallback();
    let {
      isDeepResearchClarify: h
    } = getLastAvailableMessageInfo.getLastAvailableMessageInfo(r);
    let g = chatInputStoreHelpers.useEditorValue();
    let {
      chatInputRef: v
    } = chatRefsContext.useChatRefs();
    let {
      renderEditor: y
    } = skillChatInputEngine.useChatInputEngine({
      editorProps: {
        disabled: t,
        value: g,
        onChange: e => {
          chatInputStoreHelpers.setEditorValue(e);
        },
        onKeyDown: e => {
          if (d != null) {
            d(e);
          }
        },
        placeholder: m(h ? "web_deepResearch_chat_placeholder_addDetail" : "web_deepResearch_inputBox_placeholder"),
        autoComplete: "off",
        onFocus: () => {
          var e;
          if (v == null) {
            return undefined;
          } else if ((e = v.current) === null || e === undefined) {
            return undefined;
          } else {
            return e.focus();
          }
        },
        onBlur: e => {
          var t;
          if (v != null && (t = v.current) !== null && t !== undefined) {
            t.blur();
          }
          if (f != null) {
            f(e);
          }
        }
      },
      useV3: true,
      chatId: r,
      activeSkill: u
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: y({
        className: c,
        onChange: p
      })
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
    DeepResearchInputContentPromptPlugin: function () {
      return d;
    }
  });
}