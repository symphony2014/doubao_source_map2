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
// - Renamed variable 'l' to 'isStringTypeCheck'
// - Resolved require(253558) to 'is-string-type-check'
// - Renamed variable 'u' to 'writingSkillStore'
// - Resolved require(704044) to 'writing-skill-store'
// - Renamed variable 'c' to 'chatFieldTypes'
// - Resolved require(660462) to 'chat-field-types'
// - Renamed variable 'd' to 'writingChatInputController_1'
// - Resolved require(659572) to 'writing-chat-input-controller_1'
// - Renamed variable 'f' to 'writingSkillChatInputLazyLoader'
// - Resolved require(190562) to 'writing-skill-chat-input-lazy-loader'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'i' to 'writingSkillStore' (module 704044)
// - Updated imported property 'C' to 'writingChatInput' (module 659572)
// - Updated imported property 'Z' to 'isString' (module 253558)
// - Updated imported property 'f' to 'getFieldTypes' (module 660462)
// - Updated imported property 'H' to 'SkillDefinition' (module 53859)
// - Updated imported property 'Y' to 'ChatInputPlaceholderSelector' (module 413435)
// - Updated imported property 'Q' to 'lazyWritingSkillChatInput' (module 190562)
// - Updated imported property 'D' to 'loadWritingSkillChatInput' (module 190562)
// - Updated imported property 'l' to 'aiSkillConstants' (module 156330)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 908735
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatSkillModels = require("chat-skill-models") /*id: 53859*/;
  var aiSkillConstants_1 = require("ai-skill-constants_1") /*id: 156330*/;
  var chatInputPlaceholderSelector = require("chat-input-placeholder-selector") /*id: 413435*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var writingChatInputController_1 = require("writing-chat-input-controller_1") /*id: 659572*/;
  class p {
    updateWritingEditorValue(e, t) {
      writingSkillStore.writingSkillStore.getState().updateWritingEditorValue(e, t);
    }
    clearWritingEditorValue(e) {
      writingSkillStore.writingSkillStore.getState().clearWritingEditorValue(e);
    }
    focusOnEditor() {
      writingChatInputController_1.writingChatInput.focusOnWritingEditor();
    }
    updateEditorValue(e, t) {
      if (isStringTypeCheck.isString(e)) {
        this.updateWritingEditorValue({
          data: [{
            type: chatFieldTypes.getFieldTypes.Text,
            text: e
          }]
        }, t);
      } else {
        this.updateWritingEditorValue(e, t);
      }
    }
    clearEditorValue() {
      this.clearWritingEditorValue();
    }
  }
  var writingSkillChatInputLazyLoader = require("writing-skill-chat-input-lazy-loader") /*id: 190562*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function m(e, t, n) {
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
  class v extends chatSkillModels.SkillDefinition {
    focus() {
      var e;
      if ((e = this.ref.current) !== null && e !== undefined) {
        e.focus();
      }
    }
    render(e) {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: reactJsxRuntimeCoreReexport.jsx(chatInputPlaceholderSelector.ChatInputPlaceholderSelector, {}),
        children: reactJsxRuntimeCoreReexport.jsx(writingSkillChatInputLazyLoader.lazyWritingSkillChatInput, {
          ref: this.ref,
          ...e
        })
      });
    }
    preloadChunks() {
      writingSkillChatInputLazyLoader.loadWritingSkillChatInput();
    }
    constructor(...e) {
      super(...e);
      m(this, "skillType", chatAppEnums.SkillType.WriteAssistant);
      m(this, "ref", reactCoreLibraryReexport.createRef());
      m(this, "service", new p());
    }
  }
  m(v, "pluginName", aiSkillConstants_1.aiSkillConstants.WriteAssistant);
  require.r(exports);
  require.d(exports, {
    WritingAssistantChatInputPlugin: function () {
      return v;
    }
  });
}