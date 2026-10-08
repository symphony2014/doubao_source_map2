// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatSkillModels'
// - Resolved require(53859) to 'chat-skill-models'
// - Renamed variable 'o' to 'aiSkillConstants_1'
// - Resolved require(156330) to 'ai-skill-constants_1'
// - Renamed variable 'a' to 'chatInputPlaceholderSelector'
// - Resolved require(413435) to 'chat-input-placeholder-selector'
// - Renamed variable 's' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'l' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Resolved require.e(41522) to 'folder-file-icons'
// - Resolved require.e(67052) to 'form-ai-workspace'
// - Resolved require.e(99590) to 'read-doc-chat-input'
// - Resolved require.bind(536989) to 'read-doc-chat-input-component'
// - Renamed variable 'd' to 'isStringTypeCheck'
// - Resolved require(253558) to 'is-string-type-check'
// - Renamed variable 'p' to 'inputToolConverter'
// - Resolved require(352793) to 'input-tool-converter'
// - Renamed variable 'f' to 'asyncSkillChatInputStore'
// - Resolved require(727801) to 'async-skill-chat-input-store'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'f' to 'chatInputStore' (module 727801)
// - Updated imported property 'Z' to 'isString' (module 253558)
// - Updated imported property 'dz' to 'isTextType' (module 352793)
// - Updated imported property 'H' to 'SkillDefinition' (module 53859)
// - Updated imported property 'Y' to 'ChatInputPlaceholderSelector' (module 413435)
// - Updated imported property 'l' to 'aiSkillConstants' (module 156330)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 897430
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatSkillModels = require("chat-skill-models") /*id: 53859*/;
  var aiSkillConstants_1 = require("ai-skill-constants_1") /*id: 156330*/;
  var chatInputPlaceholderSelector = require("chat-input-placeholder-selector") /*id: 413435*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  function u() {
    return Promise.all([require.e("folder-file-icons") /*id: 41522*/, require.e("form-ai-workspace") /*id: 67052*/, require.e("read-doc-chat-input") /*id: 99590*/]).then(require.bind(require, "read-doc-chat-input-component") /*id: 536989*/);
  }
  let c = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => u()
  }));
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var asyncSkillChatInputStore = require("async-skill-chat-input-store") /*id: 727801*/;
  class h {
    focusOnEditor() {
      asyncSkillChatInputStore.chatInputStore.getState().updateCIEditorFocusedState(true);
    }
    updateEditorValue(e) {
      if (isStringTypeCheck.isString(e)) {
        asyncSkillChatInputStore.chatInputStore.getState().updatePromptEditorValue(e);
      } else if (inputToolConverter.isTextType(e.data[0])) {
        asyncSkillChatInputStore.chatInputStore.getState().updatePromptEditorValue(e.data[0].text);
      }
    }
    clearEditorValue() {
      this.updateEditorValue("");
    }
  }
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function v(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
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
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class g extends chatSkillModels.SkillDefinition {
    focus() {
      var e;
      if ((e = this.ref.current) !== null && e !== undefined) {
        e.focus();
      }
    }
    render(e) {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: reactJsxRuntimeCoreReexport.jsx(chatInputPlaceholderSelector.ChatInputPlaceholderSelector, {}),
        children: reactJsxRuntimeCoreReexport.jsx(c, {
          ref: this.ref,
          ...e,
          onBeforeSendMessage: async () => {
            var t;
            var n;
            return (n = (t = e.onBeforeSendMessage) === null || t === undefined ? undefined : t.call(e, {
              clearRefContent: false
            })) === null || n === undefined || n;
          }
        })
      });
    }
    preloadChunks() {
      u();
    }
    constructor(...e) {
      super(...e);
      v(this, "skillType", chatAppEnums.SkillType.CodeInterpreter);
      v(this, "ref", reactCoreLibraryReexport.createRef());
      v(this, "service", new h());
    }
  }
  v(g, "pluginName", aiSkillConstants_1.aiSkillConstants.CodeInterpreter);
  require.r(exports);
  require.d(exports, {
    CIChatInputPlugin: function () {
      return g;
    }
  });
}